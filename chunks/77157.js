n.d(t, { A: () => s });
var r = n(17928),
    i = n(590180),
    a = n(4227),
    l = n(892118);
function s(e) {
    return (0, r.bG)([i.A, a.A], () => {
        if (null == e) return;
        let t = i.A.getProduct(e);
        if ((0, l.s)(t?.items[0])) return t.items[0];
        let n = a.A.getPurchase(e);
        if ((0, l.s)(n?.items[0])) return n.items[0];
    });
}
