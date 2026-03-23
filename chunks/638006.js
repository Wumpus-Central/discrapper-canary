r.d(t, { A: () => j });
var n = r(627968),
    l = r(503698),
    i = r.n(l),
    s = r(575593),
    a = r(158954),
    u = r(311907),
    o = r(397927),
    c = r(331402),
    d = r(287809),
    m = r(298072),
    f = r(466459),
    h = r(623373),
    x = r(561769),
    p = r(846957),
    g = r(929283),
    C = r(245068),
    A = r(761365),
    I = r(550674),
    b = r(8056);
let v = (e) => {
        let { product: t, isCardHovered: r } = e,
            l = (0, h.YW)(t),
            { isPurchased: a, isPartiallyOwnedBundle: u } = (0, f.h)(t),
            o = l === s.R.PROFILE_EFFECT;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: i()(b.mA, { [b.zj]: (a || u) && !r, [b.Ge]: o }),
                    children: (0, n.jsx)(k, { product: t, isCardHovered: r }),
                }),
                a && (0, n.jsx)(E, { hidden: r }),
            ],
        });
    },
    k = (e) => {
        let { product: t, isCardHovered: r } = e,
            l = (0, u.bG)([d.default], () => d.default.getCurrentUser()),
            i = (0, h.YW)(t),
            a = (0, I.D)(t);
        switch (i) {
            case s.R.PROFILE_EFFECT:
                return (0, n.jsx)(c.A, { skuId: a.skuId, isHighlighted: r, removeSetHeight: !0, hideBackground: !0 });
            case s.R.AVATAR_DECORATION:
                return (0, n.jsx)(g.i, { item: a, user: l, isHighlighted: r, avatarSize: o._3J.SIZE_120 });
            case s.R.NAMEPLATE:
                return (0, n.jsx)(A.A, { nameplate: a, user: l, isHighlighted: r });
            case s.R.BUNDLE:
                return (0, n.jsx)(C.X, { product: t, user: l, isHighlighted: r });
            case s.R.EXTERNAL_SKU:
                return (0, n.jsx)(p.B, { product: t, animationState: r ? "on" : "off" });
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
            className: i()(b.zo, { [b.R]: t }),
        });
    },
    j = (e) => {
        let { skuId: t, isCardHovered: r, overrideVariantIndex: l } = e,
            i = (0, x.Vm)(t),
            s = (0, m.Q)(i);
        if (null == i) return null;
        let a = (0, h.rb)(i, l ?? s);
        return (0, n.jsx)(v, { product: a, isCardHovered: r });
    };
