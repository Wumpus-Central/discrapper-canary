n.d(t, { Z: () => y });
var r = n(951288),
    l = n(120356),
    i = n.n(l),
    a = n(979554),
    s = n(793030),
    o = n(442837),
    c = n(481060),
    u = n(876917),
    d = n(594174),
    g = n(429368),
    p = n(724994),
    f = n(786040),
    h = n(508925),
    C = n(616066),
    _ = n(684263),
    m = n(396728),
    b = n(58201),
    v = n(201964),
    E = n(1327);
let x = (e) => {
        let { product: t, isCardHovered: n } = e,
            l = (0, f.rC)(t),
            { isPurchased: s, isPartiallyOwnedBundle: o } = (0, p.L)(t),
            c = l === a.Z.PROFILE_EFFECT;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: i()(E.productPreview, {
                        [E.faded]: (s || o) && !n,
                        [E.fullPreview]: c,
                    }),
                    children: (0, r.jsx)(O, {
                        product: t,
                        isCardHovered: n,
                    }),
                }),
                s && (0, r.jsx)(S, { hidden: n }),
            ],
        });
    },
    O = (e) => {
        let { product: t, isCardHovered: n } = e,
            l = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
            i = (0, f.rC)(t),
            s = (0, v.o)(t);
        switch (i) {
            case a.Z.PROFILE_EFFECT:
                return (0, r.jsx)(u.Z, {
                    skuId: s.skuId,
                    isHighlighted: n,
                    isPurchased: !1,
                    removeSetHeight: !0,
                });
            case a.Z.AVATAR_DECORATION:
                return (0, r.jsx)(C.R, {
                    item: s,
                    user: l,
                    isHighlighted: n,
                    isPurchased: !1,
                    avatarSize: c.EFr.SIZE_120,
                });
            case a.Z.NAMEPLATE:
                return (0, r.jsx)(m.Z, {
                    nameplate: s,
                    user: l,
                    isHighlighted: n,
                    isPurchased: !1,
                });
            case a.Z.BUNDLE:
                return (0, r.jsx)(_.U, {
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
    S = (e) => {
        let { hidden: t } = e;
        return (0, r.jsx)(s.sV5, {
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
            i = (0, g.o)(l);
        if (null == l) return null;
        let a = (0, b.W)(l, i);
        return (0, r.jsx)(x, {
            product: a,
            isCardHovered: n,
        });
    };
