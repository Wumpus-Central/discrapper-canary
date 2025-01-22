r.d(n, {
    C: function () {
        return u;
    },
    H: function () {
        return s;
    }
});
var i = r(724458);
var a = r(192379),
    o = r(392711);
let s = (e) =>
        e.sort((e, n) => {
            var r, i;
            return (null !== (r = e.zIndex) && void 0 !== r ? r : 0) - (null !== (i = n.zIndex) && void 0 !== i ? i : 0);
        }),
    l = (e, n) => Math.floor(Math.random() * (n - e + 1) + e),
    u = (e) =>
        a.useMemo(() => {
            if (null == e) return e;
            let n = (0, o.cloneDeep)(e),
                r = l(
                    0,
                    n.effects.reduce((e, n) => {
                        var r;
                        let i = null === (r = n.randomizedSources) || void 0 === r ? void 0 : r.length;
                        return i > 0 && (e = 0 === e ? i : Math.min(e, i)), e;
                    }, 0) - 1
                );
            return (
                (n.effects = n.effects.map((e) => {
                    var n;
                    return (null === (n = e.randomizedSources) || void 0 === n ? void 0 : n.length) > 0 && (e.src = e.randomizedSources[r].src), e;
                })),
                n
            );
        }, [e]);
