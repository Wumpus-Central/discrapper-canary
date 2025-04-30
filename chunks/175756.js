n.d(t, { Z: () => a }), n(388685);
var i = n(192379),
    r = n(597688),
    s = n(884697),
    l = n(223143);
let a = (e) => {
    let [t, n] = i.useState(),
        { categories: a } = (0, l.ZP)({ location: 'useTryItOutProfileEffectId' });
    return (
        i.useEffect(() => {
            (null == t || 0 === t.size) && n(a);
        }, [a, t]),
        i.useMemo(() => {
            if (null != e) return e;
            if (null == t) return;
            let n = (0, s.XS)(t)
                .filter((e) => {
                    let { skuId: t } = e,
                        n = r.Z.getProduct(t);
                    return (0, s.G1)(n);
                })
                .map((e) => e.id);
            return n[Math.floor(Math.random() * n.length)];
        }, [t, e])
    );
};
