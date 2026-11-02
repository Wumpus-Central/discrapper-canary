l.d(a, { Ay: () => o, iE: () => u });
var n = l(582128),
    t = l(17928),
    i = l(429913),
    r = l(403362),
    s = l(311043),
    d = l(454908);
function o(e) {
    let a = (0, i.h)(e),
        l = null != e && null == a,
        n = a?.getCanonicalGameId() ?? null,
        { data: t, isLoading: r } = (0, d.I)(n);
    return { gameId: n, gameRecord: t ?? null, isLoading: l || r };
}
function u(e) {
    let a = (0, i.A)(e),
        l = n.useMemo(() => a.map((e) => e?.getCanonicalGameId() ?? null), [a]),
        o = n.useMemo(() => l.filter(r.Vq), [l]);
    (0, d.x)(o);
    let u = (0, t.yK)([s.A], () => l.map((e) => s.A.getGame(e) ?? null), [l]),
        c = (0, t.yK)(
            [s.A],
            () => l.map((e) => null != e && null == s.A.getGame(e) && !s.A.hasNoData(e) && !s.A.didFetchingFail(e)),
            [l],
        );
    return n.useMemo(
        () => a.map((e, a) => ({ gameId: l[a], gameRecord: u[a], isLoading: null == e || c[a] })),
        [a, l, u, c],
    );
}
