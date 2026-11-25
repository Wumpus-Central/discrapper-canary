var l = t(477900),
    s = t(582128),
    a = t(442433),
    i = t(71393),
    r = t(287809),
    o = t(448645);
t.d(
    n,
    {},
    {
        v: function (e, n) {
            return s.useCallback(
                (s) => {
                    let u;
                    s.stopPropagation();
                    let c = i.A.getGuild(e.guildId),
                        d = r.default.getCurrentUser();
                    (null != c || o.Ay.canUseCustomCallSounds(d)) &&
                        ((u = r.default.getCurrentUser()),
                        (null != c || o.Ay.canUseCustomCallSounds(u)) &&
                            (0, a.L3)(s, async () => {
                                let { default: s } = await Promise.all([
                                    t.e(503376),
                                    t.e(926132),
                                    t.e(146652),
                                    t.e(638221),
                                    t.e(482861),
                                    t.e(850424),
                                ]).then(t.bind(t, 923819));
                                return (t) => (0, l.jsx)(s, { ...t, soundGuild: c, activeCallGuildId: n, sound: e });
                            }));
                },
                [e, n],
            );
        },
    },
);
