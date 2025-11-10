n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var l = n(567400),
    i = n(429368),
    s = n(786040),
    a = n(143941),
    o = n(619550);
let c = (e) => {
        let { product: t, selectedVariantIndex: n, isCardHovered: l } = e;
        return (0, r.jsx)(a.a, {
            product: t,
            selectedVariantIndex: n,
            isCardHovered: l,
            className: o.wishlistButton,
        });
    },
    u = (e) => {
        let { skuId: t, isCardHovered: n } = e,
            a = (0, l.Y)({ location: "ProductWishlistButton" }),
            o = (0, s.LJ)(t),
            u = (0, i.o)(o);
        return null != o && a
            ? (0, r.jsx)(c, {
                  product: o,
                  selectedVariantIndex: u,
                  isCardHovered: n,
              })
            : null;
    };
