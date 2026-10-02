e.d(t, { default: () => c });
var n = e(477900),
    s = e(582128),
    a = e(189213),
    l = e(377980),
    u = e(581298),
    d = e(419954),
    r = e(17085),
    o = e(61567),
    h = e(375708);
function c(i) {
    let { guildId: t, transitionState: e, onClose: c } = i,
        p = s.useMemo(
            () =>
                (0, d.zZ)("guild_space_sharing_modal", {
                    initialize: r.zE,
                    buildLayout: () => (0, r.UF)({ guildId: t, useGuildSharingTitle: () => h.intl.string(h.t.eZhXQa) }),
                }),
            [t],
        ),
        { node: g } = (0, u.Ay)(p, "");
    return (0, n.jsx)(a.a, {
        transitionState: e,
        onClose: c,
        title: h.intl.string(o.default["3LJ1u9"]),
        subtitle: h.intl.string(o.default.PJn0ih),
        actions: [],
        children: (0, n.jsx)(l.A, { node: g }),
    });
}
