n.d(t, {
    $_: () => d,
    KQ: () => _,
    MU: () => c,
    RF: () => s
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(860911);
var i = n(477690);
n(481060);
var o = n(911969);
n(703656);
var a = n(736408),
    l = n(981631),
    r = n(388032);
let c = 0;
function _() {
    return {
        id: c,
        name: r.intl.string(r.t.E407b2)
    };
}
function d(e) {
    let { itemId: t, hash: n, containerWidth: o = parseFloat(i.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (0, a.$)({
        itemId: t,
        hash: n,
        containerWidth: o
    });
}
let u = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};
function s(e) {
    switch (e.type) {
        case o.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return {
                type: l.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case o.ee.YOUTUBE:
            let i = u(e.url);
            if (null != i)
                return {
                    type: l.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: i
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
