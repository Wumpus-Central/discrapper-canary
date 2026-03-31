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
    (0, s.W)(e.gameApplicationIds);
    let t = (0, i.A)(e.gameApplicationIds);
    return r.useMemo(() => t.filter(a.Vq), [t]);
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
