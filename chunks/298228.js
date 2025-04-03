n.d(t, { O: () => o }), n(47120), n(653041);
var r = n(192379),
    l = n(399606),
    a = n(1870);
let o = (e) => {
    let t = (0, l.e7)([a.Z], () => a.Z.purchases);
    return (0, r.useMemo)(() => {
        let n = [],
            r = [];
        for (let l of e.values()) l.products.every((e) => !!t.get(e.skuId)) ? n.push(l) : r.push(l);
        return r.concat(n);
    }, [e, t]);
};
