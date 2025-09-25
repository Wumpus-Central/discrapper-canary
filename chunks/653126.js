n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(979554),
    a = n(399606),
    s = n(597688),
    o = n(844035),
    c = n(786040),
    u = n(58201),
    d = n(619899);
let g = (e) => {
        let { product: t } = e,
            [n, l] = (0, c.SS)(t),
            i = (0, u.W)(t, n);
        return (0, r.jsx)(o.Z, {
            product: i,
            variantSwitcher: l,
            selectedVariantIndex: n,
        });
    },
    p = (e) => {
        let { product: t } = e,
            [n, l] = (0, c.SS)(t),
            i = (0, u.W)(t, n);
        return (0, r.jsx)(o.Z, {
            product: i,
            variantSwitcher: l,
            selectedVariantIndex: n,
        });
    },
    f = (e) => {
        let { product: t } = e,
            [n, l] = (0, c.SS)(t),
            i = (0, u.W)(t, n);
        return (0, r.jsx)(o.Z, {
            product: i,
            variantSwitcher: l,
            selectedVariantIndex: n,
        });
    },
    h = (e) => {
        let { product: t } = e,
            [n, l] = (0, c.SS)(t),
            i = (0, u.W)(t, n);
        return (0, r.jsx)(o.Z, {
            product: i,
            variantSwitcher: l,
            selectedVariantIndex: n,
        });
    },
    C = (e) => {
        let { product: t } = e,
            [n, l] = (0, c.SS)(t),
            i = (0, u.W)(t, n);
        return (0, r.jsx)(o.Z, {
            product: i,
            variantSwitcher: l,
            selectedVariantIndex: n,
        });
    },
    _ = l.memo(function (e) {
        let { skuId: t } = e,
            n = (0, a.e7)([s.Z], () => s.Z.getCategoryForProduct(t)),
            l = null == n ? void 0 : n.products.find((e) => e.skuId === t),
            o = (0, d.Cr)(l);
        if (null == o) return null;
        let u = (0, c.rC)(l);
        return u === i.Z.PROFILE_EFFECT
            ? (0, r.jsx)(g, { product: o })
            : u === i.Z.AVATAR_DECORATION
              ? (0, r.jsx)(p, { product: o })
              : u === i.Z.NAMEPLATE
                ? (0, r.jsx)(f, { product: o })
                : u === i.Z.BUNDLE
                  ? (0, r.jsx)(h, { product: o })
                  : u === i.Z.EXTERNAL_SKU
                    ? (0, r.jsx)(C, { product: o })
                    : null;
    });
