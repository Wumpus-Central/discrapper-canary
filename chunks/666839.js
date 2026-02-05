"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(298072),
    a = n(561769),
    s = n(139146),
    o = n(407723);
let l = (e) => {
        let { product: t, selectedVariantIndex: n, isCardHovered: i } = e;
        return (0, r.jsx)(s.R, { product: t, selectedVariantIndex: n, isCardHovered: i, className: o.i });
    },
    u = (e) => {
        let { skuId: t, isCardHovered: n } = e,
            s = (0, a.Vm)(t),
            o = (0, i.Q)(s);
        return null == s ? null : (0, r.jsx)(l, { product: s, selectedVariantIndex: o, isCardHovered: n });
    };
