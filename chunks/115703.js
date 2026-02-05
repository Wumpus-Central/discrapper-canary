"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(429913),
    a = n(403362);
let s = 5;
function o(e) {
    return (t, n) => {
        let r = e[t.id]?.score ?? 0,
            i = e[n.id]?.score ?? 0;
        return r !== i ? i - r : 0;
    };
}
function l(e) {
    let t = (0, i.A)(e.gameApplicationIds);
    return r.useMemo(() => t.filter(a.Vq), [t]);
}
function u(e) {
    let t = e.gameActivity,
        n = l(e),
        i = r.useMemo(() => {
            let e = o(t);
            return n.sort(e), n;
        }, [n, t]),
        a = r.useMemo(() => i.slice(0, s), [i]);
    return {
        gamesToDisplay: a,
        lastGameToDisplay: r.useMemo(() => i[s] ?? null, [i]),
        remainingGames: r.useMemo(() => i.slice(s), [i]),
    };
}
