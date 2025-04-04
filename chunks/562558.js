n.d(t, { Z: () => c }), n(230036);
var r = n(192379),
    i = n(835473),
    o = n(823379);
let a = 5;
function s(e) {
    return (t, n) => {
        var r, i, o, a;
        let s = null != (o = null == (r = e[t.id]) ? void 0 : r.score) ? o : 0,
            l = null != (a = null == (i = e[n.id]) ? void 0 : i.score) ? a : 0;
        return s !== l ? l - s : 0;
    };
}
function l(e) {
    let t = (0, i.Z)(e.gameApplicationIds);
    return r.useMemo(() => t.filter(o.lm), [t]);
}
function c(e) {
    let t = e.gameActivity,
        n = l(e),
        i = r.useMemo(() => {
            let e = s(t);
            return n.sort(e), n;
        }, [n, t]),
        o = r.useMemo(() => i.slice(0, a), [i]);
    return {
        gamesToDisplay: o,
        lastGameToDisplay: r.useMemo(() => {
            var e;
            return null != (e = i[a]) ? e : null;
        }, [i]),
        remainingGames: r.useMemo(() => i.slice(a), [i])
    };
}
