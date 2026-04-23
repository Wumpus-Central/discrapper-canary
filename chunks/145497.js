n.d(t, { Ay: () => A, B$: () => E, j: () => p });
var s = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(17928),
    o = n(573435),
    d = n(531685),
    u = n(486020),
    c = n(240248),
    h = n(567268);
function E(e) {
    let { guildName: t, iconSize: n, className: i } = e,
        l = (0, c.oN)(t);
    return (0, s.jsx)(o.Ay, {
        mask: o.Ay.Masks.CLAN_ICON,
        width: n,
        height: n,
        className: i,
        children: (0, s.jsx)("div", { className: r()(h.O, h.q), children: l }),
    });
}
function p(e) {
    let { guildId: t, guildName: n, guildIcon: i, iconSize: l, className: E, acronymClassName: p, animate: A } = e,
        m = (0, a.bG)([d.A], () => d.A.isFocused()),
        C = (0, u.V0)(i) ? i : u.Ay.getGuildIconURL({ id: t, icon: i, size: l, canAnimate: A && m });
    if (null == C) {
        let e = (0, c.oN)(n);
        return (0, s.jsx)(o.Ay, {
            mask: o.Ay.Masks.CLAN_ICON,
            width: l,
            height: l,
            className: E,
            children: (0, s.jsx)("div", { className: r()(h.O, h.q, p), children: e }),
        });
    }
    return (0, s.jsx)(o.Ay, {
        mask: o.Ay.Masks.CLAN_ICON,
        width: l,
        height: l,
        className: E,
        children: (0, s.jsx)("img", { src: C, alt: n, className: h.O }),
    });
}
let A = i.memo(function (e) {
    let { guild: t, iconSize: n, className: i, animate: l } = e;
    return (0, s.jsx)(p, {
        guildName: t.name,
        guildId: t.id,
        guildIcon: t.icon,
        iconSize: n,
        className: i,
        animate: l,
    });
});
