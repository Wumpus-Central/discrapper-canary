r.d(n, {
    DM: function () {
        return _;
    },
    Ey: function () {
        return h;
    },
    No: function () {
        return g;
    },
    Ry: function () {
        return v;
    },
    qX: function () {
        return I;
    },
    u3: function () {
        return E;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(873546),
    l = r(481060),
    u = r(626135),
    c = r(981631),
    d = r(388032),
    f = r(532623);
let _ = Object.freeze({
    DEFAULT: f.colorDefault,
    NEUTRAL: f.colorNeutral,
    BRAND: f.colorBrand,
    WARNING: f.colorWarning,
    DANGER: f.colorDanger,
    INFO: f.colorInfo,
    STREAMER_MODE: f.colorStreamerMode,
    CUSTOM: f.colorCustom,
    SPOTIFY: f.colorSpotify,
    PLAYSTATION: f.colorPlayStation,
    PREMIUM_TIER_0: f.colorPremiumTier0,
    PREMIUM_TIER_1: f.colorPremiumTier1,
    PREMIUM_TIER_2: f.colorPremiumTier2
});
function h(e) {
    let { children: n, className: r, minor: a = !1, ...o } = e;
    return (0, i.jsx)(l.FocusRing, {
        children: (0, i.jsx)('button', {
            className: s()(f.button, r, { [f.buttonMinor]: a }),
            ...o,
            children: n
        })
    });
}
function p(e, n) {
    null != e &&
        u.default.track(c.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
            notice_type: e,
            ...n
        });
}
function m(e) {
    null != e && u.default.track(c.rMx.APP_NOTICE_CLOSED, { notice_type: e });
}
function g(e) {
    let { children: n, noticeType: r, additionalTrackingProps: a, ...s } = e;
    return (0, i.jsx)(h, {
        ...s,
        onClick: (e) => {
            null != s.onClick && s.onClick(e), p(r, a);
        },
        children: n
    });
}
function E(e) {
    let { children: n, href: r, ...a } = e;
    return (0, i.jsx)(l.Anchor, {
        ...a,
        className: f.button,
        href: r,
        children: n
    });
}
function v(e) {
    let { onClick: n, noticeType: r } = e;
    return (0, i.jsx)(l.Clickable, {
        focusProps: { offset: 6 },
        className: f.closeButton,
        onClick: () => {
            n(), m(r);
        },
        'aria-label': d.intl.string(d.t.WAI6xs),
        children: (0, i.jsx)(l.XSmallIcon, {
            size: 'sm',
            color: 'currentColor',
            className: f.closeIcon
        })
    });
}
function I(e) {
    let { color: n = _.DEFAULT, className: r, style: a, children: l } = e;
    return (0, i.jsx)('div', {
        className: s()(f.notice, { [f.isMobile]: o.tq }, r, n),
        style: null != a ? a : void 0,
        children: l
    });
}
