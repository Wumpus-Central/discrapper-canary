r.d(e, { A: () => _ });
var i = r(627968),
    l = r(503698),
    n = r.n(l),
    s = r(575593),
    a = r(158954),
    u = r(311907),
    o = r(397927),
    d = r(331402),
    c = r(287809),
    m = r(298072),
    A = r(400076),
    x = r(466459),
    p = r(623373),
    h = r(561769),
    g = r(846957),
    C = r(929283),
    I = r(245068),
    v = r(761365),
    f = r(550674),
    j = r(8056);
let k = (t) => {
        let { product: e, isCardHovered: r, showDefaultAvatar: l, disableAnimation: a } = t,
            u = (0, p.YW)(e),
            { isPurchased: o, isPartiallyOwnedBundle: d } = (0, x.h)(e),
            c = u === s.R.PROFILE_EFFECT;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: n()(j.mA, { [j.zj]: (o || d) && !r, [j.Ge]: c }),
                    children: (0, i.jsx)(y, {
                        product: e,
                        isCardHovered: r,
                        showDefaultAvatar: l,
                        disableAnimation: a,
                    }),
                }),
                o && (0, i.jsx)(T, { hidden: r }),
            ],
        });
    },
    y = (t) => {
        let { product: e, isCardHovered: r, showDefaultAvatar: l, disableAnimation: n } = t,
            a = (0, u.bG)([c.default], () => c.default.getCurrentUser()),
            m = (0, p.YW)(e),
            A = (0, f.D)(e),
            x = r && !n;
        switch (m) {
            case s.R.PROFILE_EFFECT:
                return (0, i.jsx)(d.A, { skuId: A.skuId, isHighlighted: x, removeSetHeight: !0, hideBackground: !0 });
            case s.R.AVATAR_DECORATION:
                return (0, i.jsx)(C.i, {
                    item: A,
                    user: a,
                    isHighlighted: x,
                    showDefaultAvatar: l,
                    disableAnimation: n,
                    avatarSize: o._3J.SIZE_120,
                });
            case s.R.NAMEPLATE:
                return (0, i.jsx)(v.A, { nameplate: A, user: a, isHighlighted: x, showDefaultAvatar: l });
            case s.R.BUNDLE:
                return (0, i.jsx)(I.X, {
                    product: e,
                    user: a,
                    isHighlighted: x,
                    showDefaultAvatar: l,
                    disableAnimation: n,
                });
            case s.R.EXTERNAL_SKU:
                return (0, i.jsx)(g.B, { product: e, animationState: x ? "on" : "off" });
            default:
                return null;
        }
    },
    T = (t) => {
        let { hidden: e } = t;
        return (0, i.jsx)(a.rOg, {
            size: "custom",
            color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: n()(j.zo, { [j.R]: e }),
        });
    },
    _ = (t) => {
        let { skuId: e, isCardHovered: r, overrideVariantIndex: l } = t,
            n = (0, h.Vm)(e),
            s = (0, m.Q)(n),
            { variant: a } = (0, A.w)("ProductPreview"),
            u = a !== A.L.CONTROL,
            o = a === A.L.DEFAULT_AVATAR_NO_ANIMATION;
        if (null == n) return null;
        let d = (0, p.rb)(n, l ?? s);
        return (0, i.jsx)(k, { product: d, isCardHovered: r, showDefaultAvatar: u, disableAnimation: o });
    };
