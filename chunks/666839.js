r.d(t, { A: () => c });
var i = r(627968);
r(64700);
var n = r(298072),
    l = r(561769),
    s = r(139146),
    a = r(420960);
let u = (e) => {
        let { product: t, selectedVariantIndex: r, isCardHovered: n, onTrackClick: l } = e;
        return (0, i.jsx)(s.R, {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: n,
            className: a.i,
            onTrackClick: l,
        });
    },
    c = (e) => {
        let { skuId: t, isCardHovered: r, onTrackClick: s } = e,
            a = (0, l.Vm)(t),
            c = (0, n.Q)(a);
        return null == a
            ? null
            : (0, i.jsx)(u, { product: a, selectedVariantIndex: c, isCardHovered: r, onTrackClick: s });
    };
