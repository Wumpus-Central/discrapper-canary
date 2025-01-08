r.d(n, {
    m: function () {
        return i;
    },
    n: function () {
        return O;
    }
});
var i,
    a = r(47120);
var s = r(411104);
var o = r(392711),
    l = r.n(o),
    u = r(261470),
    c = r(544891),
    d = r(710845),
    f = r(432877),
    _ = r(549464),
    h = r(671100),
    p = r(740492),
    m = r(866960),
    g = r(626135),
    E = r(510990),
    v = r(70956),
    I = r(960048),
    T = r(861990),
    b = r(476326),
    y = r(983544),
    S = r(981631);
function A(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let N = new d.Z('CloudUpload.tsx'),
    C = r(224497).Z;
!(function (e) {
    (e.NOT_STARTED = 'NOT_STARTED'), (e.STARTED = 'STARTED'), (e.UPLOADING = 'UPLOADING'), (e.ERROR = 'ERROR'), (e.COMPLETED = 'COMPLETED'), (e.CANCELED = 'CANCELED');
})(i || (i = {}));
class R {
    constructor() {
        A(this, 'numChunks', void 0), A(this, 'totalRequestCount', void 0), A(this, 'timing', {}), A(this, 'compressAndExtractDisabled', void 0), A(this, 'fileAlreadyPrepped', void 0), A(this, 'imageCompressionQuality', void 0), A(this, 'videoCompressionQuality', void 0), A(this, 'convertedMimeType', void 0), A(this, 'sourceMediaWidth', void 0), A(this, 'sourceMediaHeight', void 0), A(this, 'sourceMediaFormat', void 0), A(this, 'sourceVideoBitrate', void 0), A(this, 'sourceVideoFramerate', void 0), A(this, 'videoDurationMs', void 0), A(this, 'sourceVideoProfile', void 0), A(this, 'sourceVideoLevel', void 0), A(this, 'targetVideoWidth', void 0), A(this, 'targetVideoHeight', void 0), A(this, 'targetVideoBitrate', void 0);
    }
}
class O extends b.ZP {
    static fromJson(e) {
        let { item: n, channelId: r, showLargeMessageDialog: i, reactNativeFileIndex: a } = e,
            s = new O(n, r, i, a);
        return (
            'COMPLETED' !== s.status && (s.status = 'NOT_STARTED'),
            Object.entries(e).forEach((e) => {
                let [n, r] = e;
                if (!n.startsWith('_')) s[n] = r;
            }),
            s
        );
    }
    retryOpts() {
        return this.item.platform === b.ow.REACT_NATIVE
            ? {
                  timeout: 1 * v.Z.Millis.HOUR,
                  backoff: new u.Z(0.5 * v.Z.Millis.SECOND, 30 * v.Z.Millis.MINUTE),
                  retries: 12
              }
            : {
                  timeout: 1 * v.Z.Millis.HOUR,
                  retries: 12,
                  backoff: new u.Z()
              };
    }
    createAttachmentUrlRetryOpts() {
        return this.item.platform === b.ow.REACT_NATIVE && h.l.getCurrentConfig({ location: 'CloudUpload' }).enabled
            ? {
                  timeout: {
                      response: 30 * v.Z.Millis.SECOND,
                      deadline: 30 * v.Z.Millis.MINUTE
                  },
                  backoff: new u.Z(0.5 * v.Z.Millis.SECOND, 60 * v.Z.Millis.SECOND),
                  retries: 8
              }
            : this.retryOpts();
    }
    async uploadFileToCloudAsChunks(e) {
        if (null == this.responseUrl || '' === this.responseUrl) throw Error('_uploadFileToCloudAsChunks - responseUrl is not set');
        let { contentType: n, fileSize: r, bufferedFileData: i } = await this.prepareChunkUploadItem(),
            a = Math.ceil(r / e);
        (this.uploadAnalytics.numChunks = a), (this.uploadAnalytics.totalRequestCount = 0);
        for (let s = 0; s < a; s++) {
            N.info(
                'Uploading chunk '
                    .concat(s + 1, ' of ')
                    .concat(a, ' for file id ')
                    .concat(this.id)
            );
            let o = s * e,
                l = Math.min(o + e, r),
                u = await this.getChunk(o, l, i);
            try {
                await this.uploadChunk({
                    chunk: u,
                    start: o,
                    end: l,
                    totalSize: r,
                    sessionUrl: this.responseUrl,
                    contentType: n
                });
            } catch (e) {
                throw (
                    (N.error(
                        'Error uploading chunk '
                            .concat(s + 1, ' for file id ')
                            .concat(this.id, ': ')
                            .concat(e)
                    ),
                    e)
                );
            }
        }
        N.log('Upload complete for file id '.concat(this.id));
    }
    async prepareChunkUploadItem() {
        let e, n, r;
        if (this.item.platform === b.ow.REACT_NATIVE) {
            let i = this.item;
            if (((e = null != i.mimeType && '' !== i.mimeType ? i.mimeType : 'application/octet-stream'), null == i.size || 0 === i.size || isNaN(i.size)))
                try {
                    n = await (0, T.Fm)(i.uri);
                } catch (e) {
                    N.warn('Failed to peek content length for file id '.concat(this.id, ', reading whole file instead: ').concat(e)), (n = (r = await (0, T.Lc)(i.uri)).size);
                }
            else n = i.size;
        } else (e = 'application/octet-stream'), (n = this.item.file.size);
        return {
            contentType: e,
            fileSize: n,
            bufferedFileData: r
        };
    }
    async getChunk(e, n, r) {
        return this.item.platform !== b.ow.REACT_NATIVE ? this.item.file.slice(e, n) : null != r ? r.slice(e, n) : await (0, T.U4)(this.item.uri, e, n);
    }
    async uploadChunk(e) {
        let n = {
                'Content-Type': e.contentType,
                'Content-Range': 'bytes '
                    .concat(e.start, '-')
                    .concat(e.end - 1, '/')
                    .concat(e.totalSize)
            },
            r = 3;
        for (let a = 1; a <= r; a++) {
            var i;
            (this.uploadAnalytics.totalRequestCount = (null !== (i = this.uploadAnalytics.totalRequestCount) && void 0 !== i ? i : 0) + 1),
                N.log(
                    'Attempt '
                        .concat(a, ' for file id ')
                        .concat(this.id, ' : Uploading chunk ')
                        .concat(e.start, '-')
                        .concat(e.end - 1, ' of ')
                        .concat(e.totalSize, ' bytes')
                );
            let r = l().throttle((n) => {
                let r = e.start + n.loaded;
                this.emit('progress', r, e.totalSize, r - this.loaded), (this.loaded = r);
            }, 50);
            try {
                if (
                    (
                        await c.tn.put({
                            url: e.sessionUrl,
                            body: e.chunk,
                            headers: n,
                            signal: this._abortController.signal,
                            onRequestProgress: r,
                            ...this.retryOpts(),
                            rejectWithError: !1
                        })
                    ).ok
                )
                    return;
            } catch (n) {
                if (!this.RESUME_INCOMPLETE_CODES.includes(n.status)) throw n;
                if (this.isUnsuccessfulChunkUpload(n, e.end - 1)) {
                    N.error('Incomplete chunk upload for file id '.concat(this.id, ': ').concat(n.status));
                    continue;
                }
                return;
            }
        }
        throw Error('Failed to upload chunk');
    }
    isUnsuccessfulChunkUpload(e, n) {
        if (null == e.headers.range || '' === e.headers.range) return !0;
        let r = e.headers.range.match(/bytes=(\d+)-(\d+)/);
        return null !== r && parseInt(r[2], 10) !== n;
    }
    uploadFileToCloud() {
        let e, n;
        if (null == this.responseUrl) throw Error('_uploadFileToCloud - responseUrl is not set');
        N.log('Uploading '.concat(this.id)),
            this.item.platform === b.ow.REACT_NATIVE
                ? (n =
                      null !=
                          (e = {
                              type: this.item.mimeType,
                              uri: this.item.uri,
                              name: this.item.filename
                          }).type && 'application/json' !== e.type
                          ? e.type
                          : 'application/octet-stream')
                : ((e = this.item.file), (n = 'application/octet-stream'));
        let r = l().throttle((e) => {
                this.emit('progress', e.loaded, e.total, e.loaded - this.loaded), (this.loaded = e.loaded);
            }, 50),
            i = { 'Content-Type': n };
        return c.tn.put({
            url: this.responseUrl,
            body: e,
            headers: i,
            signal: this._abortController.signal,
            onRequestProgress: r,
            ...this.retryOpts(),
            rejectWithError: !1
        });
    }
    async getSize() {
        var e;
        return null !== (e = this.currentSize) && void 0 !== e ? e : 0;
    }
    async trackTime(e, n) {
        let r = performance.now();
        try {
            return await n();
        } finally {
            this.uploadAnalytics.timing[e] = performance.now() - r;
        }
    }
    async upload() {
        var e, n, r;
        if ('COMPLETED' === this.status) return;
        this.setStatus('STARTED'), (this.startTime = performance.now()), this.trackUploadStart();
        if ('CANCELED' === this.status) {
            this.handleComplete(this.id);
            return;
        }
        let i = await C.getUploadPayload(this),
            a = (0, y.F)(this.item.target);
        if (null == i.filename || '' === i.filename || 0 === this.currentSize) {
            N.error('File does not have a filename or size is 0.', JSON.stringify(i)), this.handleError(S.evJ.INVALID_FILE_ASSET);
            return;
        }
        if ((null !== (e = this.currentSize) && void 0 !== e ? e : 0) > a.getMaxFileSize(this.channelId)) {
            this.handleError(S.evJ.ENTITY_TOO_LARGE);
            return;
        }
        if (f.ZP.get('upload_fail_50') && 0.5 > Math.random()) {
            setTimeout(() => {
                this.handleError(500);
            }, 1000);
            return;
        }
        try {
            N.log('Requesting upload url for '.concat(this.id));
            let e = await this.trackTime(
                'getUploadUrlTimeMs',
                async () =>
                    await c.tn.post({
                        url: a.getCreateAttachmentURL(this.channelId),
                        body: { files: [i] },
                        ...this.createAttachmentUrlRetryOpts(),
                        rejectWithError: !1
                    })
            );
            this.setResponseUrl(e.body.attachments[0].upload_url), this.setUploadedFilename(e.body.attachments[0].upload_filename);
        } catch (i) {
            let e = null !== (r = null == i ? void 0 : null === (n = i.body) || void 0 === n ? void 0 : n.code) && void 0 !== r ? r : i.status;
            e !== S.evJ.ENTITY_TOO_LARGE && (N.error('Requesting upload url failed with code '.concat(null != e ? e : JSON.stringify(i.body), ' for ').concat(this.id)), I.Z.captureException(i)), this.handleError(e);
            return;
        }
        try {
            let e;
            let n = _.Z.getCurrentConfig({ location: 'CloudUpload' }, { autoTrackExposure: !0 });
            (e = n.enabled && n.chunkSize > 0 ? await this.trackTime('uploadTimeMs', async () => await this.uploadFileToCloudAsChunks(n.chunkSize)) : await this.trackTime('uploadTimeMs', async () => await this.uploadFileToCloud())), this.trackUploadFinished('COMPLETED'), this.handleComplete(e);
        } catch (e) {
            'CANCELED' === this.status ? this.handleComplete(e) : (N.info('Error: status '.concat(e.status, ' for ').concat(this.id)), this.handleError(e));
        }
    }
    async reactNativeCompressAndExtractData() {
        var e;
        if (!(0, y.F)(this.item.target).shouldReactNativeCompressUploads) return (this.uploadAnalytics.compressAndExtractDisabled = !0), N.log('reactNativeCompressAndExtractData() disabled by upload target'), this;
        if (!0 === this.reactNativeFilePrepped) return (this.uploadAnalytics.fileAlreadyPrepped = !0), N.log('reactNativeCompressAndExtractData() file already prepped - '.concat(this.id)), this;
        N.log('Starting compression/conversion for '.concat(this.id));
        let n = await this.trackTime('compressTimeMs', async () => {
            var e;
            return await (0, E.J)(this, null !== (e = this.reactNativeFileIndex) && void 0 !== e ? e : 0);
        });
        if (null == n || null == n.file) return N.error('Failed to get compressed file for '.concat(this.id)), this;
        let r = n.uri,
            i = n.file.name,
            a = n.file.type;
        if (((0, b.rG)(n.file) && ((this.uploadAnalytics.imageCompressionQuality = n.file.imageCompressionQuality), (this.uploadAnalytics.videoCompressionQuality = n.file.videoCompressionQuality), (this.uploadAnalytics.convertedMimeType = n.file.type), void 0 !== n.file.videoMetadata && ((this.uploadAnalytics.sourceMediaWidth = n.file.videoMetadata.width), (this.uploadAnalytics.sourceMediaHeight = n.file.videoMetadata.height), (this.uploadAnalytics.sourceMediaFormat = n.file.videoMetadata.format), (this.uploadAnalytics.sourceVideoBitrate = n.file.videoMetadata.bitRate), (this.uploadAnalytics.sourceVideoFramerate = n.file.videoMetadata.frameRate), (this.uploadAnalytics.videoDurationMs = n.file.videoMetadata.durationMs), (this.uploadAnalytics.sourceVideoProfile = n.file.videoMetadata.sourceProfile), (this.uploadAnalytics.sourceVideoLevel = n.file.videoMetadata.sourceLevel)), void 0 !== n.file.encodingConfig && ((this.uploadAnalytics.targetVideoWidth = n.file.encodingConfig.targetWidth), (this.uploadAnalytics.targetVideoHeight = n.file.encodingConfig.targetHeight), (this.uploadAnalytics.targetVideoBitrate = n.file.encodingConfig.targetBitrate))), (this.filename = i), null == i || null == r || null == a))
            throw (
                (N.error(
                    'Insufficient file data: '
                        .concat(
                            {
                                filename: i,
                                uri: r,
                                mimeType: a
                            },
                            ' for '
                        )
                        .concat(this.id)
                ),
                Error(
                    'Insufficient file data: '.concat({
                        filename: i,
                        uri: r,
                        mimeType: a
                    })
                ))
            );
        let s = null !== (e = n.fileSize) && void 0 !== e ? e : (await (0, T.Lc)(r)).size;
        if (((this.postCompressionSize = s), (this.currentSize = s), null == s)) throw (N.error('Size missing from file data for '.concat(this.id)), Error('Size missing from file data'));
        N.log('Completed compression and conversion. Output size='.concat(s, ' bytes; filename=').concat(i, ' for ').concat(this.id));
        let o = {
            uri: r,
            filename: i,
            mimeType: a
        };
        return (
            (this.item = {
                ...this.item,
                ...o
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
        this.setStatus('COMPLETED'), N.log('Upload complete for '.concat(this.id)), this.emit('complete', e), this.removeAllListeners();
    }
    cancel() {
        N.log('Cancelled called for '.concat(this.id)), this._abortController.abort(), this.trackUploadFinished('CANCELED'), 'COMPLETED' === this.status && this.delete(), this.setStatus('CANCELED'), this.emit('complete'), this.removeAllListeners();
    }
    resetState() {
        return (this.status = 'NOT_STARTED'), (this.uploadedFilename = void 0), (this.responseUrl = void 0), (this.error = void 0), (this.startTime = void 0), (this.uploadAnalytics = new R()), (this._abortController = new AbortController()), super.resetState();
    }
    async delete() {
        if (null == this.uploadedFilename) return;
        let e = (0, y.F)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
        try {
            await c.tn.del(e);
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
        g.default.track(S.rMx.ATTACHMENT_UPLOAD_STARTED, {
            file_size: this.currentSize,
            mime_type: null !== (e = this.mimeType) && void 0 !== e ? e : 'unknown',
            video_upload_quality: p.ZP.videoUploadQuality,
            data_saving_mode: p.ZP.dataSavingMode,
            low_quality_image_mode: p.ZP.dataSavingMode,
            channel_id: this.channelId,
            connection_type: m.Z.getType(),
            effective_connection_speed: m.Z.getEffectiveConnectionSpeed(),
            service_provider: m.Z.getServiceProvider()
        });
    }
    trackUploadFinished(e) {
        var n, r, i, a, s;
        let o = null != this.startTime ? performance.now() - this.startTime : -1;
        g.default.track(S.rMx.ATTACHMENT_UPLOAD_FINISHED, {
            duration_ms: o,
            file_size: this.currentSize,
            pre_compression_file_size: this.preCompressionSize,
            final_state: e,
            mime_type: null !== (n = this.mimeType) && void 0 !== n ? n : 'unknown',
            num_chunks: this.uploadAnalytics.numChunks,
            num_upload_attempts: null !== (r = this.uploadAnalytics.totalRequestCount) && void 0 !== r ? r : 1,
            error_code: this.error,
            video_upload_quality: p.ZP.videoUploadQuality,
            data_saving_mode: p.ZP.dataSavingMode,
            low_quality_image_mode: p.ZP.dataSavingMode,
            compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
            get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
            upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
            converted_mime_type: null !== (i = this.uploadAnalytics.convertedMimeType) && void 0 !== i ? i : 'unknown',
            image_compression_quality: null !== (a = this.uploadAnalytics.imageCompressionQuality) && void 0 !== a ? a : 0,
            video_compression_quality: null !== (s = this.uploadAnalytics.videoCompressionQuality) && void 0 !== s ? s : 'unknown',
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
            source_video_framerate: this.uploadAnalytics.sourceVideoFramerate,
            channel_id: this.channelId,
            connection_type: m.Z.getType(),
            effective_connection_speed: m.Z.getEffectiveConnectionSpeed(),
            service_provider: m.Z.getServiceProvider()
        });
    }
    constructor(e, n, r, i) {
        var a, s, o, l;
        super(e, r), A(this, 'RESUME_INCOMPLETE_CODES', [308]), A(this, 'status', 'NOT_STARTED'), A(this, 'channelId', void 0), A(this, 'responseUrl', void 0), A(this, 'currentSize', void 0), A(this, 'preCompressionSize', void 0), A(this, 'postCompressionSize', void 0), A(this, 'loaded', 0), A(this, 'reactNativeFileIndex', void 0), A(this, 'error', void 0), A(this, 'reactNativeFilePrepped', !1), A(this, 'startTime', void 0), A(this, 'uploadAnalytics', new R()), A(this, '_abortController', void 0), A(this, '_xhr', void 0), A(this, '_aborted', !1), (this.channelId = n), (this.preCompressionSize = null !== (o = null === (a = e.file) || void 0 === a ? void 0 : a.size) && void 0 !== o ? o : 0), (this.currentSize = null !== (l = null === (s = e.file) || void 0 === s ? void 0 : s.size) && void 0 !== l ? l : 0), (this.reactNativeFileIndex = i), (this._abortController = new AbortController());
    }
}
