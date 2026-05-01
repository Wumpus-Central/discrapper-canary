"use strict";
let i;
n.d(t, { jP: () => b, bK: () => L });
var r,
    s = n(735438),
    a = n.n(s),
    o = n(158390),
    l = n(636537),
    u = n(626584),
    c = n(865116);
async function d(e) {
    if (e.size > 0) return e.size;
    try {
        return await new Promise((t, n) => {
            let i = new FileReader(),
                r = setTimeout(() => {
                    n(Error("File read timeout"));
                }, 1e4);
            (i.onload = (e) => {
                clearTimeout(r);
                let i = e.target?.result;
                i instanceof ArrayBuffer ? t(i.byteLength) : n(Error("Unexpected FileReader result type"));
            }),
                (i.onerror = () => {
                    clearTimeout(r), n(Error("Could not read file"));
                }),
                i.readAsArrayBuffer(e);
        });
    } catch (e) {
        return 0;
    }
}
let _ = (0, n(945810).mj)({
    name: "2025-09-image-attachment-mezzanine-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0, maxFileSizeBytes: 524288 },
        2: { enabled: !0, maxFileSizeBytes: 262144 },
    },
});
var f = n(550642),
    h = n(964404),
    p = n(544180),
    E = n(174459),
    m = n(509929),
    g = n(927813),
    A = n(209489),
    I = n(38405),
    T = n(292348),
    S = n(565150),
    N = n(787458),
    y = n(972711),
    C = n(652215);
let v = new u.A("CloudUpload.tsx"),
    O = new Set([429]);
class R extends Error {
    kind;
    phase;
    messageShort;
    constructor(e, t = {}) {
        const { cause: n, response: i } = t,
            r = R.getErrorKind(n ?? Error(`${i?.text ?? "Unknown error"}`), i),
            s = "server_error" === r || "client_error" === r ? `${e}:${r}:status_${i?.status ?? 0}` : `${e}:${r}`;
        super(s, { cause: n }),
            (this.name = "ResumableUploadError"),
            (this.phase = e),
            (this.kind = r),
            (this.messageShort = s);
    }
    static getErrorKind(e, t) {
        let n = t?.status ?? 0,
            i = n >= 500 && n < 600,
            r = O.has(n),
            s =
                e.message.toLowerCase().includes("network") ||
                e.message.toLowerCase().includes("terminated") ||
                e.message.toLowerCase().includes("offline") ||
                e.message.toLowerCase().includes("changed");
        return i ? "server_error" : r ? "client_error" : s ? "network_error" : "unknown";
    }
    static rejectionHandler(e) {
        return (t) => {
            if (t instanceof l.oh) throw new R(e, { response: t });
            if (t instanceof Error) throw new R(e, { cause: t });
            throw new R(e, { cause: Error(String(t)) });
        };
    }
    canRetry() {
        return "server_error" === this.kind || "network_error" === this.kind || "client_error" === this.kind;
    }
}
var b =
    (((r = {}).NOT_STARTED = "NOT_STARTED"),
    (r.STARTED = "STARTED"),
    (r.UPLOADING = "UPLOADING"),
    (r.ERROR = "ERROR"),
    (r.COMPLETED = "COMPLETED"),
    (r.CANCELED = "CANCELED"),
    (r.REMOVED_FROM_MSG_DRAFT = "REMOVED_FROM_MSG_DRAFT"),
    r);
