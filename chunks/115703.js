t.d(l, { A: () => d });
var i = t(582128),
    a = t(17928),
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
            (t = (0, a.bG)([c.default], () => c.default.isAuthenticated())),
            (d = null != l && !t),
            (0, r.x)(d ? [] : e.gameApplicationIds),
            (m = i.useMemo(() => {
                let e = new Map();
                if (null == l) return e;
                for (let t of l) e.set(t.id, new s.A(t));
                return e;
            }, [l])),
            (0, a.yK)([n.A], () => e.gameApplicationIds.map((e) => n.A.getGame(e) ?? m.get(e)).filter(o.Vq))),
        v = i.useMemo(
            () =>
                [...x].sort((e, l) => {
                    let t = u[e.id]?.score ?? 0,
                        i = u[l.id]?.score ?? 0;
                    return t !== i ? i - t : 0;
                }),
            [x, u],
        ),
        g = i.useMemo(() => v.slice(0, 5), [v]);
    return {
        gamesToDisplay: g,
        lastGameToDisplay: i.useMemo(() => v[5] ?? null, [v]),
        remainingGames: i.useMemo(() => v.slice(5), [v]),
    };
}
