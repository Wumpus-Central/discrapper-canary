"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    s = n(429913),
    r = n(454908),
    l = n(403362);
function a(e) {
    let t,
        n,
        a,
        o = e.gameActivity,
        c =
            ((t = (0, s.A)(e.gameApplicationIds)),
            (n = i.useMemo(
                () =>
                    t
                        .filter(l.Vq)
                        .map((e) => e.getCanonicalGameId())
                        .filter(l.Vq),
                [t],
            )),
            (0, r.x)(n),
            (a = (0, s.A)(n)),
            i.useMemo(() => a.filter(l.Vq), [a])),
        d = i.useMemo(() => {
            let e = (e, t) => {
                let n = o[e.id]?.score ?? 0,
                    i = o[t.id]?.score ?? 0;
                return n !== i ? i - n : 0;
            };
            return c.sort(e), c;
        }, [c, o]),
        u = i.useMemo(() => d.slice(0, 5), [d]);
    return {
        gamesToDisplay: u,
        lastGameToDisplay: i.useMemo(() => d[5] ?? null, [d]),
        remainingGames: i.useMemo(() => d.slice(5), [d]),
    };
}
