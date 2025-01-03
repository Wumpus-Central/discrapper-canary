n.d(t, {
    $_: function () {
        return S;
    },
    KQ: function () {
        return h;
    },
    MU: function () {
        return p;
    },
    RF: function () {
        return C;
    },
    m0: function () {
        return m;
    },
    rf: function () {
        return b;
    },
    tu: function () {
        return I;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(315314);
var i = n(860911),
    r = n(477690),
    a = n(481060),
    o = n(911969),
    s = n(134432),
    l = n(703656),
    c = n(768581),
    u = n(981631),
    d = n(388032);
let p = 0,
    { API_ENDPOINT: f, CDN_HOST: _ } = window.GLOBAL_ENV;
function m(e) {
    return e.id === p;
}
function h() {
    return {
        id: p,
        name: d.intl.string(d.t.E407b2)
    };
}
function I(e) {
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
function S(e) {
    let { itemId: t, hash: n } = e,
        i = new URLSearchParams({ size: (0, s.oO)(parseFloat(r.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, s.x_)()).toString() }).toString(),
        a = c.$k ? 'webp' : 'png';
    return null != _
        ? ''.concat(location.protocol, '//').concat(_, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(a, '?').concat(i)
        : ''
              .concat(location.protocol)
              .concat(f)
              .concat(u.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, a), '?')
              .concat(i);
}
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let i = e[n];
        t.searchParams.set(n, i);
    }
    let n = t.pathname + t.search,
        r = (0, i.Ui)(n, !1);
    (0, l.uL)(r);
}
let g = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};
function C(e) {
    switch (e.type) {
        case o.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return {
                type: u.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case o.ee.YOUTUBE:
            let i = g(e.url);
            if (null != i)
                return {
                    type: u.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: i
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
