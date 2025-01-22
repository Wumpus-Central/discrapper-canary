n.d(t, {
    O: function () {
        return s;
    }
}),
    n(47120),
    n(653041);
var r = n(192379),
    i = n(399606),
    l = n(1870);
let s = (e) => {
    let t = (0, i.e7)([l.Z], () => l.Z.purchases);
    return (0, r.useMemo)(() => {
        let n = [],
            r = [];
        for (let i of e.values()) i.products.every((e) => !!t.get(e.skuId)) ? n.push(i) : r.push(i);
        return r.concat(n);
    }, [e, t]);
};
