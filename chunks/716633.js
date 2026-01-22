l.d(t, { x: () => a }), l(896048), l(321073);
var n = l(64700),
    r = l(417597),
    s = l(4227);
let a = (e) => {
    let t = (0, r.bG)([s.A], () => s.A.purchases);
    return (0, n.useMemo)(() => {
        let l = [],
            n = [];
        for (let r of e.values()) r.products.every((e) => !!t.get(e.skuId)) ? l.push(r) : n.push(r);
        return n.concat(l);
    }, [e, t]);
};
