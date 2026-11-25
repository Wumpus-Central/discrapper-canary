var l = n(582128),
    i = n(855986),
    a = n(587895),
    r = n(429913),
    s = n(403362),
    o = n(311043),
    u = n(454908);
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let t = (0, r.h)(e),
                n = null != e && null == t,
                l = t?.getCanonicalGameId() ?? null,
                { data: i, isLoading: a } = (0, u.I)(l);
            return { gameId: l, gameRecord: i ?? null, isLoading: n || a };
        },
        iE: function (e) {
            let t = (0, r.A)(e),
                n = (0, i.yK)([a.A], () => e.map((e) => !a.A.isHydrated(e) && !a.A.didFetchingApplicationFail(e)), [e]),
                c = l.useMemo(() => t.map((e) => e?.getCanonicalGameId() ?? null), [t]),
                d = l.useMemo(() => c.filter(s.Vq), [c]);
            (0, u.x)(d);
            let m = (0, i.yK)([o.A], () => c.map((e) => o.A.getGame(e) ?? null), [c]),
                A = (0, i.yK)(
                    [o.A],
                    () =>
                        c.map(
                            (e) => null != e && null == o.A.getGame(e) && !o.A.hasNoData(e) && !o.A.didFetchingFail(e),
                        ),
                    [c],
                );
            return l.useMemo(
                () => c.map((e, t) => ({ gameId: e, gameRecord: m[t], isLoading: n[t] || A[t] })),
                [c, m, n, A],
            );
        },
    },
);