class D {
    numUploadAttempts;
    timing = {};
    compressAndExtractDisabled;
    fileAlreadyPrepped;
    imageCompressionQuality;
    videoCompressionQuality;
    imageEncoderType;
    convertedMimeType;
    sourceMediaWidth;
    sourceMediaHeight;
    sourceMediaFormat;
    sourceVideoBitrate;
    sourceVideoFramerate;
    videoDurationMs;
    sourceVideoProfile;
    sourceVideoLevel;
    uploadedImageWidth;
    uploadedImageHeight;
    targetVideoWidth;
    targetVideoHeight;
    targetVideoBitrate;
    targetVideoCodec;
    targetVideoFramerate;
    targetVideoIsHdr;
    hevcIsSupported;
    progressUpdateGranularity;
    psnr;
    ssim;
    origin;
    psnrMeasurementLatencyMs;
    ssimMeasurementLatencyMs;
    uploadResumptionCount = 0;
    uploadResumptionPosition = 0;
    uploadResumptionReason;
    conversionFailureReason;
}
i = n(122924).A;
class L extends S.Ay {
    status = "NOT_STARTED";
    channelId;
    responseUrl;
    responseUrlSetAt;
    currentSize;
    preCompressionSize;
    postCompressionSize;
    loaded = 0;
    reactNativeFileIndex;
    error;
    reactNativeFilePrepped = !1;
    startTime;
    uploadAnalytics = new D();
    uploadAttempts = 0;
    _abortController;
    _xhr;
    _aborted = !1;
    _uploadHttpClient;
    _libdiscoreEnabled;
    static fromJson(e) {
        let { item: t, channelId: n, reactNativeFileIndex: i } = e,
            r = new L(t, n, i);
        return (
            Object.entries(e).forEach((e) => {
                let [t, n] = e;
                t.startsWith("_") || (r[t] = n);
            }),
            "COMPLETED" !== r.status && (r.status = "NOT_STARTED"),
            r
        );
    }
    constructor(e, t, n, i) {
        super(e),
            (this.channelId = t),
            (this.preCompressionSize = e.file?.size ?? 0),
            (this.currentSize = e.file?.size ?? 0),
            (this.reactNativeFileIndex = n),
            null != i && (this.allowOptimization = i),
            e.platform === S.xz.WEB &&
                null != e.compressionMetadata &&
                (this.mimeType = e.compressionMetadata.originalContentType),
            (this._abortController = new AbortController()),
            null != this.origin &&
                (this.uploadAnalytics.origin = "string" == typeof this.origin ? this.origin : S.Cj[this.origin]),
            (this._uploadHttpClient = new y.nd()),
            (this._libdiscoreEnabled = !1);
    }
    parseRangeHeader(e) {
        let t = e.match(/^bytes=(\d+)-(\d+)(?:\/\d+)?$/);
        return null == t ? null : [parseInt(t[1], 10), parseInt(t[2], 10)];
    }
    createResumeAwareProgressFn = (e) => (t) => {
        let n = t.loaded + e,
            i = t.total + e,
            r = n - this.loaded;
        this.emit("progress", n, i, r), (this.loaded = n);
    };
    retryOpts() {
        return this.item.platform === S.xz.REACT_NATIVE
            ? {
                  timeout: +g.A.Millis.HOUR,
                  backoff: new o.A(0.5 * g.A.Millis.SECOND, 30 * g.A.Millis.MINUTE),
                  retries: 12,
              }
            : { timeout: +g.A.Millis.HOUR, retries: 12, backoff: new o.A() };
    }
    createAttachmentUrlRetryOpts() {
        return this.item.platform === S.xz.REACT_NATIVE
            ? {
                  timeout: { response: 30 * g.A.Millis.SECOND, deadline: 30 * g.A.Millis.MINUTE },
                  backoff: new o.A(0.5 * g.A.Millis.SECOND, 60 * g.A.Millis.SECOND),
                  retries: 8,
              }
            : this.retryOpts();
    }
    supportsResume() {
        return this._libdiscoreEnabled || this.item.platform !== S.xz.REACT_NATIVE;
    }
    async uploadFileToCloud() {
        let e, t;
        if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
        return (
            v.log(
                `Uploading ${this.id}`,
                this.item.platform === S.xz.REACT_NATIVE
                    ? `filename=${this.item.filename}, uri=${this.item.uri}`
                    : `filename=${this.item.file.name}`,
            ),
            this.item.platform === S.xz.REACT_NATIVE
                ? (t =
                      null != (e = { type: this.item.mimeType, uri: this.item.uri, name: this.item.filename }).type &&
                      "application/json" !== e.type
                          ? e.type
                          : "application/octet-stream")
                : ((e = this.item.file), (t = "application/octet-stream")),
            (0, y.gd)(this.item) &&
                ((this._uploadHttpClient = new y.gp()),
                (this._libdiscoreEnabled = !0),
                v.log("Using libdiscore client for file upload")),
            await this.uploadFileWithResumption(this.responseUrl, e, t)
        );
    }
    async getResumePosition(e) {
        let t = {
            url: e,
            headers: { "Content-Range": "bytes */*" },
            rejectWithError: !0,
            retries: 0,
            timeout: { deadline: 30 * g.A.Millis.SECOND },
            signal: this._abortController.signal,
        };
        return await this._uploadHttpClient
            .doUpload(t)
            .then((e) =>
                200 === e.status || 201 === e.status ? this.currentSize : R.rejectionHandler("status_check")(e),
            )
            .catch((e) => {
                if (e instanceof l.oh && 308 === e.status) {
                    let t = this.parseRangeHeader(e.headers.range ?? "");
                    return null != t ? t[1] + 1 : 0;
                }
                return R.rejectionHandler("status_check")(e);
            });
    }
    async startOrResumeUpload(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (
            (v.log(`Attempting to upload attachment with resumeFrom: ${t} and attempts: ${this.uploadAttempts}`), t > 0)
        )
            this.uploadAnalytics.uploadResumptionCount++,
                (e.headers = {
                    ...(e.headers ?? {}),
                    "Content-Range": `bytes ${t}-${this.currentSize - 1}/${this.currentSize}`,
                });
        else if (null != e.headers) {
            let { "Content-Range": t, ...n } = e.headers;
            e.headers = n;
        }
        e.onRequestProgress = a().throttle(this.createResumeAwareProgressFn(t), 50);
        let n = await this._uploadHttpClient
            .doUpload(e, { fileByteRange: { start: t } })
            .catch(R.rejectionHandler("upload"));
        if (200 !== n.status && 201 !== n.status) throw new R("upload", { response: n });
        return n;
    }
    async uploadFileWithResumption(e, t, n) {
        let { timeout: i, backoff: r, retries: s } = this.retryOpts(),
            o = {
                url: e,
                body: t,
                headers: { "Content-Type": n },
                signal: this._abortController.signal,
                onRequestProgress: a().throttle(this.createResumeAwareProgressFn(0), 50),
                retries: 0,
                rejectWithError: !0,
                timeout: i,
            },
            l = 0;
        for (; this.uploadAttempts <= s && !this._aborted; ) {
            this.uploadAttempts++, (this.uploadAnalytics.numUploadAttempts = this.uploadAttempts);
            try {
                let e = this.responseUrl;
                if ((await this.ensureFreshResponseUrl(), (o.url = this.responseUrl), e !== this.responseUrl))
                    (l = 0), (this.loaded = 0);
                else if (this.uploadAttempts > 1) {
                    let e = await this.trackTime(
                        "resumptionCheckTimeMs",
                        async () => await this.getResumePosition(this.responseUrl),
                    );
                    (this.uploadAnalytics.uploadResumptionPosition = e),
                        (l = this.supportsResume() ? e : 0),
                        (this.loaded = l);
                }
                return await this.startOrResumeUpload(o, l);
            } catch (e) {
                if (e instanceof R && e.canRetry()) {
                    v.warn(`Error uploading ${this.id}: ${e.message}, attempting resumption`),
                        (this.uploadAnalytics.uploadResumptionReason = e.messageShort),
                        await A.A.awaitOnline();
                    let t = r.fail();
                    v.log(`Waiting ${t}ms before attachment upload attempt ${this.uploadAttempts + 1}`),
                        await new Promise((e) => setTimeout(e, t));
                } else throw (v.warn(`Unrecoverable error uploading ${this.id}: ${e.message}`), e);
            }
        }
        throw Error(`Upload failed after ${this.uploadAttempts} attempts`);
    }
    async getSize() {
        return this.currentSize ?? 0;
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
        if ("COMPLETED" === this.status) return;
        if (
            (this.setStatus("STARTED"),
            (this.startTime = performance.now()),
            this.trackUploadStart(),
            this.isCancelled())
        )
            return void this.handleComplete(this.id);
        if (this.allowOptimization && this.item.platform === S.xz.WEB) {
            let e = await L.tryConvertToWebP(this.item.file, () => this._aborted, this.id);
            null != e &&
                (null != e.convertedFile &&
                    ((this.item.file = e.convertedFile), (this.currentSize = e.convertedFile.size)),
                null != e.convertedMimeType && (this.uploadAnalytics.convertedMimeType = e.convertedMimeType),
                null != e.hashTimeMs && (this.uploadAnalytics.timing.hashTimeMs = e.hashTimeMs),
                null != e.conversionFailureReason &&
                    (this.uploadAnalytics.conversionFailureReason = e.conversionFailureReason),
                (this.uploadAnalytics.timing.compressTimeMs = e.compressTimeMs));
        }
        let e = await i.getUploadPayload(this),
            t = (0, N.B)(this.item.target);
        if (null == e.filename || "" === e.filename) {
            v.error("File does not have a filename.", JSON.stringify(e)), this.handleError(C.t02.INVALID_FILE_ASSET);
            return;
        }
        if (0 === this.currentSize && null != this.item.file)
            try {
                let e = await d(this.item.file);
                e > 0 && (this.currentSize = e);
            } catch (t) {
                v.warn("Failed to detect file size, proceeding with original", {
                    filename: e.filename,
                    error: t instanceof Error ? t.message : String(t),
                });
            }
        if (0 === this.currentSize) return void this.handleError(C.t02.ENTITY_EMPTY);
        let n = (0, f.R8)({ location: "CloudUpload.upload.postCompressionCheck" }),
            r = (0, f.Jy)(n, t.getMaxFileSize(this.channelId));
        if ((this.currentSize ?? 0) > r) return void this.handleError(C.t02.ENTITY_TOO_LARGE);
        if (c.Ay.get("upload_fail_50") && 0.5 > Math.random())
            return void setTimeout(() => {
                this.handleError(500);
            }, 1e3);
        try {
            v.log(`Requesting upload url for ${this.id}`);
            let n = await this.trackTime("getUploadUrlTimeMs", async () => {
                let n = t.getCreateAttachmentURL(this.channelId);
                return await l.Bo.post({
                    url: n,
                    body: { files: [e] },
                    ...this.createAttachmentUrlRetryOpts(),
                    rejectWithError: !1,
                });
            });
            this.setResponseUrl(n.body.attachments[0].upload_url),
                this.setUploadedFilename(n.body.attachments[0].upload_filename);
        } catch (t) {
            let e = t?.body?.code ?? t.status;
            e !== C.t02.ENTITY_TOO_LARGE &&
                (v.error(`Requesting upload url failed with code ${e ?? JSON.stringify(t.body)} for ${this.id}`),
                I.A.captureException(t)),
                this.handleError(e);
            return;
        }
        try {
            await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloud()),
                this.trackUploadFinished("COMPLETED"),
                this.handleComplete(this.id);
        } catch (e) {
            this.isCancelled()
                ? this.handleComplete(e)
                : (v.info(`Error: status ${e.status} for ${this.id}`), this.handleError(e));
        }
    }
    async reactNativeCompressAndExtractData() {
        if (!(0, N.B)(this.item.target).shouldReactNativeCompressUploads)
            return (
                (this.uploadAnalytics.compressAndExtractDisabled = !0),
                v.log("reactNativeCompressAndExtractData() disabled by upload target"),
                this
            );
        if (!0 === this.reactNativeFilePrepped)
            return (
                (this.uploadAnalytics.fileAlreadyPrepped = !0),
                v.log(`reactNativeCompressAndExtractData() file already prepped - ${this.id}`),
                this
            );
        v.log(`Starting compression/conversion for ${this.id}`);
        let e = await this.trackTime(
            "compressTimeMs",
            async () => await (0, m.Si)(this, this.reactNativeFileIndex ?? 0),
        );
        if (null == e || null == e.file) return v.error(`Failed to get compressed file for ${this.id}`), this;
        let t = e.uri,
            n = e.file.name;
        if (
            ((0, S.Sm)(e.file) &&
                ((this.uploadAnalytics.imageCompressionQuality = e.file.imageCompressionQuality),
                (this.uploadAnalytics.videoCompressionQuality = e.file.videoCompressionQuality),
                (this.uploadAnalytics.imageEncoderType = e.file.imageEncoderType),
                e.file.isImage &&
                    ((this.uploadAnalytics.sourceMediaWidth = e.file.sourceWidth),
                    (this.uploadAnalytics.sourceMediaHeight = e.file.sourceHeight),
                    (this.uploadAnalytics.uploadedImageWidth = e.file.uploadedImageWidth),
                    (this.uploadAnalytics.uploadedImageHeight = e.file.uploadedImageHeight)),
                void 0 !== e.file.videoMetadata &&
                    ((this.uploadAnalytics.sourceMediaWidth = e.file.videoMetadata.width),
                    (this.uploadAnalytics.sourceMediaHeight = e.file.videoMetadata.height),
                    (this.uploadAnalytics.sourceMediaFormat = e.file.videoMetadata.format),
                    (this.uploadAnalytics.sourceVideoBitrate = e.file.videoMetadata.bitRate),
                    (this.uploadAnalytics.sourceVideoFramerate = e.file.videoMetadata.frameRate),
                    (this.uploadAnalytics.videoDurationMs = e.file.videoMetadata.durationMs),
                    (this.uploadAnalytics.sourceVideoProfile = e.file.videoMetadata.sourceProfile),
                    (this.uploadAnalytics.sourceVideoLevel = e.file.videoMetadata.sourceLevel)),
                void 0 !== e.file.encodingConfig &&
                    ((this.uploadAnalytics.targetVideoWidth = e.file.encodingConfig.targetWidth),
                    (this.uploadAnalytics.targetVideoHeight = e.file.encodingConfig.targetHeight),
                    (this.uploadAnalytics.targetVideoBitrate = e.file.encodingConfig.targetBitrate),
                    (this.uploadAnalytics.targetVideoCodec = e.file.encodingConfig.useHEVC ? "hvc1" : "avc1"),
                    (this.uploadAnalytics.targetVideoFramerate = e.file.encodingConfig.frameRate),
                    (this.uploadAnalytics.targetVideoIsHdr = e.file.encodingConfig.createHDR),
                    (this.uploadAnalytics.hevcIsSupported = e.file.encodingConfig.hevcIsSupported),
                    (this.uploadAnalytics.progressUpdateGranularity = e.file.encodingConfig.progressUpdateGranularity)),
                (this.uploadAnalytics.psnr = e.file.psnr),
                (this.uploadAnalytics.ssim = e.file.ssim),
                (this.uploadAnalytics.origin = e.file.origin),
                (this.uploadAnalytics.psnrMeasurementLatencyMs = e.file.psnrMeasurementLatencyMs),
                (this.uploadAnalytics.ssimMeasurementLatencyMs = e.file.ssimMeasurementLatencyMs)),
            (this.filename = n),
            null == n || null == t || null == e.file.type)
        )
            throw (
                (v.error(`Insufficient file data: ${{ filename: n, uri: t, type: e.file.type }} for ${this.id}`),
                Error(`Insufficient file data: ${{ filename: n, uri: t, type: e.file.type }}`))
            );
        let i = n.split(".").pop()?.toLowerCase(),
            r = "jpg" === i || "jpeg" === i ? "image/jpeg" : e.file.type;
        this.uploadAnalytics.convertedMimeType = r;
        let s = e.fileSize ?? (await (0, T.dm)(t)).size;
        if (((this.postCompressionSize = s), (this.currentSize = s), null == s))
            throw (v.error(`Size missing from file data for ${this.id}`), Error("Size missing from file data"));
        return (
            v.log(
                `Completed compression and conversion. Output size=${s} bytes; filename=${n}; uri=${t}; originalMimeType=${this.mimeType}; mimeType=${r} for ${this.id}`,
            ),
            (this.item = { ...this.item, uri: t, filename: n, mimeType: r }),
            (this.reactNativeFilePrepped = !0),
            this
        );
    }
    static async tryConvertToWebP(e, t, i) {
        let r,
            s,
            a = (function (e) {
                let { location: t } = e;
                return _.getConfig({ location: t });
            })({ location: "CloudUpload.maybeConvertToWebP" });
        if (!a.enabled) return v.warn(`webp conversion skipped for ${i}: not enabled`), null;
        if (null == e) return v.warn(`webp conversion skipped for ${i}: no file`), null;
        if (null != a.maxFileSizeBytes && e.size > a.maxFileSizeBytes)
            return v.warn(`webp conversion skipped for ${i}: too big`), null;
        if (t()) return null;
        let o = performance.now(),
            l = { compressTimeMs: 0 };
        try {
            let a = await Promise.all([n.e("96904"), n.e("87096")]).then(n.bind(n, 989707));
            if (((s = a.ConversionFailureReason), (r = await a.maybeConvertToWebP(e)), t())) return null;
            if (r.success && null != r.convertedBlob)
                v.log(
                    `webp conversion worked for ${i}: ${r.sizeBefore} -> ${r.sizeAfter} bytes (${r.compressionRatio.toFixed(2)}x)`,
                ),
                    (l.convertedFile = new File([r.convertedBlob], e.name, {
                        type: "image/webp",
                        lastModified: e.lastModified,
                    })),
                    (l.convertedMimeType = "image/webp"),
                    (l.hashTimeMs = r.hashTimeMs ?? void 0);
            else {
                let e = r.reason ?? s.UNKNOWN_ERROR;
                v.log(`webp conversion skipped for ${i}: ${e}`), (l.conversionFailureReason = e);
            }
        } catch (e) {
            v.warn(`webp conversion failed for ${i}:`, e),
                (l.conversionFailureReason = s?.UNKNOWN_ERROR ?? "unknown_error");
        }
        let u = Math.round(performance.now() - o);
        return (l.compressTimeMs = r?.compressTimeMs ?? u), l;
    }
    handleError(e) {
        this.setStatus("ERROR"), (this.error = e), this.trackUploadFinished("ERROR");
        try {
            this.emit("error", e);
        } catch {}
        this.removeAllListeners();
    }
    handleComplete(e) {
        this.setStatus("COMPLETED"),
            v.log(`Upload complete for ${this.id}`),
            this.emit("complete", e),
            this.removeAllListeners();
    }
    _cancel(e, t) {
        v.log(t),
            (this._aborted = !0),
            this._abortController.abort(),
            this.trackUploadFinished(e),
            "COMPLETED" === this.status && this.delete(),
            this.setStatus(e),
            this.emit("complete"),
            this.removeAllListeners();
    }
    cancel() {
        this._cancel("CANCELED", `Cancelled called for ${this.id}`);
    }
    removeFromMsgDraft() {
        this._cancel("REMOVED_FROM_MSG_DRAFT", `Removed from draft for ${this.id}`);
    }
    isCancelled() {
        return "CANCELED" === this.status || "REMOVED_FROM_MSG_DRAFT" === this.status;
    }
    resetState() {
        return (
            (this.status = "NOT_STARTED"),
            (this.uploadedFilename = void 0),
            (this.responseUrl = void 0),
            (this.responseUrlSetAt = void 0),
            (this.error = void 0),
            (this.startTime = void 0),
            (this.uploadAnalytics = new D()),
            (this.uploadAttempts = 0),
            (this._aborted = !1),
            (this._abortController = new AbortController()),
            super.resetState()
        );
    }
    async delete() {
        if (null == this.uploadedFilename) return;
        let e = (0, N.B)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
        try {
            await l.Bo.del(e);
        } catch {}
    }
    setResponseUrl(e) {
        (this.responseUrl = e), (this.responseUrlSetAt = Date.now());
    }
    static isResponseUrlStale(e) {
        if (null == e) return !0;
        let t = 12 * g.A.Millis.HOUR;
        return Date.now() - e > t;
    }
    async ensureFreshResponseUrl() {
        if (!L.isResponseUrlStale(this.responseUrlSetAt)) return;
        let e = await i.getUploadPayload(this),
            t = (0, N.B)(this.item.target).getCreateAttachmentURL(this.channelId),
            n = await l.Bo.post({
                url: t,
                body: { files: [e] },
                ...this.createAttachmentUrlRetryOpts(),
                rejectWithError: !1,
            });
        if (!n.ok || n.body?.attachments?.[0] == null) throw new R("upload", { response: n });
        this.setResponseUrl(n.body.attachments[0].upload_url),
            this.setUploadedFilename(n.body.attachments[0].upload_filename);
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
        E.default.track(C.HAw.ATTACHMENT_UPLOAD_STARTED, {
            file_size: this.currentSize,
            mime_type: this.mimeType ?? "unknown",
            video_upload_quality: h.Ay.videoUploadQuality,
            data_saving_mode: h.Ay.dataSavingMode,
            low_quality_image_mode: h.Ay.dataSavingMode,
            channel_id: this.channelId,
            connection_type: p.A.getType(),
            effective_connection_speed: p.A.getEffectiveConnectionSpeed(),
            service_provider: p.A.getServiceProvider(),
        });
    }
    trackUploadFinished(e) {
        let t = null != this.startTime ? performance.now() - this.startTime : -1;
        E.default.track(C.HAw.ATTACHMENT_UPLOAD_FINISHED, {
            duration_ms: t,
            file_size: this.currentSize,
            pre_compression_file_size: this.preCompressionSize,
            final_state: e,
            mime_type: this.mimeType ?? "unknown",
            num_upload_attempts: this.uploadAnalytics.numUploadAttempts ?? 1,
            error_code: this.error,
            video_upload_quality: h.Ay.videoUploadQuality,
            data_saving_mode: h.Ay.dataSavingMode,
            low_quality_image_mode: h.Ay.dataSavingMode,
            compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
            get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
            upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
            converted_mime_type: this.uploadAnalytics.convertedMimeType ?? "unknown",
            image_compression_quality: this.uploadAnalytics.imageCompressionQuality ?? 0,
            video_compression_quality: this.uploadAnalytics.videoCompressionQuality ?? "unknown",
            image_encoder_type: this.uploadAnalytics.imageEncoderType ?? "unknown",
            was_converted:
                null != this.uploadAnalytics.convertedMimeType &&
                this.mimeType !== this.uploadAnalytics.convertedMimeType,
            was_compressed: this.currentSize < this.preCompressionSize,
            source_media_width: this.uploadAnalytics.sourceMediaWidth,
            source_media_height: this.uploadAnalytics.sourceMediaHeight,
            source_media_format: this.uploadAnalytics.sourceMediaFormat,
            uploaded_image_width: this.uploadAnalytics.uploadedImageWidth,
            uploaded_image_height: this.uploadAnalytics.uploadedImageHeight,
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
            connection_type: p.A.getType(),
            effective_connection_speed: p.A.getEffectiveConnectionSpeed(),
            service_provider: p.A.getServiceProvider(),
        });
    }
}
