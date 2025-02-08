n.d(t, {
    $_: () => s,
    KQ: () => _,
    MU: () => c,
    RF: () => u
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
var a = n(911969);
n(703656);
var o = n(736408),
    r = n(981631),
    l = n(388032);
let c = 0;
function _() {
    return {
        id: c,
        name: l.intl.string(l.t.E407b2)
    };
}
function s(e) {
    let { itemId: t, hash: n, containerWidth: a = parseFloat(i.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (0, o.$)({
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
function u(e) {
    switch (e.type) {
        case a.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return {
                type: r.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case a.ee.YOUTUBE:
            let i = d(e.url);
            if (null != i)
                return {
                    type: r.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: i
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
