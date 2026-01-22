n.d(t, {
    A: () => g,
}),
    n(896048),
    n(65821),
    n(457529);
var r = n(143236),
    i = n(735438),
    a = n.n(i),
    s = n(626584),
    o = n(509929),
    l = n(900482),
    c = n(972711),
    u = n(652215),
    d = n(381941);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e, t) {
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

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = new s.A("UploaderBase.tsx");
class g extends r.EventEmitter {
    _fileSize() {
        return this.files.reduce((e, t) => {
            var n;
            return e + (null != (n = t.currentSize) ? n : 0);
        }, 0);
    }
    async compressAndCheckFileSize() {
        var e, t;
        let n = (0, l.B)(null == (t = this.files[0]) || null == (e = t.item) ? void 0 : e.target);
        return this.files.length > n.getMaxAttachmentsCount()
            ? (m.log("Too many attachments for ".concat(this.id)),
              this._handleError({
                  code: u.t02.TOO_MANY_ATTACHMENTS,
              }),
              !1)
            : !(this._fileSize() > n.getMaxTotalAttachmentSize()) ||
                  (this._handleError({
                      code: u.t02.ENTITY_TOO_LARGE,
                      reason: {
                          type: d.ty.POSTCOMPRESSION_SUM_TOO_LARGE,
                      },
                  }),
                  !1);
    }
    setUploadingTextForUI() {
        let e = this.files.some((e) => e.isImage),
            t = this.files.some((e) => e.isVideo),
            n = this._fileSize();
        m.log(
            "setUploadingTextForUI - total content: "
                .concat(n, " bytes and ")
                .concat(this.files.length, " attachments for ")
                .concat(this.id),
        ),
            (this._file = h(p({}, this._file), {
                totalPostCompressionSize: n,
                currentSize: n,
                hasVideo: t,
                hasImage: e,
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
        return {
            loaded: this.files.reduce((e, t) => {
                var n;
                return e + (null != (n = t.loaded) ? n : 0);
            }, 0),
            total: e,
        };
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
        let r = p({}, e),
            i = [...a().get(r, t, []), ...n];
        return a().set(r, t, i);
    }
    clearProcessingMessageInterval() {
        null != this.processingMessageChangeInterval &&
            (clearInterval(this.processingMessageChangeInterval), (this.processingMessageChangeInterval = void 0));
    }
    cancel() {
        var e, t;
        m.log("cancel() for ".concat(this.id)),
            this._aborted ||
                ((this._aborted = !0),
                null == (e = (t = this)._cancel) || e.call(t),
                this.files.forEach((e) => e.cancel()),
                this._handleComplete());
    }
    async cancelItem(e) {
        m.log("Cancel called for ".concat(this.id, " for item ").concat(e));
        let t = this.files.find((t) => t.id === e);
        if (null == t || t.isCancelled()) return;
        let n = this.files.indexOf(t);
        (this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)]),
            (this._file = h(p({}, this._file), {
                items: this.files,
            })),
            await (0, o.sm)(t),
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
    constructor() {
        super(),
            f(this, "id", void 0),
            f(this, "_file", void 0),
            f(this, "_aborted", !1),
            f(this, "_errored", !1),
            f(this, "processingMessageChangeInterval", void 0),
            f(this, "files", []),
            f(this, "_lastUpdate", 0),
            f(this, "_loaded", 0),
            f(this, "alreadyStarted", !1),
            f(this, "_cancel", void 0),
            f(this, "_handleStart", (e) => {
                (this._cancel = e), this.alreadyStarted || this.emit("start", this._file), (this.alreadyStarted = !0);
            }),
            f(this, "_handleProgress", (e, t, n) => {
                let r = Date.now(),
                    i = (0, c.YL)(e, t),
                    a = Math.floor((e - this._loaded) / ((r - this._lastUpdate) / 1e3));
                if (null != n) {
                    var s;
                    null == (s = this._file.items) ||
                        s.forEach((e) => {
                            e.item.progress = n[e.id];
                        });
                }
                (this._lastUpdate = r),
                    (this._loaded = e),
                    (this._file = h(p({}, this._file), {
                        currentSize: t,
                        progress: i,
                        rate: a,
                    })),
                    this.emit("progress", this._file);
            }),
            f(this, "_handleException", (e) => {
                this._handleError({
                    reason: {
                        type: d.ty.ERROR_SOURCE_UNKNOWN,
                        msg: e.toString(),
                    },
                });
            }),
            f(this, "_handleAborted", () => {
                this.clearProcessingMessageInterval();
            }),
            f(this, "_handleError", (e) => {
                let { code: t, reason: n, body: r } = e;
                this.clearProcessingMessageInterval(),
                    this._aborted ||
                        ((this._errored = !0),
                        m.log("_handleError: ".concat(t, " (").concat(JSON.stringify(n), ") for ").concat(this.id)),
                        this.emit("error", this._file, t, r, n),
                        this.removeAllListeners());
            }),
            f(this, "_handleComplete", (e) => {
                this.clearProcessingMessageInterval(),
                    m.log("_handleComplete for ".concat(this.id)),
                    this.emit("complete", this._file, e),
                    this.removeAllListeners();
            }),
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
}
