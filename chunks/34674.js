n.d(t, {
    $_: () => u,
    KQ: () => s,
    MU: () => i,
    RF: () => p
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(301563),
    n(860911);
var r = n(477690);
n(481060);
var c = n(911969);
n(703656);
var l = n(736408),
    a = n(981631),
    o = n(388032);
let i = 0;
function s() {
    return {
        id: i,
        name: o.NW.string(o.t.E407b2)
    };
}
function u(e) {
    let { itemId: t, hash: n, containerWidth: c = parseFloat(r.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (0, l.$)({
        itemId: t,
        hash: n,
        containerWidth: c
    });
}
let d = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};
function p(e) {
    switch (e.type) {
        case c.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return {
                type: a.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case c.ee.YOUTUBE:
            let r = d(e.url);
            if (null != r)
                return {
                    type: a.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: r
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
