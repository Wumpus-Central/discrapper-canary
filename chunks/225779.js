r.d(n, {
    DM: function () {
        return p;
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
        return y;
    },
    u3: function () {
        return E;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(873546),
    l = r(481060),
    u = r(626135),
    c = r(981631),
    d = r(388032),
    f = r(532623);
let p = Object.freeze({
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
    let { children: n, className: r, minor: a = !1, ...s } = e;
    return (0, i.jsx)(l.FocusRing, {
        children: (0, i.jsx)('button', {
            className: o()(f.button, r, { [f.buttonMinor]: a }),
            ...s,
            children: n
        })
    });
}
function _(e, n) {
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
    let { children: n, noticeType: r, additionalTrackingProps: a, ...o } = e;
    return (0, i.jsx)(h, {
        ...o,
        onClick: (e) => {
            null != o.onClick && o.onClick(e), _(r, a);
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
function y(e) {
    let { color: n = p.DEFAULT, className: r, style: a, children: l } = e;
    return (0, i.jsx)('div', {
        className: o()(f.notice, { [f.isMobile]: s.tq }, r, n),
        style: null != a ? a : void 0,
        children: l
    });
}
