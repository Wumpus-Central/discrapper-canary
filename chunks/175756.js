n.d(t, { Z: () => a }), n(47120);
var i = n(192379),
    s = n(597688),
    r = n(884697),
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
            let n = (0, r.XS)(t)
                .filter((e) => {
                    let { skuId: t } = e,
                        n = s.Z.getProduct(t);
                    return (0, r.G1)(n);
                })
                .map((e) => e.id);
            return n[Math.floor(Math.random() * n.length)];
        }, [t, e])
    );
};
