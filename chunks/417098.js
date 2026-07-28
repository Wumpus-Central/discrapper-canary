"use strict";
n.d(t, { $T: () => m, Hv: () => h, PM: () => T, Z_: () => f, eC: () => p, zr: () => I });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(607399),
    l = n(259678),
    o = n(349288),
    d = n(939249),
    c = n(789645),
    u = n(174459),
    _ = n(652215),
    E = n(375708),
    A = n(396769);
let h = Object.freeze({
    DEFAULT: A.Lx,
    NEUTRAL: A.NT,
    BRAND: A.x8,
    WARNING: A.SO,
    DANGER: A.HW,
    INFO: A.io,
    STREAMER_MODE: A.kL,
    CUSTOM: A.P4,
    SPOTIFY: A.AU,
    PLAYSTATION: A._9,
    PREMIUM_TIER_0: A.zw,
    PREMIUM_TIER_1: A.G_,
    PREMIUM_TIER_2: A.NS,
});
function I(e) {
    let { children: t, className: n, minor: r = !1, ...s } = e;
    return (0, i.jsx)(l.vN, {
        children: (0, i.jsx)("button", { className: a()(A.x6, n, { [A.oy]: r }), ...s, children: t }),
    });
}
function f(e) {
    let { children: t, noticeType: n, ...r } = e;
    return (0, i.jsx)(I, {
        ...r,
        onClick: (e) => {
            null != r.onClick && r.onClick(e),
                null != n && u.default.track(_.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: n });
        },
        children: t,
    });
}
function p(e) {
    let { children: t, href: n, noticeType: r, ...a } = e;
    return (0, i.jsx)(o.Anchor, {
        ...a,
        className: A.x6,
        href: n,
        onClick: (e) => {
            a.onClick?.(e), u.default.track(_.HAw.APP_NOTICE_ANCHOR_CLICKED, { notice_type: r, href: n });
        },
        children: t,
    });
}
function T(e) {
    let { onClick: t, noticeType: n, className: r } = e;
    return (0, i.jsx)(d.D, {
        focusProps: { offset: 6 },
        className: a()(A.b, r),
        onClick: () => {
            t(), null != n && u.default.track(_.HAw.APP_NOTICE_CLOSED, { notice_type: n });
        },
        "aria-label": E.intl.string(E.t.WAI6xu),
        children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor", className: A.ut }),
    });
}
function m(e) {
    let { color: t = h.DEFAULT, className: n, style: r, ref: l, children: o } = e;
    return (0, i.jsx)("div", {
        ref: l,
        className: a()(A.lm, { [A.Fr]: s.Fr }, n, t),
        style: null != r ? r : void 0,
        children: o,
    });
}
