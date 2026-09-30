n.d(t, { A: () => f });
var i = n(280889),
    r = n(143236),
    a = n(435558),
    s = n.n(a),
    l = n(626584),
    o = n(509929),
    d = n(787458),
    c = n(972711),
    u = n(652215),
    _ = n(381941);
let E = new l.A("UploaderBase.tsx");
class A extends r.EventEmitter {
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
            (this.id = s().uniqueId("Uploader")),
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
            t = (0, d.B)(this.files[0]?.item?.target);
        return this.files.length > t.getMaxAttachmentsCount()
            ? (E.log(`Too many attachments for ${this.id}`),
              this._handleError({ code: u.t02.TOO_MANY_ATTACHMENTS }),
              !1)
            : e || this.checkTotalAttachmentSize();
    }
    checkTotalAttachmentSize() {
        let e = (0, d.B)(this.files[0]?.item?.target);
        return (
            !(this._fileSize() > e.getMaxTotalAttachmentSize()) ||
            (this.setUploadingTextForUI(),
            this._handleError({ code: u.t02.ENTITY_TOO_LARGE, reason: { type: _.ty.POSTCOMPRESSION_SUM_TOO_LARGE } }),
            !1)
        );
    }
    setUploadingTextForUI() {
        let { isCompressionComplete: e = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = this.files.some((e) => e.isImage),
            n = this.files.some((e) => e.isVideo),
            i = e
                ? this._fileSize()
                : s().sumBy(this.files, (e) => (e.reactNativeFilePrepped ? e.currentSize : e.preCompressionSize));
        (E.log(`setUploadingTextForUI - total content: ${i} bytes and ${this.files.length} attachments for ${this.id}`),
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
                e[t.id] = (0, c.YL)(t.loaded, t.currentSize);
            }),
            e
        );
    }
    _addAttachmentsToPayload(e, t, n) {
        let i = { ...e },
            r = [...s().get(i, t, []), ...n];
        return s().set(i, t, r);
    }
    _handleStart = (e) => {
        ((this._cancel = e), this.alreadyStarted || this.emit("start", this._file), (this.alreadyStarted = !0));
    };
    _handleProgress = (e, t, n) => {
        let i = Date.now(),
            r = (0, c.YL)(e, t),
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
        this._handleError({ code: t, reason: { type: _.ty.ERROR_SOURCE_UNKNOWN, msg: e.toString() } });
    };
    _handleAborted = () => {
        this.clearProcessingMessageInterval();
    };
    _handleError = (e) => {
        let { code: t, reason: n, body: i } = e;
        (this.clearProcessingMessageInterval(),
            this._aborted ||
                ((this._errored = !0),
                E.log(`_handleError: ${t} (${JSON.stringify(n)}) for ${this.id}`),
                this.emit("error", this._file, t, i, n),
                this.removeAllListeners()));
    };
    _handleComplete = (e) => {
        (this.clearProcessingMessageInterval(),
            E.log(`_handleComplete for ${this.id}`),
            this.emit("complete", this._file, e),
            this.removeAllListeners());
    };
    clearProcessingMessageInterval() {
        null != this.processingMessageChangeInterval &&
            (clearInterval(this.processingMessageChangeInterval), (this.processingMessageChangeInterval = void 0));
    }
    cancel() {
        (E.log(`cancel() for ${this.id}`),
            this._aborted ||
                ((this._aborted = !0),
                this._cancel?.(),
                this.files.forEach((e) => e.cancel()),
                this._handleComplete()));
    }
    async cancelItem(e) {
        E.log(`Cancel called for ${this.id} for item ${e}`);
        let t = this.files.find((t) => t.id === e);
        if (null == t || t.isCancelled()) return;
        let n = this.files.indexOf(t);
        ((this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)]),
            (this._file = { ...this._file, items: this.files }),
            t.cancel(),
            await (0, o.sm)(t),
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
var h = n(358579),
    I = n(820465);
class f extends A {
    async uploadFiles(e) {
        super.upload(e);
        let t = new Promise((e, t) => {
                (this.once("error", (e, n, i, r) => {
                    t({ file: e, code: n, responseBody: i, reason: r });
                }),
                    this.once("complete", () => {
                        this._errored || e(this.files);
                    }));
            }),
            n = new AbortController();
        try {
            if (((this.files = e), this._aborted)) return t;
            this._handleStart(() => n.abort());
            let i = (0, I.M)();
            if (!(await this.compressAndCheckFileSize({ deferTotalSizeCheckUntilAfterCompression: i }))) return t;
            this.setUploadingTextForUI();
            try {
                await (0, h.A)(this.files, !0, this._recomputeProgress.bind(this));
            } finally {
                this.setUploadingTextForUI();
            }
            if (!this.checkTotalAttachmentSize()) return t;
        } catch (a) {
            let e = this.files.find((e) => e.status === i.jP.ERROR),
                t = e?.error,
                n = a instanceof Error ? a.message : String(a),
                r = { type: _.ty.ERROR_SOURCE_UNKNOWN, msg: n };
            throw (this._handleError({ code: t, reason: r }), { file: this._file, code: t, reason: r });
        }
        return (this._handleComplete(), this.files);
    }
}
