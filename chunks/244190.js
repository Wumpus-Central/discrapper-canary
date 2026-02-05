"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(674658),
    a = n(751304),
    s = n(561769);
let o = (e) => {
    let { skuId: t } = e,
        { product: n } = (0, i.q)(t, !0);
    return null == n
        ? null
        : (0, r.jsx)(s.v3.Provider, { value: { flattenProductVariants: !0 }, children: (0, r.jsx)(a.A, { skuId: t }) });
};
