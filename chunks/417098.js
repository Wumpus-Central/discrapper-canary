"use strict";
n.d(t, { $T: () => T, Hv: () => _, PM: () => I, Z_: () => E, eC: () => A, zr: () => f });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(607399),
    o = n(397927),
    l = n(954571),
    u = n(652215),
    c = n(985018),
    d = n(1624);
let _ = Object.freeze({
    DEFAULT: d.Lx,
    NEUTRAL: d.NT,
    BRAND: d.x8,
    WARNING: d.SO,
    DANGER: d.HW,
    INFO: d.io,
    STREAMER_MODE: d.kL,
    CUSTOM: d.P4,
    SPOTIFY: d.AU,
    PLAYSTATION: d._9,
    PREMIUM_TIER_0: d.zw,
    PREMIUM_TIER_1: d.G_,
    PREMIUM_TIER_2: d.NS,
});
function f(e) {
    let { children: t, className: n, minor: i = !1, ...s } = e;
    return (0, r.jsx)(o.vN3, {
        children: (0, r.jsx)("button", { className: a()(d.x6, n, { [d.oy]: i }), ...s, children: t }),
    });
}
function h(e) {
    null != e && l.default.track(u.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: e });
}
function p(e) {
    null != e && l.default.track(u.HAw.APP_NOTICE_CLOSED, { notice_type: e });
}
function g(e, t) {
    l.default.track(u.HAw.APP_NOTICE_ANCHOR_CLICKED, { notice_type: e, href: t });
}
function E(e) {
    let { children: t, noticeType: n, ...i } = e;
    return (0, r.jsx)(f, {
        ...i,
        onClick: (e) => {
            null != i.onClick && i.onClick(e), h(n);
        },
        children: t,
    });
}
function A(e) {
    let { children: t, href: n, noticeType: i, ...a } = e;
    return (0, r.jsx)(o.MzZ, {
        ...a,
        className: d.x6,
        href: n,
        onClick: (e) => {
            a.onClick?.(e), g(i, n);
        },
        children: t,
    });
}
function I(e) {
    let { onClick: t, noticeType: n, className: i } = e;
    return (0, r.jsx)(o.DUT, {
        focusProps: { offset: 6 },
        className: a()(d.b, i),
        onClick: () => {
            t(), p(n);
        },
        "aria-label": c.intl.string(c.t.WAI6xu),
        children: (0, r.jsx)(o.PGe, { size: "sm", color: "currentColor", className: d.ut }),
    });
}
function T(e) {
    let { color: t = _.DEFAULT, className: n, style: i, ref: o, children: l } = e;
    return (0, r.jsx)("div", {
        ref: o,
        className: a()(d.lm, { [d.Fr]: s.Fr }, n, t),
        style: null != i ? i : void 0,
        children: l,
    });
}
