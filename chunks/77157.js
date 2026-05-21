t.d(r, { A: () => n });
var s = t(17928),
    l = t(590180),
    a = t(4227),
    i = t(892118);
function n(e) {
    return (0, s.bG)([l.A, a.A], () => {
        if (null == e) return;
        let r = l.A.getProduct(e);
        if ((0, i.s)(r?.items[0])) return r.items[0];
        let t = a.A.getPurchase(e);
        if ((0, i.s)(t?.items[0])) return t.items[0];
    });
}
