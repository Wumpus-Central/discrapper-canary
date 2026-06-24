r.d(e, { A: () => c });
var s = r(17928),
    i = r(590180),
    u = r(4227),
    n = r(892118);
function c(t) {
    return (0, s.bG)([i.A, u.A], () => {
        if (null == t) return;
        let e = i.A.getProduct(t);
        if ((0, n.s)(e?.items[0])) return e.items[0];
        let r = u.A.getPurchase(t);
        if ((0, n.s)(r?.items[0])) return r.items[0];
    });
}
n.items[0];
})}
