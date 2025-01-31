n.d(t, {
    C: () => o,
    H: () => a
}),
    n(724458);
var i = n(192379),
    r = n(392711);
let a = (e) =>
        e.sort((e, t) => {
            var n, i;
            return (null !== (n = e.zIndex) && void 0 !== n ? n : 0) - (null !== (i = t.zIndex) && void 0 !== i ? i : 0);
        }),
    s = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
    o = (e) =>
        i.useMemo(() => {
            if (null == e) return e;
            let t = (0, r.cloneDeep)(e),
                n = s(
                    0,
                    t.effects.reduce((e, t) => {
                        var n;
                        let i = null === (n = t.randomizedSources) || void 0 === n ? void 0 : n.length;
                        return i > 0 && (e = 0 === e ? i : Math.min(e, i)), e;
                    }, 0) - 1
                );
            return (
                (t.effects = t.effects.map((e) => {
                    var t;
                    return (null === (t = e.randomizedSources) || void 0 === t ? void 0 : t.length) > 0 && (e.src = e.randomizedSources[n].src), e;
                })),
                t
            );
        }, [e]);
