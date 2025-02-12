n.d(t, {
    $_: () => u,
    KQ: () => s,
    MU: () => r,
    RF: () => T
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(860911);
var l = n(477690);
n(481060);
var a = n(911969);
n(703656);
var c = n(736408),
    o = n(981631),
    i = n(388032);
let r = 0;
function s() {
    return {
        id: r,
        name: i.intl.string(i.t.E407b2)
    };
}
function u(e) {
    let { itemId: t, hash: n, containerWidth: a = parseFloat(l.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (0, c.$)({
        itemId: t,
        hash: n,
        containerWidth: a
    });
}
let d = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};
function T(e) {
    switch (e.type) {
        case a.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return {
                type: o.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case a.ee.YOUTUBE:
            let l = d(e.url);
            if (null != l)
                return {
                    type: o.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: l
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
