var l = n(582128),
    i = n(164636),
    r = n(21161),
    s = n(3137);
n.d(
    t,
    {},
    {
        A: function () {
            let { createMultipleConfettiAt: e } = l.useContext(r.x),
                t = (0, i.bG)([s.A], () => s.A.getState()),
                n = l.useCallback(
                    (e) => ({
                        size: { type: "static-random", minValue: e.confettiSize - 7, maxValue: e.confettiSize + 7 },
                    }),
                    [],
                );
            return l.useMemo(
                () => ({
                    fire: (l, i, r) => {
                        let s = r?.settings != null ? { ...t, ...r.settings } : t;
                        e(l, i, n(s), (r?.count ?? s.confettiCount) * (r?.countMultiplier ?? 1), { sprite: r?.sprite });
                    },
                }),
                [e, n, t],
            );
        },
    },
);
