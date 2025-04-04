n.d(t, {
    ZP: () => f,
    ow: () => u,
    rG: () => d
}),
    n(266796);
var r = n(836560),
    i = n(392711),
    o = n.n(i),
    a = n(772848),
    s = n(403182),
    l = n(861990);
function c(e, t, n) {
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
var u = (function (e) {
    return (e[(e.REACT_NATIVE = 0)] = 'REACT_NATIVE'), (e[(e.WEB = 1)] = 'WEB'), e;
})({});
function d(e) {
    return void 0 !== e.isVideo && void 0 !== e.isImage;
}
class f extends r.EventEmitter {
    cancel() {}
    resetState() {
        return this;
    }
    constructor(e, t) {
        var n, r;
        if ((super(), c(this, 'id', void 0), c(this, 'uniqueId', void 0), c(this, 'filename', void 0), c(this, 'item', void 0), c(this, 'spoiler', void 0), c(this, 'description', void 0), c(this, 'classification', void 0), c(this, 'isImage', void 0), c(this, 'isVideo', void 0), c(this, 'uploadedFilename', void 0), c(this, 'showLargeMessageDialog', void 0), c(this, 'mimeType', void 0), c(this, 'origin', void 0), c(this, 'durationSecs', void 0), c(this, 'waveform', void 0), c(this, 'isThumbnail', void 0), c(this, 'isRemix', void 0), c(this, 'clip', void 0), (this.item = e), 0 === e.platform)) {
            this.id = null != (n = e.id) ? n : e.uri;
            let t = (0, l.hn)({
                uri: e.uri,
                overrideFilename: e.filename,
                overrideType: e.mimeType
            });
            (this.filename = t.filename), (this.isImage = t.isImage), (this.isVideo = t.isVideo), (this.mimeType = t.type), (this.origin = e.origin), (this.durationSecs = e.durationSecs), (this.waveform = e.waveform), (this.isRemix = e.isRemix);
        } else (this.id = null != (r = e.id) ? r : o().uniqueId('upload')), (this.classification = s.f3(e.file)), (this.isImage = 'image' === this.classification), (this.isVideo = 'video' === this.classification), (this.filename = e.file.name), (this.mimeType = e.file.type);
        (this.isThumbnail = e.isThumbnail), (this.clip = e.clip), (this.uniqueId = (0, a.Z)()), (this.showLargeMessageDialog = t), (this.spoiler = !1), (this.description = null);
    }
}
