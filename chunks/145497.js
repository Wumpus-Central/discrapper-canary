var a = e(477900),
    l = e(582128),
    n = e(503698),
    t = e.n(n),
    c = e(855986),
    d = e(573435),
    r = e(531685),
    m = e(486020),
    h = e(240248),
    u = e(792996),
    o = e(705843);
function N(i) {
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
let A = l.memo(function (i) {
    let { guild: s, iconSize: e, className: l, animate: n } = i;
    return (0, a.jsx)(N, {
        guildName: s.name,
        guildId: s.id,
        guildIcon: s.icon,
        iconSize: e,
        className: l,
        animate: n,
    });
});
e.d(
    s,
    {},
    {
        Ay: A,
        B$: function (i) {
            let { guildName: s, iconSize: e, className: l } = i,
                n = (0, h.oN)(s);
            return (0, a.jsx)(d.Ay, {
                mask: d.Ay.Masks.CLAN_ICON,
                width: e,
                height: e,
                className: l,
                children: (0, a.jsx)("div", { role: "img", "aria-label": s, className: t()(o.O, o.q), children: n }),
            });
        },
        j: N,
    },
);
