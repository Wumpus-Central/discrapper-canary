"use strict";
n.d(t, {
    Cn: () => M,
    Dc: () => k,
    M9: () => L,
    QT: () => b,
    gn: () => P,
    sQ: () => x,
    ti: () => w,
    wN: () => D,
    zT: () => O,
});
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(990078),
    a = n(397927),
    o = n(565645),
    l = n(730134),
    u = n(775602),
    c = n(47167),
    d = n(376943),
    _ = n(465365),
    f = n(78390),
    p = n(678473),
    h = n(332173),
    m = n(37632),
    E = n(967144);
n(209932);
var g = n(734057),
    A = n(317525),
    I = n(994500),
    T = n(351906),
    S = n(287809),
    y = n(147036),
    v = n(562153),
    N = n(427262),
    C = n(985018),
    R = n(132642);
function O(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(s.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(o.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function b(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(s.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(o.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function D(e) {
    let { text: t } = e;
    return (0, r.jsx)(h.A, { children: t });
}
function L(e) {
    let { id: t, guildId: n, channelId: o } = e,
        u = (0, i.bG)([S.default], () => S.default.getUser(t)),
        c = (0, i.bG)([T.A], () => T.A.hidePersonalInformation),
        d = v.Ay.useName(n, o, u),
        _ = (0, r.jsx)(h.A, { children: null == d ? `<@${t}>` : `@${d}` });
    if (null != u) {
        let e = c || u.hasUniqueUsername() ? null : `#${u.discriminator}`;
        return (0, r.jsx)(s.m, {
            __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                className: R.fX,
                children: [
                    (0, r.jsx)(l.A, { user: u, animate: !0, size: a._3J.SIZE_16, className: R.my }),
                    N.Ay.getUserTag(u, { mode: "username", identifiable: c ? "never" : "always" }),
                    (0, r.jsx)("span", { className: R.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": N.Ay.getUserTag(u, { decoration: "never" }),
            asContainer: !0,
            children: (0, r.jsx)(a.DUT, { tag: "span", children: _ }),
        });
    }
    return _;
}
function w(e) {
    let { id: t, guildId: n } = e,
        s = (0, i.bG)([A.A], () => (null != n ? A.A.getRole(n, t) : void 0)),
        o = (0, i.bG)([u.A], () => u.A.roleStyle),
        l = (0, E.X_)(n, s, s?.colorStrings);
    if (null == s) return (0, r.jsxs)("span", { children: ["@", C.intl.string(C.t["YV4F/n"])] });
    let c = null != s.color && 0 !== s.color,
        d = "dot" === o,
        _ = "username" === o && c;
    return (0, r.jsxs)(h.A, {
        color: _ ? s.color : null,
        roleColors: _ ? l : null,
        children: [
            d && (0, r.jsx)(a.WYI, { color: s.colorString, colors: l, background: !1, tooltip: !1 }),
            "@",
            s.name,
        ],
    });
}
function M(e) {
    let { id: t } = e,
        n = (0, i.bG)([g.A], () => g.A.getChannel(t)),
        s = C.intl.string(C.t.zLZPmk).toLowerCase(),
        a = "text",
        o = !0;
    return (null != n &&
        ((s = (0, d.nc)(n) ? (0, c.m1)(n, S.default, I.A) : C.intl.string(C.t["/YzI63"])),
        (a = (0, d.nc)(n) ? ((0, y.QG)(n) ?? "text") : "locked"),
        (o = (0, _.Y)(n.type))),
    o)
        ? (0, r.jsx)(h.A, { iconType: a, children: s })
        : (0, r.jsx)("span", { children: "#" + s });
}
function x(e) {
    let { id: t, itemId: n, guildId: i } = e,
        s = (0, f.Q)(t),
        a = (0, f.f)(t, n, i);
    return (0, r.jsxs)(h.A, { iconType: t, children: [s, null != a && (0, r.jsx)(m.A, {}), a] });
}
function P(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(h.A, { children: [t, "(", n, ")"] });
}
function k(e) {
    let { timestamp: t } = e;
    return (0, r.jsx)(p.A, { node: t, className: "R" === t.format ? R.gS : null });
}
