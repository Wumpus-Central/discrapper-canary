n.d(t, {
    C: () => s,
    H: () => o
}),
    n(230036);
var r = n(192379),
    i = n(392711);
let o = (e) =>
        e.sort((e, t) => {
            var n, r;
            return (null != (n = e.zIndex) ? n : 0) - (null != (r = t.zIndex) ? r : 0);
        }),
    a = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
    s = (e) =>
        r.useMemo(() => {
            if (null == e) return e;
            let t = (0, i.cloneDeep)(e),
                n = a(
                    0,
                    t.effects.reduce((e, t) => {
                        var n;
                        let r = null == (n = t.randomizedSources) ? void 0 : n.length;
                        return r > 0 && (e = 0 === e ? r : Math.min(e, r)), e;
                    }, 0) - 1
                );
            return (
                (t.effects = t.effects.map((e) => {
                    var t;
                    return (null == (t = e.randomizedSources) ? void 0 : t.length) > 0 && (e.src = e.randomizedSources[n].src), e;
                })),
                t
            );
        }, [e]);
