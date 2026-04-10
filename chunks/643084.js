n.d(t, { A: () => o });
var a = n(627968),
    i = n(64700),
    s = n(735438),
    l = n(219220),
    r = n(351966);
let o = (e) => {
    let { profileEffect: t } = e,
        n = i.useMemo(() => (0, s.cloneDeep)(t), [t]),
        o = i.useMemo(
            () => t.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0),
            [t.effects],
        ),
        d = i.useMemo(() => {
            if (o) {
                var e;
                let a =
                    1 ===
                    (e = n.effects.reduce((e, t) => {
                        let n = 1 + (t.randomizedSources ?? []).length;
                        return n > 1 ? (1 === e ? n : Math.min(n, e)) : e;
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
        { layerData: c } = (0, l.A)({ skuId: "debug", layers: d.effects });
    return (0, a.jsx)(r.p, { profileEffect: d, layerData: c, skuId: "debug" });
};
