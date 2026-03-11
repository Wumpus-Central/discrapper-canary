r.d(e, { A: () => y });
var i = r(627968),
    n = r(503698),
    l = r.n(n),
    s = r(575593),
    a = r(158954),
    u = r(311907),
    o = r(397927),
    d = r(331402),
    c = r(287809),
    A = r(298072),
    m = r(400076),
    x = r(466459),
    p = r(623373),
    g = r(561769),
    C = r(846957),
    h = r(929283),
    I = r(245068),
    f = r(761365),
    k = r(550674),
    v = r(998918);
let j = (t) => {
        let { product: e, isCardHovered: r, showDefaultAvatar: n, disableAnimation: a } = t,
            u = (0, p.YW)(e),
            { isPurchased: o, isPartiallyOwnedBundle: d } = (0, x.h)(e),
            c = u === s.R.PROFILE_EFFECT;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: l()(v.mA, { [v.zj]: (o || d) && !r, [v.Ge]: c }),
                    children: (0, i.jsx)(T, {
                        product: e,
                        isCardHovered: r,
                        showDefaultAvatar: n,
                        disableAnimation: a,
                    }),
                }),
                o && (0, i.jsx)(E, { hidden: r }),
            ],
        });
    },
    T = (t) => {
        let { product: e, isCardHovered: r, showDefaultAvatar: n, disableAnimation: l } = t,
            a = (0, u.bG)([c.default], () => c.default.getCurrentUser()),
            A = (0, p.YW)(e),
            m = (0, k.D)(e),
            x = r && !l;
        switch (A) {
            case s.R.PROFILE_EFFECT:
                return (0, i.jsx)(d.A, { skuId: m.skuId, isHighlighted: x, removeSetHeight: !0, hideBackground: !0 });
            case s.R.AVATAR_DECORATION:
                return (0, i.jsx)(h.i, {
                    item: m,
                    user: a,
                    isHighlighted: x,
                    showDefaultAvatar: n,
                    disableAnimation: l,
                    avatarSize: o._3J.SIZE_120,
                });
            case s.R.NAMEPLATE:
                return (0, i.jsx)(f.A, { nameplate: m, user: a, isHighlighted: x, showDefaultAvatar: n });
            case s.R.BUNDLE:
                return (0, i.jsx)(I.X, {
                    product: e,
                    user: a,
                    isHighlighted: x,
                    showDefaultAvatar: n,
                    disableAnimation: l,
                });
            case s.R.EXTERNAL_SKU:
                return (0, i.jsx)(C.B, { product: e, animationState: x ? "on" : "off" });
            default:
                return null;
        }
    },
    E = (t) => {
        let { hidden: e } = t;
        return (0, i.jsx)(a.rOg, {
            size: "custom",
            color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: l()(v.zo, { [v.R]: e }),
        });
    },
    y = (t) => {
        let { skuId: e, isCardHovered: r, overrideVariantIndex: n } = t,
            l = (0, g.Vm)(e),
            s = (0, A.Q)(l),
            { variant: a } = (0, m.w)("ProductPreview"),
            u = a !== m.L.CONTROL,
            o = a === m.L.DEFAULT_AVATAR_NO_ANIMATION;
        if (null == l) return null;
        let d = (0, p.rb)(l, n ?? s);
        return (0, i.jsx)(j, { product: d, isCardHovered: r, showDefaultAvatar: u, disableAnimation: o });
    };
