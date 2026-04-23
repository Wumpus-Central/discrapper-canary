n.d(t, { A: () => s });
var l = n(17928),
    i = n(590180),
    r = n(4227),
    a = n(892118);
function s(e) {
    return (0, l.bG)([i.A, r.A], () => {
        if (null == e) return;
        let t = i.A.getProduct(e);
        if ((0, a.s)(t?.items[0])) return t.items[0];
        let n = r.A.getPurchase(e);
        if ((0, a.s)(n?.items[0])) return n.items[0];
    });
}
