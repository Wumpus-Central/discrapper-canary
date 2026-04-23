l.d(t, { Ay: () => x, B$: () => h, j: () => A });
var i = l(627968),
    n = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(311907),
    c = l(573435),
    o = l(531685),
    u = l(486020),
    d = l(240248),
    m = l(567268);
function h(e) {
    let { guildName: t, iconSize: l, className: n } = e,
        s = (0, d.oN)(t);
    return (0, i.jsx)(c.Ay, {
        mask: c.Ay.Masks.CLAN_ICON,
        width: l,
        height: l,
        className: n,
        children: (0, i.jsx)("div", { className: a()(m.O, m.q), children: s }),
    });
}
function A(e) {
    let { guildId: t, guildName: l, guildIcon: n, iconSize: s, className: h, acronymClassName: A, animate: x } = e,
        f = (0, r.bG)([o.A], () => o.A.isFocused()),
        v = (0, u.V0)(n) ? n : u.Ay.getGuildIconURL({ id: t, icon: n, size: s, canAnimate: x && f });
    if (null == v) {
        let e = (0, d.oN)(l);
        return (0, i.jsx)(c.Ay, {
            mask: c.Ay.Masks.CLAN_ICON,
            width: s,
            height: s,
            className: h,
            children: (0, i.jsx)("div", { className: a()(m.O, m.q, A), children: e }),
        });
    }
    return (0, i.jsx)(c.Ay, {
        mask: c.Ay.Masks.CLAN_ICON,
        width: s,
        height: s,
        className: h,
        children: (0, i.jsx)("img", { src: v, alt: l, className: m.O }),
    });
}
let x = n.memo(function (e) {
    let { guild: t, iconSize: l, className: n, animate: s } = e;
    return (0, i.jsx)(A, {
        guildName: t.name,
        guildId: t.id,
        guildIcon: t.icon,
        iconSize: l,
        className: n,
        animate: s,
    });
});
