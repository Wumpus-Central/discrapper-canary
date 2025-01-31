n.d(t, {
    DM: () => f,
    Ey: () => _,
    No: () => m,
    Ry: () => E,
    qX: () => v,
    u3: () => g
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(873546),
    o = n(481060),
    l = n(626135),
    u = n(981631),
    c = n(388032),
    d = n(532623);
let f = Object.freeze({
    DEFAULT: d.colorDefault,
    NEUTRAL: d.colorNeutral,
    BRAND: d.colorBrand,
    WARNING: d.colorWarning,
    DANGER: d.colorDanger,
    INFO: d.colorInfo,
    STREAMER_MODE: d.colorStreamerMode,
    CUSTOM: d.colorCustom,
    SPOTIFY: d.colorSpotify,
    PLAYSTATION: d.colorPlayStation,
    PREMIUM_TIER_0: d.colorPremiumTier0,
    PREMIUM_TIER_1: d.colorPremiumTier1,
    PREMIUM_TIER_2: d.colorPremiumTier2
});
function _(e) {
    let { children: t, className: n, minor: r = !1, ...s } = e;
    return (0, i.jsx)(o.tEY, {
        children: (0, i.jsx)('button', {
            className: a()(d.button, n, { [d.buttonMinor]: r }),
            ...s,
            children: t
        })
    });
}
function p(e, t) {
    null != e &&
        l.default.track(u.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
            notice_type: e,
            ...t
        });
}
function h(e) {
    null != e && l.default.track(u.rMx.APP_NOTICE_CLOSED, { notice_type: e });
}
function m(e) {
    let { children: t, noticeType: n, additionalTrackingProps: r, ...a } = e;
    return (0, i.jsx)(_, {
        ...a,
        onClick: (e) => {
            null != a.onClick && a.onClick(e), p(n, r);
        },
        children: t
    });
}
function g(e) {
    let { children: t, href: n, ...r } = e;
    return (0, i.jsx)(o.eee, {
        ...r,
        className: d.button,
        href: n,
        children: t
    });
}
function E(e) {
    let { onClick: t, noticeType: n } = e;
    return (0, i.jsx)(o.P3F, {
        focusProps: { offset: 6 },
        className: d.closeButton,
        onClick: () => {
            t(), h(n);
        },
        'aria-label': c.intl.string(c.t.WAI6xs),
        children: (0, i.jsx)(o.Dio, {
            size: 'sm',
            color: 'currentColor',
            className: d.closeIcon
        })
    });
}
function v(e) {
    let { color: t = f.DEFAULT, className: n, style: r, children: o } = e;
    return (0, i.jsx)('div', {
        className: a()(d.notice, { [d.isMobile]: s.tq }, n, t),
        style: null != r ? r : void 0,
        children: o
    });
}
