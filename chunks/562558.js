n.d(t, { Z: () => l }), n(230036);
var r = n(192379),
    a = n(835473),
    i = n(823379);
function l(e) {
    let t = e.gameActivity,
        n = (function (e) {
            let t = (0, a.Z)(e.gameApplicationIds);
            return r.useMemo(() => t.filter(i.lm), [t]);
        })(e),
        l = r.useMemo(
            () => (
                n.sort((e, n) => {
                    var r, a, i, l;
                    let s = null !== (i = null === (r = t[e.id]) || void 0 === r ? void 0 : r.score) && void 0 !== i ? i : 0,
                        o = null !== (l = null === (a = t[n.id]) || void 0 === a ? void 0 : a.score) && void 0 !== l ? l : 0;
                    return s !== o ? o - s : 0;
                }),
                n
            ),
            [n, t]
        ),
        s = r.useMemo(() => l.slice(0, 5), [l]);
    return {
        gamesToDisplay: s,
        lastGameToDisplay: r.useMemo(() => {
            var e;
            return null !== (e = l[5]) && void 0 !== e ? e : null;
        }, [l]),
        remainingGames: r.useMemo(() => l.slice(5), [l])
    };
}
