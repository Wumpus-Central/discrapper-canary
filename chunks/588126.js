n.d(t, { Z: () => s }), n(388685);
var r = n(647438),
    i = n(597688),
    a = n(884697),
    o = n(223143);
let s = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, s] = r.useState(),
        { categories: l, purchases: c } = (0, o.ZP)();
    return (
        r.useEffect(() => {
            (null == n || 0 === n.size) && s(l);
        }, [l, n]),
        r.useMemo(() => {
            if (null != e) return e;
            if (null == n || !t) return;
            let r = (0, a.iC)(c, n).filter((e) => {
                let { skuId: t } = e,
                    n = i.Z.getProduct(t);
                return (0, a.G1)(n);
            });
            return r[Math.floor(Math.random() * r.length)];
        }, [n, e, c, t])
    );
};
