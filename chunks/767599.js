n.d(t, { AU: () => d, DH: () => c, lj: () => o, xb: () => _ });
var i = n(319060),
    a = n(155718),
    r = n(225098),
    s = n(652215),
    l = n(985018);
let o = 0;
function d() {
    return { id: o, name: l.intl.string(l.t.E407b7) };
}
function c(e) {
    let { itemId: t, hash: n, containerWidth: a = parseFloat(i.A.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (0, r.D)({ itemId: t, hash: n, containerWidth: a });
}
function _(e) {
    switch (e.type) {
        case a.LZ.MEDIA_PROXY:
            let t = e.proxy_url ?? e.url;
            return { type: s.geh.IMG, width: 0, height: 0, src: t };
        case a.LZ.YOUTUBE:
            let n = ((e) => {
                if (null == e) return null;
                let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
                return null != t ? t[1] : null;
            })(e.url);
            if (null != n) return { type: s.geh.YOUTUBE_VIDEO, youtubeVideoId: n };
    }
    return console.warn("Unsupported carousel item", e), null;
}
