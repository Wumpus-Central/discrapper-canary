a.d(l, { $T: () => y, Hv: () => h, PM: () => g, Z_: () => v, eC: () => f, zr: () => x });
var t = a(627968);
a(64700);
var o = a(503698),
    n = a.n(o),
    i = a(607399),
    r = a(187322);
if (21552 == a.j) var s = a(349288);
if (21552 == a.j) var d = a(939249);
if (21552 == a.j) var u = a(789645);
var c = a(954571),
    b = a(652215),
    p = a(985018),
    m = a(580537);
let h = Object.freeze({
    DEFAULT: m.Lx,
    NEUTRAL: m.NT,
    BRAND: m.x8,
    WARNING: m.SO,
    DANGER: m.HW,
    INFO: m.io,
    STREAMER_MODE: m.kL,
    CUSTOM: m.P4,
    SPOTIFY: m.AU,
    PLAYSTATION: m._9,
    PREMIUM_TIER_0: m.zw,
    PREMIUM_TIER_1: m.G_,
    PREMIUM_TIER_2: m.NS,
});
function x(e) {
    let { children: l, className: a, minor: o = !1, ...i } = e;
    return (0, t.jsx)(r.vN, {
        children: (0, t.jsx)("button", { className: n()(m.x6, a, { [m.oy]: o }), ...i, children: l }),
    });
}
function v(e) {
    let { children: l, noticeType: a, ...o } = e;
    return (0, t.jsx)(x, {
        ...o,
        onClick: (e) => {
            null != o.onClick && o.onClick(e),
                null != a && c.default.track(b.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: a });
        },
        children: l,
    });
}
function f(e) {
    let { children: l, href: a, noticeType: o, ...n } = e;
    return (0, t.jsx)(s.Anchor, {
        ...n,
        className: m.x6,
        href: a,
        onClick: (e) => {
            n.onClick?.(e), c.default.track(b.HAw.APP_NOTICE_ANCHOR_CLICKED, { notice_type: o, href: a });
        },
        children: l,
    });
}
function g(e) {
    let { onClick: l, noticeType: a, className: o } = e;
    return (0, t.jsx)(d.D, {
        focusProps: { offset: 6 },
        className: n()(m.b, o),
        onClick: () => {
            l(), null != a && c.default.track(b.HAw.APP_NOTICE_CLOSED, { notice_type: a });
        },
        "aria-label": p.intl.string(p.t.WAI6xu),
        children: (0, t.jsx)(u.P, { size: "sm", color: "currentColor", className: m.ut }),
    });
}
function y(e) {
    let { color: l = h.DEFAULT, className: a, style: o, ref: r, children: s } = e;
    return (0, t.jsx)("div", {
        ref: r,
        className: n()(m.lm, { [m.Fr]: i.Fr }, a, l),
        style: null != o ? o : void 0,
        children: s,
    });
}
