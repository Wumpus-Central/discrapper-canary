"use strict";
r.d(t, { A: () => s });
var n = r(17928),
    i = r(590180),
    a = r(4227),
    l = r(892118);
function s(e) {
    return (0, n.bG)([i.A, a.A], () => {
        if (null == e) return;
        let t = i.A.getProduct(e);
        if ((0, l.s)(t?.items[0])) return t.items[0];
        let r = a.A.getPurchase(e);
        if ((0, l.s)(r?.items[0])) return r.items[0];
    });
}
