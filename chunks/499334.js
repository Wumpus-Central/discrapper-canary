e.d(t, { default: () => p });
var s = e(477900),
    n = e(582128),
    a = e(189213),
    l = e(377980),
    d = e(581298),
    u = e(419954),
    r = e(606072),
    c = e(61567),
    h = e(375708),
    o = e(306898);
function p(i) {
    let { guildId: t, transitionState: e, onClose: p } = i,
        g = n.useMemo(
            () =>
                (0, u.zZ)("guild_space_sharing_modal", {
                    initialize: r.zE,
                    buildLayout: () => (0, r.UF)({ guildId: t, useGuildSharingTitle: () => h.intl.string(h.t.eZhXQa) }),
                }),
            [t],
        ),
        { node: _ } = (0, d.Ay)(g, "");
    return (0, s.jsx)(a.a, {
        transitionState: e,
        onClose: p,
        title: h.intl.string(c.default["3LJ1u9"]),
        subtitle: h.intl.string(c.default.PJn0ih),
        actions: [],
        children: (0, s.jsx)("div", { className: o.W, children: (0, s.jsx)(l.A, { node: _ }) }),
    });
}
