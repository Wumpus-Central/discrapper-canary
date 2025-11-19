n.d(t, {
    C: () => s,
    H: () => a,
}),
    n(642613);
var r = n(473749),
    i = n(392711);
let a = (e) =>
        e.sort((e, t) => {
            var n, r;
            return (null != (n = e.zIndex) ? n : 0) - (null != (r = t.zIndex) ? r : 0);
        }),
    o = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
    s = (e) =>
        r.useMemo(() => {
            if (null == e) return e;
            let t = (0, i.cloneDeep)(e),
                n = o(
                    0,
                    t.effects.reduce((e, t) => {
                        var n, r;
                        let i = null != (r = null == (n = t.randomizedSources) ? void 0 : n.length) ? r : 0;
                        return i > 0 && (e = 0 === e ? i : Math.min(e, i)), e;
                    }, 0) - 1,
                );
            return (
                (t.effects = t.effects.map(
                    (e) => (
                        null != e.randomizedSources &&
                            e.randomizedSources.length > 0 &&
                            (e.src = e.randomizedSources[n].src),
                        e
                    ),
                )),
                t
            );
        }, [e]);
