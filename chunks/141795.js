let r;
n.d(t, {
    mw: () => j,
    nH: () => k,
}),
    n(415506),
    n(388685),
    n(35282),
    n(704826),
    n(49124);
var i = n(392711),
    a = n.n(i),
    o = n(261470),
    s = n(544891),
    l = n(710845),
    c = n(432877),
    u = n(630755),
    d = n(171638),
    f = n(928405),
    p = n(719755),
    _ = n(481981),
    m = n(740492),
    h = n(866960),
    g = n(626135),
    E = n(510990),
    b = n(70956),
    y = n(931619),
    O = n(960048),
    v = n(861990),
    S = n(476326),
    I = n(983544),
    T = n(596956),
    C = n(125186),
    A = n(981631);
function N(e, t, n) {
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
function P(e) {
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
                N(e, t, n[t]);
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
function w(e, t) {
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
let D = new l.Z("CloudUpload.tsx");
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
            if (t instanceof s.Pd) throw new x(e, { response: t });
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
            N(this, "kind", void 0),
            N(this, "phase", void 0),
            N(this, "messageShort", void 0),
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
class M {
    constructor() {
        N(this, "numUploadAttempts", void 0),
            N(this, "timing", {}),
            N(this, "compressAndExtractDisabled", void 0),
            N(this, "fileAlreadyPrepped", void 0),
            N(this, "imageCompressionQuality", void 0),
            N(this, "videoCompressionQuality", void 0),
            N(this, "imageEncoderType", void 0),
            N(this, "convertedMimeType", void 0),
            N(this, "sourceMediaWidth", void 0),
            N(this, "sourceMediaHeight", void 0),
            N(this, "sourceMediaFormat", void 0),
            N(this, "sourceVideoBitrate", void 0),
            N(this, "sourceVideoFramerate", void 0),
            N(this, "videoDurationMs", void 0),
            N(this, "sourceVideoProfile", void 0),
            N(this, "sourceVideoLevel", void 0),
            N(this, "targetVideoWidth", void 0),
            N(this, "targetVideoHeight", void 0),
            N(this, "targetVideoBitrate", void 0),
            N(this, "targetVideoCodec", void 0),
            N(this, "targetVideoFramerate", void 0),
            N(this, "targetVideoIsHdr", void 0),
            N(this, "hevcIsSupported", void 0),
            N(this, "progressUpdateGranularity", void 0),
            N(this, "validUploadHash", void 0),
            N(this, "psnr", void 0),
            N(this, "ssim", void 0),
            N(this, "origin", void 0),
            N(this, "psnrMeasurementLatencyMs", void 0),
            N(this, "ssimMeasurementLatencyMs", void 0),
            N(this, "uploadResumptionCount", 0),
            N(this, "uploadResumptionPosition", 0),
            N(this, "uploadResumptionReason", void 0),
            N(this, "conversionFailureReason", void 0);
    }
}
r = n(224497).Z;
class k extends S.ZP {
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
        return this.item.platform === S.ow.REACT_NATIVE
            ? {
                  timeout: +b.Z.Millis.HOUR,
                  backoff: new o.Z(0.5 * b.Z.Millis.SECOND, 30 * b.Z.Millis.MINUTE),
                  retries: 12,
              }
            : {
                  timeout: +b.Z.Millis.HOUR,
                  retries: 12,
                  backoff: new o.Z(),
              };
    }
    createAttachmentUrlRetryOpts() {
        return this.item.platform === S.ow.REACT_NATIVE
            ? {
                  timeout: {
                      response: 30 * b.Z.Millis.SECOND,
                      deadline: 30 * b.Z.Millis.MINUTE,
                  },
                  backoff: new o.Z(0.5 * b.Z.Millis.SECOND, 60 * b.Z.Millis.SECOND),
                  retries: 8,
              }
            : this.retryOpts();
    }
    supportsResume() {
        return (this._libdiscoreEnabled || this.item.platform !== S.ow.REACT_NATIVE) && this._resumptionEnabled;
    }
    async uploadFileToCloud() {
        let e, t;
        if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
        D.log(
            "Uploading ".concat(this.id),
            this.item.platform === S.ow.REACT_NATIVE
                ? "filename=".concat(this.item.filename, ", uri=").concat(this.item.uri)
                : "filename=".concat(this.item.file.name),
        ),
            this.item.platform === S.ow.REACT_NATIVE
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
                    D.log("Using libdiscore client for file upload")),
                (this._resumptionEnabled = n.enableResumption),
                await this.uploadFileWithResumption(this.responseUrl, e, t)
            );
        let r = { "Content-Type": t };
        void 0 !== this.contentHash && (r[L] = this.contentHash);
        let i = P(
            {
                url: this.responseUrl,
                body: e,
                headers: r,
                signal: this._abortController.signal,
                onRequestProgress: a().throttle(this.createResumeAwareProgressFn(0), 50),
                rejectWithError: !1,
            },
            this.retryOpts(),
        );
        return s.tn.put(i);
    }
    async getResumePosition(e) {
        let t = {
            url: e,
            headers: { "Content-Range": "bytes */*" },
            rejectWithError: !0,
            retries: 0,
            timeout: { deadline: 30 * b.Z.Millis.SECOND },
            signal: this._abortController.signal,
        };
        return await this._uploadHttpClient
            .doUpload(t)
            .then((e) =>
                200 === e.status || 201 === e.status ? this.currentSize : x.rejectionHandler("status_check")(e),
            )
            .catch((e) => {
                if (e instanceof s.Pd && 308 === e.status) {
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
            (D.log(
                "Attempting to upload attachment with resumeFrom: "
                    .concat(t, " and attempts: ")
                    .concat(this.uploadAttempts),
            ),
            t > 0)
        ) {
            var n;
            this.uploadAnalytics.uploadResumptionCount++,
                (e.headers = w(P({}, null != (n = e.headers) ? n : {}), {
                    "Content-Range": "bytes "
                        .concat(t, "-")
                        .concat(this.currentSize - 1, "/")
                        .concat(this.currentSize),
                }));
        }
        e.onRequestProgress = a().throttle(this.createResumeAwareProgressFn(t), 50);
        let r = await this._uploadHttpClient
            .doUpload(e, { fileByteRange: { start: t } })
            .catch(x.rejectionHandler("upload"));
        if (200 !== r.status && 201 !== r.status) throw new x("upload", { response: r });
        return r;
    }
    async uploadFileWithResumption(e, t, n) {
        let { timeout: r, backoff: i, retries: o } = this.retryOpts(),
            s = {
                url: e,
                body: t,
                headers: { "Content-Type": n },
                signal: this._abortController.signal,
                onRequestProgress: a().throttle(this.createResumeAwareProgressFn(0), 50),
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
                    D.warn("Error uploading ".concat(this.id, ": ").concat(e.message, ", attempting resumption")),
                        (this.uploadAnalytics.uploadResumptionReason = e.messageShort),
                        await y.Z.awaitOnline();
                    let t = i.fail();
                    D.log("Waiting ".concat(t, "ms before attachment upload attempt ").concat(this.uploadAttempts + 1)),
                        await new Promise((e) => setTimeout(e, t));
                } else throw (D.warn("Unrecoverable error uploading ".concat(this.id, ": ").concat(e.message)), e);
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
        var e, t, n, i;
        if ("COMPLETED" === this.status) return;
        if (
            (this.setStatus("STARTED"),
            (this.startTime = performance.now()),
            this.trackUploadStart(),
            this.isCancelled())
        )
            return void this.handleComplete(this.id);
        if (this.allowOptimization && this.item.platform === S.ow.WEB) {
            let e = await k.tryConvertToWebP(this.item.file, () => this._aborted, this.id);
            null != e &&
                (null != e.convertedFile &&
                    ((this.item.file = e.convertedFile), (this.currentSize = e.convertedFile.size)),
                null != e.convertedMimeType && (this.uploadAnalytics.convertedMimeType = e.convertedMimeType),
                null != e.hashTimeMs && (this.uploadAnalytics.timing.hashTimeMs = e.hashTimeMs),
                null != e.conversionFailureReason &&
                    (this.uploadAnalytics.conversionFailureReason = e.conversionFailureReason),
                (this.uploadAnalytics.timing.compressTimeMs = e.compressTimeMs));
        }
        let a = await r.getUploadPayload(this),
            o = (0, I.F)(this.item.target),
            l = (0, d.G)({ location: "CloudUpload.upload" });
        if (null == a.filename || "" === a.filename) {
            D.error("File does not have a filename.", JSON.stringify(a)), this.handleError(A.evJ.INVALID_FILE_ASSET);
            return;
        }
        if (l.useDetectedFileSize && 0 === this.currentSize && null != this.item.file)
            try {
                let e = await (0, u.M)(this.item.file);
                e > 0 && (this.currentSize = e);
            } catch (e) {
                D.warn("Failed to detect file size, proceeding with original", {
                    filename: a.filename,
                    error: e instanceof Error ? e.message : String(e),
                });
            }
        if (0 === this.currentSize) return void this.handleError(A.evJ.ENTITY_EMPTY);
        if ((null != (e = this.currentSize) ? e : 0) > o.getMaxFileSize(this.channelId))
            return void this.handleError(A.evJ.ENTITY_TOO_LARGE);
        if (c.ZP.get("upload_fail_50") && 0.5 > Math.random())
            return void setTimeout(() => {
                this.handleError(500);
            }, 1000);
        let f = p.Z.getCurrentConfig({ location: "CloudUpload" }, { autoTrackExposure: !0 }),
            _ = null;
        f.enabled;
        try {
            D.log("Requesting upload url for ".concat(this.id));
            let e = await this.trackTime("getUploadUrlTimeMs", async () => {
                let e = o.getCreateAttachmentURL(this.channelId);
                return await s.tn.post(
                    w(
                        P(
                            {
                                url: e,
                                body: { files: [a] },
                            },
                            this.createAttachmentUrlRetryOpts(),
                        ),
                        { rejectWithError: !1 },
                    ),
                );
            });
            this.setResponseUrl(e.body.attachments[0].upload_url),
                this.setUploadedFilename(e.body.attachments[0].upload_filename);
        } catch (r) {
            let e = null != (n = null == r || null == (t = r.body) ? void 0 : t.code) ? n : r.status;
            e !== A.evJ.ENTITY_TOO_LARGE &&
                (D.error(
                    "Requesting upload url failed with code "
                        .concat(null != e ? e : JSON.stringify(r.body), " for ")
                        .concat(this.id),
                ),
                O.Z.captureException(r)),
                this.handleError(e);
            return;
        }
        if (null != _) {
            let e = await _;
            null != e && (this.contentHash = e);
        }
        try {
            let e = await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloud());
            if (f.enabled && null != e) {
                let t = !1,
                    n = this.getEtagFromResponse(e);
                if (
                    (null != n && ((this.etag = n), (t = n === this.contentHash)),
                    (this.uploadAnalytics.validUploadHash = t),
                    !t && f.enforced)
                ) {
                    let e = "File "
                        .concat(
                            null != (i = this.filename) ? i : this.id,
                            " received incorrect checksum after upload: got ",
                        )
                        .concat(this.etag, ", expected ")
                        .concat(this.contentHash);
                    D.error(e), O.Z.captureMessage(e), this.handleError(A.evJ.INVALID_FILE_ASSET);
                    return;
                }
            }
            this.trackUploadFinished("COMPLETED"), this.handleComplete(e);
        } catch (e) {
            this.isCancelled()
                ? this.handleComplete(e)
                : (D.info("Error: status ".concat(e.status, " for ").concat(this.id)), this.handleError(e));
        }
    }
    async reactNativeCompressAndExtractData() {
        var e, t;
        if (!(0, I.F)(this.item.target).shouldReactNativeCompressUploads)
            return (
                (this.uploadAnalytics.compressAndExtractDisabled = !0),
                D.log("reactNativeCompressAndExtractData() disabled by upload target"),
                this
            );
        if (!0 === this.reactNativeFilePrepped)
            return (
                (this.uploadAnalytics.fileAlreadyPrepped = !0),
                D.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id)),
                this
            );
        D.log("Starting compression/conversion for ".concat(this.id));
        let n = await this.trackTime("compressTimeMs", async () => {
            var e;
            return await (0, E.Jf)(this, null != (e = this.reactNativeFileIndex) ? e : 0);
        });
        if (null == n || null == n.file) return D.error("Failed to get compressed file for ".concat(this.id)), this;
        let r = n.uri,
            i = n.file.name;
        if (
            ((0, S.rG)(n.file) &&
                ((this.uploadAnalytics.imageCompressionQuality = n.file.imageCompressionQuality),
                (this.uploadAnalytics.videoCompressionQuality = n.file.videoCompressionQuality),
                (this.uploadAnalytics.imageEncoderType = n.file.imageEncoderType),
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
                (D.error(
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
        let s = null != (t = n.fileSize) ? t : (await (0, v.Lc)(r)).size;
        if (((this.postCompressionSize = s), (this.currentSize = s), null == s))
            throw (D.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data"));
        D.log(
            "Completed compression and conversion. Output size="
                .concat(s, " bytes; filename=")
                .concat(i, "; uri=")
                .concat(r, "; originalMimeType=")
                .concat(this.mimeType, "; mimeType=")
                .concat(o, " for ")
                .concat(this.id),
        );
        let l = {
            uri: r,
            filename: i,
            mimeType: o,
        };
        return (this.item = P({}, this.item, l)), (this.reactNativeFilePrepped = !0), this;
    }
    static async tryConvertToWebP(e, t, n) {
        var r, i, a;
        let o,
            s = (0, f.n)({ location: "CloudUpload.maybeConvertToWebP" });
        if (!s.enabled) return D.warn("webp conversion skipped for ".concat(n, ": not enabled")), null;
        if (null == e) return D.warn("webp conversion skipped for ".concat(n, ": no file")), null;
        if (null != s.maxFileSizeBytes && e.size > s.maxFileSizeBytes)
            return D.warn("webp conversion skipped for ".concat(n, ": too big")), null;
        if (t()) return null;
        let l = performance.now(),
            c = { compressTimeMs: 0 };
        try {
            if (((o = await (0, C.t3)(e)), t())) return null;
            if (o.success && null != o.convertedBlob)
                D.log(
                    "webp conversion worked for "
                        .concat(n, ": ")
                        .concat(o.sizeBefore, " -> ")
                        .concat(o.sizeAfter, " bytes (")
                        .concat(o.compressionRatio.toFixed(2), "x)"),
                ),
                    (c.convertedFile = new File([o.convertedBlob], e.name, {
                        type: "image/webp",
                        lastModified: e.lastModified,
                    })),
                    (c.convertedMimeType = "image/webp"),
                    (c.hashTimeMs = null != (r = o.hashTimeMs) ? r : void 0);
            else {
                let e = null != (i = o.reason) ? i : C.S8.UNKNOWN_ERROR;
                D.log("webp conversion skipped for ".concat(n, ": ").concat(e)), (c.conversionFailureReason = e);
            }
        } catch (e) {
            D.warn("webp conversion failed for ".concat(n, ":"), e), (c.conversionFailureReason = C.S8.UNKNOWN_ERROR);
        }
        let u = Math.round(performance.now() - l);
        return (c.compressTimeMs = null != (a = null == o ? void 0 : o.compressTimeMs) ? a : u), c;
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
            D.log("Upload complete for ".concat(this.id)),
            this.emit("complete", e),
            this.removeAllListeners();
    }
    _cancel(e, t) {
        D.log(t),
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
            (this.uploadAnalytics = new M()),
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
            await s.tn.del(e);
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
        g.default.track(A.rMx.ATTACHMENT_UPLOAD_STARTED, {
            file_size: this.currentSize,
            mime_type: null != (e = this.mimeType) ? e : "unknown",
            video_upload_quality: m.ZP.videoUploadQuality,
            data_saving_mode: m.ZP.dataSavingMode,
            low_quality_image_mode: m.ZP.dataSavingMode,
            channel_id: this.channelId,
            connection_type: h.Z.getType(),
            effective_connection_speed: h.Z.getEffectiveConnectionSpeed(),
            service_provider: h.Z.getServiceProvider(),
        });
    }
    trackUploadFinished(e) {
        var t, n, r, i, a, o;
        let s = null != this.startTime ? performance.now() - this.startTime : -1;
        g.default.track(A.rMx.ATTACHMENT_UPLOAD_FINISHED, {
            duration_ms: s,
            file_size: this.currentSize,
            pre_compression_file_size: this.preCompressionSize,
            final_state: e,
            mime_type: null != (t = this.mimeType) ? t : "unknown",
            num_upload_attempts: null != (n = this.uploadAnalytics.numUploadAttempts) ? n : 1,
            error_code: this.error,
            video_upload_quality: m.ZP.videoUploadQuality,
            data_saving_mode: m.ZP.dataSavingMode,
            low_quality_image_mode: m.ZP.dataSavingMode,
            compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
            get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
            upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
            converted_mime_type: null != (r = this.uploadAnalytics.convertedMimeType) ? r : "unknown",
            image_compression_quality: null != (i = this.uploadAnalytics.imageCompressionQuality) ? i : 0,
            video_compression_quality: null != (a = this.uploadAnalytics.videoCompressionQuality) ? a : "unknown",
            image_encoder_type: null != (o = this.uploadAnalytics.imageEncoderType) ? o : "unknown",
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
    constructor(e, t, n, r, i) {
        var a, o, s, l;
        super(e, n),
            N(this, "status", "NOT_STARTED"),
            N(this, "channelId", void 0),
            N(this, "responseUrl", void 0),
            N(this, "currentSize", void 0),
            N(this, "preCompressionSize", void 0),
            N(this, "postCompressionSize", void 0),
            N(this, "loaded", 0),
            N(this, "reactNativeFileIndex", void 0),
            N(this, "error", void 0),
            N(this, "reactNativeFilePrepped", !1),
            N(this, "allowOptimization", !0),
            N(this, "startTime", void 0),
            N(this, "uploadAnalytics", new M()),
            N(this, "contentHash", void 0),
            N(this, "etag", void 0),
            N(this, "uploadAttempts", 0),
            N(this, "_abortController", void 0),
            N(this, "_xhr", void 0),
            N(this, "_aborted", !1),
            N(this, "_uploadHttpClient", void 0),
            N(this, "_libdiscoreEnabled", void 0),
            N(this, "_resumptionEnabled", void 0),
            N(this, "createResumeAwareProgressFn", (e) => (t) => {
                let n = t.loaded + e,
                    r = t.total + e,
                    i = n - this.loaded;
                this.emit("progress", n, r, i), (this.loaded = n);
            }),
            (this.channelId = t),
            (this.preCompressionSize = null != (s = null == (a = e.file) ? void 0 : a.size) ? s : 0),
            (this.currentSize = null != (l = null == (o = e.file) ? void 0 : o.size) ? l : 0),
            (this.reactNativeFileIndex = r),
            null != i && (this.allowOptimization = i),
            e.platform === S.ow.WEB &&
                null != e.compressionMetadata &&
                (this.mimeType = e.compressionMetadata.originalContentType),
            (this._abortController = new AbortController()),
            null != this.origin &&
                (this.uploadAnalytics.origin = "string" == typeof this.origin ? this.origin : S.BS[this.origin]),
            (this._uploadHttpClient = new T.LD()),
            (this._libdiscoreEnabled = !1),
            (this._resumptionEnabled = !1);
    }
}
