"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(575593),
    o = n(158954),
    l = n(311907),
    u = n(397927),
    c = n(331402),
    d = n(287809),
    _ = n(298072),
    f = n(466459),
    h = n(623373),
    p = n(561769),
    g = n(846957),
    E = n(929283),
    A = n(245068),
    I = n(761365),
    T = n(550674),
    y = n(998918);
let S = (e) => {
        let { product: t, isCardHovered: n } = e,
            i = (0, h.YW)(t),
            { isPurchased: o, isPartiallyOwnedBundle: l } = (0, f.h)(t),
            u = i === s.R.PROFILE_EFFECT;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: a()(y.mA, { [y.zj]: (o || l) && !n, [y.Ge]: u }),
                    children: (0, r.jsx)(v, { product: t, isCardHovered: n }),
                }),
                o && (0, r.jsx)(C, { hidden: n }),
            ],
        });
    },
    v = (e) => {
        let { product: t, isCardHovered: n } = e,
            i = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
            a = (0, h.YW)(t),
            o = (0, T.D)(t);
        switch (a) {
            case s.R.PROFILE_EFFECT:
                return (0, r.jsx)(c.A, { skuId: o.skuId, isHighlighted: n, removeSetHeight: !0 });
            case s.R.AVATAR_DECORATION:
                return (0, r.jsx)(E.i, { item: o, user: i, isHighlighted: n, avatarSize: u._3J.SIZE_120 });
            case s.R.NAMEPLATE:
                return (0, r.jsx)(I.A, { nameplate: o, user: i, isHighlighted: n });
            case s.R.BUNDLE:
                return (0, r.jsx)(A.X, { product: t, user: i, isHighlighted: n });
            case s.R.EXTERNAL_SKU:
                return (0, r.jsx)(g.B, { product: t, animationState: n ? "on" : "off" });
            default:
                return null;
        }
    },
    C = (e) => {
        let { hidden: t } = e;
        return (0, r.jsx)(o.rOg, {
            size: "custom",
            color: u.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: a()(y.zo, { [y.R]: t }),
        });
    },
    b = (e) => {
        let { skuId: t, isCardHovered: n, overrideVariantIndex: i } = e,
            a = (0, p.Vm)(t),
            s = (0, _.Q)(a);
        if (null == a) return null;
        let o = (0, h.rb)(a, i ?? s);
        return (0, r.jsx)(S, { product: o, isCardHovered: n });
    };
