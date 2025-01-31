n.d(t, {
    m: () => S,
    n: () => N
}),
    n(47120),
    n(411104);
var i = n(392711),
    r = n.n(i),
    a = n(261470),
    s = n(544891),
    o = n(710845),
    l = n(432877),
    u = n(549464),
    c = n(671100),
    d = n(740492),
    f = n(866960),
    _ = n(626135),
    p = n(510990),
    h = n(70956),
    m = n(960048),
    g = n(861990),
    E = n(476326),
    v = n(983544),
    y = n(981631);
function I(e, t, n) {
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
let b = new o.Z('CloudUpload.tsx'),
    T = n(224497).Z;
var S = (function (e) {
    return (e.NOT_STARTED = 'NOT_STARTED'), (e.STARTED = 'STARTED'), (e.UPLOADING = 'UPLOADING'), (e.ERROR = 'ERROR'), (e.COMPLETED = 'COMPLETED'), (e.CANCELED = 'CANCELED'), e;
})({});
class A {
    constructor() {
        I(this, 'numChunks', void 0), I(this, 'totalRequestCount', void 0), I(this, 'timing', {}), I(this, 'compressAndExtractDisabled', void 0), I(this, 'fileAlreadyPrepped', void 0), I(this, 'imageCompressionQuality', void 0), I(this, 'videoCompressionQuality', void 0), I(this, 'convertedMimeType', void 0), I(this, 'sourceMediaWidth', void 0), I(this, 'sourceMediaHeight', void 0), I(this, 'sourceMediaFormat', void 0), I(this, 'sourceVideoBitrate', void 0), I(this, 'sourceVideoFramerate', void 0), I(this, 'videoDurationMs', void 0), I(this, 'sourceVideoProfile', void 0), I(this, 'sourceVideoLevel', void 0), I(this, 'targetVideoWidth', void 0), I(this, 'targetVideoHeight', void 0), I(this, 'targetVideoBitrate', void 0), I(this, 'targetVideoCodec', void 0), I(this, 'targetVideoFramerate', void 0), I(this, 'targetVideoIsHdr', void 0), I(this, 'hevcIsSupported', void 0);
    }
}
class N extends E.ZP {
    static fromJson(e) {
        let { item: t, channelId: n, showLargeMessageDialog: i, reactNativeFileIndex: r } = e,
            a = new N(t, n, i, r);
        return (
            'COMPLETED' !== a.status && (a.status = 'NOT_STARTED'),
            Object.entries(e).forEach((e) => {
                let [t, n] = e;
                !t.startsWith('_') && (a[t] = n);
            }),
            a
        );
    }
    retryOpts() {
        return this.item.platform === E.ow.REACT_NATIVE
            ? {
                  timeout: 1 * h.Z.Millis.HOUR,
                  backoff: new a.Z(0.5 * h.Z.Millis.SECOND, 30 * h.Z.Millis.MINUTE),
                  retries: 12
              }
            : {
                  timeout: 1 * h.Z.Millis.HOUR,
                  retries: 12,
                  backoff: new a.Z()
              };
    }
    createAttachmentUrlRetryOpts() {
        return this.item.platform === E.ow.REACT_NATIVE && c.l.getCurrentConfig({ location: 'CloudUpload' }).enabled
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
        let { contentType: t, fileSize: n, bufferedFileData: i } = await this.prepareChunkUploadItem(),
            r = Math.ceil(n / e);
        (this.uploadAnalytics.numChunks = r), (this.uploadAnalytics.totalRequestCount = 0);
        for (let a = 0; a < r; a++) {
            b.info(
                'Uploading chunk '
                    .concat(a + 1, ' of ')
                    .concat(r, ' for file id ')
                    .concat(this.id)
            );
            let s = a * e,
                o = Math.min(s + e, n),
                l = await this.getChunk(s, o, i);
            try {
                await this.uploadChunk({
                    chunk: l,
                    start: s,
                    end: o,
                    totalSize: n,
                    sessionUrl: this.responseUrl,
                    contentType: t
                });
            } catch (e) {
                throw (
                    (b.error(
                        'Error uploading chunk '
                            .concat(a + 1, ' for file id ')
                            .concat(this.id, ': ')
                            .concat(e)
                    ),
                    e)
                );
            }
        }
        b.log('Upload complete for file id '.concat(this.id));
    }
    async prepareChunkUploadItem() {
        let e, t, n;
        if (this.item.platform === E.ow.REACT_NATIVE) {
            let i = this.item;
            if (((e = null != i.mimeType && '' !== i.mimeType ? i.mimeType : 'application/octet-stream'), null == i.size || 0 === i.size || isNaN(i.size)))
                try {
                    t = await (0, g.Fm)(i.uri);
                } catch (e) {
                    b.warn('Failed to peek content length for file id '.concat(this.id, ', reading whole file instead: ').concat(e)), (t = (n = await (0, g.Lc)(i.uri)).size);
                }
            else t = i.size;
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
            var i;
            (this.uploadAnalytics.totalRequestCount = (null !== (i = this.uploadAnalytics.totalRequestCount) && void 0 !== i ? i : 0) + 1),
                b.log(
                    'Attempt '
                        .concat(a, ' for file id ')
                        .concat(this.id, ' : Uploading chunk ')
                        .concat(e.start, '-')
                        .concat(e.end - 1, ' of ')
                        .concat(e.totalSize, ' bytes')
                );
            let n = r().throttle((t) => {
                let n = e.start + t.loaded;
                this.emit('progress', n, e.totalSize, n - this.loaded), (this.loaded = n);
            }, 50);
            try {
                if (
                    (
                        await s.tn.put({
                            url: e.sessionUrl,
                            body: e.chunk,
                            headers: t,
                            signal: this._abortController.signal,
                            onRequestProgress: n,
                            ...this.retryOpts(),
                            rejectWithError: !1
                        })
                    ).ok
                )
                    return;
            } catch (t) {
                if (!this.RESUME_INCOMPLETE_CODES.includes(t.status)) throw t;
                if (this.isUnsuccessfulChunkUpload(t, e.end - 1)) {
                    b.error('Incomplete chunk upload for file id '.concat(this.id, ': ').concat(t.status));
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
    uploadFileToCloud() {
        let e, t;
        if (null == this.responseUrl) throw Error('_uploadFileToCloud - responseUrl is not set');
        b.log('Uploading '.concat(this.id)),
            this.item.platform === E.ow.REACT_NATIVE
                ? (t =
                      null !=
                          (e = {
                              type: this.item.mimeType,
                              uri: this.item.uri,
                              name: this.item.filename
                          }).type && 'application/json' !== e.type
                          ? e.type
                          : 'application/octet-stream')
                : ((e = this.item.file), (t = 'application/octet-stream'));
        let n = r().throttle((e) => {
                this.emit('progress', e.loaded, e.total, e.loaded - this.loaded), (this.loaded = e.loaded);
            }, 50),
            i = { 'Content-Type': t };
        return s.tn.put({
            url: this.responseUrl,
            body: e,
            headers: i,
            signal: this._abortController.signal,
            onRequestProgress: n,
            ...this.retryOpts(),
            rejectWithError: !1
        });
    }
    async getSize() {
        var e;
        return null !== (e = this.currentSize) && void 0 !== e ? e : 0;
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
        var e, t, n;
        if ('COMPLETED' === this.status) return;
        if ((this.setStatus('STARTED'), (this.startTime = performance.now()), this.trackUploadStart(), 'CANCELED' === this.status)) {
            this.handleComplete(this.id);
            return;
        }
        let i = await T.getUploadPayload(this),
            r = (0, v.F)(this.item.target);
        if (null == i.filename || '' === i.filename || 0 === this.currentSize) {
            b.error('File does not have a filename or size is 0.', JSON.stringify(i)), this.handleError(y.evJ.INVALID_FILE_ASSET);
            return;
        }
        if ((null !== (e = this.currentSize) && void 0 !== e ? e : 0) > r.getMaxFileSize(this.channelId)) {
            this.handleError(y.evJ.ENTITY_TOO_LARGE);
            return;
        }
        if (l.ZP.get('upload_fail_50') && 0.5 > Math.random()) {
            setTimeout(() => {
                this.handleError(500);
            }, 1000);
            return;
        }
        try {
            b.log('Requesting upload url for '.concat(this.id));
            let e = await this.trackTime(
                'getUploadUrlTimeMs',
                async () =>
                    await s.tn.post({
                        url: r.getCreateAttachmentURL(this.channelId),
                        body: { files: [i] },
                        ...this.createAttachmentUrlRetryOpts(),
                        rejectWithError: !1
                    })
            );
            this.setResponseUrl(e.body.attachments[0].upload_url), this.setUploadedFilename(e.body.attachments[0].upload_filename);
        } catch (i) {
            let e = null !== (n = null == i ? void 0 : null === (t = i.body) || void 0 === t ? void 0 : t.code) && void 0 !== n ? n : i.status;
            e !== y.evJ.ENTITY_TOO_LARGE && (b.error('Requesting upload url failed with code '.concat(null != e ? e : JSON.stringify(i.body), ' for ').concat(this.id)), m.Z.captureException(i)), this.handleError(e);
            return;
        }
        try {
            let e;
            let t = u.Z.getCurrentConfig({ location: 'CloudUpload' }, { autoTrackExposure: !0 });
            (e = t.enabled && t.chunkSize > 0 ? await this.trackTime('uploadTimeMs', async () => await this.uploadFileToCloudAsChunks(t.chunkSize)) : await this.trackTime('uploadTimeMs', async () => await this.uploadFileToCloud())), this.trackUploadFinished('COMPLETED'), this.handleComplete(e);
        } catch (e) {
            'CANCELED' === this.status ? this.handleComplete(e) : (b.info('Error: status '.concat(e.status, ' for ').concat(this.id)), this.handleError(e));
        }
    }
    async reactNativeCompressAndExtractData() {
        var e;
        if (!(0, v.F)(this.item.target).shouldReactNativeCompressUploads) return (this.uploadAnalytics.compressAndExtractDisabled = !0), b.log('reactNativeCompressAndExtractData() disabled by upload target'), this;
        if (!0 === this.reactNativeFilePrepped) return (this.uploadAnalytics.fileAlreadyPrepped = !0), b.log('reactNativeCompressAndExtractData() file already prepped - '.concat(this.id)), this;
        b.log('Starting compression/conversion for '.concat(this.id));
        let t = await this.trackTime('compressTimeMs', async () => {
            var e;
            return await (0, p.J)(this, null !== (e = this.reactNativeFileIndex) && void 0 !== e ? e : 0);
        });
        if (null == t || null == t.file) return b.error('Failed to get compressed file for '.concat(this.id)), this;
        let n = t.uri,
            i = t.file.name,
            r = t.file.type;
        if (((0, E.rG)(t.file) && ((this.uploadAnalytics.imageCompressionQuality = t.file.imageCompressionQuality), (this.uploadAnalytics.videoCompressionQuality = t.file.videoCompressionQuality), (this.uploadAnalytics.convertedMimeType = t.file.type), void 0 !== t.file.videoMetadata && ((this.uploadAnalytics.sourceMediaWidth = t.file.videoMetadata.width), (this.uploadAnalytics.sourceMediaHeight = t.file.videoMetadata.height), (this.uploadAnalytics.sourceMediaFormat = t.file.videoMetadata.format), (this.uploadAnalytics.sourceVideoBitrate = t.file.videoMetadata.bitRate), (this.uploadAnalytics.sourceVideoFramerate = t.file.videoMetadata.frameRate), (this.uploadAnalytics.videoDurationMs = t.file.videoMetadata.durationMs), (this.uploadAnalytics.sourceVideoProfile = t.file.videoMetadata.sourceProfile), (this.uploadAnalytics.sourceVideoLevel = t.file.videoMetadata.sourceLevel)), void 0 !== t.file.encodingConfig && ((this.uploadAnalytics.targetVideoWidth = t.file.encodingConfig.targetWidth), (this.uploadAnalytics.targetVideoHeight = t.file.encodingConfig.targetHeight), (this.uploadAnalytics.targetVideoBitrate = t.file.encodingConfig.targetBitrate), (this.uploadAnalytics.targetVideoCodec = t.file.encodingConfig.useHEVC ? 'hvc1' : 'avc1'), (this.uploadAnalytics.targetVideoFramerate = t.file.encodingConfig.frameRate), (this.uploadAnalytics.targetVideoIsHdr = t.file.encodingConfig.createHDR), (this.uploadAnalytics.hevcIsSupported = t.file.encodingConfig.hevcIsSupported))), (this.filename = i), null == i || null == n || null == r))
            throw (
                (b.error(
                    'Insufficient file data: '
                        .concat(
                            {
                                filename: i,
                                uri: n,
                                mimeType: r
                            },
                            ' for '
                        )
                        .concat(this.id)
                ),
                Error(
                    'Insufficient file data: '.concat({
                        filename: i,
                        uri: n,
                        mimeType: r
                    })
                ))
            );
        let a = null !== (e = t.fileSize) && void 0 !== e ? e : (await (0, g.Lc)(n)).size;
        if (((this.postCompressionSize = a), (this.currentSize = a), null == a)) throw (b.error('Size missing from file data for '.concat(this.id)), Error('Size missing from file data'));
        b.log('Completed compression and conversion. Output size='.concat(a, ' bytes; filename=').concat(i, ' for ').concat(this.id));
        let s = {
            uri: n,
            filename: i,
            mimeType: r
        };
        return (
            (this.item = {
                ...this.item,
                ...s
            }),
            (this.reactNativeFilePrepped = !0),
            this
        );
    }
    handleError(e) {
        this.setStatus('ERROR'), (this.error = e), this.trackUploadFinished('ERROR');
        try {
            this.emit('error', e);
        } catch {}
        this.removeAllListeners();
    }
    handleComplete(e) {
        this.setStatus('COMPLETED'), b.log('Upload complete for '.concat(this.id)), this.emit('complete', e), this.removeAllListeners();
    }
    cancel() {
        b.log('Cancelled called for '.concat(this.id)), this._abortController.abort(), this.trackUploadFinished('CANCELED'), 'COMPLETED' === this.status && this.delete(), this.setStatus('CANCELED'), this.emit('complete'), this.removeAllListeners();
    }
    resetState() {
        return (this.status = 'NOT_STARTED'), (this.uploadedFilename = void 0), (this.responseUrl = void 0), (this.error = void 0), (this.startTime = void 0), (this.uploadAnalytics = new A()), (this._abortController = new AbortController()), super.resetState();
    }
    async delete() {
        if (null == this.uploadedFilename) return;
        let e = (0, v.F)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
        try {
            await s.tn.del(e);
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
        var e;
        _.default.track(y.rMx.ATTACHMENT_UPLOAD_STARTED, {
            file_size: this.currentSize,
            mime_type: null !== (e = this.mimeType) && void 0 !== e ? e : 'unknown',
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
        var t, n, i, r, a;
        let s = null != this.startTime ? performance.now() - this.startTime : -1;
        _.default.track(y.rMx.ATTACHMENT_UPLOAD_FINISHED, {
            duration_ms: s,
            file_size: this.currentSize,
            pre_compression_file_size: this.preCompressionSize,
            final_state: e,
            mime_type: null !== (t = this.mimeType) && void 0 !== t ? t : 'unknown',
            num_chunks: this.uploadAnalytics.numChunks,
            num_upload_attempts: null !== (n = this.uploadAnalytics.totalRequestCount) && void 0 !== n ? n : 1,
            error_code: this.error,
            video_upload_quality: d.ZP.videoUploadQuality,
            data_saving_mode: d.ZP.dataSavingMode,
            low_quality_image_mode: d.ZP.dataSavingMode,
            compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
            get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
            upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
            converted_mime_type: null !== (i = this.uploadAnalytics.convertedMimeType) && void 0 !== i ? i : 'unknown',
            image_compression_quality: null !== (r = this.uploadAnalytics.imageCompressionQuality) && void 0 !== r ? r : 0,
            video_compression_quality: null !== (a = this.uploadAnalytics.videoCompressionQuality) && void 0 !== a ? a : 'unknown',
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
            source_video_framerate: this.uploadAnalytics.sourceVideoFramerate,
            channel_id: this.channelId,
            connection_type: f.Z.getType(),
            effective_connection_speed: f.Z.getEffectiveConnectionSpeed(),
            service_provider: f.Z.getServiceProvider()
        });
    }
    constructor(e, t, n, i) {
        var r, a, s, o;
        super(e, n), I(this, 'RESUME_INCOMPLETE_CODES', [308]), I(this, 'status', 'NOT_STARTED'), I(this, 'channelId', void 0), I(this, 'responseUrl', void 0), I(this, 'currentSize', void 0), I(this, 'preCompressionSize', void 0), I(this, 'postCompressionSize', void 0), I(this, 'loaded', 0), I(this, 'reactNativeFileIndex', void 0), I(this, 'error', void 0), I(this, 'reactNativeFilePrepped', !1), I(this, 'startTime', void 0), I(this, 'uploadAnalytics', new A()), I(this, '_abortController', void 0), I(this, '_xhr', void 0), I(this, '_aborted', !1), (this.channelId = t), (this.preCompressionSize = null !== (s = null === (r = e.file) || void 0 === r ? void 0 : r.size) && void 0 !== s ? s : 0), (this.currentSize = null !== (o = null === (a = e.file) || void 0 === a ? void 0 : a.size) && void 0 !== o ? o : 0), (this.reactNativeFileIndex = i), (this._abortController = new AbortController());
    }
}
