e.d(s, { Ay: () => A, B$: () => o, j: () => N });
var a = e(627968),
    l = e(64700),
    c = e(503698),
    n = e.n(c),
    t = e(17928),
    d = e(573435),
    r = e(531685),
    h = e(486020),
    m = e(240248),
    u = e(567268);
function o(i) {
    let { guildName: s, iconSize: e, className: l } = i,
        c = (0, m.oN)(s);
    return (0, a.jsx)(d.Ay, {
        mask: d.Ay.Masks.CLAN_ICON,
        width: e,
        height: e,
        className: l,
        children: (0, a.jsx)("div", { role: "img", "aria-label": s, className: n()(u.O, u.q), children: c }),
    });
}
function N(i) {
    let { guildId: s, guildName: e, guildIcon: l, iconSize: c, className: o, acronymClassName: N, animate: A } = i,
        g = (0, t.bG)([r.A], () => r.A.isFocused()),
        k = (0, h.V0)(l) ? l : h.Ay.getGuildIconURL({ id: s, icon: l, size: c, canAnimate: A && g });
    if (null == k) {
        let i = (0, m.oN)(e);
        return (0, a.jsx)(d.Ay, {
            mask: d.Ay.Masks.CLAN_ICON,
            width: c,
            height: c,
            className: o,
            children: (0, a.jsx)("div", { role: "img", "aria-label": e, className: n()(u.O, u.q, N), children: i }),
        });
    }
    return (0, a.jsx)(d.Ay, {
        mask: d.Ay.Masks.CLAN_ICON,
        width: c,
        height: c,
        className: o,
        children: (0, a.jsx)("img", { src: k, alt: e, className: u.O }),
    });
}
let A = l.memo(function (i) {
    let { guild: s, iconSize: e, className: l, animate: c } = i;
    return (0, a.jsx)(N, {
        guildName: s.name,
        guildId: s.id,
        guildIcon: s.icon,
        iconSize: e,
        className: l,
        animate: c,
    });
});
