let r;
n.d(t, {
    bK: () => k,
    jP: () => j,
}),
    n(65821),
    n(896048),
    n(747238),
    n(812715),
    n(457529);
var i = n(735438),
    a = n.n(i),
    s = n(158390),
    o = n(562465),
    l = n(626584),
    c = n(865116),
    u = n(795129),
    d = n(547927),
    f = n(661011),
    p = n(87481),
    _ = n(445215),
    h = n(964404),
    m = n(544180),
    g = n(954571),
    E = n(509929),
    b = n(927813),
    y = n(209489),
    O = n(728458),
    A = n(292348),
    v = n(565150),
    S = n(900482),
    I = n(972711),
    T = n(554707),
    C = n(652215);
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
function R(e) {
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
function w(e, t) {
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
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = new l.A("CloudUpload.tsx");
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
            if (t instanceof o.oh) throw new x(e, { response: t });
            if (t instanceof Error) throw new x(e, { cause: t });
            throw new x(e, { cause: Error(String(t)) });
        };
    }
    canRetry() {
        return "server_error" === this.kind || "network_error" === this.kind;
    }
    constructor(e, t = {}) {
        var n, r;
        const { cause: i, response: a } = t,
            s = x.getErrorKind(
                null != i ? i : Error("".concat(null != (n = null == a ? void 0 : a.text) ? n : "Unknown error")),
                a,
            ),
            o =
                "server_error" === s
                    ? ""
                          .concat(e, ":")
                          .concat(s, ":status_")
                          .concat(null != (r = null == a ? void 0 : a.status) ? r : 0)
                    : "".concat(e, ":").concat(s);
        super(o, { cause: i }),
            N(this, "kind", void 0),
            N(this, "phase", void 0),
            N(this, "messageShort", void 0),
            (this.name = "ResumableUploadError"),
            (this.phase = e),
            (this.kind = s),
            (this.messageShort = o);
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
r = n(122924).A;
class k extends v.Ay {
    static fromJson(e) {
        let { item: t, channelId: n, reactNativeFileIndex: r } = e,
            i = new k(t, n, r);
        return (
            Object.entries(e).forEach((e) => {
                let [t, n] = e;
                t.startsWith("_") || (i[t] = n);
            }),
            "COMPLETED" !== i.status && (i.status = "NOT_STARTED"),
            i
        );
    }
    parseRangeHeader(e) {
        let t = e.match(/^bytes=(\d+)-(\d+)(?:\/\d+)?$/);
        return null == t ? null : [parseInt(t[1], 10), parseInt(t[2], 10)];
    }
    retryOpts() {
        return this.item.platform === v.xz.REACT_NATIVE
            ? {
                  timeout: +b.A.Millis.HOUR,
                  backoff: new s.A(0.5 * b.A.Millis.SECOND, 30 * b.A.Millis.MINUTE),
                  retries: 12,
              }
            : {
                  timeout: +b.A.Millis.HOUR,
                  retries: 12,
                  backoff: new s.A(),
              };
    }
    createAttachmentUrlRetryOpts() {
        return this.item.platform === v.xz.REACT_NATIVE
            ? {
                  timeout: {
                      response: 30 * b.A.Millis.SECOND,
                      deadline: 30 * b.A.Millis.MINUTE,
                  },
                  backoff: new s.A(0.5 * b.A.Millis.SECOND, 60 * b.A.Millis.SECOND),
                  retries: 8,
              }
            : this.retryOpts();
    }
    supportsResume() {
        return (this._libdiscoreEnabled || this.item.platform !== v.xz.REACT_NATIVE) && this._resumptionEnabled;
    }
    async uploadFileToCloud() {
        let e, t;
        if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
        D.log(
            "Uploading ".concat(this.id),
            this.item.platform === v.xz.REACT_NATIVE
                ? "filename=".concat(this.item.filename, ", uri=").concat(this.item.uri)
                : "filename=".concat(this.item.file.name),
        ),
            this.item.platform === v.xz.REACT_NATIVE
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
        let n = (0, _.Q)({ location: "CloudUpload" });
        if (n.enableNewRetry)
            return (
                (0, I.gd)(this.item) &&
                    ((this._uploadHttpClient = new I.gp()),
                    (this._libdiscoreEnabled = !0),
                    D.log("Using libdiscore client for file upload")),
                (this._resumptionEnabled = n.enableResumption),
                await this.uploadFileWithResumption(this.responseUrl, e, t)
            );
        let r = { "Content-Type": t };
        void 0 !== this.contentHash && (r[L] = this.contentHash);
        let i = R(
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
        return o.Bo.put(i);
    }
    async getResumePosition(e) {
        let t = {
            url: e,
            headers: { "Content-Range": "bytes */*" },
            rejectWithError: !0,
            retries: 0,
            timeout: { deadline: 30 * b.A.Millis.SECOND },
            signal: this._abortController.signal,
        };
        return await this._uploadHttpClient
            .doUpload(t)
            .then((e) =>
                200 === e.status || 201 === e.status ? this.currentSize : x.rejectionHandler("status_check")(e),
            )
            .catch((e) => {
                if (e instanceof o.oh && 308 === e.status) {
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
                (e.headers = P(R({}, null != (n = e.headers) ? n : {}), {
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
        let { timeout: r, backoff: i, retries: s } = this.retryOpts(),
            o = {
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
        for (; this.uploadAttempts <= s && !this._aborted; ) {
            this.uploadAttempts++, (this.uploadAnalytics.numUploadAttempts = this.uploadAttempts);
            try {
                if (this.uploadAttempts > 1) {
                    let t = await this.trackTime("resumptionCheckTimeMs", async () => await this.getResumePosition(e));
                    (this.uploadAnalytics.uploadResumptionPosition = t),
                        (l = this.supportsResume() ? t : 0),
                        (this.loaded = l);
                }
                return await this.startOrResumeUpload(o, l);
            } catch (e) {
                if (e instanceof x && e.canRetry()) {
                    D.warn("Error uploading ".concat(this.id, ": ").concat(e.message, ", attempting resumption")),
                        (this.uploadAnalytics.uploadResumptionReason = e.messageShort),
                        await y.A.awaitOnline();
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
        if (this.allowOptimization && this.item.platform === v.xz.WEB) {
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
            s = (0, S.B)(this.item.target),
            l = (0, d.N)({ location: "CloudUpload.upload" });
        if (null == a.filename || "" === a.filename) {
            D.error("File does not have a filename.", JSON.stringify(a)), this.handleError(C.t02.INVALID_FILE_ASSET);
            return;
        }
        if (l.useDetectedFileSize && 0 === this.currentSize && null != this.item.file)
            try {
                let e = await (0, u._)(this.item.file);
                e > 0 && (this.currentSize = e);
            } catch (e) {
                D.warn("Failed to detect file size, proceeding with original", {
                    filename: a.filename,
                    error: e instanceof Error ? e.message : String(e),
                });
            }
        if (0 === this.currentSize) return void this.handleError(C.t02.ENTITY_EMPTY);
        if ((null != (e = this.currentSize) ? e : 0) > s.getMaxFileSize(this.channelId))
            return void this.handleError(C.t02.ENTITY_TOO_LARGE);
        if (c.Ay.get("upload_fail_50") && 0.5 > Math.random())
            return void setTimeout(() => {
                this.handleError(500);
            }, 1000);
        let f = p.A.getCurrentConfig({ location: "CloudUpload" }, { autoTrackExposure: !0 }),
            _ = null;
        f.enabled;
        try {
            D.log("Requesting upload url for ".concat(this.id));
            let e = await this.trackTime("getUploadUrlTimeMs", async () => {
                let e = s.getCreateAttachmentURL(this.channelId);
                return await o.Bo.post(
                    P(
                        R(
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
            let e = null != (t = null == r || null == (n = r.body) ? void 0 : n.code) ? t : r.status;
            e !== C.t02.ENTITY_TOO_LARGE &&
                (D.error(
                    "Requesting upload url failed with code "
                        .concat(null != e ? e : JSON.stringify(r.body), " for ")
                        .concat(this.id),
                ),
                O.A.captureException(r)),
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
                    D.error(e), O.A.captureMessage(e), this.handleError(C.t02.INVALID_FILE_ASSET);
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
        if (!(0, S.B)(this.item.target).shouldReactNativeCompressUploads)
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
            return await (0, E.Si)(this, null != (e = this.reactNativeFileIndex) ? e : 0);
        });
        if (null == n || null == n.file) return D.error("Failed to get compressed file for ".concat(this.id)), this;
        let r = n.uri,
            i = n.file.name;
        if (
            ((0, v.Sm)(n.file) &&
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
        let a = null == (t = i.split(".").pop()) ? void 0 : t.toLowerCase(),
            s = "jpg" === a || "jpeg" === a ? "image/jpeg" : n.file.type;
        this.uploadAnalytics.convertedMimeType = s;
        let o = null != (e = n.fileSize) ? e : (await (0, A.dm)(r)).size;
        if (((this.postCompressionSize = o), (this.currentSize = o), null == o))
            throw (D.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data"));
        D.log(
            "Completed compression and conversion. Output size="
                .concat(o, " bytes; filename=")
                .concat(i, "; uri=")
                .concat(r, "; originalMimeType=")
                .concat(this.mimeType, "; mimeType=")
                .concat(s, " for ")
                .concat(this.id),
        );
        let l = {
            uri: r,
            filename: i,
            mimeType: s,
        };
        return (this.item = R({}, this.item, l)), (this.reactNativeFilePrepped = !0), this;
    }
    static async tryConvertToWebP(e, t, n) {
        var r, i, a;
        let s,
            o = (0, f.i)({ location: "CloudUpload.maybeConvertToWebP" });
        if (!o.enabled) return D.warn("webp conversion skipped for ".concat(n, ": not enabled")), null;
        if (null == e) return D.warn("webp conversion skipped for ".concat(n, ": no file")), null;
        if (null != o.maxFileSizeBytes && e.size > o.maxFileSizeBytes)
            return D.warn("webp conversion skipped for ".concat(n, ": too big")), null;
        if (t()) return null;
        let l = performance.now(),
            c = { compressTimeMs: 0 };
        try {
            if (((s = await (0, T.L5)(e)), t())) return null;
            if (s.success && null != s.convertedBlob)
                D.log(
                    "webp conversion worked for "
                        .concat(n, ": ")
                        .concat(s.sizeBefore, " -> ")
                        .concat(s.sizeAfter, " bytes (")
                        .concat(s.compressionRatio.toFixed(2), "x)"),
                ),
                    (c.convertedFile = new File([s.convertedBlob], e.name, {
                        type: "image/webp",
                        lastModified: e.lastModified,
                    })),
                    (c.convertedMimeType = "image/webp"),
                    (c.hashTimeMs = null != (i = s.hashTimeMs) ? i : void 0);
            else {
                let e = null != (a = s.reason) ? a : T.z9.UNKNOWN_ERROR;
                D.log("webp conversion skipped for ".concat(n, ": ").concat(e)), (c.conversionFailureReason = e);
            }
        } catch (e) {
            D.warn("webp conversion failed for ".concat(n, ":"), e), (c.conversionFailureReason = T.z9.UNKNOWN_ERROR);
        }
        let u = Math.round(performance.now() - l);
        return (c.compressTimeMs = null != (r = null == s ? void 0 : s.compressTimeMs) ? r : u), c;
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
        let e = (0, S.B)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
        try {
            await o.Bo.del(e);
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
        g.default.track(C.HAw.ATTACHMENT_UPLOAD_STARTED, {
            file_size: this.currentSize,
            mime_type: null != (e = this.mimeType) ? e : "unknown",
            video_upload_quality: h.Ay.videoUploadQuality,
            data_saving_mode: h.Ay.dataSavingMode,
            low_quality_image_mode: h.Ay.dataSavingMode,
            channel_id: this.channelId,
            connection_type: m.A.getType(),
            effective_connection_speed: m.A.getEffectiveConnectionSpeed(),
            service_provider: m.A.getServiceProvider(),
        });
    }
    trackUploadFinished(e) {
        var t, n, r, i, a, s;
        let o = null != this.startTime ? performance.now() - this.startTime : -1;
        g.default.track(C.HAw.ATTACHMENT_UPLOAD_FINISHED, {
            duration_ms: o,
            file_size: this.currentSize,
            pre_compression_file_size: this.preCompressionSize,
            final_state: e,
            mime_type: null != (t = this.mimeType) ? t : "unknown",
            num_upload_attempts: null != (n = this.uploadAnalytics.numUploadAttempts) ? n : 1,
            error_code: this.error,
            video_upload_quality: h.Ay.videoUploadQuality,
            data_saving_mode: h.Ay.dataSavingMode,
            low_quality_image_mode: h.Ay.dataSavingMode,
            compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
            get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
            upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
            converted_mime_type: null != (r = this.uploadAnalytics.convertedMimeType) ? r : "unknown",
            image_compression_quality: null != (i = this.uploadAnalytics.imageCompressionQuality) ? i : 0,
            video_compression_quality: null != (a = this.uploadAnalytics.videoCompressionQuality) ? a : "unknown",
            image_encoder_type: null != (s = this.uploadAnalytics.imageEncoderType) ? s : "unknown",
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
            connection_type: m.A.getType(),
            effective_connection_speed: m.A.getEffectiveConnectionSpeed(),
            service_provider: m.A.getServiceProvider(),
        });
    }
    constructor(e, t, n, r) {
        var i, a, s, o;
        super(e),
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
            (this.preCompressionSize = null != (i = null == (s = e.file) ? void 0 : s.size) ? i : 0),
            (this.currentSize = null != (a = null == (o = e.file) ? void 0 : o.size) ? a : 0),
            (this.reactNativeFileIndex = n),
            null != r && (this.allowOptimization = r),
            e.platform === v.xz.WEB &&
                null != e.compressionMetadata &&
                (this.mimeType = e.compressionMetadata.originalContentType),
            (this._abortController = new AbortController()),
            null != this.origin &&
                (this.uploadAnalytics.origin = "string" == typeof this.origin ? this.origin : v.Cj[this.origin]),
            (this._uploadHttpClient = new I.nd()),
            (this._libdiscoreEnabled = !1),
            (this._resumptionEnabled = !1);
    }
}
