"use strict";
n.d(t, { A: () => h });
var i = n(143236),
    r = n(735438),
    s = n.n(r),
    a = n(626584),
    o = n(550642),
    l = n(509929),
    d = n(787458),
    _ = n(972711),
    u = n(652215),
    c = n(381941);
let E = new a.A("UploaderBase.tsx");
class h extends i.EventEmitter {
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
        super(),
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
            });
    }
    _fileSize() {
        return this.files.reduce((e, t) => (e += t.currentSize ?? 0), 0);
    }
    async compressAndCheckFileSize() {
        let e = (0, d.B)(this.files[0]?.item?.target);
        return this.files.length > e.getMaxAttachmentsCount()
            ? (E.log(`Too many attachments for ${this.id}`),
              this._handleError({ code: u.t02.TOO_MANY_ATTACHMENTS }),
              !1)
            : ((0, o.R8)({ location: "UploaderBase.compressAndCheckFileSize" }),
              !(this._fileSize() > e.getMaxTotalAttachmentSize()) ||
                  (this._handleError({
                      code: u.t02.ENTITY_TOO_LARGE,
                      reason: { type: c.ty.POSTCOMPRESSION_SUM_TOO_LARGE },
                  }),
                  !1));
    }
    setUploadingTextForUI() {
        let e = this.files.some((e) => e.isImage),
            t = this.files.some((e) => e.isVideo),
            n = this._fileSize();
        E.log(`setUploadingTextForUI - total content: ${n} bytes and ${this.files.length} attachments for ${this.id}`),
            (this._file = {
                ...this._file,
                totalPostCompressionSize: n,
                currentSize: n,
                hasVideo: t,
                hasImage: e,
                attachmentsCount: this.files.length,
                items: this.files,
            });
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
                e[t.id] = (0, _.YL)(t.loaded, t.currentSize);
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
        (this._cancel = e), this.alreadyStarted || this.emit("start", this._file), (this.alreadyStarted = !0);
    };
    _handleProgress = (e, t, n) => {
        let i = Date.now(),
            r = (0, _.YL)(e, t),
            s = Math.floor((e - this._loaded) / ((i - this._lastUpdate) / 1e3));
        null != n &&
            this._file.items?.forEach((e) => {
                e.item.progress = n[e.id];
            }),
            (this._lastUpdate = i),
            (this._loaded = e),
            (this._file = { ...this._file, currentSize: t, progress: r, rate: s }),
            this.emit("progress", this._file);
    };
    _handleException = (e) => {
        this._handleError({ reason: { type: c.ty.ERROR_SOURCE_UNKNOWN, msg: e.toString() } });
    };
    _handleAborted = () => {
        this.clearProcessingMessageInterval();
    };
    _handleError = (e) => {
        let { code: t, reason: n, body: i } = e;
        this.clearProcessingMessageInterval(),
            this._aborted ||
                ((this._errored = !0),
                E.log(`_handleError: ${t} (${JSON.stringify(n)}) for ${this.id}`),
                this.emit("error", this._file, t, i, n),
                this.removeAllListeners());
    };
    _handleComplete = (e) => {
        this.clearProcessingMessageInterval(),
            E.log(`_handleComplete for ${this.id}`),
            this.emit("complete", this._file, e),
            this.removeAllListeners();
    };
    clearProcessingMessageInterval() {
        null != this.processingMessageChangeInterval &&
            (clearInterval(this.processingMessageChangeInterval), (this.processingMessageChangeInterval = void 0));
    }
    cancel() {
        E.log(`cancel() for ${this.id}`),
            this._aborted ||
                ((this._aborted = !0), this._cancel?.(), this.files.forEach((e) => e.cancel()), this._handleComplete());
    }
    async cancelItem(e) {
        E.log(`Cancel called for ${this.id} for item ${e}`);
        let t = this.files.find((t) => t.id === e);
        if (null == t || t.isCancelled()) return;
        let n = this.files.indexOf(t);
        (this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)]),
            (this._file = { ...this._file, items: this.files }),
            await (0, l.sm)(t),
            t.cancel(),
            this.emit("cancel-upload-item", this._file),
            0 === this.files.length && this.cancel();
    }
    upload(e) {
        if (null != this._cancel) throw Error("Uploader.upload(...): An upload is already in progress.");
        (this._lastUpdate = Date.now()),
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
            });
    }
}
