"use strict";
n.d(t, { A: () => m });
var i = n(417325),
    r = n(143236),
    s = n(735438),
    a = n.n(s),
    o = n(626584),
    l = n(550642),
    u = n(509929),
    c = n(787458),
    d = n(972711),
    _ = n(652215),
    f = n(381941);
let h = new o.A("UploaderBase.tsx");
class p extends r.EventEmitter {
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
            });
    }
    _fileSize() {
        return this.files.reduce((e, t) => (e += t.currentSize ?? 0), 0);
    }
    async compressAndCheckFileSize() {
        let e = (0, c.B)(this.files[0]?.item?.target);
        return this.files.length > e.getMaxAttachmentsCount()
            ? (h.log(`Too many attachments for ${this.id}`),
              this._handleError({ code: _.t02.TOO_MANY_ATTACHMENTS }),
              !1)
            : ((0, l.R8)({ location: "UploaderBase.compressAndCheckFileSize" }),
              !(this._fileSize() > e.getMaxTotalAttachmentSize()) ||
                  (this._handleError({
                      code: _.t02.ENTITY_TOO_LARGE,
                      reason: { type: f.ty.POSTCOMPRESSION_SUM_TOO_LARGE },
                  }),
                  !1));
    }
    setUploadingTextForUI() {
        let e = this.files.some((e) => e.isImage),
            t = this.files.some((e) => e.isVideo),
            n = this._fileSize();
        h.log(`setUploadingTextForUI - total content: ${n} bytes and ${this.files.length} attachments for ${this.id}`),
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
        (this._cancel = e), this.alreadyStarted || this.emit("start", this._file), (this.alreadyStarted = !0);
    };
    _handleProgress = (e, t, n) => {
        let i = Date.now(),
            r = (0, d.YL)(e, t),
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
        this._handleError({ reason: { type: f.ty.ERROR_SOURCE_UNKNOWN, msg: e.toString() } });
    };
    _handleAborted = () => {
        this.clearProcessingMessageInterval();
    };
    _handleError = (e) => {
        let { code: t, reason: n, body: i } = e;
        this.clearProcessingMessageInterval(),
            this._aborted ||
                ((this._errored = !0),
                h.log(`_handleError: ${t} (${JSON.stringify(n)}) for ${this.id}`),
                this.emit("error", this._file, t, i, n),
                this.removeAllListeners());
    };
    _handleComplete = (e) => {
        this.clearProcessingMessageInterval(),
            h.log(`_handleComplete for ${this.id}`),
            this.emit("complete", this._file, e),
            this.removeAllListeners();
    };
    clearProcessingMessageInterval() {
        null != this.processingMessageChangeInterval &&
            (clearInterval(this.processingMessageChangeInterval), (this.processingMessageChangeInterval = void 0));
    }
    cancel() {
        h.log(`cancel() for ${this.id}`),
            this._aborted ||
                ((this._aborted = !0), this._cancel?.(), this.files.forEach((e) => e.cancel()), this._handleComplete());
    }
    async cancelItem(e) {
        h.log(`Cancel called for ${this.id} for item ${e}`);
        let t = this.files.find((t) => t.id === e);
        if (null == t || t.isCancelled()) return;
        let n = this.files.indexOf(t);
        (this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)]),
            (this._file = { ...this._file, items: this.files }),
            await (0, u.sm)(t),
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
var E = n(358579);
class m extends p {
    async uploadFiles(e) {
        super.upload(e);
        let t = new Promise((e, t) => {
                this.once("error", (e, n, i, r) => {
                    t({ file: e, code: n, responseBody: i, reason: r });
                }),
                    this.once("complete", () => {
                        this._errored || e(this.files);
                    });
            }),
            n = new AbortController();
        try {
            if (
                ((this.files = e),
                this._aborted || (this._handleStart(() => n.abort()), !(await this.compressAndCheckFileSize())))
            )
                return t;
            this.setUploadingTextForUI(), await (0, E.A)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (s) {
            let e = this.files.find((e) => e.status === i.jP.ERROR),
                t = e?.error,
                n = s instanceof Error ? s.message : String(s),
                r = { type: f.ty.ERROR_SOURCE_UNKNOWN, msg: n };
            throw (this._handleError({ code: t, reason: r }), { file: this._file, code: t, reason: r });
        }
        return this._handleComplete(), this.files;
    }
}
