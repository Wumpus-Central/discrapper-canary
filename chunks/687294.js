r.d(n, {
    $: function () {
        return v;
    },
    Z: function () {
        return E;
    }
});
var i = r(724458);
var a = r(47120);
var o = r(411104);
var s = r(259443),
    l = r(510990),
    u = r(141795),
    c = r(983544),
    d = r(596956),
    f = r(865275),
    p = r(981631),
    h = r(959517),
    _ = r(388032);
function m(e, n, r) {
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
let g = new s.Yd('CloudUploaderBase.tsx');
class E extends f.Z {
    _fileSize() {
        return this.files.reduce((e, n) => {
            var r;
            return (e += null !== (r = n.currentSize) && void 0 !== r ? r : 0);
        }, 0);
    }
    async compressAndCheckFileSize() {
        var e, n;
        let r = (0, c.F)(null === (n = this.files[0]) || void 0 === n ? void 0 : null === (e = n.item) || void 0 === e ? void 0 : e.target);
        return this.files.length > r.getMaxAttachmentsCount()
            ? (g.log('Too many attachments for '.concat(this.id)), this._handleError({ code: p.evJ.TOO_MANY_ATTACHMENTS }), !1)
            : !(this._fileSize() > r.getMaxTotalAttachmentSize()) ||
                  (this._handleError({
                      code: p.evJ.ENTITY_TOO_LARGE,
                      reason: { type: h.xi.POSTCOMPRESSION_SUM_TOO_LARGE }
                  }),
                  !1);
    }
    _filesTooLarge() {
        return this.files.some((e) => e.error === p.evJ.ENTITY_TOO_LARGE);
    }
    setUploadingTextForUI() {
        let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : _.intl.formatToPlainString(_.t.D0noUl, { count: this.files.length }),
            n = this.files.some((e) => e.isImage),
            r = this.files.some((e) => e.isVideo),
            i = this._fileSize();
        g.log('setUploadingTextForUI - total content: '.concat(i, ' bytes and ').concat(this.files.length, ' attachments for ').concat(this.id)),
            (this._file = {
                ...this._file,
                totalPostCompressionSize: i,
                currentSize: i,
                name: e,
                hasVideo: r,
                hasImage: n,
                attachmentsCount: this.files.length,
                items: this.files
            });
    }
    _recomputeProgress() {
        let { loaded: e, total: n } = this._recomputeProgressTotal(),
            r = this._recomputeProgressByFile();
        this._handleProgress(e, n, r);
    }
    _recomputeProgressTotal() {
        let e = this._fileSize();
        return {
            loaded: this.files.reduce((e, n) => {
                var r;
                return (e += null !== (r = n.loaded) && void 0 !== r ? r : 0);
            }, 0),
            total: e
        };
    }
    _recomputeProgressByFile() {
        let e = {};
        return (
            this.files.forEach((n) => {
                e[n.id] = (0, d.S)(n.loaded, n.currentSize);
            }),
            e
        );
    }
    cancel() {
        if ((g.log('Cancel called for '.concat(this.id)), !this._aborted)) (this._aborted = !0), null != this._cancel && this._cancel(), this.files.forEach((e) => e.cancel()), this._handleComplete();
    }
    async cancelItem(e) {
        g.log('Cancel called for '.concat(this.id, ' for item ').concat(e));
        let n = this.files.find((n) => n.id === e);
        if (null == n || n.status === u.m.CANCELED) return;
        let r = this.files.indexOf(n);
        (this.files = [...this.files.slice(0, r), ...this.files.slice(r + 1)]),
            (this._file = {
                ...this._file,
                items: this.files
            }),
            await (0, l.V)(n),
            n.cancel(),
            this.emit('cancel-upload-item', this._file),
            0 === this.files.length && this.cancel();
    }
    failed() {
        return this.files.some((e) => e.status === u.m.ERROR);
    }
    _remainingUploadCount() {
        let e = this.files;
        return e.length - e.filter((e) => e.status === u.m.COMPLETED).length;
    }
    clear() {
        this.cancel(), (this.files = []);
    }
    constructor(...e) {
        super(...e), m(this, 'files', []);
    }
}
async function v(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 ? arguments[2] : void 0,
        i = e.map(
            (e) =>
                new Promise((i, a) => {
                    switch (e.status) {
                        case u.m.NOT_STARTED:
                            e.upload();
                            break;
                        case u.m.COMPLETED:
                            i('complete');
                            break;
                        case u.m.ERROR:
                            n && e.error !== p.evJ.ENTITY_TOO_LARGE ? e.upload() : a(Error('File failed to upload'));
                            break;
                        case u.m.CANCELED:
                            a(Error('Upload is canceled'));
                    }
                    e.on('complete', () => {
                        i('complete');
                    }),
                        e.on('error', () => {
                            a(Error('File '.concat(e.id, ' failed to upload')));
                        }),
                        e.on('progress', (e, n) => {
                            null == r || r(e, n);
                        });
                })
        );
    await Promise.all(i);
}
