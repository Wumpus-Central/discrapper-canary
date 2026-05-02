s.d(t, { A: () => c });
var l = s(64700),
    a = s(17928),
    i = s(311043),
    n = s(569926),
    r = s(403362);
function c(e) {
    let t = e.gameActivity,
        s =
            ((0, n.x)(e.gameApplicationIds),
            (0, a.yK)([i.A], () => e.gameApplicationIds.map((e) => i.A.getGame(e)).filter(r.Vq))),
        c = l.useMemo(
            () =>
                [...s].sort((e, s) => {
                    let l = t[e.id]?.score ?? 0,
                        a = t[s.id]?.score ?? 0;
                    return l !== a ? a - l : 0;
                }),
            [s, t],
        ),
        d = l.useMemo(() => c.slice(0, 5), [c]);
    return {
        gamesToDisplay: d,
        lastGameToDisplay: l.useMemo(() => c[5] ?? null, [c]),
        remainingGames: l.useMemo(() => c.slice(5), [c]),
    };
}
