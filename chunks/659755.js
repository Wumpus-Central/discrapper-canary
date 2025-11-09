n.d(t, { Z: () => y });
var r = n(951288),
    l = n(120356),
    i = n.n(l),
    s = n(979554),
    a = n(793030),
    o = n(442837),
    c = n(481060),
    u = n(876917),
    d = n(594174),
    p = n(429368),
    g = n(724994),
    f = n(786040),
    h = n(508925),
    C = n(616066),
    m = n(684263),
    _ = n(396728),
    b = n(58201),
    v = n(201964),
    E = n(922687);
let x = (e) => {
        let { product: t, isCardHovered: n } = e,
            l = (0, f.rC)(t),
            { isPurchased: a, isPartiallyOwnedBundle: o } = (0, g.L)(t),
            c = l === s.Z.PROFILE_EFFECT;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: i()(E.productPreview, {
                        [E.faded]: (a || o) && !n,
                        [E.fullPreview]: c,
                    }),
                    children: (0, r.jsx)(O, {
                        product: t,
                        isCardHovered: n,
                    }),
                }),
                a && (0, r.jsx)(S, { hidden: n }),
            ],
        });
    },
    O = (e) => {
        let { product: t, isCardHovered: n } = e,
            l = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
            i = (0, f.rC)(t),
            a = (0, v.o)(t);
        switch (i) {
            case s.Z.PROFILE_EFFECT:
                return (0, r.jsx)(u.Z, {
                    skuId: a.skuId,
                    isHighlighted: n,
                    isPurchased: !1,
                    removeSetHeight: !0,
                });
            case s.Z.AVATAR_DECORATION:
                return (0, r.jsx)(C.R, {
                    item: a,
                    user: l,
                    isHighlighted: n,
                    isPurchased: !1,
                    avatarSize: c.EFr.SIZE_120,
                });
            case s.Z.NAMEPLATE:
                return (0, r.jsx)(_.Z, {
                    nameplate: a,
                    user: l,
                    isHighlighted: n,
                    isPurchased: !1,
                });
            case s.Z.BUNDLE:
                return (0, r.jsx)(m.U, {
                    product: t,
                    user: l,
                    isHighlighted: n,
                    isPurchased: !1,
                });
            case s.Z.EXTERNAL_SKU:
                return (0, r.jsx)(h.b, {
                    product: t,
                    animationState: n ? "on" : "off",
                });
            default:
                return null;
        }
    },
    S = (e) => {
        let { hidden: t } = e;
        return (0, r.jsx)(a.sV5, {
            size: "custom",
            color: c.TVs.colors.INTERACTIVE_ACTIVE,
            width: 40,
            height: 40,
            className: i()(E.productPreviewIconOverlay, { [E.hidden]: t }),
        });
    },
    y = (e) => {
        let { skuId: t, isCardHovered: n } = e,
            l = (0, f.LJ)(t),
            i = (0, p.o)(l);
        if (null == l) return null;
        let s = (0, b.W)(l, i);
        return (0, r.jsx)(x, {
            product: s,
            isCardHovered: n,
        });
    };
