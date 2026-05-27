t.d(r, { A: () => n });
var a = t(17928),
    s = t(590180),
    l = t(4227),
    i = t(892118);
function n(e) {
    return (0, a.bG)([s.A, l.A], () => {
        if (null == e) return;
        let r = s.A.getProduct(e);
        if ((0, i.s)(r?.items[0])) return r.items[0];
        let t = l.A.getPurchase(e);
        if ((0, i.s)(t?.items[0])) return t.items[0];
    });
}
