t.d(r, { A: () => o });
var n = t(17928),
    l = t(590180),
    i = t(4227),
    u = t(892118);
function o(e) {
    return (0, n.bG)([l.A, i.A], () => {
        if (null == e) return;
        let r = l.A.getProduct(e);
        if ((0, u.s)(r?.items[0])) return r.items[0];
        let t = i.A.getPurchase(e);
        if ((0, u.s)(t?.items[0])) return t.items[0];
    });
}
