l.d(t, { A: () => c });
var i = l(582128),
    s = l(17928),
    a = l(997013),
    n = l(311043),
    r = l(569926),
    d = l(280450),
    o = l(403362);
function c(e) {
    let t,
        l,
        c,
        m,
        u = e.gameActivity,
        x =
            ((t = e.games),
            (l = (0, s.bG)([d.default], () => d.default.isAuthenticated())),
            (c = null != t && !l),
            (0, r.x)(c ? [] : e.gameApplicationIds),
            (m = i.useMemo(() => {
                let e = new Map();
                if (null == t) return e;
                for (let l of t) e.set(l.id, new a.A(l));
                return e;
            }, [t])),
            (0, s.yK)([n.A], () => e.gameApplicationIds.map((e) => n.A.getGame(e) ?? m.get(e)).filter(o.Vq))),
        h = i.useMemo(
            () =>
                [...x].sort((e, t) => {
                    let l = u[e.id]?.score ?? 0,
                        i = u[t.id]?.score ?? 0;
                    return l !== i ? i - l : 0;
                }),
            [x, u],
        ),
        v = i.useMemo(() => h.slice(0, 5), [h]);
    return {
        gamesToDisplay: v,
        lastGameToDisplay: i.useMemo(() => h[5] ?? null, [h]),
        remainingGames: i.useMemo(() => h.slice(5), [h]),
    };
}
