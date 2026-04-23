"use strict";
n.d(t, { $T: () => p, Hv: () => m, PM: () => g, Z_: () => T, eC: () => N, zr: () => I });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(607399),
    a = n(187322);
if (21552 == n.j) var o = n(349288);
if (21552 == n.j) var c = n(939249);
if (21552 == n.j) var u = n(789645);
var d = n(954571),
    _ = n(652215),
    E = n(985018),
    A = n(580537);
let m = Object.freeze({
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
    return (0, i.jsx)(a.vN, {
        children: (0, i.jsx)("button", { className: l()(A.x6, n, { [A.oy]: r }), ...s, children: t }),
    });
}
function T(e) {
    let { children: t, noticeType: n, ...r } = e;
    return (0, i.jsx)(I, {
        ...r,
        onClick: (e) => {
            null != r.onClick && r.onClick(e),
                null != n && d.default.track(_.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: n });
        },
        children: t,
    });
}
function N(e) {
    let { children: t, href: n, noticeType: r, ...l } = e;
    return (0, i.jsx)(o.Anchor, {
        ...l,
        className: A.x6,
        href: n,
        onClick: (e) => {
            l.onClick?.(e), d.default.track(_.HAw.APP_NOTICE_ANCHOR_CLICKED, { notice_type: r, href: n });
        },
        children: t,
    });
}
function g(e) {
    let { onClick: t, noticeType: n, className: r } = e;
    return (0, i.jsx)(c.D, {
        focusProps: { offset: 6 },
        className: l()(A.b, r),
        onClick: () => {
            t(), null != n && d.default.track(_.HAw.APP_NOTICE_CLOSED, { notice_type: n });
        },
        "aria-label": E.intl.string(E.t.WAI6xu),
        children: (0, i.jsx)(u.P, { size: "sm", color: "currentColor", className: A.ut }),
    });
}
function p(e) {
    let { color: t = m.DEFAULT, className: n, style: r, ref: a, children: o } = e;
    return (0, i.jsx)("div", {
        ref: a,
        className: l()(A.lm, { [A.Fr]: s.Fr }, n, t),
        style: null != r ? r : void 0,
        children: o,
    });
}
