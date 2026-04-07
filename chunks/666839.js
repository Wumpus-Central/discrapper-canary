r.d(t, { A: () => o });
var n = r(627968);
r(64700);
var l = r(298072),
    i = r(561769),
    s = r(139146),
    a = r(673136);
let u = (e) => {
        let { product: t, selectedVariantIndex: r, isCardHovered: l, onTrackClick: i } = e;
        return (0, n.jsx)(s.R, {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: l,
            className: a.i,
            onTrackClick: i,
        });
    },
    o = (e) => {
        let { skuId: t, isCardHovered: r, onTrackClick: s } = e,
            a = (0, i.Vm)(t),
            o = (0, l.Q)(a);
        return null == a
            ? null
            : (0, n.jsx)(u, { product: a, selectedVariantIndex: o, isCardHovered: r, onTrackClick: s });
    };
