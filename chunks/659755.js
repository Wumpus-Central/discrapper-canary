n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    l = n(120356),
    i = n.n(l),
    o = n(979554),
    s = n(793030),
    a = n(442837),
    c = n(481060),
    u = n(876917),
    d = n(594174),
    g = n(429368),
    p = n(724994),
    f = n(786040),
    C = n(508925),
    h = n(616066),
    _ = n(58201),
    m = n(201964),
    b = n(1327);
let v = new Set([o.Z.BUNDLE, o.Z.NAMEPLATE, o.Z.PROFILE_EFFECT]),
    E = (e) => {
        let { product: t, isCardHovered: n } = e,
            l = (0, f.rC)(t),
            { isPurchased: o, isPartiallyOwnedBundle: s } = (0, p.L)(t),
            a = null != l && v.has(l);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: i()(b.productPreview, {
                        [b.faded]: (o || s) && !n,
                        [b.fullPreview]: a,
                    }),
                    children: (0, r.jsx)(x, {
                        product: t,
                        isCardHovered: n,
                    }),
                }),
                o && (0, r.jsx)(O, { hidden: n }),
            ],
        });
    },
    x = (e) => {
        let { product: t, isCardHovered: n } = e,
            l = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
            i = (0, f.rC)(t),
            s = (0, m.o)(t);
        switch (i) {
            case o.Z.PROFILE_EFFECT:
                return (0, r.jsx)(u.Z, {
                    skuId: s.skuId,
                    isHighlighted: n,
                    isPurchased: !1,
                    removeSetHeight: !0,
                });
            case o.Z.AVATAR_DECORATION:
                return (0, r.jsx)(h.R, {
                    item: s,
                    user: l,
                    isHighlighted: n,
                    isPurchased: !1,
                    avatarSize: c.EFr.SIZE_120,
                });
            case o.Z.NAMEPLATE:
            case o.Z.BUNDLE:
                return null;
            case o.Z.EXTERNAL_SKU:
                return (0, r.jsx)(C.b, {
                    product: t,
                    animationState: n ? "on" : "off",
                });
            default:
                return null;
        }
    },
    O = (e) => {
        let { hidden: t } = e;
        return (0, r.jsx)(s.sV5, {
            size: "custom",
            color: c.TVs.colors.INTERACTIVE_ACTIVE,
            width: 40,
            height: 40,
            className: i()(b.productPreviewIconOverlay, { [b.hidden]: t }),
        });
    },
    S = (e) => {
        let { skuId: t, isCardHovered: n } = e,
            l = (0, f.LJ)(t),
            i = (0, g.o)(l);
        if (null == l) return null;
        let o = (0, _.W)(l, i);
        return (0, r.jsx)(E, {
            product: o,
            isCardHovered: n,
        });
    };
