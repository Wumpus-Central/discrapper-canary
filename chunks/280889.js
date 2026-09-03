let i;
n.d(t, { jP: () => P, bK: () => w });
var r,
    a = n(435558),
    s = n.n(a),
    l = n(158390),
    o = n(636537),
    d = n(268429),
    c = n(626584),
    u = n(865116),
    _ = n(860840),
    E = n(795129),
    A = n(669646);
let h = (0, n(945810).mj)({
    name: "2025-09-image-attachment-mezzanine-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0, maxFileSizeBytes: 524288 },
        2: { enabled: !0, maxFileSizeBytes: 262144 },
    },
});
var I = n(550642),
    f = n(742023),
    p = n(544180),
    T = n(174459),
    m = n(509929),
    g = n(927813),
    S = n(209489),
    N = n(38405),
    C = n(292348),
    O = n(565150),
    R = n(787458),
    L = n(972711),
    y = n(201115),
    D = n(652215);
let v = new c.A("CloudUpload.tsx"),
    b = new Set([429]);
class M extends Error {
    kind;
    phase;
    messageShort;
    constructor(e, t = {}) {
        const { cause: n, response: i } = t,
            r = M.getErrorKind(n ?? Error(`${i?.text ?? "Unknown error"}`), i),
            a = "server_error" === r || "client_error" === r ? `${e}:${r}:status_${i?.status ?? 0}` : `${e}:${r}`;
        super(a, { cause: n }),
            (this.name = "ResumableUploadError"),
            (this.phase = e),
            (this.kind = r),
            (this.messageShort = a);
    }
    static getErrorKind(e, t) {
        let n = t?.status ?? 0,
            i = n >= 500 && n < 600,
            r = b.has(n),
            a =
                e.message.toLowerCase().includes("network") ||
                e.message.toLowerCase().includes("terminated") ||
                e.message.toLowerCase().includes("offline") ||
                e.message.toLowerCase().includes("changed");
        return i ? "server_error" : r ? "client_error" : a ? "network_error" : "unknown";
    }
    static rejectionHandler(e) {
        return (t) => {
            if (t instanceof o.oh) throw new M(e, { response: t });
            if (t instanceof Error) throw new M(e, { cause: t });
            throw new M(e, { cause: Error(String(t)) });
        };
    }
    canRetry() {
        return "server_error" === this.kind || "network_error" === this.kind || "client_error" === this.kind;
    }
}
var P =
    (((r = {}).NOT_STARTED = "NOT_STARTED"),
    (r.STARTED = "STARTED"),
    (r.UPLOADING = "UPLOADING"),
    (r.ERROR = "ERROR"),
    (r.COMPLETED = "COMPLETED"),
    (r.CANCELED = "CANCELED"),
    (r.REMOVED_FROM_MSG_DRAFT = "REMOVED_FROM_MSG_DRAFT"),
    r);
