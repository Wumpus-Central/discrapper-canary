"use strict";
n.d(t, {
    Cn: () => O,
    Dc: () => U,
    M9: () => M,
    QT: () => w,
    gn: () => D,
    sQ: () => P,
    ti: () => k,
    wN: () => L,
    zT: () => R,
});
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(990078),
    r = n(778712),
    a = n(939249),
    o = n(545442),
    c = n(565645),
    u = n(730134),
    d = n(775602),
    h = n(47167),
    m = n(376943),
    p = n(465365),
    f = n(78390),
    g = n(678473),
    _ = n(332173),
    x = n(37632),
    A = n(967144);
n(209932);
var C = n(734057),
    E = n(317525),
    I = n(994500),
    v = n(351906),
    y = n(287809),
    S = n(147036),
    b = n(562153),
    N = n(427262),
    T = n(985018),
    j = n(178259);
function R(e) {
    let { emoji: t } = e;
    return (0, i.jsx)(s.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, i.jsx)(c.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function w(e) {
    let { emoji: t } = e;
    return (0, i.jsx)(s.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, i.jsx)(c.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function L(e) {
    let { text: t } = e;
    return (0, i.jsx)(_.A, { children: t });
}
function M(e) {
    let { id: t, guildId: n, channelId: o } = e,
        c = (0, l.bG)([y.default], () => y.default.getUser(t)),
        d = (0, l.bG)([v.A], () => v.A.hidePersonalInformation),
        h = b.Ay.useName(n, o, c),
        m = (0, i.jsx)(_.A, { children: null == h ? `<@${t}>` : `@${h}` });
    if (null != c) {
        let e = d || c.hasUniqueUsername() ? null : `#${c.discriminator}`;
        return (0, i.jsx)(s.m, {
            __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                className: j.fX,
                children: [
                    (0, i.jsx)(u.A, { user: c, animate: !0, size: r._3.SIZE_16, className: j.my }),
                    N.Ay.getUserTag(c, { mode: "username", identifiable: d ? "never" : "always" }),
                    (0, i.jsx)("span", { className: j.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": N.Ay.getUserTag(c, { decoration: "never" }),
            asContainer: !0,
            children: (0, i.jsx)(a.D, { tag: "span", children: m }),
        });
    }
    return m;
}
function k(e) {
    let { id: t, guildId: n } = e,
        s = (0, l.bG)([E.A], () => (null != n ? E.A.getRole(n, t) : void 0)),
        r = (0, l.bG)([d.A], () => d.A.roleStyle),
        a = (0, A.X_)(n, s, s?.colorStrings);
    if (null == s) return (0, i.jsxs)("span", { children: ["@", T.intl.string(T.t["YV4F/n"])] });
    let c = null != s.color && 0 !== s.color,
        u = "username" === r && c;
    return (0, i.jsxs)(_.A, {
        color: u ? s.color : null,
        roleColors: u ? a : null,
        children: [
            "dot" === r && (0, i.jsx)(o.W, { color: s.colorString, colors: a, background: !1, tooltip: !1 }),
            "@",
            s.name,
        ],
    });
}
function O(e) {
    let { id: t } = e,
        n = (0, l.bG)([C.A], () => C.A.getChannel(t)),
        s = T.intl.string(T.t.zLZPmk).toLowerCase(),
        r = "text",
        a = !0;
    return (null != n &&
        ((s = (0, m.nc)(n) ? (0, h.m1)(n, y.default, I.A) : T.intl.string(T.t["/YzI63"])),
        (r = (0, m.nc)(n) ? ((0, S.QG)(n) ?? "text") : "locked"),
        (a = (0, p.Y)(n.type))),
    a)
        ? (0, i.jsx)(_.A, { iconType: r, children: s })
        : (0, i.jsx)("span", { children: "#" + s });
}
function P(e) {
    let { id: t, itemId: n, guildId: l } = e,
        s = (0, f.Q)(t),
        r = (0, f.f)(t, n, l);
    return (0, i.jsxs)(_.A, { iconType: t, children: [s, null != r && (0, i.jsx)(x.A, {}), r] });
}
function D(e) {
    let { text: t, id: n } = e;
    return (0, i.jsxs)(_.A, { children: [t, "(", n, ")"] });
}
function U(e) {
    let { timestamp: t } = e;
    return (0, i.jsx)(g.A, { node: t, className: "R" === t.format ? j.gS : null });
}
