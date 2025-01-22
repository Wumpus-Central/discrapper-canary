n.d(e, {
    $_: function () {
        return s;
    },
    KQ: function () {
        return u;
    },
    MU: function () {
        return c;
    },
    RF: function () {
        return d;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(860911);
var r = n(477690);
n(481060);
var l = n(911969);
n(703656);
var o = n(736408),
    a = n(981631),
    i = n(388032);
let c = 0;
function u() {
    return {
        id: c,
        name: i.intl.string(i.t.E407b2)
    };
}
function s(t) {
    let { itemId: e, hash: n, containerWidth: l = parseFloat(r.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = t;
    return (0, o.$)({
        itemId: e,
        hash: n,
        containerWidth: l
    });
}
let p = (t) => {
    if (null == t) return null;
    let e = t.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != e ? e[1] : null;
};
function d(t) {
    switch (t.type) {
        case l.ee.MEDIA_PROXY:
            var e;
            let n = null !== (e = t.proxy_url) && void 0 !== e ? e : t.url;
            return {
                type: a.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case l.ee.YOUTUBE:
            let r = p(t.url);
            if (null != r)
                return {
                    type: a.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: r
                };
    }
    return console.warn('Unsupported carousel item', t), null;
}
