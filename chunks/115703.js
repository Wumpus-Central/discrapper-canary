n.d(t, { A: () => c }), n(638769);
var r = n(64700),
    i = n(429913),
    a = n(403362);
let s = 5;
function o(e) {
    return (t, n) => {
        var r, i, a, s;
        let o = null != (r = null == (a = e[t.id]) ? void 0 : a.score) ? r : 0,
            l = null != (i = null == (s = e[n.id]) ? void 0 : s.score) ? i : 0;
        return o !== l ? l - o : 0;
    };
}
function l(e) {
    let t = (0, i.A)(e.gameApplicationIds);
    return r.useMemo(() => t.filter(a.Vq), [t]);
}
function c(e) {
    let t = e.gameActivity,
        n = l(e),
        i = r.useMemo(() => {
            let e = o(t);
            return n.sort(e), n;
        }, [n, t]),
        a = r.useMemo(() => i.slice(0, s), [i]);
    return {
        gamesToDisplay: a,
        lastGameToDisplay: r.useMemo(() => {
            var e;
            return null != (e = i[s]) ? e : null;
        }, [i]),
        remainingGames: r.useMemo(() => i.slice(s), [i]),
    };
}
