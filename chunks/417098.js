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
    f = n(375708),
    h = n(580537);
let p = Object.freeze({
    DEFAULT: h.Lx,
    NEUTRAL: h.NT,
    BRAND: h.x8,
    WARNING: h.SO,
    DANGER: h.HW,
    INFO: h.io,
    STREAMER_MODE: h.kL,
    CUSTOM: h.P4,
    SPOTIFY: h.AU,
    PLAYSTATION: h._9,
    PREMIUM_TIER_0: h.zw,
    PREMIUM_TIER_1: h.G_,
    PREMIUM_TIER_2: h.NS,
});
function E(e) {
    let { children: t, className: n, minor: r = !1, ...a } = e;
    return (0, i.jsx)(o.vN, {
        children: (0, i.jsx)("button", { className: s()(h.x6, n, { [h.oy]: r }), ...a, children: t }),
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
        className: h.x6,
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
        className: s()(h.b, r),
        onClick: () => {
            t(), null != n && d.default.track(_.HAw.APP_NOTICE_CLOSED, { notice_type: n });
        },
        "aria-label": f.intl.string(f.t.WAI6xu),
        children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor", className: h.ut }),
    });
}
function I(e) {
    let { color: t = p.DEFAULT, className: n, style: r, ref: o, children: l } = e;
    return (0, i.jsx)("div", {
        ref: o,
        className: s()(h.lm, { [h.Fr]: a.Fr }, n, t),
        style: null != r ? r : void 0,
        children: l,
    });
}
