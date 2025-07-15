(r.d(t, { O: () => i }), r(388685), r(539854));
var n = r(73800),
    l = r(399606),
    o = r(1870);
let i = (e) => {
    let t = (0, l.e7)([o.Z], () => o.Z.purchases);
    return (0, n.useMemo)(() => {
        let r = [],
            n = [];
        for (let l of e.values()) l.products.every((e) => !!t.get(e.skuId)) ? r.push(l) : n.push(l);
        return n.concat(r);
    }, [e, t]);
};
