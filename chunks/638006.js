r.d(t, { A: () => y });
var n = r(627968),
    l = r(503698),
    i = r.n(l),
    s = r(575593),
    a = r(158954),
    u = r(311907),
    o = r(397927),
    c = r(331402),
    d = r(287809),
    f = r(298072),
    m = r(400076),
    h = r(466459),
    A = r(623373),
    x = r(561769),
    p = r(846957),
    C = r(929283),
    g = r(245068),
    v = r(761365),
    I = r(550674),
    b = r(8056);
let k = (e) => {
        let { product: t, isCardHovered: r, showDefaultAvatar: l, disableAnimation: a } = e,
            u = (0, A.YW)(t),
            { isPurchased: o, isPartiallyOwnedBundle: c } = (0, h.h)(t),
            d = u === s.R.PROFILE_EFFECT;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: i()(b.mA, { [b.zj]: (o || c) && !r, [b.Ge]: d }),
                    children: (0, n.jsx)(E, {
                        product: t,
                        isCardHovered: r,
                        showDefaultAvatar: l,
                        disableAnimation: a,
                    }),
                }),
                o && (0, n.jsx)(j, { hidden: r }),
            ],
        });
    },
    E = (e) => {
        let { product: t, isCardHovered: r, showDefaultAvatar: l, disableAnimation: i } = e,
            a = (0, u.bG)([d.default], () => d.default.getCurrentUser()),
            f = (0, A.YW)(t),
            m = (0, I.D)(t),
            h = r && !i;
        switch (f) {
            case s.R.PROFILE_EFFECT:
                return (0, n.jsx)(c.A, { skuId: m.skuId, isHighlighted: h, removeSetHeight: !0, hideBackground: !0 });
            case s.R.AVATAR_DECORATION:
                return (0, n.jsx)(C.i, {
                    item: m,
                    user: a,
                    isHighlighted: h,
                    showDefaultAvatar: l,
                    disableAnimation: i,
                    avatarSize: o._3J.SIZE_120,
                });
            case s.R.NAMEPLATE:
                return (0, n.jsx)(v.A, { nameplate: m, user: a, isHighlighted: h, showDefaultAvatar: l });
            case s.R.BUNDLE:
                return (0, n.jsx)(g.X, {
                    product: t,
                    user: a,
                    isHighlighted: h,
                    showDefaultAvatar: l,
                    disableAnimation: i,
                });
            case s.R.EXTERNAL_SKU:
                return (0, n.jsx)(p.B, { product: t, animationState: h ? "on" : "off" });
            default:
                return null;
        }
    },
    j = (e) => {
        let { hidden: t } = e;
        return (0, n.jsx)(a.rOg, {
            size: "custom",
            color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: i()(b.zo, { [b.R]: t }),
        });
    },
    y = (e) => {
        let { skuId: t, isCardHovered: r, overrideVariantIndex: l } = e,
            i = (0, x.Vm)(t),
            s = (0, f.Q)(i),
            { variant: a } = (0, m.w)("ProductPreview"),
            u = a !== m.L.CONTROL,
            o = a === m.L.DEFAULT_AVATAR_NO_ANIMATION;
        if (null == i) return null;
        let c = (0, A.rb)(i, l ?? s);
        return (0, n.jsx)(k, { product: c, isCardHovered: r, showDefaultAvatar: u, disableAnimation: o });
    };
