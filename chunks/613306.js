"use strict";
n.d(t, {
    Cn: () => x,
    Dc: () => k,
    M9: () => L,
    NH: () => U,
    QT: () => O,
    gn: () => M,
    sQ: () => P,
    ti: () => w,
    wN: () => D,
    zT: () => R,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(990078),
    s = n(397927),
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
var g = n(734057),
    E = n(760751),
    A = n(317525),
    I = n(351906),
    T = n(287809),
    y = n(486020),
    S = n(147036),
    v = n(562153),
    C = n(427262),
    b = n(985018),
    N = n(790704);
function R(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(o.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function O(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(o.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function D(e) {
    let { text: t } = e;
    return (0, r.jsx)(p.A, { children: t });
}
function L(e) {
    let { id: t, guildId: n, channelId: o } = e,
        u = (0, i.bG)([T.default], () => T.default.getUser(t)),
        c = (0, i.bG)([I.A], () => I.A.hidePersonalInformation),
        d = v.Ay.useName(n, o, u),
        _ = (0, r.jsx)(p.A, { children: null == d ? `<@${t}>` : `@${d}` });
    if (null != u) {
        let e = c || u.hasUniqueUsername() ? null : `#${u.discriminator}`;
        return (0, r.jsx)(a.m, {
            __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                className: N.fX,
                children: [
                    (0, r.jsx)(l.A, { user: u, animate: !0, size: s._3J.SIZE_16, className: N.my }),
                    C.Ay.getUserTag(u, { mode: "username", identifiable: c ? "never" : "always" }),
                    (0, r.jsx)("span", { className: N.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": C.Ay.getUserTag(u, { decoration: "never" }),
            asContainer: !0,
            children: (0, r.jsx)(s.DUT, { tag: "span", children: _ }),
        });
    }
    return _;
}
function w(e) {
    let { id: t, guildId: n } = e,
        a = (0, i.bG)([A.A], () => (null != n ? A.A.getRole(n, t) : void 0)),
        o = (0, i.bG)([u.A], () => u.A.roleStyle),
        l = (0, m.X_)(n, a, a?.colorStrings);
    if (null == a) return (0, r.jsxs)("span", { children: ["@", b.intl.string(b.t["YV4F/n"])] });
    let c = null != a.color && 0 !== a.color,
        d = "dot" === o,
        _ = "username" === o && c;
    return (0, r.jsxs)(p.A, {
        color: _ ? a.color : null,
        roleColors: _ ? l : null,
        children: [
            d && (0, r.jsx)(s.WYI, { color: a.colorString, colors: l, background: !1, tooltip: !1 }),
            "@",
            a.name,
        ],
    });
}
function x(e) {
    let { id: t } = e,
        n = (0, i.bG)([g.A], () => g.A.getChannel(t)),
        a = b.intl.string(b.t.zLZPmk).toLowerCase(),
        s = "text",
        o = !0;
    return (null != n &&
        ((a = (0, c.nc)(n) ? n.name : b.intl.string(b.t["/YzI63"])),
        (s = (0, c.nc)(n) ? ((0, S.QG)(n) ?? "text") : "locked"),
        (o = (0, d.Y)(n.type))),
    o)
        ? (0, r.jsx)(p.A, { iconType: s, children: a })
        : (0, r.jsx)("span", { children: "#" + a });
}
function P(e) {
    let { id: t, itemId: n, guildId: i } = e,
        a = (0, _.Q)(t),
        s = (0, _.f)(t, n, i);
    return (0, r.jsxs)(p.A, { iconType: t, children: [a, null != s && (0, r.jsx)(h.A, {}), s] });
}
function M(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(p.A, { children: [t, "(", n, ")"] });
}
function k(e) {
    let { timestamp: t } = e;
    return (0, r.jsx)(f.A, { node: t, className: "R" === t.format ? N.gS : null });
}
function U(e) {
    let { id: t } = e,
        n = (0, i.bG)([E.A], () => E.A.getDetectableGame(t)),
        a =
            null != n
                ? (0, r.jsx)("img", {
                      alt: "",
                      className: N.Kk,
                      src: y.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: 32 }),
                  })
                : null;
    return (0, r.jsxs)(p.A, { children: [a, n?.name ?? b.intl.string(b.t["11pdXZ"])] });
}
