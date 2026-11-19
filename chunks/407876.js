var i = n(143236),
    r = n(435558),
    a = n.n(r),
    s = n(626584),
    l = n(509929),
    o = n(313034),
    d = n(972711),
    c = n(652215),
    u = n(381941);
let _ = new s.A("UploaderBase.tsx");
class E extends i.EventEmitter {
    id;
    _file;
    _aborted = !1;
    _errored = !1;
    processingMessageChangeInterval;
    files = [];
    _lastUpdate = 0;
    _loaded = 0;
    alreadyStarted = !1;
    _cancel;
    constructor() {
        (super(),
            (this.id = a().uniqueId("Uploader")),
            (this._file = {
                id: this.id,
                currentSize: 0,
                totalPreCompressionSize: 0,
                compressionProgress: 0,
                progress: 0,
                rate: 0,
                hasImage: !1,
                hasVideo: !1,
                attachmentsCount: 0,
                items: void 0,
            }));
    }
    _fileSize() {
        return this.files.reduce((e, t) => (e += t.currentSize ?? 0), 0);
    }
    async compressAndCheckFileSize() {
        let { deferTotalSizeCheckUntilAfterCompression: e = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, o.B)(this.files[0]?.item?.target);
        return this.files.length > t.getMaxAttachmentsCount()
            ? (_.log(`Too many attachments for ${this.id}`),
              this._handleError({ code: c.t02.TOO_MANY_ATTACHMENTS }),
              !1)
            : e || this.checkTotalAttachmentSize();
    }
    checkTotalAttachmentSize() {
        let e = (0, o.B)(this.files[0]?.item?.target);
        return (
            !(this._fileSize() > e.getMaxTotalAttachmentSize()) ||
            (this.setUploadingTextForUI(),
            this._handleError({ code: c.t02.ENTITY_TOO_LARGE, reason: { type: u.ty.POSTCOMPRESSION_SUM_TOO_LARGE } }),
            !1)
        );
    }
    setUploadingTextForUI() {
        let { isCompressionComplete: e = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = this.files.some((e) => e.isImage),
            n = this.files.some((e) => e.isVideo),
            i = e
                ? this._fileSize()
                : a().sumBy(this.files, (e) => (e.reactNativeFilePrepped ? e.currentSize : e.preCompressionSize));
        (_.log(`setUploadingTextForUI - total content: ${i} bytes and ${this.files.length} attachments for ${this.id}`),
            (this._file = {
                ...this._file,
                totalPostCompressionSize: e ? i : void 0,
                currentSize: i,
                hasVideo: n,
                hasImage: t,
                attachmentsCount: this.files.length,
                items: this.files,
            }));
    }
    _recomputeProgress() {
        let { loaded: e, total: t } = this._recomputeProgressTotal(),
            n = this._recomputeProgressByFile();
        this._handleProgress(e, t, n);
    }
    _recomputeProgressTotal() {
        let e = this._fileSize();
        return { loaded: this.files.reduce((e, t) => (e += t.loaded ?? 0), 0), total: e };
    }
    _recomputeProgressByFile() {
        let e = {};
        return (
            this.files.forEach((t) => {
                e[t.id] = (0, d.YL)(t.loaded, t.currentSize);
            }),
            e
        );
    }
    _addAttachmentsToPayload(e, t, n) {
        let i = { ...e },
            r = [...a().get(i, t, []), ...n];
        return a().set(i, t, r);
    }
    _handleStart = (e) => {
        ((this._cancel = e), this.alreadyStarted || this.emit("start", this._file), (this.alreadyStarted = !0));
    };
    _handleProgress = (e, t, n) => {
        let i = Date.now(),
            r = (0, d.YL)(e, t),
            a = Math.floor((e - this._loaded) / ((i - this._lastUpdate) / 1e3));
        (null != n &&
            this._file.items?.forEach((e) => {
                e.item.progress = n[e.id];
            }),
            (this._lastUpdate = i),
            (this._loaded = e),
            (this._file = { ...this._file, currentSize: t, progress: r, rate: a }),
            this.emit("progress", this._file));
    };
    _handleException = (e, t) => {
        this._handleError({ code: t, reason: { type: u.ty.ERROR_SOURCE_UNKNOWN, msg: e.toString() } });
    };
    _handleAborted = () => {
        this.clearProcessingMessageInterval();
    };
    _handleError = (e) => {
        let { code: t, reason: n, body: i } = e;
        (this.clearProcessingMessageInterval(),
            this._aborted ||
                ((this._errored = !0),
                _.log(`_handleError: ${t} (${JSON.stringify(n)}) for ${this.id}`),
                this.emit("error", this._file, t, i, n),
                this.removeAllListeners()));
    };
    _handleComplete = (e) => {
        (this.clearProcessingMessageInterval(),
            _.log(`_handleComplete for ${this.id}`),
            this.emit("complete", this._file, e),
            this.removeAllListeners());
    };
    clearProcessingMessageInterval() {
        null != this.processingMessageChangeInterval &&
            (clearInterval(this.processingMessageChangeInterval), (this.processingMessageChangeInterval = void 0));
    }
    cancel() {
        (_.log(`cancel() for ${this.id}`),
            this._aborted ||
                ((this._aborted = !0),
                this._cancel?.(),
                this.files.forEach((e) => e.cancel()),
                this._handleComplete()));
    }
    async cancelItem(e) {
        _.log(`Cancel called for ${this.id} for item ${e}`);
        let t = this.files.find((t) => t.id === e);
        if (null == t || t.isCancelled()) return;
        let n = this.files.indexOf(t);
        ((this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)]),
            (this._file = { ...this._file, items: this.files }),
            t.cancel(),
            await (0, l.sm)(t),
            this.emit("cancel-upload-item", this._file),
            0 === this.files.length && this.cancel());
    }
    upload(e) {
        if (null != this._cancel) throw Error("Uploader.upload(...): An upload is already in progress.");
        ((this._lastUpdate = Date.now()),
            (this._loaded = 0),
            (this._file = {
                id: this.id,
                currentSize: 0,
                totalPreCompressionSize: 0,
                compressionProgress: 0,
                progress: 0,
                rate: 0,
                hasImage: !1,
                hasVideo: !1,
                attachmentsCount: 0,
                items: e,
            }));
    }
}
n.d(t, {}, { A: E });
