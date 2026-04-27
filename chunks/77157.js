a.d(t, { A: () => s });
var r = a(17928),
    n = a(590180),
    l = a(4227),
    i = a(892118);
function s(e) {
    return (0, r.bG)([n.A, l.A], () => {
        if (null == e) return;
        let t = n.A.getProduct(e);
        if ((0, i.s)(t?.items[0])) return t.items[0];
        let a = l.A.getPurchase(e);
        if ((0, i.s)(a?.items[0])) return a.items[0];
    });
}
