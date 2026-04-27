"use strict";
r.d(t, { A: () => l });
var n = r(17928),
    i = r(590180),
    a = r(4227),
    s = r(892118);
function l(e) {
    return (0, n.bG)([i.A, a.A], () => {
        if (null == e) return;
        let t = i.A.getProduct(e);
        if ((0, s.s)(t?.items[0])) return t.items[0];
        let r = a.A.getPurchase(e);
        if ((0, s.s)(r?.items[0])) return r.items[0];
    });
}
