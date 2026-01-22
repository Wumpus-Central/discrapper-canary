n.d(t, {
    AU: () => c,
    DH: () => u,
    lj: () => l,
    xb: () => f,
}),
    n(747238);
var r = n(319060),
    i = n(155718),
    a = n(225098),
    s = n(652215),
    o = n(985018);
let l = 0;

function c() {
    return {
        id: l,
        name: o.intl.string(o.t.E407b7),
    };
}

function u(e) {
    let { itemId: t, hash: n, containerWidth: i = parseFloat(r.A.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (0, a.D)({
        itemId: t,
        hash: n,
        containerWidth: i,
    });
}
let d = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};

function f(e) {
    switch (e.type) {
        case i.LZ.MEDIA_PROXY:
            var t;
            let n = null != (t = e.proxy_url) ? t : e.url;
            return {
                type: s.geh.IMG,
                width: 0,
                height: 0,
                src: n,
            };
        case i.LZ.YOUTUBE:
            let r = d(e.url);
            if (null != r)
                return {
                    type: s.geh.YOUTUBE_VIDEO,
                    youtubeVideoId: r,
                };
    }
    return console.warn("Unsupported carousel item", e), null;
}
