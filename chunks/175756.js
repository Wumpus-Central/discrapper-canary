n.d(t, { Z: () => l }), n(388685);
var r = n(192379),
    i = n(597688),
    s = n(884697),
    a = n(223143);
let l = (e) => {
    let [t, n] = r.useState(),
        { categories: l } = (0, a.ZP)({ location: 'useTryItOutProfileEffectId' });
    return (
        r.useEffect(() => {
            (null == t || 0 === t.size) && n(l);
        }, [l, t]),
        r.useMemo(() => {
            if (null != e) return e;
            if (null == t) return;
            let n = (0, s.XS)(t)
                .filter((e) => {
                    let { skuId: t } = e,
                        n = i.Z.getProduct(t);
                    return (0, s.G1)(n);
                })
                .map((e) => e.id);
            return n[Math.floor(Math.random() * n.length)];
        }, [t, e])
    );
};
