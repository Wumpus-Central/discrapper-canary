r.d(n, {
    ZP: function () {
        return h;
    },
    ow: function () {
        return i;
    },
    rG: function () {
        return p;
    }
});
var i,
    a,
    o = r(836560);
var s = r(392711),
    l = r.n(s),
    u = r(772848),
    c = r(403182),
    d = r(861990);
function f(e, n, r) {
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
function p(e) {
    return void 0 !== e.isVideo && void 0 !== e.isImage;
}
!(function (e) {
    (e[(e.REACT_NATIVE = 0)] = 'REACT_NATIVE'), (e[(e.WEB = 1)] = 'WEB');
})(i || (i = {})),
    !(function (e) {
        (e[(e.FILE_ATTACHMENT = 0)] = 'FILE_ATTACHMENT'), (e[(e.IMAGE_PICKER = 1)] = 'IMAGE_PICKER');
    })(a || (a = {}));
class h extends o.EventEmitter {
    cancel() {}
    resetState() {
        return this;
    }
    constructor(e, n) {
        var r, i;
        if ((super(), f(this, 'id', void 0), f(this, 'uniqueId', void 0), f(this, 'filename', void 0), f(this, 'item', void 0), f(this, 'spoiler', void 0), f(this, 'description', void 0), f(this, 'classification', void 0), f(this, 'isImage', void 0), f(this, 'isVideo', void 0), f(this, 'uploadedFilename', void 0), f(this, 'showLargeMessageDialog', void 0), f(this, 'mimeType', void 0), f(this, 'origin', void 0), f(this, 'durationSecs', void 0), f(this, 'waveform', void 0), f(this, 'isThumbnail', void 0), f(this, 'isRemix', void 0), f(this, 'clip', void 0), (this.item = e), 0 === e.platform)) {
            this.id = null !== (r = e.id) && void 0 !== r ? r : e.uri;
            let n = (0, d.hn)({
                uri: e.uri,
                overrideFilename: e.filename,
                overrideType: e.mimeType
            });
            (this.filename = n.filename), (this.isImage = n.isImage), (this.isVideo = n.isVideo), (this.mimeType = n.type), (this.origin = e.origin), (this.durationSecs = e.durationSecs), (this.waveform = e.waveform), (this.isRemix = e.isRemix);
        } else (this.id = null !== (i = e.id) && void 0 !== i ? i : l().uniqueId('upload')), (this.classification = c.f3(e.file)), (this.isImage = 'image' === this.classification), (this.isVideo = 'video' === this.classification), (this.filename = e.file.name), (this.mimeType = e.file.type);
        (this.isThumbnail = e.isThumbnail), (this.clip = e.clip), (this.uniqueId = (0, u.Z)()), (this.showLargeMessageDialog = n), (this.spoiler = !1), (this.description = null);
    }
}
