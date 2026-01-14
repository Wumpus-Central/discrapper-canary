n.d(t, { Z: () => o });
var a = n(54381),
    r = n(473749),
    i = n(392711),
    l = n(680295),
    s = n(410061);
let o = (e) => {
    let { config: t } = e,
        n = r.useMemo(() => (0, i.cloneDeep)(t), [t]),
        o = r.useMemo(() => t.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0), [t]),
        c = r.useMemo(() => {
            if (o) {
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
        }, [t.effects, n, o]),
        { layerData: d } = (0, s.Z)(
            {
                config: c,
                skuId: "debug",
            },
            !0,
        );
    return (0, a.jsx)(l.n, {
        profileEffectConfig: c,
        layerData: d,
        skuId: "debug",
    });
};
