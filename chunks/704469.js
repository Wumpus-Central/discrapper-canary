n.d(t, { Z: () => E });
var a = n(54381),
    r = n(120356),
    i = n.n(r),
    l = n(979554),
    s = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(876917),
    u = n(594174),
    m = n(429368),
    p = n(724994),
    h = n(786040),
    f = n(508925),
    x = n(616066),
    b = n(216541),
    g = n(396728),
    v = n(58201),
    j = n(201964),
    y = n(635492);
let C = (e) => {
        let { product: t, isCardHovered: n } = e,
            r = (0, h.rC)(t),
            { isPurchased: s, isPartiallyOwnedBundle: o } = (0, p.L)(t),
            c = r === l.Z.PROFILE_EFFECT;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: i()(y.productPreview, {
                        [y.faded]: (s || o) && !n,
                        [y.fullPreview]: c,
                    }),
                    children: (0, a.jsx)(_, {
                        product: t,
                        isCardHovered: n,
                    }),
                }),
                s && (0, a.jsx)(S, { hidden: n }),
            ],
        });
    },
    _ = (e) => {
        let { product: t, isCardHovered: n } = e,
            r = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
            i = (0, h.rC)(t),
            s = (0, j.o)(t);
        switch (i) {
            case l.Z.PROFILE_EFFECT:
                return (0, a.jsx)(d.Z, {
                    skuId: s.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                });
            case l.Z.AVATAR_DECORATION:
                return (0, a.jsx)(x.R, {
                    item: s,
                    user: r,
                    isHighlighted: n,
                    avatarSize: c.EFr.SIZE_120,
                });
            case l.Z.NAMEPLATE:
                return (0, a.jsx)(g.Z, {
                    nameplate: s,
                    user: r,
                    isHighlighted: n,
                });
            case l.Z.BUNDLE:
                return (0, a.jsx)(b.d, {
                    product: t,
                    user: r,
                    isHighlighted: n,
                });
            case l.Z.EXTERNAL_SKU:
                return (0, a.jsx)(f.b, {
                    product: t,
                    animationState: n ? "on" : "off",
                });
            default:
                return null;
        }
    },
    S = (e) => {
        let { hidden: t } = e;
        return (0, a.jsx)(s.sV5, {
            size: "custom",
            color: c.TVs.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: i()(y.productPreviewIconOverlay, { [y.hidden]: t }),
        });
    },
    E = (e) => {
        let { skuId: t, isCardHovered: n, overrideVariantIndex: r } = e,
            i = (0, h.LJ)(t),
            l = (0, m.o)(i);
        if (null == i) return null;
        let s = (0, v.W)(i, null != r ? r : l);
        return (0, a.jsx)(C, {
            product: s,
            isCardHovered: n,
        });
    };
