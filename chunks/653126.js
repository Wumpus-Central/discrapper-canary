n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(979554),
    i = n(399606),
    s = n(597688),
    o = n(844035),
    c = n(786040),
    u = n(58201),
    d = n(619899);
let g = (e) => {
        let { product: t, config: n } = e,
            [l, a] = (0, c.SS)(t),
            i = (0, u.W)(t, l);
        return (0, r.jsx)(o.Z, {
            product: i,
            config: n,
            variantSwitcher: a,
            selectedVariantIndex: l,
        });
    },
    p = (e) => {
        let { product: t, config: n } = e,
            [l, a] = (0, c.SS)(t),
            i = (0, u.W)(t, l);
        return (0, r.jsx)(o.Z, {
            product: i,
            config: n,
            variantSwitcher: a,
            selectedVariantIndex: l,
        });
    },
    f = (e) => {
        let { product: t, config: n } = e,
            [l, a] = (0, c.SS)(t),
            i = (0, u.W)(t, l);
        return (0, r.jsx)(o.Z, {
            product: i,
            config: n,
            variantSwitcher: a,
            selectedVariantIndex: l,
        });
    },
    h = (e) => {
        let { product: t, config: n } = e,
            [l, a] = (0, c.SS)(t),
            i = (0, u.W)(t, l);
        return (0, r.jsx)(o.Z, {
            product: i,
            config: n,
            variantSwitcher: a,
            selectedVariantIndex: l,
        });
    },
    C = (e) => {
        let { product: t, config: n } = e,
            [l, a] = (0, c.SS)(t),
            i = (0, u.W)(t, l);
        return (0, r.jsx)(o.Z, {
            product: i,
            config: n,
            variantSwitcher: a,
            selectedVariantIndex: l,
        });
    },
    _ = l.memo(function (e) {
        let { skuId: t, config: n } = e,
            l = (0, i.e7)([s.Z], () => s.Z.getCategoryForProduct(t)),
            o = null == l ? void 0 : l.products.find((e) => e.skuId === t),
            u = (0, d.Cr)(o);
        if (null == u) return null;
        let _ = (0, c.rC)(o);
        return _ === a.Z.PROFILE_EFFECT
            ? (0, r.jsx)(g, {
                  product: u,
                  config: n,
              })
            : _ === a.Z.AVATAR_DECORATION
              ? (0, r.jsx)(p, {
                    product: u,
                    config: n,
                })
              : _ === a.Z.NAMEPLATE
                ? (0, r.jsx)(f, {
                      product: u,
                      config: n,
                  })
                : _ === a.Z.BUNDLE
                  ? (0, r.jsx)(h, {
                        product: u,
                        config: n,
                    })
                  : _ === a.Z.EXTERNAL_SKU
                    ? (0, r.jsx)(C, {
                          product: u,
                          config: n,
                      })
                    : null;
    });
