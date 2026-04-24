"use strict";
n.d(t, { A: () => s });
var a = n(17928),
    i = n(590180),
    l = n(4227),
    r = n(892118);
function s(e) {
    return (0, a.bG)([i.A, l.A], () => {
        if (null == e) return;
        let t = i.A.getProduct(e);
        if ((0, r.s)(t?.items[0])) return t.items[0];
        let n = l.A.getPurchase(e);
        if ((0, r.s)(n?.items[0])) return n.items[0];
    });
}
