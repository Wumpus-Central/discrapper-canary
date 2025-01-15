n.d(t, {
    $_: function () {
        return _;
    },
    KQ: function () {
        return O;
    },
    MU: function () {
        return S;
    },
    RF: function () {
        return L;
    },
    m0: function () {
        return d;
    },
    rf: function () {
        return P;
    },
    tu: function () {
        return E;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(315314);
var r = n(860911),
    o = n(477690),
    i = n(481060),
    l = n(911969),
    c = n(134432),
    a = n(703656),
    u = n(768581),
    s = n(981631),
    p = n(388032);
let S = 0,
    { API_ENDPOINT: I, CDN_HOST: A } = window.GLOBAL_ENV;
function d(e) {
    return e.id === S;
}
function O() {
    return {
        id: S,
        name: p.intl.string(p.t.E407b2)
    };
}
function E(e) {
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
function _(e) {
    let { itemId: t, hash: n } = e,
        r = new URLSearchParams({ size: (0, c.oO)(parseFloat(o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, c.x_)()).toString() }).toString(),
        i = u.$k ? 'webp' : 'png';
    return null != A
        ? ''.concat(location.protocol, '//').concat(A, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(i, '?').concat(r)
        : ''
              .concat(location.protocol)
              .concat(I)
              .concat(s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, i), '?')
              .concat(r);
}
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let r = e[n];
        t.searchParams.set(n, r);
    }
    let n = t.pathname + t.search,
        o = (0, r.Ui)(n, !1);
    (0, a.uL)(o);
}
let y = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};
function L(e) {
    switch (e.type) {
        case l.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return {
                type: s.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case l.ee.YOUTUBE:
            let r = y(e.url);
            if (null != r)
                return {
                    type: s.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: r
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
