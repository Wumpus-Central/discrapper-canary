var s = t(477900),
    i = t(582128),
    l = t(442433),
    a = t(374846),
    r = t(734057);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channelId: n, originalLink: o, messageId: c } = e,
                d = (0, a.I)();
            return i.useCallback(
                (e) => {
                    if (null == n) return;
                    let i = r.A.getChannel(n);
                    return (0, l.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            t.e(476662),
                            t.e(253044),
                            t.e(311913),
                            t.e(881717),
                            t.e(363269),
                            t.e(474172),
                            t.e(489218),
                            t.e(912875),
                            t.e(862782),
                            t.e(55348),
                            t.e(638221),
                            t.e(302008),
                            t.e(951811),
                            t.e(343266),
                            t.e(359729),
                        ]).then(t.bind(t, 223816));
                        return (t) =>
                            (0, s.jsx)(e, {
                                ...t,
                                composerChannelId: d,
                                channel: i,
                                channelId: n,
                                originalLink: o,
                                messageId: c,
                            });
                    });
                },
                [n, o, c, d],
            );
        },
    },
);
