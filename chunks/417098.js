t.d(r, { $T: () => T, Hv: () => N, PM: () => R, Z_: () => E, eC: () => P, zr: () => A });
var n = t(627968);
t(64700);
var l = t(503698),
    c = t.n(l),
    i = t(607399),
    a = t(187322);
if (21552 == t.j) var o = t(349288);
if (21552 == t.j) var s = t(939249);
if (21552 == t.j) var u = t(789645);
var d = t(174459),
    f = t(652215),
    _ = t(375708),
    C = t(580537);
let N = Object.freeze({
    DEFAULT: C.Lx,
    NEUTRAL: C.NT,
    BRAND: C.x8,
    WARNING: C.SO,
    DANGER: C.HW,
    INFO: C.io,
    STREAMER_MODE: C.kL,
    CUSTOM: C.P4,
    SPOTIFY: C.AU,
    PLAYSTATION: C._9,
    PREMIUM_TIER_0: C.zw,
    PREMIUM_TIER_1: C.G_,
    PREMIUM_TIER_2: C.NS,
});
function A(e) {
    let { children: r, className: t, minor: l = !1, ...i } = e;
    return (0, n.jsx)(a.vN, {
        children: (0, n.jsx)("button", { className: c()(C.x6, t, { [C.oy]: l }), ...i, children: r }),
    });
}
function E(e) {
    let { children: r, noticeType: t, ...l } = e;
    return (0, n.jsx)(A, {
        ...l,
        onClick: (e) => {
            null != l.onClick && l.onClick(e),
                null != t && d.default.track(f.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: t });
        },
        children: r,
    });
}
function P(e) {
    let { children: r, href: t, noticeType: l, ...c } = e;
    return (0, n.jsx)(o.Anchor, {
        ...c,
        className: C.x6,
        href: t,
        onClick: (e) => {
            c.onClick?.(e), d.default.track(f.HAw.APP_NOTICE_ANCHOR_CLICKED, { notice_type: l, href: t });
        },
        children: r,
    });
}
function R(e) {
    let { onClick: r, noticeType: t, className: l } = e;
    return (0, n.jsx)(s.D, {
        focusProps: { offset: 6 },
        className: c()(C.b, l),
        onClick: () => {
            r(), null != t && d.default.track(f.HAw.APP_NOTICE_CLOSED, { notice_type: t });
        },
        "aria-label": _.intl.string(_.t.WAI6xu),
        children: (0, n.jsx)(u.P, { size: "sm", color: "currentColor", className: C.ut }),
    });
}
function T(e) {
    let { color: r = N.DEFAULT, className: t, style: l, ref: a, children: o } = e;
    return (0, n.jsx)("div", {
        ref: a,
        className: c()(C.lm, { [C.Fr]: i.Fr }, t, r),
        style: null != l ? l : void 0,
        children: o,
    });
}
