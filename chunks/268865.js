n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var l = n(567400),
    i = n(429368),
    a = n(786040),
    s = n(143941),
    o = n(619550);
let c = (e) => {
        let { product: t, selectedVariantIndex: n, isCardHovered: l } = e;
        return (0, r.jsx)(s.a, {
            product: t,
            selectedVariantIndex: n,
            isCardHovered: l,
            className: o.wishlistButton,
        });
    },
    u = (e) => {
        let { skuId: t, isCardHovered: n } = e,
            s = (0, l.Y)({ location: "ProductWishlistButton" }),
            o = (0, a.LJ)(t),
            u = (0, i.o)(o);
        return null != o && s
            ? (0, r.jsx)(c, {
                  product: o,
                  selectedVariantIndex: u,
                  isCardHovered: n,
              })
            : null;
    };
