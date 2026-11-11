var a = t(582128),
    i = t(855986),
    l = t(429913),
    r = t(403362),
    o = t(311043),
    u = t(454908);
t.d(
    n,
    {},
    {
        Ay: function (e) {
            let n = (0, l.h)(e),
                t = null != e && null == n,
                a = n?.getCanonicalGameId() ?? null,
                { data: i, isLoading: r } = (0, u.I)(a);
            return { gameId: a, gameRecord: i ?? null, isLoading: t || r };
        },
        iE: function (e) {
            let n = (0, l.A)(e),
                t = a.useMemo(() => n.map((e) => e?.getCanonicalGameId() ?? null), [n]),
                d = a.useMemo(() => t.filter(r.Vq), [t]);
            (0, u.x)(d);
            let s = (0, i.yK)([o.A], () => t.map((e) => o.A.getGame(e) ?? null), [t]),
                c = (0, i.yK)(
                    [o.A],
                    () =>
                        t.map(
                            (e) => null != e && null == o.A.getGame(e) && !o.A.hasNoData(e) && !o.A.didFetchingFail(e),
                        ),
                    [t],
                );
            return a.useMemo(
                () => n.map((e, n) => ({ gameId: t[n], gameRecord: s[n], isLoading: null == e || c[n] })),
                [n, t, s, c],
            );
        },
    },
);
