n.d(t, { Z: () => d });
var a = n(54381);
n(473749);
var l = n(567400),
    r = n(429368),
    i = n(786040),
    s = n(143941),
    o = n(652100);
let c = (e) => {
        let { product: t, selectedVariantIndex: n, isCardHovered: l } = e;
        return (0, a.jsx)(s.a, {
            product: t,
            selectedVariantIndex: n,
            isCardHovered: l,
            className: o.wishlistButton,
        });
    },
    d = (e) => {
        let { skuId: t, isCardHovered: n } = e,
            s = (0, l.Y)({ location: "ProductWishlistButton" }),
            o = (0, i.LJ)(t),
            d = (0, r.o)(o);
        return null != o && s
            ? (0, a.jsx)(c, {
                  product: o,
                  selectedVariantIndex: d,
                  isCardHovered: n,
              })
            : null;
    };
