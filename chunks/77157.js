n.d(t, { A: () => s });
var l = n(311907),
    r = n(590180),
    i = n(4227),
    a = n(892118);
function s(e) {
    return (0, l.bG)([r.A, i.A], () => {
        if (null == e) return;
        let t = r.A.getProduct(e);
        if ((0, a.s)(t?.items[0])) return t.items[0];
        let n = i.A.getPurchase(e);
        if ((0, a.s)(n?.items[0])) return n.items[0];
    });
}
