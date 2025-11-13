n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var l = n(567400),
    i = n(429368),
    a = n(786040),
    o = n(143941),
    s = n(652100);
let c = (e) => {
        let { product: t, selectedVariantIndex: n, isCardHovered: l } = e;
        return (0, r.jsx)(o.a, {
            product: t,
            selectedVariantIndex: n,
            isCardHovered: l,
            className: s.wishlistButton,
        });
    },
    u = (e) => {
        let { skuId: t, isCardHovered: n } = e,
            o = (0, l.Y)({ location: "ProductWishlistButton" }),
            s = (0, a.LJ)(t),
            u = (0, i.o)(s);
        return null != s && o
            ? (0, r.jsx)(c, {
                  product: s,
                  selectedVariantIndex: u,
                  isCardHovered: n,
              })
            : null;
    };
