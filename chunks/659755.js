n.d(t, { Z: () => y });
var r = n(951288),
    l = n(120356),
    i = n.n(l),
    a = n(979554),
    o = n(793030),
    s = n(442837),
    c = n(481060),
    u = n(876917),
    d = n(594174),
    g = n(429368),
    p = n(724994),
    f = n(786040),
    h = n(508925),
    C = n(616066),
    m = n(684263),
    _ = n(396728),
    b = n(58201),
    v = n(201964),
    x = n(1327);
let E = (e) => {
        let { product: t, isCardHovered: n } = e,
            l = (0, f.rC)(t),
            { isPurchased: o, isPartiallyOwnedBundle: s } = (0, p.L)(t),
            c = l === a.Z.PROFILE_EFFECT;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: i()(x.productPreview, {
                        [x.faded]: (o || s) && !n,
                        [x.fullPreview]: c,
                    }),
                    children: (0, r.jsx)(S, {
                        product: t,
                        isCardHovered: n,
                    }),
                }),
                o && (0, r.jsx)(O, { hidden: n }),
            ],
        });
    },
    S = (e) => {
        let { product: t, isCardHovered: n } = e,
            l = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
            i = (0, f.rC)(t),
            o = (0, v.o)(t);
        switch (i) {
            case a.Z.PROFILE_EFFECT:
                return (0, r.jsx)(u.Z, {
                    skuId: o.skuId,
                    isHighlighted: n,
                    isPurchased: !1,
                    removeSetHeight: !0,
                });
            case a.Z.AVATAR_DECORATION:
                return (0, r.jsx)(C.R, {
                    item: o,
                    user: l,
                    isHighlighted: n,
                    isPurchased: !1,
                    avatarSize: c.EFr.SIZE_120,
                });
            case a.Z.NAMEPLATE:
                return (0, r.jsx)(_.Z, {
                    nameplate: o,
                    user: l,
                    isHighlighted: n,
                    isPurchased: !1,
                });
            case a.Z.BUNDLE:
                return (0, r.jsx)(m.U, {
                    product: t,
                    user: l,
                    isHighlighted: n,
                    isPurchased: !1,
                });
            case a.Z.EXTERNAL_SKU:
                return (0, r.jsx)(h.b, {
                    product: t,
                    animationState: n ? "on" : "off",
                });
            default:
                return null;
        }
    },
    O = (e) => {
        let { hidden: t } = e;
        return (0, r.jsx)(o.sV5, {
            size: "custom",
            color: c.TVs.colors.INTERACTIVE_ACTIVE,
            width: 40,
            height: 40,
            className: i()(x.productPreviewIconOverlay, { [x.hidden]: t }),
        });
    },
    y = (e) => {
        let { skuId: t, isCardHovered: n, overrideVariantIndex: l } = e,
            i = (0, f.LJ)(t),
            a = (0, g.o)(i);
        if (null == i) return null;
        let o = (0, b.W)(i, null != l ? l : a);
        return (0, r.jsx)(E, {
            product: o,
            isCardHovered: n,
        });
    };
