n.d(t, {
    $_: () => _,
    KQ: () => u,
    MU: () => E,
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
var l = n(477690);
n(481060);
var i = n(911969);
n(703656);
var a = n(736408),
    r = n(981631),
    o = n(388032);
let E = 0;
function u() {
    return {
        id: E,
        name: o.intl.string(o.t.E407b2)
    };
}
function _(e) {
    let { itemId: t, hash: n, containerWidth: i = parseFloat(l.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (0, a.$)({
        itemId: t,
        hash: n,
        containerWidth: i
    });
}
let c = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};
function d(e) {
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
            let l = c(e.url);
            if (null != l)
                return {
                    type: r.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: l
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
