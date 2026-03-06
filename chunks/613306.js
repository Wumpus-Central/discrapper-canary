"use strict";
n.d(t, {
    Cn: () => L,
    Dc: () => x,
    M9: () => b,
    QT: () => R,
    gn: () => M,
    sQ: () => w,
    ti: () => D,
    wN: () => O,
    zT: () => C,
});
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(990078),
    a = n(397927),
    o = n(565645),
    l = n(730134),
    u = n(775602),
    c = n(376943),
    d = n(465365),
    _ = n(78390),
    f = n(678473),
    p = n(332173),
    h = n(37632),
    m = n(967144);
n(209932);
var E = n(734057),
    g = n(317525),
    A = n(351906),
    I = n(287809),
    T = n(147036),
    S = n(562153),
    y = n(427262),
    v = n(985018),
    N = n(958450);
function C(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(s.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(o.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function R(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(s.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(o.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function O(e) {
    let { text: t } = e;
    return (0, r.jsx)(p.A, { children: t });
}
function b(e) {
    let { id: t, guildId: n, channelId: o } = e,
        u = (0, i.bG)([I.default], () => I.default.getUser(t)),
        c = (0, i.bG)([A.A], () => A.A.hidePersonalInformation),
        d = S.Ay.useName(n, o, u),
        _ = (0, r.jsx)(p.A, { children: null == d ? `<@${t}>` : `@${d}` });
    if (null != u) {
        let e = c || u.hasUniqueUsername() ? null : `#${u.discriminator}`;
        return (0, r.jsx)(s.m, {
            __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                className: N.fX,
                children: [
                    (0, r.jsx)(l.A, { user: u, animate: !0, size: a._3J.SIZE_16, className: N.my }),
                    y.Ay.getUserTag(u, { mode: "username", identifiable: c ? "never" : "always" }),
                    (0, r.jsx)("span", { className: N.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": y.Ay.getUserTag(u, { decoration: "never" }),
            asContainer: !0,
            children: (0, r.jsx)(a.DUT, { tag: "span", children: _ }),
        });
    }
    return _;
}
function D(e) {
    let { id: t, guildId: n } = e,
        s = (0, i.bG)([g.A], () => (null != n ? g.A.getRole(n, t) : void 0)),
        o = (0, i.bG)([u.A], () => u.A.roleStyle),
        l = (0, m.X_)(n, s, s?.colorStrings);
    if (null == s) return (0, r.jsxs)("span", { children: ["@", v.intl.string(v.t["YV4F/n"])] });
    let c = null != s.color && 0 !== s.color,
        d = "dot" === o,
        _ = "username" === o && c;
    return (0, r.jsxs)(p.A, {
        color: _ ? s.color : null,
        roleColors: _ ? l : null,
        children: [
            d && (0, r.jsx)(a.WYI, { color: s.colorString, colors: l, background: !1, tooltip: !1 }),
            "@",
            s.name,
        ],
    });
}
function L(e) {
    let { id: t } = e,
        n = (0, i.bG)([E.A], () => E.A.getChannel(t)),
        s = v.intl.string(v.t.zLZPmk).toLowerCase(),
        a = "text",
        o = !0;
    return (null != n &&
        ((s = (0, c.nc)(n) ? n.name : v.intl.string(v.t["/YzI63"])),
        (a = (0, c.nc)(n) ? ((0, T.QG)(n) ?? "text") : "locked"),
        (o = (0, d.Y)(n.type))),
    o)
        ? (0, r.jsx)(p.A, { iconType: a, children: s })
        : (0, r.jsx)("span", { children: "#" + s });
}
function w(e) {
    let { id: t, itemId: n, guildId: i } = e,
        s = (0, _.Q)(t),
        a = (0, _.f)(t, n, i);
    return (0, r.jsxs)(p.A, { iconType: t, children: [s, null != a && (0, r.jsx)(h.A, {}), a] });
}
function M(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(p.A, { children: [t, "(", n, ")"] });
}
function x(e) {
    let { timestamp: t } = e;
    return (0, r.jsx)(f.A, { node: t, className: "R" === t.format ? N.gS : null });
}
