r.d(t, { A: () => j });
var n = r(627968),
    l = r(503698),
    i = r.n(l),
    s = r(575593),
    a = r(158954),
    u = r(311907),
    o = r(397927),
    c = r(287809),
    d = r(298072),
    m = r(320447),
    h = r(466459),
    p = r(139136),
    f = r(623373),
    x = r(561769),
    g = r(846957),
    C = r(929283),
    v = r(245068),
    A = r(761365),
    k = r(550674),
    I = r(797877);
let b = (e) => {
        let { product: t, isCardHovered: r } = e,
            l = (0, f.YW)(t),
            { isPurchased: a, isPartiallyOwnedBundle: u } = (0, h.h)(t),
            { enabled: o } = (0, m.P)("ProductCardPreview"),
            c = l === s.R.PROFILE_EFFECT || (l === s.R.BUNDLE && o);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: i()(I.mA, { [I.zj]: (a || u) && !r, [I.Ge]: c }),
                    children: (0, n.jsx)(y, { product: t, isCardHovered: r }),
                }),
                a && (0, n.jsx)(E, { hidden: r }),
            ],
        });
    },
    y = (e) => {
        let { product: t, isCardHovered: r } = e,
            l = (0, u.bG)([c.default], () => c.default.getCurrentUser()),
            i = (0, f.YW)(t),
            a = (0, k.D)(t);
        switch (i) {
            case s.R.PROFILE_EFFECT:
                return (0, n.jsx)(p.A, { skuId: a.skuId, isHighlighted: r, removeSetHeight: !0, hideBackground: !0 });
            case s.R.AVATAR_DECORATION:
                return (0, n.jsx)(C.i, { item: a, user: l, isHighlighted: r, avatarSize: o._3J.SIZE_120 });
            case s.R.NAMEPLATE:
                return (0, n.jsx)(A.A, { nameplate: a, user: l, isHighlighted: r });
            case s.R.BUNDLE:
                return (0, n.jsx)(v.X, { product: t, user: l, isHighlighted: r });
            case s.R.EXTERNAL_SKU:
                return (0, n.jsx)(g.B, { product: t, animationState: r ? "on" : "off" });
            default:
                return null;
        }
    },
    E = (e) => {
        let { hidden: t } = e;
        return (0, n.jsx)(a.rOg, {
            size: "custom",
            color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: i()(I.zo, { [I.R]: t }),
        });
    },
    j = (e) => {
        let { skuId: t, isCardHovered: r, overrideVariantIndex: l } = e,
            i = (0, x.Vm)(t),
            s = (0, d.Q)(i);
        if (null == i) return null;
        let a = (0, f.rb)(i, l ?? s);
        return (0, n.jsx)(b, { product: a, isCardHovered: r });
    };
