n.d(t, {
    $_: function () {
        return A;
    },
    KQ: function () {
        return I;
    },
    MU: function () {
        return p;
    },
    RF: function () {
        return _;
    },
    m0: function () {
        return S;
    },
    rf: function () {
        return O;
    },
    tu: function () {
        return d;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(860911),
    o = n(477690),
    i = n(481060),
    l = n(911969),
    c = n(703656),
    a = n(736408),
    u = n(981631),
    s = n(388032);
let p = 0;
function S(e) {
    return e.id === p;
}
function I() {
    return {
        id: p,
        name: s.intl.string(s.t.E407b2)
    };
}
function d(e) {
    switch (e.id) {
        case 0:
            return i.GlobeEarthIcon;
        case 4:
            return i.TvIcon;
        case 5:
            return i.AnalyticsIcon;
        case 6:
            return i.GameControllerIcon;
        case 8:
            break;
        case 9:
            return i.FriendsIcon;
        case 10:
            return i.WrenchIcon;
    }
    return i.AsteriskIcon;
}
function A(e) {
    let { itemId: t, hash: n, containerWidth: r = parseFloat(o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (0, a.$)({
        itemId: t,
        hash: n,
        containerWidth: r
    });
}
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let r = e[n];
        t.searchParams.set(n, r);
    }
    let n = t.pathname + t.search,
        o = (0, r.Ui)(n, !1);
    (0, c.uL)(o);
}
let E = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};
function _(e) {
    switch (e.type) {
        case l.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return {
                type: u.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case l.ee.YOUTUBE:
            let r = E(e.url);
            if (null != r)
                return {
                    type: u.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: r
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
