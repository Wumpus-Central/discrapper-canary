var s = t(477900),
    i = t(582128),
    l = t(442433),
    a = t(71393),
    r = t(287809),
    o = t(448645);
t.d(
    n,
    {},
    {
        v: function (e, n) {
            return i.useCallback(
                (i) => {
                    let c;
                    i.stopPropagation();
                    let d = a.A.getGuild(e.guildId),
                        u = r.default.getCurrentUser();
                    (null != d || o.Ay.canUseCustomCallSounds(u)) &&
                        ((c = r.default.getCurrentUser()),
                        (null != d || o.Ay.canUseCustomCallSounds(c)) &&
                            (0, l.L3)(i, async () => {
                                let { default: i } = await Promise.all([
                                    t.e(476662),
                                    t.e(253044),
                                    t.e(311913),
                                    t.e(881717),
                                    t.e(363269),
                                    t.e(474172),
                                    t.e(503376),
                                    t.e(926132),
                                    t.e(489218),
                                    t.e(912875),
                                    t.e(55348),
                                    t.e(146652),
                                    t.e(862782),
                                    t.e(638221),
                                    t.e(482861),
                                    t.e(850424),
                                ]).then(t.bind(t, 923819));
                                return (t) => (0, s.jsx)(i, { ...t, soundGuild: d, activeCallGuildId: n, sound: e });
                            }));
                },
                [e, n],
            );
        },
    },
);
