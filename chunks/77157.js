a.d(r, { A: () => o });
var n = a(17928),
    t = a(590180),
    l = a(4227),
    i = a(892118);
function o(e) {
    return (0, n.bG)([t.A, l.A], () => {
        if (null == e) return;
        let r = t.A.getProduct(e);
        if ((0, i.s)(r?.items[0])) return r.items[0];
        let a = l.A.getPurchase(e);
        if ((0, i.s)(a?.items[0])) return a.items[0];
    });
}
