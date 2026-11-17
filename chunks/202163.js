var a = t(582128),
    i = t(855986),
    l = t(587895),
    r = t(429913),
    o = t(403362),
    d = t(311043),
    s = t(454908);
t.d(
    n,
    {},
    {
        Ay: function (e) {
            let n = (0, r.h)(e),
                t = null != e && null == n,
                a = n?.getCanonicalGameId() ?? null,
                { data: i, isLoading: l } = (0, s.I)(a);
            return { gameId: a, gameRecord: i ?? null, isLoading: t || l };
        },
        iE: function (e) {
            let n = (0, r.A)(e),
                t = (0, i.yK)([l.A], () => e.map((e) => !l.A.isHydrated(e) && !l.A.didFetchingApplicationFail(e)), [e]),
                u = a.useMemo(() => n.map((e) => e?.getCanonicalGameId() ?? null), [n]),
                c = a.useMemo(() => u.filter(o.Vq), [u]);
            (0, s.x)(c);
            let g = (0, i.yK)([d.A], () => u.map((e) => d.A.getGame(e) ?? null), [u]),
                f = (0, i.yK)(
                    [d.A],
                    () =>
                        u.map(
                            (e) => null != e && null == d.A.getGame(e) && !d.A.hasNoData(e) && !d.A.didFetchingFail(e),
                        ),
                    [u],
                );
            return a.useMemo(
                () => u.map((e, n) => ({ gameId: e, gameRecord: g[n], isLoading: t[n] || f[n] })),
                [u, g, t, f],
            );
        },
    },
);
