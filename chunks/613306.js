"use strict";
n.d(t, {
    Cn: () => x,
    Dc: () => G,
    M9: () => M,
    QT: () => L,
    gn: () => U,
    sQ: () => k,
    ti: () => P,
    wN: () => w,
    zT: () => D,
});
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(990078),
    a = n(778712),
    o = n(939249),
    l = n(545442),
    u = n(565645),
    c = n(730134),
    d = n(775602),
    _ = n(47167),
    f = n(376943),
    p = n(465365),
    h = n(78390),
    E = n(678473),
    m = n(332173),
    g = n(37632),
    A = n(967144);
n(209932);
var I = n(734057),
    T = n(317525),
    S = n(994500),
    y = n(351906),
    N = n(287809),
    v = n(147036),
    C = n(562153),
    O = n(427262),
    R = n(985018),
    b = n(178259);
function D(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(s.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(u.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function L(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(s.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(u.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function w(e) {
    let { text: t } = e;
    return (0, r.jsx)(m.A, { children: t });
}
function M(e) {
    let { id: t, guildId: n, channelId: l } = e,
        u = (0, i.bG)([N.default], () => N.default.getUser(t)),
        d = (0, i.bG)([y.A], () => y.A.hidePersonalInformation),
        _ = C.Ay.useName(n, l, u),
        f = (0, r.jsx)(m.A, { children: null == _ ? `<@${t}>` : `@${_}` });
    if (null != u) {
        let e = d || u.hasUniqueUsername() ? null : `#${u.discriminator}`;
        return (0, r.jsx)(s.m, {
            __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                className: b.fX,
                children: [
                    (0, r.jsx)(c.A, { user: u, animate: !0, size: a._3.SIZE_16, className: b.my }),
                    O.Ay.getUserTag(u, { mode: "username", identifiable: d ? "never" : "always" }),
                    (0, r.jsx)("span", { className: b.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": O.Ay.getUserTag(u, { decoration: "never" }),
            asContainer: !0,
            children: (0, r.jsx)(o.D, { tag: "span", children: f }),
        });
    }
    return f;
}
function P(e) {
    let { id: t, guildId: n } = e,
        s = (0, i.bG)([T.A], () => (null != n ? T.A.getRole(n, t) : void 0)),
        a = (0, i.bG)([d.A], () => d.A.roleStyle),
        o = (0, A.X_)(n, s, s?.colorStrings);
    if (null == s) return (0, r.jsxs)("span", { children: ["@", R.intl.string(R.t["YV4F/n"])] });
    let u = null != s.color && 0 !== s.color,
        c = "username" === a && u;
    return (0, r.jsxs)(m.A, {
        color: c ? s.color : null,
        roleColors: c ? o : null,
        children: [
            "dot" === a && (0, r.jsx)(l.W, { color: s.colorString, colors: o, background: !1, tooltip: !1 }),
            "@",
            s.name,
        ],
    });
}
function x(e) {
    let { id: t } = e,
        n = (0, i.bG)([I.A], () => I.A.getChannel(t)),
        s = R.intl.string(R.t.zLZPmk).toLowerCase(),
        a = "text",
        o = !0;
    return (null != n &&
        ((s = (0, f.nc)(n) ? (0, _.m1)(n, N.default, S.A) : R.intl.string(R.t["/YzI63"])),
        (a = (0, f.nc)(n) ? ((0, v.QG)(n) ?? "text") : "locked"),
        (o = (0, p.Y)(n.type))),
    o)
        ? (0, r.jsx)(m.A, { iconType: a, children: s })
        : (0, r.jsx)("span", { children: "#" + s });
}
function k(e) {
    let { id: t, itemId: n, guildId: i } = e,
        s = (0, h.Q)(t),
        a = (0, h.f)(t, n, i);
    return (0, r.jsxs)(m.A, { iconType: t, children: [s, null != a && (0, r.jsx)(g.A, {}), a] });
}
function U(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(m.A, { children: [t, "(", n, ")"] });
}
function G(e) {
    let { timestamp: t } = e;
    return (0, r.jsx)(E.A, { node: t, className: "R" === t.format ? b.gS : null });
}
