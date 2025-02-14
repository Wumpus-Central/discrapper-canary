n.d(t, {
    $_: () => _,
    KQ: () => s,
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
var a = n(477690);
n(481060);
var i = n(911969);
n(703656);
var o = n(736408),
    r = n(981631),
    l = n(388032);
let c = 0;
function s() {
    return {
        id: c,
        name: l.intl.string(l.t.E407b2)
    };
}
function _(e) {
    let { itemId: t, hash: n, containerWidth: i = parseFloat(a.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
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
function u(e) {
    switch (e.type) {
        case i.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return {
                type: r.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case i.ee.YOUTUBE:
            let a = d(e.url);
            if (null != a)
                return {
                    type: r.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: a
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
