n.d(t, {
    m: () => C,
    n: () => P
}),
    n(388685),
    n(415506),
    n(35282),
    n(704826),
    n(49124);
var r = n(392711),
    i = n.n(r),
    a = n(261470),
    o = n(544891),
    s = n(710845),
    l = n(432877),
    c = n(549464),
    u = n(609763),
    d = n(740492),
    f = n(866960),
    _ = n(626135),
    p = n(510990),
    h = n(70956),
    m = n(960048),
    g = n(861990),
    E = n(476326),
    b = n(983544),
    y = n(981631);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = new s.Z('CloudUpload.tsx'),
    A = n(224497).Z,
    N = 'Content-MD5';
var C = (function (e) {
    return (e.NOT_STARTED = 'NOT_STARTED'), (e.STARTED = 'STARTED'), (e.UPLOADING = 'UPLOADING'), (e.ERROR = 'ERROR'), (e.COMPLETED = 'COMPLETED'), (e.CANCELED = 'CANCELED'), e;
})({});
class R {
    constructor() {
        O(this, 'numChunks', void 0), O(this, 'totalRequestCount', void 0), O(this, 'timing', {}), O(this, 'compressAndExtractDisabled', void 0), O(this, 'fileAlreadyPrepped', void 0), O(this, 'imageCompressionQuality', void 0), O(this, 'videoCompressionQuality', void 0), O(this, 'convertedMimeType', void 0), O(this, 'sourceMediaWidth', void 0), O(this, 'sourceMediaHeight', void 0), O(this, 'sourceMediaFormat', void 0), O(this, 'sourceVideoBitrate', void 0), O(this, 'sourceVideoFramerate', void 0), O(this, 'videoDurationMs', void 0), O(this, 'sourceVideoProfile', void 0), O(this, 'sourceVideoLevel', void 0), O(this, 'targetVideoWidth', void 0), O(this, 'targetVideoHeight', void 0), O(this, 'targetVideoBitrate', void 0), O(this, 'targetVideoCodec', void 0), O(this, 'targetVideoFramerate', void 0), O(this, 'targetVideoIsHdr', void 0), O(this, 'hevcIsSupported', void 0), O(this, 'progressUpdateGranularity', void 0), O(this, 'validUploadHash', void 0);
    }
}
class P extends E.ZP {
    static fromJson(e) {
        let { item: t, channelId: n, showLargeMessageDialog: r, reactNativeFileIndex: i } = e,
            a = new P(t, n, r, i);
        return (
            'COMPLETED' !== a.status && (a.status = 'NOT_STARTED'),
            Object.entries(e).forEach((e) => {
                let [t, n] = e;
                t.startsWith('_') || (a[t] = n);
            }),
            a
        );
    }
    retryOpts() {
        return this.item.platform === E.ow.REACT_NATIVE
            ? {
                  timeout: +h.Z.Millis.HOUR,
                  backoff: new a.Z(0.5 * h.Z.Millis.SECOND, 30 * h.Z.Millis.MINUTE),
                  retries: 12
              }
            : {
                  timeout: +h.Z.Millis.HOUR,
                  retries: 12,
                  backoff: new a.Z()
              };
    }
    createAttachmentUrlRetryOpts() {
        return this.item.platform === E.ow.REACT_NATIVE
            ? {
                  timeout: {
                      response: 30 * h.Z.Millis.SECOND,
                      deadline: 30 * h.Z.Millis.MINUTE
                  },
                  backoff: new a.Z(0.5 * h.Z.Millis.SECOND, 60 * h.Z.Millis.SECOND),
                  retries: 8
              }
            : this.retryOpts();
    }
    async uploadFileToCloudAsChunks(e) {
        if (null == this.responseUrl || '' === this.responseUrl) throw Error('_uploadFileToCloudAsChunks - responseUrl is not set');
        let { contentType: t, fileSize: n, bufferedFileData: r } = await this.prepareChunkUploadItem(),
            i = Math.ceil(n / e);
        (this.uploadAnalytics.numChunks = i), (this.uploadAnalytics.totalRequestCount = 0);
        for (let a = 0; a < i; a++) {
            T.info(
                'Uploading chunk '
                    .concat(a + 1, ' of ')
                    .concat(i, ' for file id ')
                    .concat(this.id)
            );
            let o = a * e,
                s = Math.min(o + e, n),
                l = await this.getChunk(o, s, r);
            try {
                await this.uploadChunk({
                    chunk: l,
                    start: o,
                    end: s,
                    totalSize: n,
                    sessionUrl: this.responseUrl,
                    contentType: t
                });
            } catch (e) {
                throw (
                    (T.error(
                        'Error uploading chunk '
                            .concat(a + 1, ' for file id ')
                            .concat(this.id, ': ')
                            .concat(e)
                    ),
                    e)
                );
            }
        }
        T.log('Upload complete for file id '.concat(this.id));
    }
    async prepareChunkUploadItem() {
        let e, t, n;
        if (this.item.platform === E.ow.REACT_NATIVE) {
            let r = this.item;
            if (((e = null != r.mimeType && '' !== r.mimeType ? r.mimeType : 'application/octet-stream'), null == r.size || 0 === r.size || isNaN(r.size)))
                try {
                    t = await (0, g.Fm)(r.uri);
                } catch (e) {
                    T.warn('Failed to peek content length for file id '.concat(this.id, ', reading whole file instead: ').concat(e)), (t = (n = await (0, g.Lc)(r.uri)).size);
                }
            else t = r.size;
        } else (e = 'application/octet-stream'), (t = this.item.file.size);
        return {
            contentType: e,
            fileSize: t,
            bufferedFileData: n
        };
    }
    async getChunk(e, t, n) {
        return this.item.platform !== E.ow.REACT_NATIVE ? this.item.file.slice(e, t) : null != n ? n.slice(e, t) : await (0, g.U4)(this.item.uri, e, t);
    }
    async uploadChunk(e) {
        let t = {
                'Content-Type': e.contentType,
                'Content-Range': 'bytes '
                    .concat(e.start, '-')
                    .concat(e.end - 1, '/')
                    .concat(e.totalSize)
            },
            n = 3;
        for (let a = 1; a <= n; a++) {
            var r;
            (this.uploadAnalytics.totalRequestCount = (null != (r = this.uploadAnalytics.totalRequestCount) ? r : 0) + 1),
                T.log(
                    'Attempt '
                        .concat(a, ' for file id ')
                        .concat(this.id, ' : Uploading chunk ')
                        .concat(e.start, '-')
                        .concat(e.end - 1, ' of ')
                        .concat(e.totalSize, ' bytes')
                );
            let n = i().throttle((t) => {
                let n = e.start + t.loaded;
                this.emit('progress', n, e.totalSize, n - this.loaded), (this.loaded = n);
            }, 50);
            try {
                if (
                    (
                        await o.tn.put(
                            S(
                                v(
                                    {
                                        url: e.sessionUrl,
                                        body: e.chunk,
                                        headers: t,
                                        signal: this._abortController.signal,
                                        onRequestProgress: n
                                    },
                                    this.retryOpts()
                                ),
                                { rejectWithError: !1 }
                            )
                        )
                    ).ok
                )
                    return;
            } catch (t) {
                if (!this.RESUME_INCOMPLETE_CODES.includes(t.status)) throw t;
                if (this.isUnsuccessfulChunkUpload(t, e.end - 1)) {
                    T.error('Incomplete chunk upload for file id '.concat(this.id, ': ').concat(t.status));
                    continue;
                }
                return;
            }
        }
        throw Error('Failed to upload chunk');
    }
    isUnsuccessfulChunkUpload(e, t) {
        if (null == e.headers.range || '' === e.headers.range) return !0;
        let n = e.headers.range.match(/bytes=(\d+)-(\d+)/);
        return null !== n && parseInt(n[2], 10) !== t;
    }
    uploadFileToCloud(e) {
        let t, n;
        if (null == this.responseUrl) throw Error('_uploadFileToCloud - responseUrl is not set');
        T.log('Uploading '.concat(this.id)),
            this.item.platform === E.ow.REACT_NATIVE
                ? (n =
                      null !=
                          (t = {
                              type: this.item.mimeType,
                              uri: this.item.uri,
                              name: this.item.filename
                          }).type && 'application/json' !== t.type
                          ? t.type
                          : 'application/octet-stream')
                : ((t = this.item.file), (n = 'application/octet-stream'));
        let r = i().throttle((e) => {
                this.emit('progress', e.loaded, e.total, e.loaded - this.loaded), (this.loaded = e.loaded);
            }, 50),
            a = { 'Content-Type': n };
        return (
            void 0 !== e.md5Hash && (a[N] = e.md5Hash),
            o.tn.put(
                S(
                    v(
                        {
                            url: this.responseUrl,
                            body: t,
                            headers: a,
                            signal: this._abortController.signal,
                            onRequestProgress: r
                        },
                        this.retryOpts()
                    ),
                    { rejectWithError: !1 }
                )
            )
        );
    }
    async getSize() {
        var e;
        return null != (e = this.currentSize) ? e : 0;
    }
    async getHash() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0], '';
    }
    getEtagFromResponse(e) {
        var t;
        let n = null != (t = e.headers.etag) ? t : null;
        return null != n ? n.replace(/"/g, '') : null;
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
        if ('COMPLETED' === this.status) return;
        if ((this.setStatus('STARTED'), (this.startTime = performance.now()), this.trackUploadStart(), 'CANCELED' === this.status)) return void this.handleComplete(this.id);
        let i = await A.getUploadPayload(this),
            a = (0, b.F)(this.item.target);
        if (null == i.filename || '' === i.filename || 0 === this.currentSize) {
            T.error('File does not have a filename or size is 0.', JSON.stringify(i)), this.handleError(y.evJ.INVALID_FILE_ASSET);
            return;
        }
        if ((null != (e = this.currentSize) ? e : 0) > a.getMaxFileSize(this.channelId)) return void this.handleError(y.evJ.ENTITY_TOO_LARGE);
        if (l.ZP.get('upload_fail_50') && 0.5 > Math.random())
            return void setTimeout(() => {
                this.handleError(500);
            }, 1000);
        let s = u.Z.getCurrentConfig({ location: 'CloudUpload' }, { autoTrackExposure: !0 }),
            d = null;
        s.enabled;
        try {
            T.log('Requesting upload url for '.concat(this.id));
            let e = await this.trackTime(
                'getUploadUrlTimeMs',
                async () =>
                    await o.tn.post(
                        S(
                            v(
                                {
                                    url: a.getCreateAttachmentURL(this.channelId),
                                    body: { files: [i] }
                                },
                                this.createAttachmentUrlRetryOpts()
                            ),
                            { rejectWithError: !1 }
                        )
                    )
            );
            this.setResponseUrl(e.body.attachments[0].upload_url), this.setUploadedFilename(e.body.attachments[0].upload_filename);
        } catch (r) {
            let e = null != (n = null == r || null == (t = r.body) ? void 0 : t.code) ? n : r.status;
            e !== y.evJ.ENTITY_TOO_LARGE && (T.error('Requesting upload url failed with code '.concat(null != e ? e : JSON.stringify(r.body), ' for ').concat(this.id)), m.Z.captureException(r)), this.handleError(e);
            return;
        }
        if (null != d) {
            let e = await d;
            null != e && (this.contentHash = e);
        }
        try {
            let e,
                t = c.Z.getCurrentConfig({ location: 'CloudUpload' }, { autoTrackExposure: !0 });
            if (t.enabled && t.chunkSize > 0) e = await this.trackTime('uploadTimeMs', async () => await this.uploadFileToCloudAsChunks(t.chunkSize));
            else {
                let t = { md5Hash: this.contentHash };
                if (((e = await this.trackTime('uploadTimeMs', async () => await this.uploadFileToCloud(t))), s.enabled)) {
                    let t = !1,
                        n = this.getEtagFromResponse(e);
                    if ((null != n && ((this.etag = n), (t = n === this.contentHash)), (this.uploadAnalytics.validUploadHash = t), !t && s.enforced)) {
                        let e = 'File '
                            .concat(null != (r = this.filename) ? r : this.id, ' received incorrect checksum after upload: got ')
                            .concat(this.etag, ', expected ')
                            .concat(this.contentHash);
                        T.error(e), m.Z.captureMessage(e), this.handleError(y.evJ.INVALID_FILE_ASSET);
                        return;
                    }
                }
            }
            this.trackUploadFinished('COMPLETED'), this.handleComplete(e);
        } catch (e) {
            'CANCELED' === this.status ? this.handleComplete(e) : (T.info('Error: status '.concat(e.status, ' for ').concat(this.id)), this.handleError(e));
        }
    }
    async reactNativeCompressAndExtractData() {
        var e, t;
        if (!(0, b.F)(this.item.target).shouldReactNativeCompressUploads) return (this.uploadAnalytics.compressAndExtractDisabled = !0), T.log('reactNativeCompressAndExtractData() disabled by upload target'), this;
        if (!0 === this.reactNativeFilePrepped) return (this.uploadAnalytics.fileAlreadyPrepped = !0), T.log('reactNativeCompressAndExtractData() file already prepped - '.concat(this.id)), this;
        T.log('Starting compression/conversion for '.concat(this.id));
        let n = await this.trackTime('compressTimeMs', async () => {
            var e;
            return await (0, p.J)(this, null != (e = this.reactNativeFileIndex) ? e : 0);
        });
        if (null == n || null == n.file) return T.error('Failed to get compressed file for '.concat(this.id)), this;
        let r = n.uri,
            i = n.file.name;
        if (((0, E.rG)(n.file) && ((this.uploadAnalytics.imageCompressionQuality = n.file.imageCompressionQuality), (this.uploadAnalytics.videoCompressionQuality = n.file.videoCompressionQuality), n.file.isImage && ((this.uploadAnalytics.sourceMediaWidth = this.item.width), (this.uploadAnalytics.sourceMediaHeight = this.item.height)), void 0 !== n.file.videoMetadata && ((this.uploadAnalytics.sourceMediaWidth = n.file.videoMetadata.width), (this.uploadAnalytics.sourceMediaHeight = n.file.videoMetadata.height), (this.uploadAnalytics.sourceMediaFormat = n.file.videoMetadata.format), (this.uploadAnalytics.sourceVideoBitrate = n.file.videoMetadata.bitRate), (this.uploadAnalytics.sourceVideoFramerate = n.file.videoMetadata.frameRate), (this.uploadAnalytics.videoDurationMs = n.file.videoMetadata.durationMs), (this.uploadAnalytics.sourceVideoProfile = n.file.videoMetadata.sourceProfile), (this.uploadAnalytics.sourceVideoLevel = n.file.videoMetadata.sourceLevel)), void 0 !== n.file.encodingConfig && ((this.uploadAnalytics.targetVideoWidth = n.file.encodingConfig.targetWidth), (this.uploadAnalytics.targetVideoHeight = n.file.encodingConfig.targetHeight), (this.uploadAnalytics.targetVideoBitrate = n.file.encodingConfig.targetBitrate), (this.uploadAnalytics.targetVideoCodec = n.file.encodingConfig.useHEVC ? 'hvc1' : 'avc1'), (this.uploadAnalytics.targetVideoFramerate = n.file.encodingConfig.frameRate), (this.uploadAnalytics.targetVideoIsHdr = n.file.encodingConfig.createHDR), (this.uploadAnalytics.hevcIsSupported = n.file.encodingConfig.hevcIsSupported), (this.uploadAnalytics.progressUpdateGranularity = n.file.encodingConfig.progressUpdateGranularity))), (this.filename = i), null == i || null == r || null == n.file.type))
            throw (
                (T.error(
                    'Insufficient file data: '
                        .concat(
                            {
                                filename: i,
                                uri: r,
                                type: n.file.type
                            },
                            ' for '
                        )
                        .concat(this.id)
                ),
                Error(
                    'Insufficient file data: '.concat({
                        filename: i,
                        uri: r,
                        type: n.file.type
                    })
                ))
            );
        let a = null == (e = i.split('.').pop()) ? void 0 : e.toLowerCase(),
            o = 'jpg' === a || 'jpeg' === a ? 'image/jpeg' : n.file.type;
        this.uploadAnalytics.convertedMimeType = o;
        let s = null != (t = n.fileSize) ? t : (await (0, g.Lc)(r)).size;
        if (((this.postCompressionSize = s), (this.currentSize = s), null == s)) throw (T.error('Size missing from file data for '.concat(this.id)), Error('Size missing from file data'));
        T.log('Completed compression and conversion. Output size='.concat(s, ' bytes; filename=').concat(i, '; mimeType=').concat(o, ' for ').concat(this.id));
        let l = {
            uri: r,
            filename: i,
            mimeType: o
        };
        return (this.item = v({}, this.item, l)), (this.reactNativeFilePrepped = !0), this;
    }
    handleError(e) {
        this.setStatus('ERROR'), (this.error = e), this.trackUploadFinished('ERROR');
        try {
            this.emit('error', e);
        } catch (e) {}
        this.removeAllListeners();
    }
    handleComplete(e) {
        this.setStatus('COMPLETED'), T.log('Upload complete for '.concat(this.id)), this.emit('complete', e), this.removeAllListeners();
    }
    cancel() {
        T.log('Cancelled called for '.concat(this.id)), this._abortController.abort(), this.trackUploadFinished('CANCELED'), 'COMPLETED' === this.status && this.delete(), this.setStatus('CANCELED'), this.emit('complete'), this.removeAllListeners();
    }
    resetState() {
        return (this.status = 'NOT_STARTED'), (this.uploadedFilename = void 0), (this.responseUrl = void 0), (this.error = void 0), (this.startTime = void 0), (this.uploadAnalytics = new R()), (this._abortController = new AbortController()), super.resetState();
    }
    async delete() {
        if (null == this.uploadedFilename) return;
        let e = (0, b.F)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
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
        _.default.track(y.rMx.ATTACHMENT_UPLOAD_STARTED, {
            file_size: this.currentSize,
            mime_type: null != (e = this.mimeType) ? e : 'unknown',
            video_upload_quality: d.ZP.videoUploadQuality,
            data_saving_mode: d.ZP.dataSavingMode,
            low_quality_image_mode: d.ZP.dataSavingMode,
            channel_id: this.channelId,
            connection_type: f.Z.getType(),
            effective_connection_speed: f.Z.getEffectiveConnectionSpeed(),
            service_provider: f.Z.getServiceProvider()
        });
    }
    trackUploadFinished(e) {
        var t, n, r, i, a;
        let o = null != this.startTime ? performance.now() - this.startTime : -1;
        _.default.track(y.rMx.ATTACHMENT_UPLOAD_FINISHED, {
            duration_ms: o,
            file_size: this.currentSize,
            pre_compression_file_size: this.preCompressionSize,
            final_state: e,
            mime_type: null != (t = this.mimeType) ? t : 'unknown',
            num_chunks: this.uploadAnalytics.numChunks,
            num_upload_attempts: null != (n = this.uploadAnalytics.totalRequestCount) ? n : 1,
            error_code: this.error,
            video_upload_quality: d.ZP.videoUploadQuality,
            data_saving_mode: d.ZP.dataSavingMode,
            low_quality_image_mode: d.ZP.dataSavingMode,
            compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
            get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
            upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
            converted_mime_type: null != (r = this.uploadAnalytics.convertedMimeType) ? r : 'unknown',
            image_compression_quality: null != (i = this.uploadAnalytics.imageCompressionQuality) ? i : 0,
            video_compression_quality: null != (a = this.uploadAnalytics.videoCompressionQuality) ? a : 'unknown',
            was_converted: this.mimeType !== this.uploadAnalytics.convertedMimeType,
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
            connection_type: f.Z.getType(),
            effective_connection_speed: f.Z.getEffectiveConnectionSpeed(),
            service_provider: f.Z.getServiceProvider()
        });
    }
    constructor(e, t, n, r) {
        var i, a, o, s;
        super(e, n), O(this, 'RESUME_INCOMPLETE_CODES', [308]), O(this, 'status', 'NOT_STARTED'), O(this, 'channelId', void 0), O(this, 'responseUrl', void 0), O(this, 'currentSize', void 0), O(this, 'preCompressionSize', void 0), O(this, 'postCompressionSize', void 0), O(this, 'loaded', 0), O(this, 'reactNativeFileIndex', void 0), O(this, 'error', void 0), O(this, 'reactNativeFilePrepped', !1), O(this, 'startTime', void 0), O(this, 'uploadAnalytics', new R()), O(this, 'contentHash', void 0), O(this, 'etag', void 0), O(this, '_abortController', void 0), O(this, '_xhr', void 0), O(this, '_aborted', !1), (this.channelId = t), (this.preCompressionSize = null != (o = null == (i = e.file) ? void 0 : i.size) ? o : 0), (this.currentSize = null != (s = null == (a = e.file) ? void 0 : a.size) ? s : 0), (this.reactNativeFileIndex = r), (this._abortController = new AbortController());
    }
}
