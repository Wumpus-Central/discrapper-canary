n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var l = n(567400),
    i = n(786040),
    a = n(143941),
    s = n(652100);
let o = (e) => {
        let { product: t, selectedVariantIndex: n, isCardHovered: l } = e;
        return (0, r.jsx)(a.a, {
            product: t,
            selectedVariantIndex: n,
            isCardHovered: l,
            className: s.wishlistButton,
        });
    },
    c = (e) => {
        let { skuId: t, selectedVariantIndex: n, isCardHovered: a } = e,
            s = (0, l.Y)({ location: "ProductWishlistButton" }),
            c = (0, i.LJ)(t);
        return null != c && s
            ? (0, r.jsx)(o, {
                  product: c,
                  selectedVariantIndex: n,
                  isCardHovered: a,
              })
            : null;
    };
