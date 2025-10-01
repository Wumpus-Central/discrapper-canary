n.d(t, { Z: () => s }), n(388685);
var r = n(647438),
    i = n(597688),
    a = n(884697),
    o = n(223143);
let s = (e) => {
    let [t, n] = r.useState(),
        { categories: s } = (0, o.ZP)();
    return (
        r.useEffect(() => {
            (null == t || 0 === t.size) && n(s);
        }, [s, t]),
        r.useMemo(() => {
            if (null != e) return e;
            if (null == t) return;
            let n = (0, a.XS)(t).filter((e) => {
                let { skuId: t } = e,
                    n = i.Z.getProduct(t);
                return (0, a.G1)(n);
            });
            return n[Math.floor(Math.random() * n.length)];
        }, [t, e])
    );
};
