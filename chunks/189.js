n.d(t, { Z: () => s });
var a = n(54381),
    l = n(473749),
    i = n(392711),
    r = n(680295);
let s = (e) => {
    let { config: t } = e,
        n = l.useMemo(() => (0, i.cloneDeep)(t), [t]),
        s = l.useMemo(() => t.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0), [t]),
        o = l.useMemo(() => {
            if (s) {
                var e;
                let a =
                    1 ===
                    (e = n.effects.reduce((e, t) => {
                        var n;
                        let a = 1 + (null != (n = t.randomizedSources) ? n : []).length;
                        return a > 1 ? (1 === e ? a : Math.min(a, e)) : e;
                    }, 1))
                        ? -1
                        : Math.floor(Math.random() * e);
                a > 0 &&
                    t.effects.forEach((e, t) => {
                        null != e.randomizedSources &&
                            e.randomizedSources.length > 0 &&
                            (n.effects[t].src = e.randomizedSources[a - 1].src);
                    });
            }
            return n;
        }, [t.effects, n, s]);
    return (0, a.jsx)(r.n, {
        profileEffectConfig: o,
        skuId: "debug",
    });
};
