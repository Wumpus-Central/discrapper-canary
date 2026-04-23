n.d(t, { AU: () => o, DH: () => E, lj: () => l, xb: () => d });
var i = n(319060),
    r = n(155718),
    a = n(225098),
    s = n(652215),
    _ = n(985018);
let l = 0;
function o() {
    return { id: l, name: _.intl.string(_.t.E407b7) };
}
function E(e) {
    let { itemId: t, hash: n, containerWidth: r = parseFloat(i.A.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (0, a.D)({ itemId: t, hash: n, containerWidth: r });
}
function d(e) {
    switch (e.type) {
        case r.LZ.MEDIA_PROXY:
            let t = e.proxy_url ?? e.url;
            return { type: s.geh.IMG, width: 0, height: 0, src: t };
        case r.LZ.YOUTUBE:
            let n = ((e) => {
                if (null == e) return null;
                let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
                return null != t ? t[1] : null;
            })(e.url);
            if (null != n) return { type: s.geh.YOUTUBE_VIDEO, youtubeVideoId: n };
    }
    return console.warn("Unsupported carousel item", e), null;
}
