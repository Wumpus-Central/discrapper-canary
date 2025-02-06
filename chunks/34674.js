n.d(t, {
    $_: () => s,
    KQ: () => u,
    MU: () => c,
    RF: () => d
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(860911);
var a = n(477690);
n(481060);
var r = n(911969);
n(703656);
var l = n(736408),
    o = n(981631),
    i = n(388032);
let c = 0;
function u() {
    return {
        id: c,
        name: i.intl.string(i.t.E407b2)
    };
}
function s(e) {
    let { itemId: t, hash: n, containerWidth: r = parseFloat(a.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (0, l.$)({
        itemId: t,
        hash: n,
        containerWidth: r
    });
}
let p = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};
function d(e) {
    switch (e.type) {
        case r.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return {
                type: o.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case r.ee.YOUTUBE:
            let a = p(e.url);
            if (null != a)
                return {
                    type: o.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: a
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
