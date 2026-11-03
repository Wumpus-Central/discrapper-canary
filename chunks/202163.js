a.d(n, { Ay: () => u, iE: () => s });
var t = a(582128),
    l = a(17928),
    i = a(429913),
    r = a(403362),
    d = a(311043),
    o = a(454908);
function u(e) {
    let n = (0, i.h)(e),
        a = null != e && null == n,
        t = n?.getCanonicalGameId() ?? null,
        { data: l, isLoading: r } = (0, o.I)(t);
    return { gameId: t, gameRecord: l ?? null, isLoading: a || r };
}
function s(e) {
    let n = (0, i.A)(e),
        a = t.useMemo(() => n.map((e) => e?.getCanonicalGameId() ?? null), [n]),
        u = t.useMemo(() => a.filter(r.Vq), [a]);
    (0, o.x)(u);
    let s = (0, l.yK)([d.A], () => a.map((e) => d.A.getGame(e) ?? null), [a]),
        c = (0, l.yK)(
            [d.A],
            () => a.map((e) => null != e && null == d.A.getGame(e) && !d.A.hasNoData(e) && !d.A.didFetchingFail(e)),
            [a],
        );
    return t.useMemo(
        () => n.map((e, n) => ({ gameId: a[n], gameRecord: s[n], isLoading: null == e || c[n] })),
        [n, a, s, c],
    );
}
