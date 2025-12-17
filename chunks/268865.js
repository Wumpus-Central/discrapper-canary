n.d(t, { Z: () => d });
var a = n(54381);
n(473749);
var r = n(567400),
    l = n(429368),
    i = n(786040),
    s = n(143941),
    o = n(742964);
let c = (e) => {
        let { product: t, selectedVariantIndex: n, isCardHovered: r } = e;
        return (0, a.jsx)(s.a, {
            product: t,
            selectedVariantIndex: n,
            isCardHovered: r,
            className: o.wishlistButton,
        });
    },
    d = (e) => {
        let { skuId: t, isCardHovered: n } = e,
            s = (0, r.Y)({ location: "ProductWishlistButton" }),
            o = (0, i.LJ)(t),
            d = (0, l.o)(o);
        return null != o && s
            ? (0, a.jsx)(c, {
                  product: o,
                  selectedVariantIndex: d,
                  isCardHovered: n,
              })
            : null;
    };
