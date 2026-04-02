"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(429913),
    s = n(885151),
    a = n(403362);
let o = 5;
function l(e) {
    return (t, n) => {
        let r = e[t.id]?.score ?? 0,
            i = e[n.id]?.score ?? 0;
        return r !== i ? i - r : 0;
    };
}
function u(e) {
    let t = (0, i.A)(e.gameApplicationIds),
        n = r.useMemo(() => t.filter(a.Vq).map((e) => e.getCanonicalGameId()), [t]);
    (0, s.W)(n);
    let o = (0, i.A)(n);
    return r.useMemo(() => o.filter(a.Vq), [o]);
}
function c(e) {
    let t = e.gameActivity,
        n = u(e),
        i = r.useMemo(() => {
            let e = l(t);
            return n.sort(e), n;
        }, [n, t]),
        s = r.useMemo(() => i.slice(0, o), [i]);
    return {
        gamesToDisplay: s,
        lastGameToDisplay: r.useMemo(() => i[o] ?? null, [i]),
        remainingGames: r.useMemo(() => i.slice(o), [i]),
    };
}
