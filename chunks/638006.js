"use strict";
n.d(t, { A: () => C });
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
    p = n(623373),
    h = n(561769),
    m = n(846957),
    g = n(929283),
    E = n(245068),
    A = n(761365),
    I = n(550674),
    T = n(8056);
let y = (e) => {
        let { product: t, isCardHovered: n } = e,
            i = (0, p.YW)(t),
            { isPurchased: o, isPartiallyOwnedBundle: l } = (0, f.h)(t),
            u = i === s.R.PROFILE_EFFECT;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: a()(T.mA, { [T.zj]: (o || l) && !n, [T.Ge]: u }),
                    children: (0, r.jsx)(S, { product: t, isCardHovered: n }),
                }),
                o && (0, r.jsx)(v, { hidden: n }),
            ],
        });
    },
    S = (e) => {
        let { product: t, isCardHovered: n } = e,
            i = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
            a = (0, p.YW)(t),
            o = (0, I.D)(t);
        switch (a) {
            case s.R.PROFILE_EFFECT:
                return (0, r.jsx)(c.A, { skuId: o.skuId, isHighlighted: n, removeSetHeight: !0 });
            case s.R.AVATAR_DECORATION:
                return (0, r.jsx)(g.i, { item: o, user: i, isHighlighted: n, avatarSize: u._3J.SIZE_120 });
            case s.R.NAMEPLATE:
                return (0, r.jsx)(A.A, { nameplate: o, user: i, isHighlighted: n });
            case s.R.BUNDLE:
                return (0, r.jsx)(E.X, { product: t, user: i, isHighlighted: n });
            case s.R.EXTERNAL_SKU:
                return (0, r.jsx)(m.B, { product: t, animationState: n ? "on" : "off" });
            default:
                return null;
        }
    },
    v = (e) => {
        let { hidden: t } = e;
        return (0, r.jsx)(o.rOg, {
            size: "custom",
            color: u.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: a()(T.zo, { [T.R]: t }),
        });
    },
    C = (e) => {
        let { skuId: t, isCardHovered: n, overrideVariantIndex: i } = e,
            a = (0, h.Vm)(t),
            s = (0, _.Q)(a);
        if (null == a) return null;
        let o = (0, p.rb)(a, i ?? s);
        return (0, r.jsx)(y, { product: o, isCardHovered: n });
    };
