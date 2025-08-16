n.d(t, {
    mw: () => x,
    nH: () => k,
}),
    n(415506),
    n(388685),
    n(35282),
    n(704826),
    n(49124);
var r = n(392711),
    i = n.n(r),
    a = n(261470),
    o = n(544891),
    s = n(710845),
    l = n(432877),
    c = n(893601),
    u = n(719755),
    d = n(873186),
    f = n(481981),
    _ = n(740492),
    p = n(866960),
    h = n(626135),
    m = n(510990),
    g = n(70956),
    E = n(931619),
    b = n(960048),
    y = n(861990),
    O = n(476326),
    v = n(983544),
    I = n(596956),
    T = n(125186),
    S = n(981631);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = new s.Z("CloudUpload.tsx"),
    w = n(224497).Z;
class D extends Error {
    static getErrorKind(e, t) {
        var n;
        let r = null != (n = null == t ? void 0 : t.status) ? n : 0,
            i = r >= 500 && r < 600,
            a =
                e.message.toLowerCase().includes("network") ||
                e.message.toLowerCase().includes("terminated") ||
                e.message.toLowerCase().includes("offline") ||
                e.message.toLowerCase().includes("changed");
        return i ? "server_error" : a ? "network_error" : "unknown";
    }
    static rejectionHandler(e) {
        return (t) => {
            if (t instanceof o.Pd) throw new D(e, { response: t });
            if (t instanceof Error) throw new D(e, { cause: t });
            throw new D(e, { cause: Error(String(t)) });
        };
    }
    canRetry() {
        return "server_error" === this.kind || "network_error" === this.kind;
    }
    constructor(e, t = {}) {
        var n, r;
        let { cause: i, response: a } = t,
            o = D.getErrorKind(
                null != i ? i : Error("".concat(null != (n = null == a ? void 0 : a.text) ? n : "Unknown error")),
                a,
            ),
            s =
                "server_error" === o
                    ? ""
                          .concat(e, ":")
                          .concat(o, ":status_")
                          .concat(null != (r = null == a ? void 0 : a.status) ? r : 0)
                    : "".concat(e, ":").concat(o);
        super(s, { cause: i }),
            A(this, "kind", void 0),
            A(this, "phase", void 0),
            A(this, "messageShort", void 0),
            (this.name = "ResumableUploadError"),
            (this.phase = e),
            (this.kind = o),
            (this.messageShort = s);
    }
}
let L = "Content-MD5";
var x = (function (e) {
    return (
        (e.NOT_STARTED = "NOT_STARTED"),
        (e.STARTED = "STARTED"),
        (e.UPLOADING = "UPLOADING"),
        (e.ERROR = "ERROR"),
        (e.COMPLETED = "COMPLETED"),
        (e.CANCELED = "CANCELED"),
        e
    );
})({});
class M {
    constructor() {
        A(this, "numUploadAttempts", void 0),
            A(this, "timing", {}),
            A(this, "compressAndExtractDisabled", void 0),
            A(this, "fileAlreadyPrepped", void 0),
            A(this, "imageCompressionQuality", void 0),
            A(this, "videoCompressionQuality", void 0),
            A(this, "convertedMimeType", void 0),
            A(this, "sourceMediaWidth", void 0),
            A(this, "sourceMediaHeight", void 0),
            A(this, "sourceMediaFormat", void 0),
            A(this, "sourceVideoBitrate", void 0),
            A(this, "sourceVideoFramerate", void 0),
            A(this, "videoDurationMs", void 0),
            A(this, "sourceVideoProfile", void 0),
            A(this, "sourceVideoLevel", void 0),
            A(this, "targetVideoWidth", void 0),
            A(this, "targetVideoHeight", void 0),
            A(this, "targetVideoBitrate", void 0),
            A(this, "targetVideoCodec", void 0),
            A(this, "targetVideoFramerate", void 0),
            A(this, "targetVideoIsHdr", void 0),
            A(this, "hevcIsSupported", void 0),
            A(this, "progressUpdateGranularity", void 0),
            A(this, "validUploadHash", void 0),
            A(this, "psnr", void 0),
            A(this, "ssim", void 0),
            A(this, "origin", void 0),
            A(this, "psnrMeasurementLatencyMs", void 0),
            A(this, "ssimMeasurementLatencyMs", void 0),
            A(this, "uploadResumptionCount", 0),
            A(this, "uploadResumptionPosition", 0),
            A(this, "uploadResumptionReason", void 0),
            A(this, "conversionFailureReason", void 0);
    }
}
class k extends O.ZP {
    static fromJson(e) {
        let { item: t, channelId: n, showLargeMessageDialog: r, reactNativeFileIndex: i } = e,
            a = new k(t, n, r, i);
        return (
            Object.entries(e).forEach((e) => {
                let [t, n] = e;
                t.startsWith("_") || (a[t] = n);
            }),
            "COMPLETED" !== a.status && (a.status = "NOT_STARTED"),
            a
        );
    }
    parseRangeHeader(e) {
        let t = e.match(/^bytes=(\d+)-(\d+)(?:\/\d+)?$/);
        return null == t ? null : [parseInt(t[1], 10), parseInt(t[2], 10)];
    }
    retryOpts() {
        return this.item.platform === O.ow.REACT_NATIVE
            ? {
                  timeout: +g.Z.Millis.HOUR,
                  backoff: new a.Z(0.5 * g.Z.Millis.SECOND, 30 * g.Z.Millis.MINUTE),
                  retries: 12,
              }
            : {
                  timeout: +g.Z.Millis.HOUR,
                  retries: 12,
                  backoff: new a.Z(),
              };
    }
    createAttachmentUrlRetryOpts() {
        return this.item.platform === O.ow.REACT_NATIVE
            ? {
                  timeout: {
                      response: 30 * g.Z.Millis.SECOND,
                      deadline: 30 * g.Z.Millis.MINUTE,
                  },
                  backoff: new a.Z(0.5 * g.Z.Millis.SECOND, 60 * g.Z.Millis.SECOND),
                  retries: 8,
              }
            : this.retryOpts();
    }
    supportsResume() {
        return this._libdiscoreEnabled || this.item.platform !== O.ow.REACT_NATIVE;
    }
    async uploadFileToCloud() {
        let e, t;
        if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
        P.log("Uploading ".concat(this.id)),
            this.item.platform === O.ow.REACT_NATIVE
                ? (t =
                      null !=
                          (e = {
                              type: this.item.mimeType,
                              uri: this.item.uri,
                              name: this.item.filename,
                          }).type && "application/json" !== e.type
                          ? e.type
                          : "application/octet-stream")
                : ((e = this.item.file), (t = "application/octet-stream"));
        let n = (0, d.G)({ location: "CloudUpload" }).enableResumableUploads,
            r = (0, f.m)({ location: "CloudUpload" }).enableResumableUploads;
        if (
            (r &&
                this.item.platform === O.ow.REACT_NATIVE &&
                ((this._uploadHttpClient = new I.Qn()), (this._libdiscoreEnabled = !0)),
            n || r)
        )
            return await this.uploadFileWithResumption(this.responseUrl, e, t);
        let a = { "Content-Type": t };
        void 0 !== this.contentHash && (a[L] = this.contentHash);
        let s = N(
            {
                url: this.responseUrl,
                body: e,
                headers: a,
                signal: this._abortController.signal,
                onRequestProgress: i().throttle(this.createResumeAwareProgressFn(0), 50),
                rejectWithError: !1,
            },
            this.retryOpts(),
        );
        return o.tn.put(s);
    }
    async getResumePosition(e) {
        let t = {
            url: e,
            headers: { "Content-Range": "bytes */*" },
            rejectWithError: !0,
            retries: 0,
            timeout: { deadline: 30 * g.Z.Millis.SECOND },
            signal: this._abortController.signal,
        };
        return await this._uploadHttpClient
            .doUpload(t)
            .then((e) =>
                200 === e.status || 201 === e.status ? this.currentSize : D.rejectionHandler("status_check")(e),
            )
            .catch((e) => {
                if (e instanceof o.Pd && 308 === e.status) {
                    var t;
                    let n = this.parseRangeHeader(null != (t = e.headers.range) ? t : "");
                    return null != n ? n[1] + 1 : 0;
                }
                return D.rejectionHandler("status_check")(e);
            });
    }
    async startOrResumeUpload(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (
            (P.log(
                "Attempting to upload attachment with resumeFrom: "
                    .concat(t, " and attempts: ")
                    .concat(this.uploadAttempts),
            ),
            t > 0)
        ) {
            var n;
            this.uploadAnalytics.uploadResumptionCount++,
                (e.headers = R(N({}, null != (n = e.headers) ? n : {}), {
                    "Content-Range": "bytes "
                        .concat(t, "-")
                        .concat(this.currentSize - 1, "/")
                        .concat(this.currentSize),
                }));
        }
        e.onRequestProgress = i().throttle(this.createResumeAwareProgressFn(t), 50);
        let r = await this._uploadHttpClient
            .doUpload(e, { fileByteRange: { start: t } })
            .catch(D.rejectionHandler("upload"));
        if (200 !== r.status && 201 !== r.status) throw new D("upload", { response: r });
        return r;
    }
    async uploadFileWithResumption(e, t, n) {
        let { timeout: r, backoff: a, retries: o } = this.retryOpts(),
            s = {
                url: e,
                body: t,
                headers: { "Content-Type": n },
                signal: this._abortController.signal,
                onRequestProgress: i().throttle(this.createResumeAwareProgressFn(0), 50),
                retries: 0,
                rejectWithError: !0,
                timeout: r,
            },
            l = 0;
        for (; this.uploadAttempts <= o && !this._aborted; ) {
            this.uploadAttempts++, (this.uploadAnalytics.numUploadAttempts = this.uploadAttempts);
            try {
                if (this.uploadAttempts > 1) {
                    let t = await this.trackTime("resumptionCheckTimeMs", async () => await this.getResumePosition(e));
                    (this.uploadAnalytics.uploadResumptionPosition = t),
                        (l = this.supportsResume() ? t : 0),
                        (this.loaded = l);
                }
                return await this.startOrResumeUpload(s, l);
            } catch (e) {
                if (e instanceof D && e.canRetry()) {
                    P.warn("Error uploading ".concat(this.id, ": ").concat(e.message, ", attempting resumption")),
                        (this.uploadAnalytics.uploadResumptionReason = e.messageShort),
                        await E.Z.awaitOnline();
                    let t = a.fail();
                    P.log("Waiting ".concat(t, "ms before attachment upload attempt ").concat(this.uploadAttempts + 1)),
                        await new Promise((e) => setTimeout(e, t));
                } else throw (P.warn("Unrecoverable error uploading ".concat(this.id, ": ").concat(e.message)), e);
            }
        }
        throw Error("Upload failed after ".concat(this.uploadAttempts, " attempts"));
    }
    async getSize() {
        var e;
        return null != (e = this.currentSize) ? e : 0;
    }
    async getHash() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0], "";
    }
    getEtagFromResponse(e) {
        var t;
        let n = null != (t = e.headers.etag) ? t : null;
        return null != n ? n.replace(/"/g, "") : null;
    }
    async trackTime(e, t) {
        let n = performance.now();
        try {
            return await t();
        } finally {
            this.uploadAnalytics.timing[e] = performance.now() - n;
        }
    }
    async upload() {
        var e, t, n, r;
        if ("COMPLETED" === this.status) return;
        if (
            (this.setStatus("STARTED"),
            (this.startTime = performance.now()),
            this.trackUploadStart(),
            "CANCELED" === this.status)
        )
            return void this.handleComplete(this.id);
        this.item.platform === O.ow.WEB && (await this.maybeConvertToWebP());
        let i = await w.getUploadPayload(this),
            a = (0, v.F)(this.item.target);
        if (null == i.filename || "" === i.filename || 0 === this.currentSize) {
            P.error("File does not have a filename or size is 0.", JSON.stringify(i)),
                this.handleError(S.evJ.INVALID_FILE_ASSET);
            return;
        }
        if ((null != (e = this.currentSize) ? e : 0) > a.getMaxFileSize(this.channelId))
            return void this.handleError(S.evJ.ENTITY_TOO_LARGE);
        if (l.ZP.get("upload_fail_50") && 0.5 > Math.random())
            return void setTimeout(() => {
                this.handleError(500);
            }, 1000);
        let s = u.Z.getCurrentConfig({ location: "CloudUpload" }, { autoTrackExposure: !0 }),
            c = null;
        s.enabled;
        try {
            P.log("Requesting upload url for ".concat(this.id));
            let e = await this.trackTime(
                "getUploadUrlTimeMs",
                async () =>
                    await o.tn.post(
                        R(
                            N(
                                {
                                    url: a.getCreateAttachmentURL(this.channelId),
                                    body: { files: [i] },
                                },
                                this.createAttachmentUrlRetryOpts(),
                            ),
                            { rejectWithError: !1 },
                        ),
                    ),
            );
            this.setResponseUrl(e.body.attachments[0].upload_url),
                this.setUploadedFilename(e.body.attachments[0].upload_filename);
        } catch (r) {
            let e = null != (n = null == r || null == (t = r.body) ? void 0 : t.code) ? n : r.status;
            e !== S.evJ.ENTITY_TOO_LARGE &&
                (P.error(
                    "Requesting upload url failed with code "
                        .concat(null != e ? e : JSON.stringify(r.body), " for ")
                        .concat(this.id),
                ),
                b.Z.captureException(r)),
                this.handleError(e);
            return;
        }
        if (null != c) {
            let e = await c;
            null != e && (this.contentHash = e);
        }
        try {
            let e = await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloud());
            if (s.enabled && null != e) {
                let t = !1,
                    n = this.getEtagFromResponse(e);
                if (
                    (null != n && ((this.etag = n), (t = n === this.contentHash)),
                    (this.uploadAnalytics.validUploadHash = t),
                    !t && s.enforced)
                ) {
                    let e = "File "
                        .concat(
                            null != (r = this.filename) ? r : this.id,
                            " received incorrect checksum after upload: got ",
                        )
                        .concat(this.etag, ", expected ")
                        .concat(this.contentHash);
                    P.error(e), b.Z.captureMessage(e), this.handleError(S.evJ.INVALID_FILE_ASSET);
                    return;
                }
            }
            this.trackUploadFinished("COMPLETED"), this.handleComplete(e);
        } catch (e) {
            "CANCELED" === this.status
                ? this.handleComplete(e)
                : (P.info("Error: status ".concat(e.status, " for ").concat(this.id)), this.handleError(e));
        }
    }
    async reactNativeCompressAndExtractData() {
        var e, t;
        if (!(0, v.F)(this.item.target).shouldReactNativeCompressUploads)
            return (
                (this.uploadAnalytics.compressAndExtractDisabled = !0),
                P.log("reactNativeCompressAndExtractData() disabled by upload target"),
                this
            );
        if (!0 === this.reactNativeFilePrepped)
            return (
                (this.uploadAnalytics.fileAlreadyPrepped = !0),
                P.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id)),
                this
            );
        P.log("Starting compression/conversion for ".concat(this.id));
        let n = await this.trackTime("compressTimeMs", async () => {
            var e;
            return await (0, m.J)(this, null != (e = this.reactNativeFileIndex) ? e : 0);
        });
        if (null == n || null == n.file) return P.error("Failed to get compressed file for ".concat(this.id)), this;
        let r = n.uri,
            i = n.file.name;
        if (
            ((0, O.rG)(n.file) &&
                ((this.uploadAnalytics.imageCompressionQuality = n.file.imageCompressionQuality),
                (this.uploadAnalytics.videoCompressionQuality = n.file.videoCompressionQuality),
                n.file.isImage &&
                    ((this.uploadAnalytics.sourceMediaWidth = n.file.sourceWidth),
                    (this.uploadAnalytics.sourceMediaHeight = n.file.sourceHeight)),
                void 0 !== n.file.videoMetadata &&
                    ((this.uploadAnalytics.sourceMediaWidth = n.file.videoMetadata.width),
                    (this.uploadAnalytics.sourceMediaHeight = n.file.videoMetadata.height),
                    (this.uploadAnalytics.sourceMediaFormat = n.file.videoMetadata.format),
                    (this.uploadAnalytics.sourceVideoBitrate = n.file.videoMetadata.bitRate),
                    (this.uploadAnalytics.sourceVideoFramerate = n.file.videoMetadata.frameRate),
                    (this.uploadAnalytics.videoDurationMs = n.file.videoMetadata.durationMs),
                    (this.uploadAnalytics.sourceVideoProfile = n.file.videoMetadata.sourceProfile),
                    (this.uploadAnalytics.sourceVideoLevel = n.file.videoMetadata.sourceLevel)),
                void 0 !== n.file.encodingConfig &&
                    ((this.uploadAnalytics.targetVideoWidth = n.file.encodingConfig.targetWidth),
                    (this.uploadAnalytics.targetVideoHeight = n.file.encodingConfig.targetHeight),
                    (this.uploadAnalytics.targetVideoBitrate = n.file.encodingConfig.targetBitrate),
                    (this.uploadAnalytics.targetVideoCodec = n.file.encodingConfig.useHEVC ? "hvc1" : "avc1"),
                    (this.uploadAnalytics.targetVideoFramerate = n.file.encodingConfig.frameRate),
                    (this.uploadAnalytics.targetVideoIsHdr = n.file.encodingConfig.createHDR),
                    (this.uploadAnalytics.hevcIsSupported = n.file.encodingConfig.hevcIsSupported),
                    (this.uploadAnalytics.progressUpdateGranularity = n.file.encodingConfig.progressUpdateGranularity)),
                (this.uploadAnalytics.psnr = n.file.psnr),
                (this.uploadAnalytics.ssim = n.file.ssim),
                (this.uploadAnalytics.origin = n.file.origin),
                (this.uploadAnalytics.psnrMeasurementLatencyMs = n.file.psnrMeasurementLatencyMs),
                (this.uploadAnalytics.ssimMeasurementLatencyMs = n.file.ssimMeasurementLatencyMs)),
            (this.filename = i),
            null == i || null == r || null == n.file.type)
        )
            throw (
                (P.error(
                    "Insufficient file data: "
                        .concat(
                            {
                                filename: i,
                                uri: r,
                                type: n.file.type,
                            },
                            " for ",
                        )
                        .concat(this.id),
                ),
                Error(
                    "Insufficient file data: ".concat({
                        filename: i,
                        uri: r,
                        type: n.file.type,
                    }),
                ))
            );
        let a = null == (e = i.split(".").pop()) ? void 0 : e.toLowerCase(),
            o = "jpg" === a || "jpeg" === a ? "image/jpeg" : n.file.type;
        this.uploadAnalytics.convertedMimeType = o;
        let s = null != (t = n.fileSize) ? t : (await (0, y.Lc)(r)).size;
        if (((this.postCompressionSize = s), (this.currentSize = s), null == s))
            throw (P.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data"));
        P.log(
            "Completed compression and conversion. Output size="
                .concat(s, " bytes; filename=")
                .concat(i, "; uri=")
                .concat(r, "; mimeType=")
                .concat(o, " for ")
                .concat(this.id),
        );
        let l = {
            uri: r,
            filename: i,
            mimeType: o,
        };
        return (this.item = N({}, this.item, l)), (this.reactNativeFilePrepped = !0), this;
    }
    async maybeConvertToWebP() {
        if (!(0, c.U)({ location: "CloudUpload.maybeConvertToWebP" }).enabled) return;
        if (null == this.item.file) return void P.warn("webp conversion skipped for ".concat(this.id, ": no file"));
        if (this._aborted) return;
        let e = performance.now();
        try {
            let e = await (0, T.LF)([this.item.file]);
            if (this._aborted) return;
            if (e.length > 0 && e[0].success) {
                let t = e[0];
                (this.item.file = (0, T.ub)(t)),
                    (this.currentSize = this.item.file.size),
                    (this.uploadAnalytics.convertedMimeType = "image/webp"),
                    null != t.hashTimeMs && (this.uploadAnalytics.timing.hashTimeMs = t.hashTimeMs),
                    P.log(
                        "webp conversion worked for "
                            .concat(this.id, ": ")
                            .concat(t.sizeBefore, " -> ")
                            .concat(t.sizeAfter, " bytes (")
                            .concat(t.compressionRatio.toFixed(2), "x)"),
                    );
            } else {
                var t, n;
                let r = null != (n = null == (t = e[0]) ? void 0 : t.reason) ? n : "unknown";
                (this.uploadAnalytics.conversionFailureReason = r),
                    P.log("webp conversion skipped for ".concat(this.id, ": ").concat(r));
            }
        } catch (e) {
            (this.uploadAnalytics.conversionFailureReason = "unknown_error"),
                P.warn("webp conversion failed for ".concat(this.id, ":"), e);
        }
        this.uploadAnalytics.timing.compressTimeMs = Math.round(performance.now() - e);
    }
    handleError(e) {
        this.setStatus("ERROR"), (this.error = e), this.trackUploadFinished("ERROR");
        try {
            this.emit("error", e);
        } catch (e) {}
        this.removeAllListeners();
    }
    handleComplete(e) {
        this.setStatus("COMPLETED"),
            P.log("Upload complete for ".concat(this.id)),
            this.emit("complete", e),
            this.removeAllListeners();
    }
    cancel() {
        P.log("Cancelled called for ".concat(this.id)),
            (this._aborted = !0),
            this._abortController.abort(),
            this.trackUploadFinished("CANCELED"),
            "COMPLETED" === this.status && this.delete(),
            this.setStatus("CANCELED"),
            this.emit("complete"),
            this.removeAllListeners();
    }
    resetState() {
        return (
            (this.status = "NOT_STARTED"),
            (this.uploadedFilename = void 0),
            (this.responseUrl = void 0),
            (this.error = void 0),
            (this.startTime = void 0),
            (this.uploadAnalytics = new M()),
            (this.uploadAttempts = 0),
            (this._aborted = !1),
            (this._abortController = new AbortController()),
            super.resetState()
        );
    }
    async delete() {
        if (null == this.uploadedFilename) return;
        let e = (0, v.F)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
        try {
            await o.tn.del(e);
        } catch (e) {}
    }
    setResponseUrl(e) {
        this.responseUrl = e;
    }
    setStatus(e) {
        this.status = e;
    }
    setFilename(e) {
        this.filename = e;
    }
    setUploadedFilename(e) {
        this.uploadedFilename = e;
    }
    trackUploadStart() {
        var e;
        h.default.track(S.rMx.ATTACHMENT_UPLOAD_STARTED, {
            file_size: this.currentSize,
            mime_type: null != (e = this.mimeType) ? e : "unknown",
            video_upload_quality: _.ZP.videoUploadQuality,
            data_saving_mode: _.ZP.dataSavingMode,
            low_quality_image_mode: _.ZP.dataSavingMode,
            channel_id: this.channelId,
            connection_type: p.Z.getType(),
            effective_connection_speed: p.Z.getEffectiveConnectionSpeed(),
            service_provider: p.Z.getServiceProvider(),
        });
    }
    trackUploadFinished(e) {
        var t, n, r, i, a;
        let o = null != this.startTime ? performance.now() - this.startTime : -1;
        h.default.track(S.rMx.ATTACHMENT_UPLOAD_FINISHED, {
            duration_ms: o,
            file_size: this.currentSize,
            pre_compression_file_size: this.preCompressionSize,
            final_state: e,
            mime_type: null != (t = this.mimeType) ? t : "unknown",
            num_upload_attempts: null != (n = this.uploadAnalytics.numUploadAttempts) ? n : 1,
            error_code: this.error,
            video_upload_quality: _.ZP.videoUploadQuality,
            data_saving_mode: _.ZP.dataSavingMode,
            low_quality_image_mode: _.ZP.dataSavingMode,
            compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
            get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
            upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
            converted_mime_type: null != (r = this.uploadAnalytics.convertedMimeType) ? r : "unknown",
            image_compression_quality: null != (i = this.uploadAnalytics.imageCompressionQuality) ? i : 0,
            video_compression_quality: null != (a = this.uploadAnalytics.videoCompressionQuality) ? a : "unknown",
            was_converted:
                null != this.uploadAnalytics.convertedMimeType &&
                this.mimeType !== this.uploadAnalytics.convertedMimeType,
            was_compressed: this.currentSize < this.preCompressionSize,
            source_media_width: this.uploadAnalytics.sourceMediaWidth,
            source_media_height: this.uploadAnalytics.sourceMediaHeight,
            source_media_format: this.uploadAnalytics.sourceMediaFormat,
            source_video_bitrate: this.uploadAnalytics.sourceVideoBitrate,
            video_duration_ms: this.uploadAnalytics.videoDurationMs,
            source_video_profile_name: this.uploadAnalytics.sourceVideoProfile,
            source_video_profile_level: this.uploadAnalytics.sourceVideoLevel,
            target_video_width: this.uploadAnalytics.targetVideoWidth,
            target_video_height: this.uploadAnalytics.targetVideoHeight,
            target_video_bitrate: this.uploadAnalytics.targetVideoBitrate,
            target_video_codec: this.uploadAnalytics.targetVideoCodec,
            target_video_framerate: this.uploadAnalytics.targetVideoFramerate,
            target_video_is_hdr: this.uploadAnalytics.targetVideoIsHdr,
            hevc_is_supported: this.uploadAnalytics.hevcIsSupported,
            progress_update_granularity: this.uploadAnalytics.progressUpdateGranularity,
            source_video_framerate: this.uploadAnalytics.sourceVideoFramerate,
            channel_id: this.channelId,
            hash_time_ms: this.uploadAnalytics.timing.hashTimeMs,
            valid_upload_hash: this.uploadAnalytics.validUploadHash,
            psnr: this.uploadAnalytics.psnr,
            ssim: this.uploadAnalytics.ssim,
            origin: this.uploadAnalytics.origin,
            psnr_measurement_latency_ms: this.uploadAnalytics.psnrMeasurementLatencyMs,
            ssim_measurement_latency_ms: this.uploadAnalytics.ssimMeasurementLatencyMs,
            upload_resumption_count: this.uploadAnalytics.uploadResumptionCount,
            upload_resumption_reason: this.uploadAnalytics.uploadResumptionReason,
            upload_resumption_position: this.uploadAnalytics.uploadResumptionPosition,
            upload_resumption_check_time_ms: this.uploadAnalytics.timing.resumptionCheckTimeMs,
            conversion_failure_reason: this.uploadAnalytics.conversionFailureReason,
            upload_http_client: this._libdiscoreEnabled ? "libdiscore" : "httputils",
            connection_type: p.Z.getType(),
            effective_connection_speed: p.Z.getEffectiveConnectionSpeed(),
            service_provider: p.Z.getServiceProvider(),
        });
    }
    constructor(e, t, n, r) {
        var i, a, o, s;
        super(e, n),
            A(this, "status", "NOT_STARTED"),
            A(this, "channelId", void 0),
            A(this, "responseUrl", void 0),
            A(this, "currentSize", void 0),
            A(this, "preCompressionSize", void 0),
            A(this, "postCompressionSize", void 0),
            A(this, "loaded", 0),
            A(this, "reactNativeFileIndex", void 0),
            A(this, "error", void 0),
            A(this, "reactNativeFilePrepped", !1),
            A(this, "startTime", void 0),
            A(this, "uploadAnalytics", new M()),
            A(this, "contentHash", void 0),
            A(this, "etag", void 0),
            A(this, "uploadAttempts", 0),
            A(this, "_abortController", void 0),
            A(this, "_xhr", void 0),
            A(this, "_aborted", !1),
            A(this, "_uploadHttpClient", void 0),
            A(this, "_libdiscoreEnabled", void 0),
            A(this, "createResumeAwareProgressFn", (e) => (t) => {
                let n = t.loaded + e,
                    r = t.total + e,
                    i = n - this.loaded;
                this.emit("progress", n, r, i), (this.loaded = n);
            }),
            (this.channelId = t),
            (this.preCompressionSize = null != (o = null == (i = e.file) ? void 0 : i.size) ? o : 0),
            (this.currentSize = null != (s = null == (a = e.file) ? void 0 : a.size) ? s : 0),
            (this.reactNativeFileIndex = r),
            (this._abortController = new AbortController()),
            null != this.origin &&
                (this.uploadAnalytics.origin = "string" == typeof this.origin ? this.origin : O.BS[this.origin]),
            (this._uploadHttpClient = new I.LD()),
            (this._libdiscoreEnabled = !1);
    }
}
