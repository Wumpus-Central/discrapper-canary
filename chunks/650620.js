var t = n(477900),
    a = n(582128),
    s = n(442433),
    i = n(374846),
    r = n(54304);
n.d(
    l,
    {},
    {
        A: function (e, l) {
            let u = (0, i.I)(),
                { hasItems: o } = (0, r.A)({ guildId: e, roleId: l, targetChannelId: u });
            return a.useCallback(
                (a) => {
                    null == e ||
                        null == l ||
                        (o &&
                            (0, s.L3)(a, async () => {
                                let { default: a } = await Promise.all([
                                    n.e(476662),
                                    n.e(253044),
                                    n.e(311913),
                                    n.e(881717),
                                    n.e(363269),
                                    n.e(474172),
                                    n.e(489218),
                                    n.e(912875),
                                    n.e(862782),
                                    n.e(55348),
                                    n.e(592028),
                                    n.e(425906),
                                    n.e(123216),
                                    n.e(182408),
                                    n.e(542822),
                                ]).then(n.bind(n, 179589));
                                return (n) => (0, t.jsx)(a, { composerChannelId: u, ...n, guildId: e, roleId: l });
                            }));
                },
                [e, l, u, o],
            );
        },
    },
);
