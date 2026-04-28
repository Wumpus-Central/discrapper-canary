t.d(r, { A: () => i });
var s = t(17928),
    a = t(590180),
    l = t(4227),
    n = t(892118);
function i(e) {
    return (0, s.bG)([a.A, l.A], () => {
        if (null == e) return;
        let r = a.A.getProduct(e);
        if ((0, n.s)(r?.items[0])) return r.items[0];
        let t = l.A.getPurchase(e);
        if ((0, n.s)(t?.items[0])) return t.items[0];
    });
}
