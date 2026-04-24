"use strict";
n.d(t, { A: () => s });
var i = n(17928),
    r = n(590180),
    l = n(4227),
    a = n(892118);
function s(e) {
    return (0, i.bG)([r.A, l.A], () => {
        if (null == e) return;
        let t = r.A.getProduct(e);
        if ((0, a.s)(t?.items[0])) return t.items[0];
        let n = l.A.getPurchase(e);
        if ((0, a.s)(n?.items[0])) return n.items[0];
    });
}
