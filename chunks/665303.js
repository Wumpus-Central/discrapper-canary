var l = t(477900),
    s = t(582128),
    a = t(442433),
    i = t(374846),
    r = t(734057);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channelId: n, originalLink: o, messageId: u } = e,
                c = (0, i.I)();
            return s.useCallback(
                (e) => {
                    if (null == n) return;
                    let s = r.A.getChannel(n);
                    return (0, a.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            t.e(638221),
                            t.e(302008),
                            t.e(951811),
                            t.e(343266),
                            t.e(359729),
                        ]).then(t.bind(t, 223816));
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                composerChannelId: c,
                                channel: s,
                                channelId: n,
                                originalLink: o,
                                messageId: u,
                            });
                    });
                },
                [n, o, u, c],
            );
        },
    },
);
