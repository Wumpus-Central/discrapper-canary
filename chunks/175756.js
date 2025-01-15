n(47120);
var i = n(192379),
    r = n(597688),
    s = n(884697),
    a = n(223143);
t.Z = (e) => {
    let [t, n] = i.useState(),
        { categories: l } = (0, a.ZP)({ location: 'useTryItOutProfileEffectId' });
    return (
        i.useEffect(() => {
            (null == t || 0 === t.size) && n(l);
        }, [l, t]),
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
