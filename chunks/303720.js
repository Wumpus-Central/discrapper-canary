n.d(t, { A: () => c });
var r = n(477900),
    l = n(582128),
    a = n(674658),
    i = n(258245),
    s = n(561769);
let c = function (e) {
    let { skuId: t, aspectRatio: n } = e,
        { product: c } = (0, a.q)(t, !0),
        {
            flattenProductVariants: o,
            productOverride: u,
            prioritizedCurrency: d,
            standalonePreview: m,
        } = l.useContext(s.v3),
        h = l.useMemo(
            () => ({
                flattenProductVariants: o ?? !1,
                productOverride: u,
                prioritizedCurrency: d,
                standalonePreview: m,
            }),
            [o, u, d, m],
        );
    return null == c
        ? null
        : (0, r.jsx)(s.v3.Provider, { value: h, children: (0, r.jsx)(i.A, { skuId: t, aspectRatio: n }) });
};
