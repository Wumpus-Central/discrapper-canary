"use strict";
n.d(t, { A: () => s });
var r = n(17928),
    a = n(590180),
    i = n(4227),
    l = n(892118);
function s(e) {
    return (0, r.bG)([a.A, i.A], () => {
        if (null == e) return;
        let t = a.A.getProduct(e);
        if ((0, l.s)(t?.items[0])) return t.items[0];
        let n = i.A.getPurchase(e);
        if ((0, l.s)(n?.items[0])) return n.items[0];
    });
}
