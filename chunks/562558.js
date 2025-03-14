n.d(t, { Z: () => a }), n(230036);
var r = n(192379),
    l = n(835473),
    i = n(823379);
function a(e) {
    let t = e.gameActivity,
        n = (function (e) {
            let t = (0, l.Z)(e.gameApplicationIds);
            return r.useMemo(() => t.filter(i.lm), [t]);
        })(e),
        a = r.useMemo(
            () => (
                n.sort((e, n) => {
                    var r, l, i, a;
                    let o = null !== (i = null === (r = t[e.id]) || void 0 === r ? void 0 : r.score) && void 0 !== i ? i : 0,
                        c = null !== (a = null === (l = t[n.id]) || void 0 === l ? void 0 : l.score) && void 0 !== a ? a : 0;
                    return o !== c ? c - o : 0;
                }),
                n
            ),
            [n, t]
        ),
        o = r.useMemo(() => a.slice(0, 5), [a]);
    return {
        gamesToDisplay: o,
        lastGameToDisplay: r.useMemo(() => {
            var e;
            return null !== (e = a[5]) && void 0 !== e ? e : null;
        }, [a]),
        remainingGames: r.useMemo(() => a.slice(5), [a])
    };
}
