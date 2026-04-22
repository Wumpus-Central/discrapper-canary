r.d(t, { A: () => y });
var i = r(627968),
    n = r(503698),
    l = r.n(n),
    s = r(575593),
    a = r(947641),
    u = r(311907),
    c = r(778712),
    o = r(827734),
    d = r(287809),
    k = r(298072),
    p = r(320447),
    C = r(466459),
    m = r(139136),
    x = r(623373),
    I = r(561769),
    A = r(846957),
    g = r(929283),
    h = r(245068),
    _ = r(761365),
    f = r(550674),
    T = r(721861);
let E = (e) => {
        let { product: t, isCardHovered: r } = e,
            n = (0, x.YW)(t),
            { isPurchased: a, isPartiallyOwnedBundle: u } = (0, C.h)(t),
            { enabled: c } = (0, p.P)("ProductCardPreview"),
            o = n === s.R.PROFILE_EFFECT || (n === s.R.BUNDLE && c);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: l()(T.mA, { [T.zj]: (a || u) && !r, [T.Ge]: o }),
                    children: (0, i.jsx)(v, { product: t, isCardHovered: r }),
                }),
                a && (0, i.jsx)(j, { hidden: r }),
            ],
        });
    },
    v = (e) => {
        let { product: t, isCardHovered: r } = e,
            n = (0, u.bG)([d.default], () => d.default.getCurrentUser()),
            l = (0, x.YW)(t),
            a = (0, f.D)(t);
        switch (l) {
            case s.R.PROFILE_EFFECT:
                return (0, i.jsx)(m.A, { skuId: a.skuId, isHighlighted: r, removeSetHeight: !0, hideBackground: !0 });
            case s.R.AVATAR_DECORATION:
                return (0, i.jsx)(g.i, { item: a, user: n, isHighlighted: r, avatarSize: c._3.SIZE_120 });
            case s.R.NAMEPLATE:
                return (0, i.jsx)(_.A, { nameplate: a, user: n, isHighlighted: r });
            case s.R.BUNDLE:
                return (0, i.jsx)(h.X, { product: t, user: n, isHighlighted: r });
            case s.R.EXTERNAL_SKU:
                return (0, i.jsx)(A.B, { product: t, animationState: r ? "on" : "off" });
            default:
                return null;
        }
    },
    j = (e) => {
        let { hidden: t } = e;
        return (0, i.jsx)(a.r, {
            size: "custom",
            color: o.A.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: l()(T.zo, { [T.R]: t }),
        });
    },
    y = (e) => {
        let { skuId: t, isCardHovered: r, overrideVariantIndex: n } = e,
            l = (0, I.Vm)(t),
            s = (0, k.Q)(l);
        if (null == l) return null;
        let a = (0, x.rb)(l, n ?? s);
        return (0, i.jsx)(E, { product: a, isCardHovered: r });
    };
