n.d(r, { A: () => s });
var t = n(17928),
    l = n(590180),
    i = n(4227),
    a = n(892118);
function s(e) {
    return (0, t.bG)([l.A, i.A], () => {
        if (null == e) return;
        let r = l.A.getProduct(e);
        if ((0, a.s)(r?.items[0])) return r.items[0];
        let n = i.A.getPurchase(e);
        if ((0, a.s)(n?.items[0])) return n.items[0];
    });
}
