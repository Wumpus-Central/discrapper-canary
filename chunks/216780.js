n.d(t, {
    $_: () => u,
    KQ: () => c,
    MU: () => l,
    RF: () => f
}),
    n(301563);
var r = n(477690),
    i = n(911969),
    o = n(472401),
    a = n(981631),
    s = n(388032);
let l = 0;
function c() {
    return {
        id: l,
        name: s.NW.string(s.t.E407b2)
    };
}
function u(e) {
    let { itemId: t, hash: n, containerWidth: i = parseFloat(r.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (0, o.$)({
        itemId: t,
        hash: n,
        containerWidth: i
    });
}
let d = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};
function f(e) {
    switch (e.type) {
        case i.ee.MEDIA_PROXY:
            var t;
            let n = null != (t = e.proxy_url) ? t : e.url;
            return {
                type: a.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case i.ee.YOUTUBE:
            let r = d(e.url);
            if (null != r)
                return {
                    type: a.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: r
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
