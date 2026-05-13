l.d(t, { A: () => m });
var s = l(64700),
    a = l(17928),
    i = l(997013),
    n = l(311043),
    r = l(569926),
    c = l(495544),
    d = l(403362);
function m(e) {
    let t,
        l,
        m,
        o,
        u = e.gameActivity,
        x =
            ((t = e.games),
            (l = (0, a.bG)([c.default], () => c.default.isAuthenticated())),
            (m = null != t && !l),
            (0, r.x)(m ? [] : e.gameApplicationIds),
            (o = s.useMemo(() => {
                let e = new Map();
                if (null == t) return e;
                for (let l of t) e.set(l.id, new i.A(l));
                return e;
            }, [t])),
            (0, a.yK)([n.A], () => e.gameApplicationIds.map((e) => n.A.getGame(e) ?? o.get(e)).filter(d.Vq))),
        h = s.useMemo(
            () =>
                [...x].sort((e, t) => {
                    let l = u[e.id]?.score ?? 0,
                        s = u[t.id]?.score ?? 0;
                    return l !== s ? s - l : 0;
                }),
            [x, u],
        ),
        v = s.useMemo(() => h.slice(0, 5), [h]);
    return {
        gamesToDisplay: v,
        lastGameToDisplay: s.useMemo(() => h[5] ?? null, [h]),
        remainingGames: s.useMemo(() => h.slice(5), [h]),
    };
}
