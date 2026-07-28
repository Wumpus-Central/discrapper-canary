t.d(l, { A: () => d });
var a = t(582128),
    i = t(17928),
    s = t(997013),
    n = t(311043),
    r = t(569926),
    c = t(280450),
    o = t(403362);
function d(e) {
    let l,
        t,
        d,
        m,
        u = e.gameActivity,
        x =
            ((l = e.games),
            (t = (0, i.bG)([c.default], () => c.default.isAuthenticated())),
            (d = null != l && !t),
            (0, r.x)(d ? [] : e.gameApplicationIds),
            (m = a.useMemo(() => {
                let e = new Map();
                if (null == l) return e;
                for (let t of l) e.set(t.id, new s.A(t));
                return e;
            }, [l])),
            (0, i.yK)([n.A], () => e.gameApplicationIds.map((e) => n.A.getGame(e) ?? m.get(e)).filter(o.Vq))),
        v = a.useMemo(
            () =>
                [...x].sort((e, l) => {
                    let t = u[e.id]?.score ?? 0,
                        a = u[l.id]?.score ?? 0;
                    return t !== a ? a - t : 0;
                }),
            [x, u],
        ),
        g = a.useMemo(() => v.slice(0, 5), [v]);
    return {
        gamesToDisplay: g,
        lastGameToDisplay: a.useMemo(() => v[5] ?? null, [v]),
        remainingGames: a.useMemo(() => v.slice(5), [v]),
    };
}
