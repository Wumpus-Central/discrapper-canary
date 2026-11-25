var l = n(477900),
    i = n(582128),
    a = n(442433),
    r = n(374846),
    s = n(54304);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let o = (0, r.I)(),
                { hasItems: u } = (0, s.A)({ guildId: e, roleId: t, targetChannelId: o });
            return i.useCallback(
                (i) => {
                    null == e ||
                        null == t ||
                        (u &&
                            (0, a.L3)(i, async () => {
                                let { default: i } = await Promise.all([
                                    n.e(592028),
                                    n.e(425906),
                                    n.e(123216),
                                    n.e(182408),
                                    n.e(542822),
                                ]).then(n.bind(n, 179589));
                                return (n) => (0, l.jsx)(i, { composerChannelId: o, ...n, guildId: e, roleId: t });
                            }));
                },
                [e, t, o, u],
            );
        },
    },
);
