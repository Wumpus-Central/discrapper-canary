r.d(t, { A: () => E });
var n = r(627968),
    l = r(503698),
    i = r.n(l),
    s = r(575593),
    a = r(158954),
    u = r(311907),
    o = r(397927),
    c = r(287809),
    d = r(298072),
    m = r(466459),
    h = r(139136),
    p = r(623373),
    f = r(561769),
    x = r(846957),
    g = r(929283),
    v = r(245068),
    C = r(761365),
    A = r(550674),
    I = r(797877);
let k = (e) => {
        let { product: t, isCardHovered: r } = e,
            l = (0, p.YW)(t),
            { isPurchased: a, isPartiallyOwnedBundle: u } = (0, m.h)(t),
            o = l === s.R.PROFILE_EFFECT || l === s.R.BUNDLE;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: i()(I.mA, { [I.zj]: (a || u) && !r, [I.Ge]: o }),
                    children: (0, n.jsx)(b, { product: t, isCardHovered: r }),
                }),
                a && (0, n.jsx)(y, { hidden: r }),
            ],
        });
    },
    b = (e) => {
        let { product: t, isCardHovered: r } = e,
            l = (0, u.bG)([c.default], () => c.default.getCurrentUser()),
            i = (0, p.YW)(t),
            a = (0, A.D)(t);
        switch (i) {
            case s.R.PROFILE_EFFECT:
                return (0, n.jsx)(h.A, { skuId: a.skuId, isHighlighted: r, removeSetHeight: !0, hideBackground: !0 });
            case s.R.AVATAR_DECORATION:
                return (0, n.jsx)(g.i, { item: a, user: l, isHighlighted: r, avatarSize: o._3J.SIZE_120 });
            case s.R.NAMEPLATE:
                return (0, n.jsx)(C.A, { nameplate: a, user: l, isHighlighted: r });
            case s.R.BUNDLE:
                return (0, n.jsx)(v.X, { product: t, user: l, isHighlighted: r });
            case s.R.EXTERNAL_SKU:
                return (0, n.jsx)(x.B, { product: t, animationState: r ? "on" : "off" });
            default:
                return null;
        }
    },
    y = (e) => {
        let { hidden: t } = e;
        return (0, n.jsx)(a.rOg, {
            size: "custom",
            color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: i()(I.zo, { [I.R]: t }),
        });
    },
    E = (e) => {
        let { skuId: t, isCardHovered: r, overrideVariantIndex: l } = e,
            i = (0, f.Vm)(t),
            s = (0, d.Q)(i);
        if (null == i) return null;
        let a = (0, p.rb)(i, l ?? s);
        return (0, n.jsx)(k, { product: a, isCardHovered: r });
    };
