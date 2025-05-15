n.d(t, { Z: () => c }), n(642613);
var r = n(73800),
    i = n(835473),
    a = n(823379);
let o = 5;
function s(e) {
    return (t, n) => {
        var r, i, a, o;
        let s = null != (a = null == (r = e[t.id]) ? void 0 : r.score) ? a : 0,
            l = null != (o = null == (i = e[n.id]) ? void 0 : i.score) ? o : 0;
        return s !== l ? l - s : 0;
    };
}
function l(e) {
    let t = (0, i.Z)(e.gameApplicationIds);
    return r.useMemo(() => t.filter(a.lm), [t]);
}
function c(e) {
    let t = e.gameActivity,
        n = l(e),
        i = r.useMemo(() => {
            let e = s(t);
            return n.sort(e), n;
        }, [n, t]),
        a = r.useMemo(() => i.slice(0, o), [i]);
    return {
        gamesToDisplay: a,
        lastGameToDisplay: r.useMemo(() => {
            var e;
            return null != (e = i[o]) ? e : null;
        }, [i]),
        remainingGames: r.useMemo(() => i.slice(o), [i])
    };
}
