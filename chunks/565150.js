"use strict";
n.d(t, { Ay: () => _, Cj: () => d, Sm: () => c, xz: () => u });
var r = n(143236),
    i = n(735438),
    s = n.n(i),
    a = n(835245),
    o = n(453771),
    l = n(292348),
    u = (function (e) {
        return (e[(e.REACT_NATIVE = 0)] = "REACT_NATIVE"), (e[(e.WEB = 1)] = "WEB"), e;
    })({});
function c(e) {
    return void 0 !== e.isVideo && void 0 !== e.isImage;
}
var d = (function (e) {
    return (
        (e[(e.FILE_ATTACHMENT = 0)] = "FILE_ATTACHMENT"),
        (e[(e.IMAGE_PICKER = 1)] = "IMAGE_PICKER"),
        (e[(e.IMAGE_EDITOR = 2)] = "IMAGE_EDITOR"),
        e
    );
})({});
class _ extends r.EventEmitter {
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
            const t = (0, l.ly)({ uri: e.uri, overrideFilename: e.filename, overrideType: e.mimeType });
            (this.filename = t.filename),
                (this.isImage = t.isImage),
                (this.isVideo = t.isVideo),
                (this.mimeType = t.type),
                (this.origin = e.origin),
                (this.durationSecs = e.durationSecs),
                (this.waveform = e.waveform);
        } else
            (this.id = e.id ?? s().uniqueId("upload")),
                (this.classification = o.TX(e.file)),
                (this.isImage = "image" === this.classification),
                (this.isVideo = "video" === this.classification),
                (this.filename = e.file.name),
                (this.mimeType = e.file.type),
                (this.origin = e.origin);
        (this.isThumbnail = e.isThumbnail),
            (this.clip = e.clip),
            (this.uniqueId = (0, a.A)()),
            (this.spoiler = !1),
            (this.description = null);
    }
    cancel() {}
    resetState() {
        return this;
    }
}
