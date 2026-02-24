r.d(e, { A: () => E });
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
    x = r(466459),
    p = r(623373),
    g = r(561769),
    h = r(846957),
    C = r(929283),
    A = r(245068),
    I = r(761365),
    j = r(550674),
    k = r(998918);
let f = (t) => {
        let { product: e, isCardHovered: r } = t,
            l = (0, p.YW)(e),
            { isPurchased: a, isPartiallyOwnedBundle: u } = (0, x.h)(e),
            o = l === s.R.PROFILE_EFFECT;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: n()(k.mA, { [k.zj]: (a || u) && !r, [k.Ge]: o }),
                    children: (0, i.jsx)(v, { product: e, isCardHovered: r }),
                }),
                a && (0, i.jsx)(y, { hidden: r }),
            ],
        });
    },
    v = (t) => {
        let { product: e, isCardHovered: r } = t,
            l = (0, u.bG)([c.default], () => c.default.getCurrentUser()),
            n = (0, p.YW)(e),
            a = (0, j.D)(e);
        switch (n) {
            case s.R.PROFILE_EFFECT:
                return (0, i.jsx)(d.A, { skuId: a.skuId, isHighlighted: r, removeSetHeight: !0 });
            case s.R.AVATAR_DECORATION:
                return (0, i.jsx)(C.i, { item: a, user: l, isHighlighted: r, avatarSize: o._3J.SIZE_120 });
            case s.R.NAMEPLATE:
                return (0, i.jsx)(I.A, { nameplate: a, user: l, isHighlighted: r });
            case s.R.BUNDLE:
                return (0, i.jsx)(A.X, { product: e, user: l, isHighlighted: r });
            case s.R.EXTERNAL_SKU:
                return (0, i.jsx)(h.B, { product: e, animationState: r ? "on" : "off" });
            default:
                return null;
        }
    },
    y = (t) => {
        let { hidden: e } = t;
        return (0, i.jsx)(a.rOg, {
            size: "custom",
            color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: n()(k.zo, { [k.R]: e }),
        });
    },
    E = (t) => {
        let { skuId: e, isCardHovered: r, overrideVariantIndex: l } = t,
            n = (0, g.Vm)(e),
            s = (0, m.Q)(n);
        if (null == n) return null;
        let a = (0, p.rb)(n, l ?? s);
        return (0, i.jsx)(f, { product: a, isCardHovered: r });
    };
