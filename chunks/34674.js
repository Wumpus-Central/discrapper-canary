n.d(t, {
    $_: function () {
        return m;
    },
    KQ: function () {
        return f;
    },
    MU: function () {
        return d;
    },
    RF: function () {
        return S;
    },
    m0: function () {
        return p;
    },
    rf: function () {
        return I;
    },
    tu: function () {
        return _;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(860911),
    r = n(477690),
    a = n(481060),
    o = n(911969),
    s = n(703656),
    c = n(736408),
    l = n(981631),
    u = n(388032);
let d = 0;
function p(e) {
    return e.id === d;
}
function f() {
    return {
        id: d,
        name: u.intl.string(u.t.E407b2)
    };
}
function _(e) {
    switch (e.id) {
        case 0:
            return a.GlobeEarthIcon;
        case 4:
            return a.TvIcon;
        case 5:
            return a.AnalyticsIcon;
        case 6:
            return a.GameControllerIcon;
        case 8:
            break;
        case 9:
            return a.FriendsIcon;
        case 10:
            return a.WrenchIcon;
    }
    return a.AsteriskIcon;
}
function m(e) {
    let { itemId: t, hash: n, containerWidth: i = parseFloat(r.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (0, c.$)({
        itemId: t,
        hash: n,
        containerWidth: i
    });
}
function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let i = e[n];
        t.searchParams.set(n, i);
    }
    let n = t.pathname + t.search,
        r = (0, i.Ui)(n, !1);
    (0, s.uL)(r);
}
let h = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};
function S(e) {
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
            let i = h(e.url);
            if (null != i)
                return {
                    type: l.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: i
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
