"use strict";
n.d(t, { $T: () => I, Hv: () => p, PM: () => A, Z_: () => m, eC: () => g, zr: () => E });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(607399),
    o = n(187322),
    l = n(349288),
    u = n(939249),
    c = n(789645),
    d = n(174459),
    _ = n(652215),
    h = n(375708),
    f = n(580537);
let p = Object.freeze({
    DEFAULT: f.Lx,
    NEUTRAL: f.NT,
    BRAND: f.x8,
    WARNING: f.SO,
    DANGER: f.HW,
    INFO: f.io,
    STREAMER_MODE: f.kL,
    CUSTOM: f.P4,
    SPOTIFY: f.AU,
    PLAYSTATION: f._9,
    PREMIUM_TIER_0: f.zw,
    PREMIUM_TIER_1: f.G_,
    PREMIUM_TIER_2: f.NS,
});
function E(e) {
    let { children: t, className: n, minor: r = !1, ...a } = e;
    return (0, i.jsx)(o.vN, {
        children: (0, i.jsx)("button", { className: s()(f.x6, n, { [f.oy]: r }), ...a, children: t }),
    });
}
function m(e) {
    let { children: t, noticeType: n, ...r } = e;
    return (0, i.jsx)(E, {
        ...r,
        onClick: (e) => {
            null != r.onClick && r.onClick(e),
                null != n && d.default.track(_.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: n });
        },
        children: t,
    });
}
function g(e) {
    let { children: t, href: n, noticeType: r, ...s } = e;
    return (0, i.jsx)(l.Anchor, {
        ...s,
        className: f.x6,
        href: n,
        onClick: (e) => {
            s.onClick?.(e), d.default.track(_.HAw.APP_NOTICE_ANCHOR_CLICKED, { notice_type: r, href: n });
        },
        children: t,
    });
}
function A(e) {
    let { onClick: t, noticeType: n, className: r } = e;
    return (0, i.jsx)(u.D, {
        focusProps: { offset: 6 },
        className: s()(f.b, r),
        onClick: () => {
            t(), null != n && d.default.track(_.HAw.APP_NOTICE_CLOSED, { notice_type: n });
        },
        "aria-label": h.intl.string(h.t.WAI6xu),
        children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor", className: f.ut }),
    });
}
function I(e) {
    let { color: t = p.DEFAULT, className: n, style: r, ref: o, children: l } = e;
    return (0, i.jsx)("div", {
        ref: o,
        className: s()(f.lm, { [f.Fr]: a.Fr }, n, t),
        style: null != r ? r : void 0,
        children: l,
    });
}