class U {
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
class w extends O.Ay {
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
    uploadAnalytics = new U();
    uploadAttempts = 0;
    _abortController;
    _xhr;
    _aborted = !1;
    _uploadHttpClient;
    _libdiscoreEnabled;
    _originalMd5 = null;
    static fromJson(e) {
        let { item: t, channelId: n, reactNativeFileIndex: i } = e,
            r = new w(t, n, i);
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
        if (
            (super(e),
            (this.channelId = t),
            (this.preCompressionSize = e.file?.size ?? 0),
            (this.currentSize = e.file?.size ?? 0),
            (this.reactNativeFileIndex = n),
            null != i && (this.allowOptimization = i),
            e.platform === O.xz.WEB &&
                null != e.compressionMetadata &&
                ((this.mimeType = e.compressionMetadata.originalContentType),
                (this.preCompressionSize = e.compressionMetadata.preCompressionSize)),
            e.platform === O.xz.WEB && null != e.originalMd5 && (this._originalMd5 = e.originalMd5),
            e.platform === O.xz.WEB && null != e.heicConversionAnalytics)
        ) {
            const { convertedMimeType: t, conversionFailureReason: n, compressTimeMs: i } = e.heicConversionAnalytics;
            null != t && (this.uploadAnalytics.convertedMimeType = t),
                null != n && (this.uploadAnalytics.conversionFailureReason = n),
                (this.uploadAnalytics.timing.compressTimeMs = i);
        }
        (this._abortController = new AbortController()),
            null != this.origin &&
                (this.uploadAnalytics.origin = "string" == typeof this.origin ? this.origin : O.Cj[this.origin]),
            (this._uploadHttpClient = new L.nd()),
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
        return this.item.platform === O.xz.REACT_NATIVE
            ? {
                  timeout: +g.A.Millis.HOUR,
                  backoff: new l.A(0.5 * g.A.Millis.SECOND, 30 * g.A.Millis.MINUTE),
                  retries: 12,
              }
            : { timeout: +g.A.Millis.HOUR, retries: 12, backoff: new l.A() };
    }
    createAttachmentUrlRetryOpts() {
        return this.item.platform === O.xz.REACT_NATIVE
            ? {
                  timeout: { response: 30 * g.A.Millis.SECOND, deadline: 30 * g.A.Millis.MINUTE },
                  backoff: new l.A(0.5 * g.A.Millis.SECOND, 60 * g.A.Millis.SECOND),
                  retries: 8,
              }
            : this.retryOpts();
    }
    buildOriginalMd5Headers() {
        return d.A.buildHeadersForMd5(this._originalMd5);
    }
    supportsResume() {
        return this._libdiscoreEnabled || this.item.platform !== O.xz.REACT_NATIVE;
    }
    async uploadFileToCloud() {
        let e, t;
        if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
        return (
            v.log(
                `Uploading ${this.id}`,
                this.item.platform === O.xz.REACT_NATIVE
                    ? `filename=${this.item.filename}, uri=${this.item.uri}`
                    : `filename=${this.item.file.name}`,
            ),
            this.item.platform === O.xz.REACT_NATIVE
                ? (t =
                      null != (e = { type: this.item.mimeType, uri: this.item.uri, name: this.item.filename }).type &&
                      "application/json" !== e.type
                          ? e.type
                          : "application/octet-stream")
                : ((e = this.item.file), (t = "application/octet-stream")),
            (0, L.gd)(this.item) &&
                ((this._uploadHttpClient = new L.gp()),
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
                200 === e.status || 201 === e.status ? this.currentSize : M.rejectionHandler("status_check")(e),
            )
            .catch((e) => {
                if (e instanceof o.oh && 308 === e.status) {
                    let t = this.parseRangeHeader(e.headers.range ?? "");
                    return null != t ? t[1] + 1 : 0;
                }
                return M.rejectionHandler("status_check")(e);
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
        e.onRequestProgress = s().throttle(this.createResumeAwareProgressFn(t), 50);
        let n = await this._uploadHttpClient
            .doUpload(e, { fileByteRange: { start: t } })
            .catch(M.rejectionHandler("upload"));
        if (200 !== n.status && 201 !== n.status) throw new M("upload", { response: n });
        return n;
    }
    async uploadFileWithResumption(e, t, n) {
        let { timeout: i, backoff: r, retries: a } = this.retryOpts(),
            l = {
                url: e,
                body: t,
                headers: { "Content-Type": n },
                signal: this._abortController.signal,
                onRequestProgress: s().throttle(this.createResumeAwareProgressFn(0), 50),
                retries: 0,
                rejectWithError: !0,
                timeout: i,
            },
            o = 0;
        for (; this.uploadAttempts <= a && !this._aborted; ) {
            this.uploadAttempts++, (this.uploadAnalytics.numUploadAttempts = this.uploadAttempts);
            try {
                let e = this.responseUrl;
                if ((await this.ensureFreshResponseUrl(), (l.url = this.responseUrl), e !== this.responseUrl))
                    (o = 0), (this.loaded = 0);
                else if (this.uploadAttempts > 1) {
                    let e = await this.trackTime(
                        "resumptionCheckTimeMs",
                        async () => await this.getResumePosition(this.responseUrl),
                    );
                    (this.uploadAnalytics.uploadResumptionPosition = e),
                        (o = this.supportsResume() ? e : 0),
                        (this.loaded = o);
                }
                return await this.startOrResumeUpload(l, o);
            } catch (e) {
                if (e instanceof M && e.canRetry()) {
                    v.warn(`Error uploading ${this.id}: ${e.message}, attempting resumption`),
                        (this.uploadAnalytics.uploadResumptionReason = e.messageShort),
                        await S.A.awaitOnline();
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
        let e = !1;
        if (
            this.allowOptimization &&
            this.item.platform === O.xz.WEB &&
            !0 !== this.item.heicConversionEvaluated &&
            null != this.item.file &&
            (0, y.E5)(this.item.file)
        ) {
            let t = A.HeicUploadConversionExperiment.getConfig({ location: "CloudUpload.tryConvertHeicToJpeg" });
            if (t.enabled) {
                let n = this.item.file,
                    i = await w.tryConvertHeicToJpeg(
                        this.item.file,
                        () => this._aborted,
                        this.id,
                        t.quality,
                        t.maxFileSizeBytes,
                    );
                null != i &&
                    ((e = !0),
                    null != i.convertedFile &&
                        (null == this._originalMd5 &&
                            null != n &&
                            (this._originalMd5 = await _.default.fromBlob(n).catch(() => null)),
                        (this.item.file = i.convertedFile),
                        (this.currentSize = i.convertedFile.size),
                        this.setFilename(i.convertedFile.name),
                        null != n && (null == this.mimeType || "" === this.mimeType) && (this.mimeType = (0, y.II)(n))),
                    null != i.convertedMimeType && (this.uploadAnalytics.convertedMimeType = i.convertedMimeType),
                    null != i.conversionFailureReason &&
                        (this.uploadAnalytics.conversionFailureReason = i.conversionFailureReason),
                    (this.uploadAnalytics.timing.compressTimeMs = i.compressTimeMs));
            }
        }
        if (this.isCancelled()) return void this.handleComplete(this.id);
        if (
            this.allowOptimization &&
            this.item.platform === O.xz.WEB &&
            !e &&
            !0 !== this.item.heicConversionEvaluated
        ) {
            let e = await w.tryConvertToWebP(this.item.file, () => this._aborted, this.id);
            null != e &&
                (null != e.convertedFile &&
                    ((this.item.file = e.convertedFile), (this.currentSize = e.convertedFile.size)),
                null != e.convertedMimeType && (this.uploadAnalytics.convertedMimeType = e.convertedMimeType),
                null != e.hashTimeMs && (this.uploadAnalytics.timing.hashTimeMs = e.hashTimeMs),
                null != e.conversionFailureReason &&
                    (this.uploadAnalytics.conversionFailureReason = e.conversionFailureReason),
                (this.uploadAnalytics.timing.compressTimeMs = e.compressTimeMs));
        }
        let t = await i.getUploadPayload(this),
            n = (0, R.B)(this.item.target);
        if (null == t.filename || "" === t.filename) {
            v.error("File does not have a filename.", JSON.stringify(t)), this.handleError(D.t02.INVALID_FILE_ASSET);
            return;
        }
        if (0 === this.currentSize && null != this.item.file)
            try {
                let e = await (0, E._)(this.item.file);
                e > 0 && (this.currentSize = e);
            } catch (e) {
                v.warn("Failed to detect file size, proceeding with original", {
                    filename: t.filename,
                    error: e instanceof Error ? e.message : String(e),
                });
            }
        if (0 === this.currentSize) return void this.handleError(D.t02.ENTITY_EMPTY);
        let r = (0, I.R8)({ location: "CloudUpload.upload.postCompressionCheck" }),
            a = (0, I.Jy)(r, n.getMaxFileSize(this.channelId));
        if ((this.currentSize ?? 0) > a) return void this.handleError(D.t02.ENTITY_TOO_LARGE);
        if (u.Ay.get("upload_fail_50") && 0.5 > Math.random())
            return void setTimeout(() => {
                this.handleError(500);
            }, 1e3);
        try {
            v.log(`Requesting upload url for ${this.id}`);
            let e = await this.trackTime("getUploadUrlTimeMs", async () => {
                let e = n.getCreateAttachmentURL(this.channelId);
                return await o.Bo.post({
                    url: e,
                    body: { files: [t] },
                    headers: this.buildOriginalMd5Headers(),
                    ...this.createAttachmentUrlRetryOpts(),
                    rejectWithError: !1,
                });
            });
            this.setResponseUrl(e.body.attachments[0].upload_url),
                this.setUploadedFilename(e.body.attachments[0].upload_filename);
        } catch (t) {
            let e = t?.body?.code ?? t.status;
            e !== D.t02.ENTITY_TOO_LARGE &&
                (v.error(`Requesting upload url failed with code ${e ?? JSON.stringify(t.body)} for ${this.id}`),
                N.A.captureException(t)),
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
        if (!(0, R.B)(this.item.target).shouldReactNativeCompressUploads)
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
            ((0, O.Sm)(e.file) &&
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
        let a = e.fileSize ?? (await (0, C.dm)(t)).size;
        if (((this.postCompressionSize = a), (this.currentSize = a), null == a))
            throw (v.error(`Size missing from file data for ${this.id}`), Error("Size missing from file data"));
        return (
            v.log(
                `Completed compression and conversion. Output size=${a} bytes; filename=${n}; uri=${t}; originalMimeType=${this.mimeType}; mimeType=${r} for ${this.id}`,
            ),
            (this.item = { ...this.item, uri: t, filename: n, mimeType: r }),
            (this.reactNativeFilePrepped = !0),
            this
        );
    }
    static async tryConvertToWebP(e, t, i) {
        let r,
            a,
            s = (function (e) {
                let { location: t } = e;
                return h.getConfig({ location: t });
            })({ location: "CloudUpload.maybeConvertToWebP" });
        if (!s.enabled) return v.warn(`webp conversion skipped for ${i}: not enabled`), null;
        if (null == e) return v.warn(`webp conversion skipped for ${i}: no file`), null;
        if (null != s.maxFileSizeBytes && e.size > s.maxFileSizeBytes)
            return v.warn(`webp conversion skipped for ${i}: too big`), null;
        if (t()) return null;
        let l = performance.now(),
            o = { compressTimeMs: 0 };
        try {
            let s = await Promise.all([n.e("896904"), n.e("787096")]).then(n.bind(n, 989707));
            if (((a = s.ConversionFailureReason), (r = await s.maybeConvertToWebP(e)), t())) return null;
            if (r.success && null != r.convertedBlob)
                v.log(
                    `webp conversion worked for ${i}: ${r.sizeBefore} -> ${r.sizeAfter} bytes (${r.compressionRatio.toFixed(2)}x)`,
                ),
                    (o.convertedFile = new File([r.convertedBlob], e.name, {
                        type: "image/webp",
                        lastModified: e.lastModified,
                    })),
                    (o.convertedMimeType = "image/webp"),
                    (o.hashTimeMs = r.hashTimeMs ?? void 0);
            else {
                let e = r.reason ?? a.UNKNOWN_ERROR;
                v.log(`webp conversion skipped for ${i}: ${e}`), (o.conversionFailureReason = e);
            }
        } catch (e) {
            v.warn(`webp conversion failed for ${i}:`, e),
                (o.conversionFailureReason = a?.UNKNOWN_ERROR ?? "unknown_error");
        }
        let d = Math.round(performance.now() - l);
        return (o.compressTimeMs = r?.compressTimeMs ?? d), o;
    }
    static async tryConvertHeicToJpeg(e, t, i, r, a) {
        if (null == e || t()) return null;
        try {
            let { maybeConvertHeicToJpeg: s, HeicConversionFailureReason: l } = await n
                    .e("422405")
                    .then(n.bind(n, 158948)),
                o = await s(e, r, a);
            if (t() || null == o) return null;
            if (o.success && null != o.convertedBlob)
                return (
                    v.log(`heic conversion worked for ${i}: ${o.sizeBefore} -> ${o.sizeAfter} bytes`),
                    {
                        convertedFile: new File([o.convertedBlob], (0, y.DP)(e.name), {
                            type: "image/jpeg",
                            lastModified: e.lastModified,
                        }),
                        convertedMimeType: "image/jpeg",
                        conversionFailureReason: null,
                        compressTimeMs: o.compressTimeMs,
                    }
                );
            return (
                v.log(`heic conversion skipped for ${i}: ${o.reason}`),
                {
                    convertedFile: null,
                    convertedMimeType: null,
                    conversionFailureReason: o.reason ?? l.UNKNOWN_ERROR,
                    compressTimeMs: o.compressTimeMs,
                }
            );
        } catch (e) {
            return (
                v.warn(`heic conversion threw for ${i}:`, e),
                {
                    convertedFile: null,
                    convertedMimeType: null,
                    conversionFailureReason: "unknown_error",
                    compressTimeMs: 0,
                }
            );
        }
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
            (this.uploadAnalytics = new U()),
            (this.uploadAttempts = 0),
            (this._aborted = !1),
            (this._abortController = new AbortController()),
            super.resetState()
        );
    }
    async delete() {
        if (null == this.uploadedFilename) return;
        let e = (0, R.B)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
        try {
            await o.Bo.del(e);
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
        let e;
        if (!w.isResponseUrlStale(this.responseUrlSetAt)) return;
        let t = await i.getUploadPayload(this),
            n = (0, R.B)(this.item.target).getCreateAttachmentURL(this.channelId);
        try {
            e = await o.Bo.post({
                url: n,
                body: { files: [t] },
                headers: this.buildOriginalMd5Headers(),
                ...this.createAttachmentUrlRetryOpts(),
                rejectWithError: !0,
            });
        } catch (e) {
            if (e instanceof o.oh) throw new M("upload", { response: e });
            throw e;
        }
        if (e.body?.attachments?.[0] == null) throw new M("upload", { response: e });
        this.setResponseUrl(e.body.attachments[0].upload_url),
            this.setUploadedFilename(e.body.attachments[0].upload_filename);
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
        T.default.track(D.HAw.ATTACHMENT_UPLOAD_STARTED, {
            file_size: this.currentSize,
            mime_type: this.mimeType ?? "unknown",
            video_upload_quality: f.Ay.videoUploadQuality,
            data_saving_mode: f.Ay.dataSavingMode,
            low_quality_image_mode: f.Ay.dataSavingMode,
            channel_id: this.channelId,
            connection_type: p.A.getType(),
            effective_connection_speed: p.A.getEffectiveConnectionSpeed(),
            service_provider: p.A.getServiceProvider(),
        });
    }
    trackUploadFinished(e) {
        let t = null != this.startTime ? performance.now() - this.startTime : -1;
        T.default.track(D.HAw.ATTACHMENT_UPLOAD_FINISHED, {
            duration_ms: t,
            file_size: this.currentSize,
            pre_compression_file_size: this.preCompressionSize,
            final_state: e,
            mime_type: this.mimeType ?? "unknown",
            num_upload_attempts: this.uploadAnalytics.numUploadAttempts ?? 1,
            error_code: this.error,
            video_upload_quality: f.Ay.videoUploadQuality,
            data_saving_mode: f.Ay.dataSavingMode,
            low_quality_image_mode: f.Ay.dataSavingMode,
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
