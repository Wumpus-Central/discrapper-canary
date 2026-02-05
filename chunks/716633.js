"use strict";
s.d(t, { x: () => a }), s(321073);
var n = s(64700),
    r = s(417597),
    l = s(4227);
let a = (e) => {
    let t = (0, r.bG)([l.A], () => l.A.purchases);
    return (0, n.useMemo)(() => {
        let s = [],
            n = [];
        for (let r of e.values()) r.products.every((e) => !!t.get(e.skuId)) ? s.push(r) : n.push(r);
        return n.concat(s);
    }, [e, t]);
};
