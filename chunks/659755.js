n.d(t, { Z: () => E });
var a = n(54381),
    l = n(120356),
    r = n.n(l),
    i = n(979554),
    s = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(876917),
    u = n(594174),
    m = n(429368),
    p = n(724994),
    h = n(786040),
    x = n(508925),
    f = n(616066),
    g = n(684263),
    b = n(396728),
    v = n(58201),
    j = n(201964),
    _ = n(1327);
let y = (e) => {
        let { product: t, isCardHovered: n } = e,
            l = (0, h.rC)(t),
            { isPurchased: s, isPartiallyOwnedBundle: o } = (0, p.L)(t),
            c = l === i.Z.PROFILE_EFFECT;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: r()(_.productPreview, {
                        [_.faded]: (s || o) && !n,
                        [_.fullPreview]: c,
                    }),
                    children: (0, a.jsx)(C, {
                        product: t,
                        isCardHovered: n,
                    }),
                }),
                s && (0, a.jsx)(S, { hidden: n }),
            ],
        });
    },
    C = (e) => {
        let { product: t, isCardHovered: n } = e,
            l = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
            r = (0, h.rC)(t),
            s = (0, j.o)(t);
        switch (r) {
            case i.Z.PROFILE_EFFECT:
                return (0, a.jsx)(d.Z, {
                    skuId: s.skuId,
                    isHighlighted: n,
                    isPurchased: !1,
                    removeSetHeight: !0,
                });
            case i.Z.AVATAR_DECORATION:
                return (0, a.jsx)(f.R, {
                    item: s,
                    user: l,
                    isHighlighted: n,
                    isPurchased: !1,
                    avatarSize: c.EFr.SIZE_120,
                });
            case i.Z.NAMEPLATE:
                return (0, a.jsx)(b.Z, {
                    nameplate: s,
                    user: l,
                    isHighlighted: n,
                    isPurchased: !1,
                });
            case i.Z.BUNDLE:
                return (0, a.jsx)(g.U, {
                    product: t,
                    user: l,
                    isHighlighted: n,
                    isPurchased: !1,
                });
            case i.Z.EXTERNAL_SKU:
                return (0, a.jsx)(x.b, {
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
            color: c.TVs.colors.INTERACTIVE_ACTIVE,
            width: 40,
            height: 40,
            className: r()(_.productPreviewIconOverlay, { [_.hidden]: t }),
        });
    },
    E = (e) => {
        let { skuId: t, isCardHovered: n, overrideVariantIndex: l } = e,
            r = (0, h.LJ)(t),
            i = (0, m.o)(r);
        if (null == r) return null;
        let s = (0, v.W)(r, null != l ? l : i);
        return (0, a.jsx)(y, {
            product: s,
            isCardHovered: n,
        });
    };
