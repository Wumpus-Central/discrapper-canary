s.d(t, { A: () => r });
var l = s(64700),
    a = s(429913),
    i = s(569926),
    n = s(403362);
function r(e) {
    let t,
        s,
        r,
        c = e.gameActivity,
        d =
            ((t = (0, a.A)(e.gameApplicationIds)),
            (s = l.useMemo(
                () =>
                    t
                        .filter(n.Vq)
                        .map((e) => e.getCanonicalGameId())
                        .filter(n.Vq),
                [t],
            )),
            (0, i.x)(s),
            (r = (0, a.A)(s)),
            l.useMemo(() => r.filter(n.Vq), [r])),
        m = l.useMemo(() => {
            let e = (e, t) => {
                let s = c[e.id]?.score ?? 0,
                    l = c[t.id]?.score ?? 0;
                return s !== l ? l - s : 0;
            };
            return d.sort(e), d;
        }, [d, c]),
        o = l.useMemo(() => m.slice(0, 5), [m]);
    return {
        gamesToDisplay: o,
        lastGameToDisplay: l.useMemo(() => m[5] ?? null, [m]),
        remainingGames: l.useMemo(() => m.slice(5), [m]),
    };
}
