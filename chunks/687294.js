n.d(t, {
    $: () => E,
    Z: () => g
}),
    n(47120),
    n(411104);
var r = n(259443),
    i = n(510990),
    o = n(141795),
    a = n(983544),
    s = n(596956),
    l = n(865275),
    c = n(981631),
    u = n(959517),
    d = n(388032);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = new r.Yd('CloudUploaderBase.tsx');
class g extends l.Z {
    _fileSize() {
        return this.files.reduce((e, t) => {
            var n;
            return e + (null != (n = t.currentSize) ? n : 0);
        }, 0);
    }
    async compressAndCheckFileSize() {
        var e, t;
        let n = (0, a.F)(null == (t = this.files[0]) || null == (e = t.item) ? void 0 : e.target);
        return this.files.length > n.getMaxAttachmentsCount()
            ? (m.log('Too many attachments for '.concat(this.id)), this._handleError({ code: c.evJ.TOO_MANY_ATTACHMENTS }), !1)
            : !(this._fileSize() > n.getMaxTotalAttachmentSize()) ||
                  (this._handleError({
                      code: c.evJ.ENTITY_TOO_LARGE,
                      reason: { type: u.xi.POSTCOMPRESSION_SUM_TOO_LARGE }
                  }),
                  !1);
    }
    _filesTooLarge() {
        return this.files.some((e) => e.error === c.evJ.ENTITY_TOO_LARGE);
    }
    setUploadingTextForUI() {
        let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : d.NW.formatToPlainString(d.t.D0noUl, { count: this.files.length }),
            t = this.files.some((e) => e.isImage),
            n = this.files.some((e) => e.isVideo),
            r = this._fileSize();
        m.log('setUploadingTextForUI - total content: '.concat(r, ' bytes and ').concat(this.files.length, ' attachments for ').concat(this.id)),
            (this._file = h(_({}, this._file), {
                totalPostCompressionSize: r,
                currentSize: r,
                name: e,
                hasVideo: n,
                hasImage: t,
                attachmentsCount: this.files.length,
                items: this.files
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
            total: e
        };
    }
    _recomputeProgressByFile() {
        let e = {};
        return (
            this.files.forEach((t) => {
                e[t.id] = (0, s.S)(t.loaded, t.currentSize);
            }),
            e
        );
    }
    cancel() {
        m.log('Cancel called for '.concat(this.id)), this._aborted || ((this._aborted = !0), null != this._cancel && this._cancel(), this.files.forEach((e) => e.cancel()), this._handleComplete());
    }
    async cancelItem(e) {
        m.log('Cancel called for '.concat(this.id, ' for item ').concat(e));
        let t = this.files.find((t) => t.id === e);
        if (null == t || t.status === o.m.CANCELED) return;
        let n = this.files.indexOf(t);
        (this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)]), (this._file = h(_({}, this._file), { items: this.files })), await (0, i.V)(t), t.cancel(), this.emit('cancel-upload-item', this._file), 0 === this.files.length && this.cancel();
    }
    failed() {
        return this.files.some((e) => e.status === o.m.ERROR);
    }
    _remainingUploadCount() {
        let e = this.files;
        return e.length - e.filter((e) => e.status === o.m.COMPLETED).length;
    }
    clear() {
        this.cancel(), (this.files = []);
    }
    constructor(...e) {
        super(...e), f(this, 'files', []);
    }
}
async function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = e.map(
            (e) =>
                new Promise((r, i) => {
                    switch (e.status) {
                        case o.m.NOT_STARTED:
                            e.upload();
                            break;
                        case o.m.COMPLETED:
                            r('complete');
                            break;
                        case o.m.ERROR:
                            t && e.error !== c.evJ.ENTITY_TOO_LARGE ? e.upload() : i(Error('File failed to upload'));
                            break;
                        case o.m.CANCELED:
                            i(Error('Upload is canceled'));
                    }
                    e.on('complete', () => {
                        r('complete');
                    }),
                        e.on('error', () => {
                            i(Error('File '.concat(e.id, ' failed to upload')));
                        }),
                        e.on('progress', (e, t) => {
                            null == n || n(e, t);
                        });
                })
        );
    await Promise.all(r);
}
