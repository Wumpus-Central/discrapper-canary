n.d(t, {
    Ay: () => p,
    Cj: () => f,
    Sm: () => d,
    xz: () => u,
}),
    n(228524);
var r = n(143236),
    i = n(735438),
    a = n.n(i),
    s = n(835245),
    o = n(453771),
    l = n(292348);

function c(e, t, n) {
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
var u = (function (e) {
    return (e[(e.REACT_NATIVE = 0)] = "REACT_NATIVE"), (e[(e.WEB = 1)] = "WEB"), e;
})({});

function d(e) {
    return void 0 !== e.isVideo && void 0 !== e.isImage;
}
var f = (function (e) {
    return (
        (e[(e.FILE_ATTACHMENT = 0)] = "FILE_ATTACHMENT"),
        (e[(e.IMAGE_PICKER = 1)] = "IMAGE_PICKER"),
        (e[(e.IMAGE_EDITOR = 2)] = "IMAGE_EDITOR"),
        e
    );
})({});
class p extends r.EventEmitter {
    cancel() {}
    resetState() {
        return this;
    }
    constructor(e) {
        var t, n;
        if (
            (super(),
            c(this, "id", void 0),
            c(this, "uniqueId", void 0),
            c(this, "filename", void 0),
            c(this, "item", void 0),
            c(this, "spoiler", void 0),
            c(this, "description", void 0),
            c(this, "classification", void 0),
            c(this, "isImage", void 0),
            c(this, "isVideo", void 0),
            c(this, "uploadedFilename", void 0),
            c(this, "mimeType", void 0),
            c(this, "origin", void 0),
            c(this, "durationSecs", void 0),
            c(this, "waveform", void 0),
            c(this, "isThumbnail", void 0),
            c(this, "clip", void 0),
            (this.item = e),
            0 === e.platform)
        ) {
            this.id = null != (t = e.id) ? t : e.uri;
            const n = (0, l.ly)({
                uri: e.uri,
                overrideFilename: e.filename,
                overrideType: e.mimeType,
            });
            (this.filename = n.filename),
                (this.isImage = n.isImage),
                (this.isVideo = n.isVideo),
                (this.mimeType = n.type),
                (this.origin = e.origin),
                (this.durationSecs = e.durationSecs),
                (this.waveform = e.waveform);
        } else
            (this.id = null != (n = e.id) ? n : a().uniqueId("upload")),
                (this.classification = o.TX(e.file)),
                (this.isImage = "image" === this.classification),
                (this.isVideo = "video" === this.classification),
                (this.filename = e.file.name),
                (this.mimeType = e.file.type),
                (this.origin = e.origin);
        (this.isThumbnail = e.isThumbnail),
            (this.clip = e.clip),
            (this.uniqueId = (0, s.A)()),
            (this.spoiler = !1),
            (this.description = null);
    }
}
