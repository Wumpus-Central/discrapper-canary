n.d(t, { A: () => c });
var a = n(627968);
n(64700);
var l = n(298072),
    i = n(561769),
    r = n(139146),
    s = n(407723);
let o = (e) => {
        let { product: t, selectedVariantIndex: n, isCardHovered: l } = e;
        return (0, a.jsx)(r.R, {
            product: t,
            selectedVariantIndex: n,
            isCardHovered: l,
            className: s.i,
        });
    },
    c = (e) => {
        let { skuId: t, isCardHovered: n } = e,
            r = (0, i.Vm)(t),
            s = (0, l.Q)(r);
        return null == r
            ? null
            : (0, a.jsx)(o, {
                  product: r,
                  selectedVariantIndex: s,
                  isCardHovered: n,
              });
    };
