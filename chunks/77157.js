a.d(t, { A: () => s });
var n = a(17928),
    l = a(590180),
    r = a(4227),
    i = a(892118);
function s(e) {
    return (0, n.bG)([l.A, r.A], () => {
        if (null == e) return;
        let t = l.A.getProduct(e);
        if ((0, i.s)(t?.items[0])) return t.items[0];
        let a = r.A.getPurchase(e);
        if ((0, i.s)(a?.items[0])) return a.items[0];
    });
}
