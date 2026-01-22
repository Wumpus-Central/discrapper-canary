n.d(t, {
    b: () => o,
    u: () => a,
}),
    n(638769);
var r = n(64700),
    i = n(735438);
let a = (e) =>
        e.sort((e, t) => {
            var n, r;
            return (null != (n = e.zIndex) ? n : 0) - (null != (r = t.zIndex) ? r : 0);
        }),
    s = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
    o = (e) =>
        r.useMemo(() => {
            if (null == e) return e;
            let t = (0, i.cloneDeep)(e),
                n = s(
                    0,
                    t.effects.reduce((e, t) => {
                        var n, r;
                        let i = null != (n = null == (r = t.randomizedSources) ? void 0 : r.length) ? n : 0;
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
