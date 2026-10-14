e.d(t, { default: () => p });
var n = e(477900),
    s = e(582128),
    a = e(189213),
    l = e(377980),
    u = e(581298),
    d = e(419954),
    r = e(606072),
    c = e(61567),
    h = e(660183),
    o = e(306898);
function p(i) {
    let { guildId: t, requirement: e, transitionState: p, onClose: g } = i,
        _ = s.useMemo(
            () =>
                (0, d.zZ)("guild_space_sharing_modal", {
                    initialize: r.zE,
                    buildLayout: () =>
                        (0, r.UF)({
                            guildId: t,
                            useGuildSharingTitle: () => h.intl.string(h.t.eZhXQa),
                            requirement: e,
                        }),
                }),
            [t, e],
        ),
        { node: b } = (0, u.Ay)(_, "");
    return (0, n.jsx)(a.a, {
        transitionState: p,
        onClose: g,
        title: h.intl.string(c.default["3LJ1u9"]),
        subtitle: h.intl.string(c.default.PJn0ih),
        actions: [],
        children: (0, n.jsx)("div", { className: o.W, children: (0, n.jsx)(l.A, { node: b }) }),
    });
}
