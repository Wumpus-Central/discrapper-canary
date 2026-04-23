"use strict";
n.d(t, { AU: () => u, DH: () => c, lj: () => l, xb: () => d });
var r = n(319060),
    i = n(155718),
    s = n(225098),
    a = n(652215),
    o = n(985018);
let l = 0;
function u() {
    return { id: l, name: o.intl.string(o.t.E407b7) };
}
function c(e) {
    let { itemId: t, hash: n, containerWidth: i = parseFloat(r.A.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (0, s.D)({ itemId: t, hash: n, containerWidth: i });
}
function d(e) {
    switch (e.type) {
        case i.LZ.MEDIA_PROXY:
            let t = e.proxy_url ?? e.url;
            return { type: a.geh.IMG, width: 0, height: 0, src: t };
        case i.LZ.YOUTUBE:
            let n = ((e) => {
                if (null == e) return null;
                let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
                return null != t ? t[1] : null;
            })(e.url);
            if (null != n) return { type: a.geh.YOUTUBE_VIDEO, youtubeVideoId: n };
    }
    return console.warn("Unsupported carousel item", e), null;
}
