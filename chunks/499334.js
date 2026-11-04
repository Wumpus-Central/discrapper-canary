var s = e(477900),
    a = e(582128),
    n = e(189213),
    l = e(528689),
    u = e(122088),
    d = e(419954),
    r = e(606072),
    c = e(135294),
    o = e(792996),
    h = e(306898);
e.d(
    t,
    {},
    {
        default: function (i) {
            let { guildId: t, requirement: e, description: p, transitionState: g, onClose: _ } = i,
                b = a.useMemo(
                    () =>
                        (0, d.zZ)("guild_space_sharing_modal", {
                            initialize: r.zE,
                            buildLayout: () =>
                                (0, r.UF)({
                                    guildId: t,
                                    useGuildSharingTitle: () => o.intl.string(o.t.eZhXQa),
                                    requirement: e,
                                }),
                        }),
                    [t, e],
                ),
                { node: k } = (0, u.Ay)(b, "");
            return (0, s.jsx)(n.a, {
                transitionState: g,
                onClose: _,
                title: o.intl.string(c.default["3LJ1u9"]),
                subtitle: p,
                actions: [],
                children: (0, s.jsx)("div", { className: h.W, children: (0, s.jsx)(l.A, { node: k }) }),
            });
        },
    },
);
