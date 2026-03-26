"use strict";
n.d(t, { $T: () => I, Hv: () => _, PM: () => A, Z_: () => E, eC: () => g, zr: () => f });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(607399),
    o = n(397927),
    l = n(954571),
    u = n(652215),
    c = n(985018),
    d = n(215433);
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
    let { children: t, className: n, minor: i = !1, ...a } = e;
    return (0, r.jsx)(o.vN3, {
        children: (0, r.jsx)("button", { className: s()(d.x6, n, { [d.oy]: i }), ...a, children: t }),
    });
}
function p(e) {
    null != e && l.default.track(u.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: e });
}
function h(e) {
    null != e && l.default.track(u.HAw.APP_NOTICE_CLOSED, { notice_type: e });
}
function m(e, t) {
    l.default.track(u.HAw.APP_NOTICE_ANCHOR_CLICKED, { notice_type: e, href: t });
}
function E(e) {
    let { children: t, noticeType: n, ...i } = e;
    return (0, r.jsx)(f, {
        ...i,
        onClick: (e) => {
            null != i.onClick && i.onClick(e), p(n);
        },
        children: t,
    });
}
function g(e) {
    let { children: t, href: n, noticeType: i, ...s } = e;
    return (0, r.jsx)(o.MzZ, {
        ...s,
        className: d.x6,
        href: n,
        onClick: (e) => {
            s.onClick?.(e), m(i, n);
        },
        children: t,
    });
}
function A(e) {
    let { onClick: t, noticeType: n, className: i } = e;
    return (0, r.jsx)(o.DUT, {
        focusProps: { offset: 6 },
        className: s()(d.b, i),
        onClick: () => {
            t(), h(n);
        },
        "aria-label": c.intl.string(c.t.WAI6xu),
        children: (0, r.jsx)(o.PGe, { size: "sm", color: "currentColor", className: d.ut }),
    });
}
function I(e) {
    let { color: t = _.DEFAULT, className: n, style: i, ref: o, children: l } = e;
    return (0, r.jsx)("div", {
        ref: o,
        className: s()(d.lm, { [d.Fr]: a.Fr }, n, t),
        style: null != i ? i : void 0,
        children: l,
    });
}
