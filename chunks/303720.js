n.d(t, { A: () => c });
var r = n(627968),
    l = n(64700),
    a = n(674658),
    s = n(828614),
    i = n(561769);
let c = function (e) {
    let { skuId: t, aspectRatio: n } = e,
        { product: c } = (0, a.q)(t, !0),
        o = l.useContext(i.v3);
    if (null == c) return null;
    let { flattenProductVariants: u, ...d } = o;
    return (0, r.jsx)(i.v3.Provider, {
        value: { flattenProductVariants: u ?? !1, ...d },
        children: (0, r.jsx)(s.A, { skuId: t, aspectRatio: n }),
    });
};
