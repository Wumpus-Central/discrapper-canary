e.d(s, { Ay: () => g, B$: () => N, j: () => A });
var a = e(627968),
    l = e(64700),
    n = e(503698),
    t = e.n(n),
    c = e(17928),
    d = e(573435),
    r = e(531685),
    m = e(486020),
    h = e(240248),
    u = e(375708),
    o = e(176428);
function N(i) {
    let { guildName: s, iconSize: e, className: l } = i,
        n = (0, h.oN)(s);
    return (0, a.jsx)(d.Ay, {
        mask: d.Ay.Masks.CLAN_ICON,
        width: e,
        height: e,
        className: l,
        children: (0, a.jsx)("div", { role: "img", "aria-label": s, className: t()(o.O, o.q), children: n }),
    });
}
function A(i) {
    let { guildId: s, guildName: e, guildIcon: l, iconSize: n, className: N, acronymClassName: A, animate: g } = i,
        k = (0, c.bG)([r.A], () => r.A.isFocused()),
        j = (0, m.V0)(l) ? l : m.Ay.getGuildIconURL({ id: s, icon: l, size: n, canAnimate: g && k });
    if (null == j) {
        let i = (0, h.oN)(e);
        return (0, a.jsx)(d.Ay, {
            mask: d.Ay.Masks.CLAN_ICON,
            width: n,
            height: n,
            className: N,
            children: (0, a.jsx)("div", {
                role: "img",
                "aria-label": "?" === e ? u.intl.string(u.t.DmIUGK) : e,
                className: t()(o.O, o.q, A),
                children: i,
            }),
        });
    }
    return (0, a.jsx)(d.Ay, {
        mask: d.Ay.Masks.CLAN_ICON,
        width: n,
        height: n,
        className: N,
        children: (0, a.jsx)("img", { src: j, alt: e, className: o.O }),
    });
}
let g = l.memo(function (i) {
    let { guild: s, iconSize: e, className: l, animate: n } = i;
    return (0, a.jsx)(A, {
        guildName: s.name,
        guildId: s.id,
        guildIcon: s.icon,
        iconSize: e,
        className: l,
        animate: n,
    });
});
