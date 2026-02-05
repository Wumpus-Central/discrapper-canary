"use strict";
let r;
n.d(t, { bK: () => x, jP: () => L });
var i = n(735438),
    a = n.n(i),
    s = n(158390),
    o = n(562465),
    l = n(626584),
    u = n(865116),
    c = n(795129),
    d = n(547927),
    _ = n(661011),
    f = n(87481),
    p = n(445215),
    h = n(964404),
    m = n(544180),
    g = n(954571),
    E = n(509929),
    A = n(927813),
    I = n(209489),
    T = n(728458),
    y = n(292348),
    S = n(565150),
    v = n(900482),
    C = n(972711),
    b = n(554707),
    N = n(652215);
let R = new l.A("CloudUpload.tsx");
class O extends Error {
    kind;
    phase;
    messageShort;
    constructor(e, t = {}) {
        const { cause: n, response: r } = t,
            i = O.getErrorKind(n ?? Error(`${r?.text ?? "Unknown error"}`), r),
            a = "server_error" === i ? `${e}:${i}:status_${r?.status ?? 0}` : `${e}:${i}`;
        super(a, { cause: n }),
            (this.name = "ResumableUploadError"),
            (this.phase = e),
            (this.kind = i),
            (this.messageShort = a);
    }
    static getErrorKind(e, t) {
        let n = t?.status ?? 0,
            r = n >= 500 && n < 600,
            i =
                e.message.toLowerCase().includes("network") ||
                e.message.toLowerCase().includes("terminated") ||
                e.message.toLowerCase().includes("offline") ||
                e.message.toLowerCase().includes("changed");
        return r ? "server_error" : i ? "network_error" : "unknown";
    }
    static rejectionHandler(e) {
        return (t) => {
            if (t instanceof o.oh) throw new O(e, { response: t });
            if (t instanceof Error) throw new O(e, { cause: t });
            throw new O(e, { cause: Error(String(t)) });
        };
    }
    canRetry() {
        return "server_error" === this.kind || "network_error" === this.kind;
    }
}
let D = "Content-MD5";
var L = (function (e) {
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
class w {
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
    targetVideoWidth;
    targetVideoHeight;
    targetVideoBitrate;
    targetVideoCodec;
    targetVideoFramerate;
    targetVideoIsHdr;
    hevcIsSupported;
    progressUpdateGranularity;
    validUploadHash;
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
r = n(122924).A;
class x extends S.Ay {
    status = "NOT_STARTED";
    channelId;
    responseUrl;
    currentSize;
    preCompressionSize;
    postCompressionSize;
    loaded = 0;
    reactNativeFileIndex;
    error;
    reactNativeFilePrepped = !1;
    allowOptimization = !0;
    startTime;
    uploadAnalytics = new w();
    contentHash;
    etag;
    uploadAttempts = 0;
    _abortController;
    _xhr;
    _aborted = !1;
    _uploadHttpClient;
    _libdiscoreEnabled;
    _resumptionEnabled;
    static fromJson(e) {
        let { item: t, channelId: n, reactNativeFileIndex: r } = e,
            i = new x(t, n, r);
        return (
            Object.entries(e).forEach((e) => {
                let [t, n] = e;
                t.startsWith("_") || (i[t] = n);
            }),
            "COMPLETED" !== i.status && (i.status = "NOT_STARTED"),
            i
        );
    }
    constructor(e, t, n, r) {
        super(e),
            (this.channelId = t),
            (this.preCompressionSize = e.file?.size ?? 0),
            (this.currentSize = e.file?.size ?? 0),
            (this.reactNativeFileIndex = n),
            null != r && (this.allowOptimization = r),
            e.platform === S.xz.WEB &&
                null != e.compressionMetadata &&
                (this.mimeType = e.compressionMetadata.originalContentType),
            (this._abortController = new AbortController()),
            null != this.origin &&
                (this.uploadAnalytics.origin = "string" == typeof this.origin ? this.origin : S.Cj[this.origin]),
            (this._uploadHttpClient = new C.nd()),
            (this._libdiscoreEnabled = !1),
            (this._resumptionEnabled = !1);
    }
    parseRangeHeader(e) {
        let t = e.match(/^bytes=(\d+)-(\d+)(?:\/\d+)?$/);
        return null == t ? null : [parseInt(t[1], 10), parseInt(t[2], 10)];
    }
    createResumeAwareProgressFn = (e) => (t) => {
        let n = t.loaded + e,
            r = t.total + e,
            i = n - this.loaded;
        this.emit("progress", n, r, i), (this.loaded = n);
    };
    retryOpts() {
        return this.item.platform === S.xz.REACT_NATIVE
            ? {
                  timeout: +A.A.Millis.HOUR,
                  backoff: new s.A(0.5 * A.A.Millis.SECOND, 30 * A.A.Millis.MINUTE),
                  retries: 12,
              }
            : { timeout: +A.A.Millis.HOUR, retries: 12, backoff: new s.A() };
    }
    createAttachmentUrlRetryOpts() {
        return this.item.platform === S.xz.REACT_NATIVE
            ? {
                  timeout: { response: 30 * A.A.Millis.SECOND, deadline: 30 * A.A.Millis.MINUTE },
                  backoff: new s.A(0.5 * A.A.Millis.SECOND, 60 * A.A.Millis.SECOND),
                  retries: 8,
              }
            : this.retryOpts();
    }
    supportsResume() {
        return (this._libdiscoreEnabled || this.item.platform !== S.xz.REACT_NATIVE) && this._resumptionEnabled;
    }
    async uploadFileToCloud() {
        let e, t;
        if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
        R.log(
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
                : ((e = this.item.file), (t = "application/octet-stream"));
        let n = (0, p.Q)({ location: "CloudUpload" });
        if (n.enableNewRetry)
            return (
                (0, C.gd)(this.item) &&
                    ((this._uploadHttpClient = new C.gp()),
                    (this._libdiscoreEnabled = !0),
                    R.log("Using libdiscore client for file upload")),
                (this._resumptionEnabled = n.enableResumption),
                await this.uploadFileWithResumption(this.responseUrl, e, t)
            );
        let r = { "Content-Type": t };
        void 0 !== this.contentHash && (r[D] = this.contentHash);
        let i = {
            url: this.responseUrl,
            body: e,
            headers: r,
            signal: this._abortController.signal,
            onRequestProgress: a().throttle(this.createResumeAwareProgressFn(0), 50),
            rejectWithError: !1,
            ...this.retryOpts(),
        };
        return o.Bo.put(i);
    }
    async getResumePosition(e) {
        let t = {
            url: e,
            headers: { "Content-Range": "bytes */*" },
            rejectWithError: !0,
            retries: 0,
            timeout: { deadline: 30 * A.A.Millis.SECOND },
            signal: this._abortController.signal,
        };
        return await this._uploadHttpClient
            .doUpload(t)
            .then((e) =>
                200 === e.status || 201 === e.status ? this.currentSize : O.rejectionHandler("status_check")(e),
            )
            .catch((e) => {
                if (e instanceof o.oh && 308 === e.status) {
                    let t = this.parseRangeHeader(e.headers.range ?? "");
                    return null != t ? t[1] + 1 : 0;
                }
                return O.rejectionHandler("status_check")(e);
            });
    }
    async startOrResumeUpload(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        R.log(`Attempting to upload attachment with resumeFrom: ${t} and attempts: ${this.uploadAttempts}`),
            t > 0 &&
                (this.uploadAnalytics.uploadResumptionCount++,
                (e.headers = {
                    ...(e.headers ?? {}),
                    "Content-Range": `bytes ${t}-${this.currentSize - 1}/${this.currentSize}`,
                })),
            (e.onRequestProgress = a().throttle(this.createResumeAwareProgressFn(t), 50));
        let n = await this._uploadHttpClient
            .doUpload(e, { fileByteRange: { start: t } })
            .catch(O.rejectionHandler("upload"));
        if (200 !== n.status && 201 !== n.status) throw new O("upload", { response: n });
        return n;
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
                if (e instanceof O && e.canRetry()) {
                    R.warn(`Error uploading ${this.id}: ${e.message}, attempting resumption`),
                        (this.uploadAnalytics.uploadResumptionReason = e.messageShort),
                        await I.A.awaitOnline();
                    let t = i.fail();
                    R.log(`Waiting ${t}ms before attachment upload attempt ${this.uploadAttempts + 1}`),
                        await new Promise((e) => setTimeout(e, t));
                } else throw (R.warn(`Unrecoverable error uploading ${this.id}: ${e.message}`), e);
            }
        }
        throw Error(`Upload failed after ${this.uploadAttempts} attempts`);
    }
    async getSize() {
        return this.currentSize ?? 0;
    }
    async getHash() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0], "";
    }
    getEtagFromResponse(e) {
        let t = e.headers.etag ?? null;
        return null != t ? t.replace(/"/g, "") : null;
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
            let e = await x.tryConvertToWebP(this.item.file, () => this._aborted, this.id);
            null != e &&
                (null != e.convertedFile &&
                    ((this.item.file = e.convertedFile), (this.currentSize = e.convertedFile.size)),
                null != e.convertedMimeType && (this.uploadAnalytics.convertedMimeType = e.convertedMimeType),
                null != e.hashTimeMs && (this.uploadAnalytics.timing.hashTimeMs = e.hashTimeMs),
                null != e.conversionFailureReason &&
                    (this.uploadAnalytics.conversionFailureReason = e.conversionFailureReason),
                (this.uploadAnalytics.timing.compressTimeMs = e.compressTimeMs));
        }
        let e = await r.getUploadPayload(this),
            t = (0, v.B)(this.item.target),
            n = (0, d.N)({ location: "CloudUpload.upload" });
        if (null == e.filename || "" === e.filename) {
            R.error("File does not have a filename.", JSON.stringify(e)), this.handleError(N.t02.INVALID_FILE_ASSET);
            return;
        }
        if (n.useDetectedFileSize && 0 === this.currentSize && null != this.item.file)
            try {
                let e = await (0, c._)(this.item.file);
                e > 0 && (this.currentSize = e);
            } catch (t) {
                R.warn("Failed to detect file size, proceeding with original", {
                    filename: e.filename,
                    error: t instanceof Error ? t.message : String(t),
                });
            }
        if (0 === this.currentSize) return void this.handleError(N.t02.ENTITY_EMPTY);
        if ((this.currentSize ?? 0) > t.getMaxFileSize(this.channelId))
            return void this.handleError(N.t02.ENTITY_TOO_LARGE);
        if (u.Ay.get("upload_fail_50") && 0.5 > Math.random())
            return void setTimeout(() => {
                this.handleError(500);
            }, 1e3);
        let i = f.A.getCurrentConfig({ location: "CloudUpload" }, { autoTrackExposure: !0 }),
            a = null;
        i.enabled;
        try {
            R.log(`Requesting upload url for ${this.id}`);
            let n = await this.trackTime("getUploadUrlTimeMs", async () => {
                let n = t.getCreateAttachmentURL(this.channelId);
                return await o.Bo.post({
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
            e !== N.t02.ENTITY_TOO_LARGE &&
                (R.error(`Requesting upload url failed with code ${e ?? JSON.stringify(t.body)} for ${this.id}`),
                T.A.captureException(t)),
                this.handleError(e);
            return;
        }
        if (null != a) {
            let e = await a;
            null != e && (this.contentHash = e);
        }
        try {
            let e = await this.trackTime("uploadTimeMs", async () => await this.uploadFileToCloud());
            if (i.enabled && null != e) {
                let t = !1,
                    n = this.getEtagFromResponse(e);
                if (
                    (null != n && ((this.etag = n), (t = n === this.contentHash)),
                    (this.uploadAnalytics.validUploadHash = t),
                    !t && i.enforced)
                ) {
                    let e = `File ${this.filename ?? this.id} received incorrect checksum after upload: got ${this.etag}, expected ${this.contentHash}`;
                    R.error(e), T.A.captureMessage(e), this.handleError(N.t02.INVALID_FILE_ASSET);
                    return;
                }
            }
            this.trackUploadFinished("COMPLETED"), this.handleComplete(e);
        } catch (e) {
            this.isCancelled()
                ? this.handleComplete(e)
                : (R.info(`Error: status ${e.status} for ${this.id}`), this.handleError(e));
        }
    }
    async reactNativeCompressAndExtractData() {
        if (!(0, v.B)(this.item.target).shouldReactNativeCompressUploads)
            return (
                (this.uploadAnalytics.compressAndExtractDisabled = !0),
                R.log("reactNativeCompressAndExtractData() disabled by upload target"),
                this
            );
        if (!0 === this.reactNativeFilePrepped)
            return (
                (this.uploadAnalytics.fileAlreadyPrepped = !0),
                R.log(`reactNativeCompressAndExtractData() file already prepped - ${this.id}`),
                this
            );
        R.log(`Starting compression/conversion for ${this.id}`);
        let e = await this.trackTime(
            "compressTimeMs",
            async () => await (0, E.Si)(this, this.reactNativeFileIndex ?? 0),
        );
        if (null == e || null == e.file) return R.error(`Failed to get compressed file for ${this.id}`), this;
        let t = e.uri,
            n = e.file.name;
        if (
            ((0, S.Sm)(e.file) &&
                ((this.uploadAnalytics.imageCompressionQuality = e.file.imageCompressionQuality),
                (this.uploadAnalytics.videoCompressionQuality = e.file.videoCompressionQuality),
                (this.uploadAnalytics.imageEncoderType = e.file.imageEncoderType),
                e.file.isImage &&
                    ((this.uploadAnalytics.sourceMediaWidth = e.file.sourceWidth),
                    (this.uploadAnalytics.sourceMediaHeight = e.file.sourceHeight)),
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
                (R.error(`Insufficient file data: ${{ filename: n, uri: t, type: e.file.type }} for ${this.id}`),
                Error(`Insufficient file data: ${{ filename: n, uri: t, type: e.file.type }}`))
            );
        let r = n.split(".").pop()?.toLowerCase(),
            i = "jpg" === r || "jpeg" === r ? "image/jpeg" : e.file.type;
        this.uploadAnalytics.convertedMimeType = i;
        let a = e.fileSize ?? (await (0, y.dm)(t)).size;
        if (((this.postCompressionSize = a), (this.currentSize = a), null == a))
            throw (R.error(`Size missing from file data for ${this.id}`), Error("Size missing from file data"));
        R.log(
            `Completed compression and conversion. Output size=${a} bytes; filename=${n}; uri=${t}; originalMimeType=${this.mimeType}; mimeType=${i} for ${this.id}`,
        );
        let s = { uri: t, filename: n, mimeType: i };
        return (this.item = { ...this.item, ...s }), (this.reactNativeFilePrepped = !0), this;
    }
    static async tryConvertToWebP(e, t, n) {
        let r,
            i = (0, _.i)({ location: "CloudUpload.maybeConvertToWebP" });
        if (!i.enabled) return R.warn(`webp conversion skipped for ${n}: not enabled`), null;
        if (null == e) return R.warn(`webp conversion skipped for ${n}: no file`), null;
        if (null != i.maxFileSizeBytes && e.size > i.maxFileSizeBytes)
            return R.warn(`webp conversion skipped for ${n}: too big`), null;
        if (t()) return null;
        let a = performance.now(),
            s = { compressTimeMs: 0 };
        try {
            if (((r = await (0, b.L5)(e)), t())) return null;
            if (r.success && null != r.convertedBlob)
                R.log(
                    `webp conversion worked for ${n}: ${r.sizeBefore} -> ${r.sizeAfter} bytes (${r.compressionRatio.toFixed(2)}x)`,
                ),
                    (s.convertedFile = new File([r.convertedBlob], e.name, {
                        type: "image/webp",
                        lastModified: e.lastModified,
                    })),
                    (s.convertedMimeType = "image/webp"),
                    (s.hashTimeMs = r.hashTimeMs ?? void 0);
            else {
                let e = r.reason ?? b.z9.UNKNOWN_ERROR;
                R.log(`webp conversion skipped for ${n}: ${e}`), (s.conversionFailureReason = e);
            }
        } catch (e) {
            R.warn(`webp conversion failed for ${n}:`, e), (s.conversionFailureReason = b.z9.UNKNOWN_ERROR);
        }
        let o = Math.round(performance.now() - a);
        return (s.compressTimeMs = r?.compressTimeMs ?? o), s;
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
            R.log(`Upload complete for ${this.id}`),
            this.emit("complete", e),
            this.removeAllListeners();
    }
    _cancel(e, t) {
        R.log(t),
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
            (this.error = void 0),
            (this.startTime = void 0),
            (this.uploadAnalytics = new w()),
            (this.uploadAttempts = 0),
            (this._aborted = !1),
            (this._abortController = new AbortController()),
            super.resetState()
        );
    }
    async delete() {
        if (null == this.uploadedFilename) return;
        let e = (0, v.B)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
        try {
            await o.Bo.del(e);
        } catch {}
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
        g.default.track(N.HAw.ATTACHMENT_UPLOAD_STARTED, {
            file_size: this.currentSize,
            mime_type: this.mimeType ?? "unknown",
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
        let t = null != this.startTime ? performance.now() - this.startTime : -1;
        g.default.track(N.HAw.ATTACHMENT_UPLOAD_FINISHED, {
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
}
