"use strict";
n.d(t, { AU: () => u, DH: () => c, lj: () => l, xb: () => _ });
var r = n(319060),
    i = n(155718),
    a = n(225098),
    s = n(652215),
    o = n(985018);
let l = 0;
function u() {
    return { id: l, name: o.intl.string(o.t.E407b7) };
}
function c(e) {
    let { itemId: t, hash: n, containerWidth: i = parseFloat(r.A.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (0, a.D)({ itemId: t, hash: n, containerWidth: i });
}
let d = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};
function _(e) {
    switch (e.type) {
        case i.LZ.MEDIA_PROXY:
            let t = e.proxy_url ?? e.url;
            return { type: s.geh.IMG, width: 0, height: 0, src: t };
        case i.LZ.YOUTUBE:
            let n = d(e.url);
            if (null != n) return { type: s.geh.YOUTUBE_VIDEO, youtubeVideoId: n };
    }
    return console.warn("Unsupported carousel item", e), null;
}
