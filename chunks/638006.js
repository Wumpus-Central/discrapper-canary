n.d(t, {
    A: () => S,
});
var a = n(627968),
    l = n(503698),
    r = n.n(l),
    i = n(575593),
    s = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(331402),
    u = n(287809),
    m = n(298072),
    p = n(466459),
    h = n(623373),
    x = n(561769),
    g = n(846957),
    f = n(929283),
    b = n(245068),
    v = n(761365),
    j = n(550674),
    _ = n(8056);
let y = (e) => {
        let { product: t, isCardHovered: n } = e,
            l = (0, h.YW)(t),
            { isPurchased: s, isPartiallyOwnedBundle: o } = (0, p.h)(t),
            c = l === i.R.PROFILE_EFFECT;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: r()(_.mA, {
                        [_.zj]: (s || o) && !n,
                        [_.Ge]: c,
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
            r = (0, h.YW)(t),
            s = (0, j.D)(t);
        switch (r) {
            case i.R.PROFILE_EFFECT:
                return (0, a.jsx)(d.A, {
                    skuId: s.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0,
                });
            case i.R.AVATAR_DECORATION:
                return (0, a.jsx)(f.i, {
                    item: s,
                    user: l,
                    isHighlighted: n,
                    avatarSize: c._3J.SIZE_120,
                });
            case i.R.NAMEPLATE:
                return (0, a.jsx)(v.A, {
                    nameplate: s,
                    user: l,
                    isHighlighted: n,
                });
            case i.R.BUNDLE:
                return (0, a.jsx)(b.X, {
                    product: t,
                    user: l,
                    isHighlighted: n,
                });
            case i.R.EXTERNAL_SKU:
                return (0, a.jsx)(g.B, {
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
            className: r()(_.zo, {
                [_.R]: t,
            }),
        });
    },
    S = (e) => {
        let { skuId: t, isCardHovered: n, overrideVariantIndex: l } = e,
            r = (0, x.Vm)(t),
            i = (0, m.Q)(r);
        if (null == r) return null;
        let s = (0, h.rb)(r, null != l ? l : i);
        return (0, a.jsx)(y, {
            product: s,
            isCardHovered: n,
        });
    };
