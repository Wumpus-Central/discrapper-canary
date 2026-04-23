a.d(t, { A: () => o });
var n = a(627968),
    l = a(64700),
    i = a(735438),
    s = a(219220),
    r = a(351966);
let o = (e) => {
    let { profileEffect: t } = e,
        a = l.useMemo(() => (0, i.cloneDeep)(t), [t]),
        o = l.useMemo(
            () => t.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0),
            [t.effects],
        ),
        d = l.useMemo(() => {
            if (o) {
                var e;
                let n =
                    1 ===
                    (e = a.effects.reduce((e, t) => {
                        let a = 1 + (t.randomizedSources ?? []).length;
                        return a > 1 ? (1 === e ? a : Math.min(a, e)) : e;
                    }, 1))
                        ? -1
                        : Math.floor(Math.random() * e);
                n > 0 &&
                    t.effects.forEach((e, t) => {
                        null != e.randomizedSources &&
                            e.randomizedSources.length > 0 &&
                            (a.effects[t].src = e.randomizedSources[n - 1].src);
                    });
            }
            return a;
        }, [t.effects, a, o]),
        { layerData: c } = (0, s.A)({ skuId: "debug", layers: d.effects });
    return (0, n.jsx)(r.p, { profileEffect: d, layerData: c, skuId: "debug" });
};
