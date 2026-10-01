i.d(e, { default: () => A });
var s = i(477900),
    n = i(582128),
    a = i(17928),
    u = i(189213),
    l = i(290595),
    d = i(377980),
    g = i(581298),
    r = i(419954),
    _ = i(885386),
    c = i(311059),
    o = i(641216),
    h = i(153488),
    p = i(71393),
    b = i(115063),
    f = i(61567),
    k = i(375708);
function A(t) {
    let { guildId: e, transitionState: i, onClose: A } = t,
        S = n.useMemo(
            () =>
                (0, r.zZ)("guild_space_sharing_modal", {
                    initialize: () => {
                        h.A.fetchedConsents || (0, l.Q)();
                    },
                    buildLayout: () => [
                        c._,
                        (0, r.zD)("guild_space_sharing_modal_guild_activity_sharing_setting", {
                            useTitle: () => k.intl.string(k.t.eZhXQa),
                            useSubtitle: () => (0, a.bG)([p.A], () => p.A.getGuild(e)?.name),
                            useValue: () => !_.JG.useSetting().includes(e),
                            setValue: (t) => {
                                let i = (0, b.Kk)();
                                (t ? i.delete(e) : i.add(e), _.JG.updateSetting([...i]));
                            },
                            useDisabled: () => !_.tz.useSetting(),
                        }),
                        o._,
                    ],
                }),
            [e],
        ),
        { node: m } = (0, g.Ay)(S, "");
    return (0, s.jsx)(u.a, {
        transitionState: i,
        onClose: A,
        title: k.intl.string(f.default["3LJ1u9"]),
        subtitle: k.intl.string(f.default.PJn0ih),
        actions: [],
        children: (0, s.jsx)(d.A, { node: m }),
    });
}
