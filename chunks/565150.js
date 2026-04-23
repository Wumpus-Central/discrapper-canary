n.d(t, { Ay: () => I, Cj: () => u, Sm: () => c, xz: () => d });
var i,
    r,
    a = n(143236),
    s = n(735438),
    _ = n.n(s),
    l = n(132500),
    o = n(453771),
    E = n(292348),
    d = (((i = {})[(i.REACT_NATIVE = 0)] = "REACT_NATIVE"), (i[(i.WEB = 1)] = "WEB"), i);
function c(e) {
    return void 0 !== e.isVideo && void 0 !== e.isImage;
}
var u =
    (((r = {})[(r.FILE_ATTACHMENT = 0)] = "FILE_ATTACHMENT"),
    (r[(r.IMAGE_PICKER = 1)] = "IMAGE_PICKER"),
    (r[(r.IMAGE_EDITOR = 2)] = "IMAGE_EDITOR"),
    r);
class I extends a.EventEmitter {
    id;
    uniqueId;
    filename;
    item;
    spoiler;
    description;
    classification;
    isImage;
    isVideo;
    uploadedFilename;
    mimeType;
    origin;
    durationSecs;
    waveform;
    isThumbnail;
    clip;
    allowOptimization = !0;
    constructor(e) {
        if ((super(), (this.item = e), 0 === e.platform)) {
            this.id = e.id ?? e.uri;
            const t = (0, E.ly)({ uri: e.uri, overrideFilename: e.filename, overrideType: e.mimeType });
            (this.filename = t.filename),
                (this.isImage = t.isImage),
                (this.isVideo = t.isVideo),
                (this.mimeType = t.type),
                (this.origin = e.origin),
                (this.durationSecs = e.durationSecs),
                (this.waveform = e.waveform);
        } else
            (this.id = e.id ?? _().uniqueId("upload")),
                (this.classification = o.TX(e.file)),
                (this.isImage = "image" === this.classification),
                (this.isVideo = "video" === this.classification),
                (this.filename = e.file.name),
                (this.mimeType = e.file.type),
                (this.origin = e.origin);
        (this.isThumbnail = e.isThumbnail),
            (this.clip = e.clip),
            (this.uniqueId = (0, l.A)()),
            (this.spoiler = !1),
            (this.description = null);
    }
    cancel() {}
    resetState() {
        return this;
    }
}
