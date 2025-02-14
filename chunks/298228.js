n.d(t, { O: () => s }), n(47120), n(653041);
var l = n(192379),
    r = n(399606),
    i = n(1870);
let s = (e) => {
    let t = (0, r.e7)([i.Z], () => i.Z.purchases);
    return (0, l.useMemo)(() => {
        let n = [],
            l = [];
        for (let r of e.values()) r.products.every((e) => !!t.get(e.skuId)) ? n.push(r) : l.push(r);
        return l.concat(n);
    }, [e, t]);
};
