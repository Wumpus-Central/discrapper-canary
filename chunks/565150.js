n.d(t, { Ay: () => A, Cj: () => u, Sm: () => E, xz: () => _ });
var i,
    a,
    r = n(143236),
    s = n(735438),
    l = n.n(s),
    o = n(132500),
    d = n(453771),
    c = n(292348),
    _ = (((i = {})[(i.REACT_NATIVE = 0)] = "REACT_NATIVE"), (i[(i.WEB = 1)] = "WEB"), i);
function E(e) {
    return void 0 !== e.isVideo && void 0 !== e.isImage;
}
var u =
    (((a = {})[(a.FILE_ATTACHMENT = 0)] = "FILE_ATTACHMENT"),
    (a[(a.IMAGE_PICKER = 1)] = "IMAGE_PICKER"),
    (a[(a.IMAGE_EDITOR = 2)] = "IMAGE_EDITOR"),
    a);
class A extends r.EventEmitter {
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
            const t = (0, c.ly)({ uri: e.uri, overrideFilename: e.filename, overrideType: e.mimeType });
            (this.filename = t.filename),
                (this.isImage = t.isImage),
                (this.isVideo = t.isVideo),
                (this.mimeType = t.type),
                (this.origin = e.origin),
                (this.durationSecs = e.durationSecs),
                (this.waveform = e.waveform);
        } else
            (this.id = e.id ?? l().uniqueId("upload")),
                (this.classification = d.TX(e.file)),
                (this.isImage = "image" === this.classification),
                (this.isVideo = "video" === this.classification),
                (this.filename = e.file.name),
                (this.mimeType = e.file.type),
                (this.origin = e.origin);
        (this.isThumbnail = e.isThumbnail),
            (this.clip = e.clip),
            (this.uniqueId = (0, o.A)()),
            (this.spoiler = !1),
            (this.description = null);
    }
    cancel() {}
    resetState() {
        return this;
    }
}
