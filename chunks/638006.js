n.d(t, {
    A: () => S,
});
var a = n(627968),
    l = n(503698),
    i = n.n(l),
    r = n(575593),
    s = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(331402),
    u = n(287809),
    m = n(298072),
    p = n(466459),
    h = n(561769),
    f = n(846957),
    x = n(929283),
    b = n(245068),
    g = n(761365),
    v = n(767503),
    j = n(550674),
    y = n(8056);
let _ = (e) => {
        let { product: t, isCardHovered: n } = e,
            l = (0, h.YW)(t),
            { isPurchased: s, isPartiallyOwnedBundle: o } = (0, p.h)(t),
            c = l === r.R.PROFILE_EFFECT;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: i()(y.mA, {
                        [y.zj]: (s || o) && !n,
                        [y.Ge]: c,
                    }),
                    children: (0, a.jsx)(A, {
                        product: t,
                        isCardHovered: n,
                    }),
                }),
                s &&
                    (0, a.jsx)(C, {
                        hidden: n,
                    }),
            ],
        });
    },
    A = (e) => {
        let { product: t, isCardHovered: n } = e,
            l = (0, o.bG)([u.default], () => u.default.getCurrentUser()),
            i = (0, h.YW)(t),
            s = (0, j.D)(t);
        switch (i) {
            case r.R.PROFILE_EFFECT:
                return (0, a.jsx)(d.A, {
                    skuId: s.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                });
            case r.R.AVATAR_DECORATION:
                return (0, a.jsx)(x.i, {
                    item: s,
                    user: l,
                    isHighlighted: n,
                    avatarSize: c._3J.SIZE_120,
                });
            case r.R.NAMEPLATE:
                return (0, a.jsx)(g.A, {
                    nameplate: s,
                    user: l,
                    isHighlighted: n,
                });
            case r.R.BUNDLE:
                return (0, a.jsx)(b.X, {
                    product: t,
                    user: l,
                    isHighlighted: n,
                });
            case r.R.EXTERNAL_SKU:
                return (0, a.jsx)(f.B, {
                    product: t,
                    animationState: n ? "on" : "off",
                });
            default:
                return null;
        }
    },
    C = (e) => {
        let { hidden: t } = e;
        return (0, a.jsx)(s.rOg, {
            size: "custom",
            color: c.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: i()(y.zo, {
                [y.R]: t,
            }),
        });
    },
    S = (e) => {
        let { skuId: t, isCardHovered: n, overrideVariantIndex: l } = e,
            i = (0, h.Vm)(t),
            r = (0, m.Q)(i);
        if (null == i) return null;
        let s = (0, v.r)(i, null != l ? l : r);
        return (0, a.jsx)(_, {
            product: s,
            isCardHovered: n,
        });
    };
