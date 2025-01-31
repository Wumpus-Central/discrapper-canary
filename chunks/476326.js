n.d(t, {
    ZP: () => f,
    ow: () => c,
    rG: () => d
});
var i = n(836560),
    r = n(392711),
    a = n.n(r),
    s = n(772848),
    o = n(403182),
    l = n(861990);
function u(e, t, n) {
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
var c = (function (e) {
    return (e[(e.REACT_NATIVE = 0)] = 'REACT_NATIVE'), (e[(e.WEB = 1)] = 'WEB'), e;
})({});
function d(e) {
    return void 0 !== e.isVideo && void 0 !== e.isImage;
}
class f extends i.EventEmitter {
    cancel() {}
    resetState() {
        return this;
    }
    constructor(e, t) {
        var n, i;
        if ((super(), u(this, 'id', void 0), u(this, 'uniqueId', void 0), u(this, 'filename', void 0), u(this, 'item', void 0), u(this, 'spoiler', void 0), u(this, 'description', void 0), u(this, 'classification', void 0), u(this, 'isImage', void 0), u(this, 'isVideo', void 0), u(this, 'uploadedFilename', void 0), u(this, 'showLargeMessageDialog', void 0), u(this, 'mimeType', void 0), u(this, 'origin', void 0), u(this, 'durationSecs', void 0), u(this, 'waveform', void 0), u(this, 'isThumbnail', void 0), u(this, 'isRemix', void 0), u(this, 'clip', void 0), (this.item = e), 0 === e.platform)) {
            this.id = null !== (n = e.id) && void 0 !== n ? n : e.uri;
            let t = (0, l.hn)({
                uri: e.uri,
                overrideFilename: e.filename,
                overrideType: e.mimeType
            });
            (this.filename = t.filename), (this.isImage = t.isImage), (this.isVideo = t.isVideo), (this.mimeType = t.type), (this.origin = e.origin), (this.durationSecs = e.durationSecs), (this.waveform = e.waveform), (this.isRemix = e.isRemix);
        } else (this.id = null !== (i = e.id) && void 0 !== i ? i : a().uniqueId('upload')), (this.classification = o.f3(e.file)), (this.isImage = 'image' === this.classification), (this.isVideo = 'video' === this.classification), (this.filename = e.file.name), (this.mimeType = e.file.type);
        (this.isThumbnail = e.isThumbnail), (this.clip = e.clip), (this.uniqueId = (0, s.Z)()), (this.showLargeMessageDialog = t), (this.spoiler = !1), (this.description = null);
    }
}
