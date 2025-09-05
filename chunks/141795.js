n.d(t, {
    mw: () => j,
    nH: () => M,
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
    u = n(630755),
    d = n(171638),
    f = n(719755),
    _ = n(481981),
    p = n(740492),
    h = n(866960),
    m = n(626135),
    g = n(510990),
    E = n(70956),
    b = n(931619),
    y = n(960048),
    O = n(861990),
    v = n(476326),
    I = n(983544),
    T = n(596956),
    S = n(125186),
    A = n(981631);
function C(e, t, n) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = new s.Z("CloudUpload.tsx"),
    D = n(224497).Z;
class x extends Error {
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
            if (t instanceof o.Pd) throw new x(e, { response: t });
            if (t instanceof Error) throw new x(e, { cause: t });
            throw new x(e, { cause: Error(String(t)) });
        };
    }
    canRetry() {
        return "server_error" === this.kind || "network_error" === this.kind;
    }
    constructor(e, t = {}) {
        var n, r;
        let { cause: i, response: a } = t,
            o = x.getErrorKind(
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
            C(this, "kind", void 0),
            C(this, "phase", void 0),
            C(this, "messageShort", void 0),
            (this.name = "ResumableUploadError"),
            (this.phase = e),
            (this.kind = o),
            (this.messageShort = s);
    }
}
let L = "Content-MD5";
var j = (function (e) {
    return (
        (e.NOT_STARTED = "NOT_STARTED"),
        (e.STARTED = "STARTED"),
        (e.UPLOADING = "UPLOADING"),
        (e.ERROR = "ERROR"),
        (e.COMPLETED = "COMPLETED"),
        (e.CANCELED = "CANCELED"),
        (e.REMOVED_FROM_MSG_DRAFT = "REMOVED_FROM_MSG_DRAFT"),
        e
    );
})({});
class k {
    constructor() {
        C(this, "numUploadAttempts", void 0),
            C(this, "timing", {}),
            C(this, "compressAndExtractDisabled", void 0),
            C(this, "fileAlreadyPrepped", void 0),
            C(this, "imageCompressionQuality", void 0),
            C(this, "videoCompressionQuality", void 0),
            C(this, "convertedMimeType", void 0),
            C(this, "sourceMediaWidth", void 0),
            C(this, "sourceMediaHeight", void 0),
            C(this, "sourceMediaFormat", void 0),
            C(this, "sourceVideoBitrate", void 0),
            C(this, "sourceVideoFramerate", void 0),
            C(this, "videoDurationMs", void 0),
            C(this, "sourceVideoProfile", void 0),
            C(this, "sourceVideoLevel", void 0),
            C(this, "targetVideoWidth", void 0),
            C(this, "targetVideoHeight", void 0),
            C(this, "targetVideoBitrate", void 0),
            C(this, "targetVideoCodec", void 0),
            C(this, "targetVideoFramerate", void 0),
            C(this, "targetVideoIsHdr", void 0),
            C(this, "hevcIsSupported", void 0),
            C(this, "progressUpdateGranularity", void 0),
            C(this, "validUploadHash", void 0),
            C(this, "psnr", void 0),
            C(this, "ssim", void 0),
            C(this, "origin", void 0),
            C(this, "psnrMeasurementLatencyMs", void 0),
            C(this, "ssimMeasurementLatencyMs", void 0),
            C(this, "uploadResumptionCount", 0),
            C(this, "uploadResumptionPosition", 0),
            C(this, "uploadResumptionReason", void 0),
            C(this, "conversionFailureReason", void 0);
    }
}
class M extends v.ZP {
    static fromJson(e) {
        let { item: t, channelId: n, showLargeMessageDialog: r, reactNativeFileIndex: i } = e,
            a = new M(t, n, r, i);
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
        return this.item.platform === v.ow.REACT_NATIVE
            ? {
                  timeout: +E.Z.Millis.HOUR,
                  backoff: new a.Z(0.5 * E.Z.Millis.SECOND, 30 * E.Z.Millis.MINUTE),
                  retries: 12,
              }
            : {
                  timeout: +E.Z.Millis.HOUR,
                  retries: 12,
                  backoff: new a.Z(),
              };
    }
    createAttachmentUrlRetryOpts() {
        return this.item.platform === v.ow.REACT_NATIVE
            ? {
                  timeout: {
                      response: 30 * E.Z.Millis.SECOND,
                      deadline: 30 * E.Z.Millis.MINUTE,
                  },
                  backoff: new a.Z(0.5 * E.Z.Millis.SECOND, 60 * E.Z.Millis.SECOND),
                  retries: 8,
              }
            : this.retryOpts();
    }
    supportsResume() {
        return (this._libdiscoreEnabled || this.item.platform !== v.ow.REACT_NATIVE) && this._resumptionEnabled;
    }
    async uploadFileToCloud() {
        let e, t;
        if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
        w.log(
            "Uploading ".concat(this.id),
            this.item.platform === v.ow.REACT_NATIVE
                ? "filename=".concat(this.item.filename, ", uri=").concat(this.item.uri)
                : "filename=".concat(this.item.file.name),
        ),
            this.item.platform === v.ow.REACT_NATIVE
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
        let n = (0, _.m)({ location: "CloudUpload" });
        if (n.enableNewRetry)
            return (
                (0, T.Z_)(this.item) &&
                    ((this._uploadHttpClient = new T.Qn()),
                    (this._libdiscoreEnabled = !0),
                    w.log("Using libdiscore client for file upload")),
                (this._resumptionEnabled = n.enableResumption),
                await this.uploadFileWithResumption(this.responseUrl, e, t)
            );
        let r = { "Content-Type": t };
        void 0 !== this.contentHash && (r[L] = this.contentHash);
        let a = N(
            {
                url: this.responseUrl,
                body: e,
                headers: r,
                signal: this._abortController.signal,
                onRequestProgress: i().throttle(this.createResumeAwareProgressFn(0), 50),
                rejectWithError: !1,
            },
            this.retryOpts(),
        );
        return o.tn.put(a);
    }
    async getResumePosition(e) {
        let t = {
            url: e,
            headers: { "Content-Range": "bytes */*" },
            rejectWithError: !0,
            retries: 0,
            timeout: { deadline: 30 * E.Z.Millis.SECOND },
            signal: this._abortController.signal,
        };
        return await this._uploadHttpClient
            .doUpload(t)
            .then((e) =>
                200 === e.status || 201 === e.status ? this.currentSize : x.rejectionHandler("status_check")(e),
            )
            .catch((e) => {
                if (e instanceof o.Pd && 308 === e.status) {
                    var t;
                    let n = this.parseRangeHeader(null != (t = e.headers.range) ? t : "");
                    return null != n ? n[1] + 1 : 0;
                }
                return x.rejectionHandler("status_check")(e);
            });
    }
    async startOrResumeUpload(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (
            (w.log(
                "Attempting to upload attachment with resumeFrom: "
                    .concat(t, " and attempts: ")
                    .concat(this.uploadAttempts),
            ),
            t > 0)
        ) {
            var n;
            this.uploadAnalytics.uploadResumptionCount++,
                (e.headers = P(N({}, null != (n = e.headers) ? n : {}), {
                    "Content-Range": "bytes "
                        .concat(t, "-")
                        .concat(this.currentSize - 1, "/")
                        .concat(this.currentSize),
                }));
        }
        e.onRequestProgress = i().throttle(this.createResumeAwareProgressFn(t), 50);
        let r = await this._uploadHttpClient
            .doUpload(e, { fileByteRange: { start: t } })
            .catch(x.rejectionHandler("upload"));
        if (200 !== r.status && 201 !== r.status) throw new x("upload", { response: r });
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
                if (e instanceof x && e.canRetry()) {
                    w.warn("Error uploading ".concat(this.id, ": ").concat(e.message, ", attempting resumption")),
                        (this.uploadAnalytics.uploadResumptionReason = e.messageShort),
                        await b.Z.awaitOnline();
                    let t = a.fail();
                    w.log("Waiting ".concat(t, "ms before attachment upload attempt ").concat(this.uploadAttempts + 1)),
                        await new Promise((e) => setTimeout(e, t));
                } else throw (w.warn("Unrecoverable error uploading ".concat(this.id, ": ").concat(e.message)), e);
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
        var e, t, n, r, i;
        if ("COMPLETED" === this.status) return;
        if (
            (this.setStatus("STARTED"),
            (this.startTime = performance.now()),
            this.trackUploadStart(),
            this.isCancelled())
        )
            return void this.handleComplete(this.id);
        this.item.platform !== v.ow.WEB ||
            (null == (e = this.item.compressionMetadata) ? void 0 : e.earlyClipboardCompressionAttempted) ||
            (await this.maybeConvertToWebP());
        let a = await D.getUploadPayload(this),
            s = (0, I.F)(this.item.target),
            c = (0, d.G)({ location: "CloudUpload.upload" });
        if (null == a.filename || "" === a.filename) {
            w.error("File does not have a filename.", JSON.stringify(a)), this.handleError(A.evJ.INVALID_FILE_ASSET);
            return;
        }
        if (c.useDetectedFileSize && 0 === this.currentSize && null != this.item.file)
            try {
                let e = await (0, u.M)(this.item.file);
                e > 0 && (this.currentSize = e);
            } catch (e) {
                w.warn("Failed to detect file size, proceeding with original", {
                    filename: a.filename,
                    error: e instanceof Error ? e.message : String(e),
                });
            }
        if (0 === this.currentSize) return void this.handleError(A.evJ.INVALID_FILE_ASSET);
        if ((null != (t = this.currentSize) ? t : 0) > s.getMaxFileSize(this.channelId))
            return void this.handleError(A.evJ.ENTITY_TOO_LARGE);
        if (l.ZP.get("upload_fail_50") && 0.5 > Math.random())
            return void setTimeout(() => {
                this.handleError(500);
            }, 1000);
        let _ = f.Z.getCurrentConfig({ location: "CloudUpload" }, { autoTrackExposure: !0 }),
            p = null;
        _.enabled;
        try {
            w.log("Requesting upload url for ".concat(this.id));
            let e = await this.trackTime(
                "getUploadUrlTimeMs",
                async () =>
                    await o.tn.post(
                        P(
                            N(
                                {
                                    url: s.getCreateAttachmentURL(this.channelId),
                                    body: { files: [a] },
                                },
                                this.createAttachmentUrlRetryOpts(),
                            ),
                            { rejectWithError: !1 },
                        ),
                    ),
            );
            this.setResponseUrl(e.body.attachments[0].upload_url),
                this.setUploadedFilename(e.body.attachments[0].upload_filename);
        } catch (t) {
            let e = null != (r = null == t || null == (n = t.body) ? void 0 : n.code) ? r : t.status;
            e !== A.evJ.ENTITY_TOO_LARGE &&
                (w.error(
                    "Requesting upload url failed with code "
                        .concat(null != e ? e : JSON.stringify(t.body), " for ")
                        .concat(this.id),
                ),
                y.Z.captureException(t)),
                this.handleError(e);
            return;
        }
        if (null != p) {
            let e = await p;
            null != e && (this.contentHash = e);
        }
        try {
            let e = await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloud());
            if (_.enabled && null != e) {
                let t = !1,
                    n = this.getEtagFromResponse(e);
                if (
                    (null != n && ((this.etag = n), (t = n === this.contentHash)),
                    (this.uploadAnalytics.validUploadHash = t),
                    !t && _.enforced)
                ) {
                    let e = "File "
                        .concat(
                            null != (i = this.filename) ? i : this.id,
                            " received incorrect checksum after upload: got ",
                        )
                        .concat(this.etag, ", expected ")
                        .concat(this.contentHash);
                    w.error(e), y.Z.captureMessage(e), this.handleError(A.evJ.INVALID_FILE_ASSET);
                    return;
                }
            }
            this.trackUploadFinished("COMPLETED"), this.handleComplete(e);
        } catch (e) {
            this.isCancelled()
                ? this.handleComplete(e)
                : (w.info("Error: status ".concat(e.status, " for ").concat(this.id)), this.handleError(e));
        }
    }
    async reactNativeCompressAndExtractData() {
        var e, t;
        if (!(0, I.F)(this.item.target).shouldReactNativeCompressUploads)
            return (
                (this.uploadAnalytics.compressAndExtractDisabled = !0),
                w.log("reactNativeCompressAndExtractData() disabled by upload target"),
                this
            );
        if (!0 === this.reactNativeFilePrepped)
            return (
                (this.uploadAnalytics.fileAlreadyPrepped = !0),
                w.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id)),
                this
            );
        w.log("Starting compression/conversion for ".concat(this.id));
        let n = await this.trackTime("compressTimeMs", async () => {
            var e;
            return await (0, g.Jf)(this, null != (e = this.reactNativeFileIndex) ? e : 0);
        });
        if (null == n || null == n.file) return w.error("Failed to get compressed file for ".concat(this.id)), this;
        let r = n.uri,
            i = n.file.name;
        if (
            ((0, v.rG)(n.file) &&
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
                (w.error(
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
        let s = null != (t = n.fileSize) ? t : (await (0, O.Lc)(r)).size;
        if (((this.postCompressionSize = s), (this.currentSize = s), null == s))
            throw (w.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data"));
        w.log(
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
        var e, t;
        let n;
        if (!(0, c.U)({ location: "CloudUpload.maybeConvertToWebP" }).enabled) return;
        if (null == this.item.file) return void w.warn("webp conversion skipped for ".concat(this.id, ": no file"));
        if (this._aborted) return;
        let r = performance.now();
        try {
            if (((n = await (0, S.lG)(this.item.file)), this._aborted)) return;
            if (n.success)
                (this.item.file = (0, S.ub)(n)),
                    (this.currentSize = this.item.file.size),
                    (this.uploadAnalytics.convertedMimeType = "image/webp"),
                    null != n.hashTimeMs && (this.uploadAnalytics.timing.hashTimeMs = n.hashTimeMs),
                    w.log(
                        "webp conversion worked for "
                            .concat(this.id, ": ")
                            .concat(n.sizeBefore, " -> ")
                            .concat(n.sizeAfter, " bytes (")
                            .concat(n.compressionRatio.toFixed(2), "x)"),
                    );
            else {
                let t = null != (e = n.reason) ? e : "unknown";
                (this.uploadAnalytics.conversionFailureReason = t),
                    w.log("webp conversion skipped for ".concat(this.id, ": ").concat(t));
            }
        } catch (e) {
            (this.uploadAnalytics.conversionFailureReason = "unknown_error"),
                w.warn("webp conversion failed for ".concat(this.id, ":"), e);
        }
        this.uploadAnalytics.timing.compressTimeMs =
            null != (t = null == n ? void 0 : n.compressTimeMs) ? t : Math.round(performance.now() - r);
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
            w.log("Upload complete for ".concat(this.id)),
            this.emit("complete", e),
            this.removeAllListeners();
    }
    _cancel(e, t) {
        w.log(t),
            (this._aborted = !0),
            this._abortController.abort(),
            this.trackUploadFinished(e),
            "COMPLETED" === this.status && this.delete(),
            this.setStatus(e),
            this.emit("complete"),
            this.removeAllListeners();
    }
    cancel() {
        this._cancel("CANCELED", "Cancelled called for ".concat(this.id));
    }
    removeFromMsgDraft() {
        this._cancel("REMOVED_FROM_MSG_DRAFT", "Removed from draft for ".concat(this.id));
    }
    isCancelled() {
        return "CANCELED" === this.status || "REMOVED_FROM_MSG_DRAFT" === this.status;
    }
    resetState() {
        return (
            (this.status = "NOT_STARTED"),
            (this.uploadedFilename = void 0),
            (this.responseUrl = void 0),
            (this.error = void 0),
            (this.startTime = void 0),
            (this.uploadAnalytics = new k()),
            (this.uploadAttempts = 0),
            (this._aborted = !1),
            (this._abortController = new AbortController()),
            super.resetState()
        );
    }
    async delete() {
        if (null == this.uploadedFilename) return;
        let e = (0, I.F)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
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
        m.default.track(A.rMx.ATTACHMENT_UPLOAD_STARTED, {
            file_size: this.currentSize,
            mime_type: null != (e = this.mimeType) ? e : "unknown",
            video_upload_quality: p.ZP.videoUploadQuality,
            data_saving_mode: p.ZP.dataSavingMode,
            low_quality_image_mode: p.ZP.dataSavingMode,
            channel_id: this.channelId,
            connection_type: h.Z.getType(),
            effective_connection_speed: h.Z.getEffectiveConnectionSpeed(),
            service_provider: h.Z.getServiceProvider(),
        });
    }
    trackUploadFinished(e) {
        var t, n, r, i, a, o, s;
        let l = null != this.startTime ? performance.now() - this.startTime : -1,
            c =
                this.item.platform === v.ow.WEB &&
                null != (n = null == (t = this.item.compressionMetadata) ? void 0 : t.compressTimeMs)
                    ? n
                    : 0,
            u = l >= 0 ? l + c : -1;
        m.default.track(A.rMx.ATTACHMENT_UPLOAD_FINISHED, {
            duration_ms: u,
            file_size: this.currentSize,
            pre_compression_file_size: this.preCompressionSize,
            final_state: e,
            mime_type: null != (r = this.mimeType) ? r : "unknown",
            filename: this.filename,
            num_upload_attempts: null != (i = this.uploadAnalytics.numUploadAttempts) ? i : 1,
            error_code: this.error,
            video_upload_quality: p.ZP.videoUploadQuality,
            data_saving_mode: p.ZP.dataSavingMode,
            low_quality_image_mode: p.ZP.dataSavingMode,
            compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
            get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
            upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
            converted_mime_type: null != (a = this.uploadAnalytics.convertedMimeType) ? a : "unknown",
            image_compression_quality: null != (o = this.uploadAnalytics.imageCompressionQuality) ? o : 0,
            video_compression_quality: null != (s = this.uploadAnalytics.videoCompressionQuality) ? s : "unknown",
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
            connection_type: h.Z.getType(),
            effective_connection_speed: h.Z.getEffectiveConnectionSpeed(),
            service_provider: h.Z.getServiceProvider(),
        });
    }
    constructor(e, t, n, r) {
        var i, a, o, s;
        super(e, n),
            C(this, "status", "NOT_STARTED"),
            C(this, "channelId", void 0),
            C(this, "responseUrl", void 0),
            C(this, "currentSize", void 0),
            C(this, "preCompressionSize", void 0),
            C(this, "postCompressionSize", void 0),
            C(this, "loaded", 0),
            C(this, "reactNativeFileIndex", void 0),
            C(this, "error", void 0),
            C(this, "reactNativeFilePrepped", !1),
            C(this, "startTime", void 0),
            C(this, "uploadAnalytics", new k()),
            C(this, "contentHash", void 0),
            C(this, "etag", void 0),
            C(this, "uploadAttempts", 0),
            C(this, "_abortController", void 0),
            C(this, "_xhr", void 0),
            C(this, "_aborted", !1),
            C(this, "_uploadHttpClient", void 0),
            C(this, "_libdiscoreEnabled", void 0),
            C(this, "_resumptionEnabled", void 0),
            C(this, "createResumeAwareProgressFn", (e) => (t) => {
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
                (this.uploadAnalytics.origin = "string" == typeof this.origin ? this.origin : v.BS[this.origin]),
            e.platform === v.ow.WEB &&
                null != e.compressionMetadata &&
                ((this.preCompressionSize = e.compressionMetadata.preCompressionSize),
                (this.uploadAnalytics.timing.compressTimeMs = e.compressionMetadata.compressTimeMs),
                (this.uploadAnalytics.convertedMimeType = e.compressionMetadata.convertedMimeType),
                (this.uploadAnalytics.conversionFailureReason = e.compressionMetadata.conversionFailureReason),
                (this.uploadAnalytics.timing.hashTimeMs = e.compressionMetadata.hashTimeMs),
                (this.mimeType = e.compressionMetadata.originalContentType)),
            (this._uploadHttpClient = new T.LD()),
            (this._libdiscoreEnabled = !1),
            (this._resumptionEnabled = !1);
    }
}
