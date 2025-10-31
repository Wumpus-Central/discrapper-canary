n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var l = n(567400),
    i = n(786040),
    s = n(143941),
    a = n(652100);
let o = (e) => {
        let { product: t, selectedVariantIndex: n, isCardHovered: l } = e;
        return (0, r.jsx)(s.a, {
            product: t,
            selectedVariantIndex: n,
            isCardHovered: l,
            className: a.wishlistButton,
        });
    },
    c = (e) => {
        let { skuId: t, selectedVariantIndex: n, isCardHovered: s } = e,
            a = (0, l.Y)({ location: "ProductWishlistButton" }),
            c = (0, i.LJ)(t);
        return null != c && a
            ? (0, r.jsx)(o, {
                  product: c,
                  selectedVariantIndex: n,
                  isCardHovered: s,
              })
            : null;
    };
