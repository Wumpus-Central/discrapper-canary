n.d(t, { A: () => y });
var r = n(477900),
    i = n(503698),
    s = n.n(i),
    a = n(575593),
    l = n(855986),
    u = n(778712),
    o = n(947641),
    c = n(646514),
    d = n(287809),
    I = n(298072),
    p = n(466459),
    f = n(139136),
    m = n(395744),
    v = n(623373),
    g = n(561769),
    x = n(846957),
    C = n(929283),
    _ = n(842385),
    h = n(761365),
    E = n(844266);
function A(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function b(e) {
    let { product: t, isCardHovered: n } = e,
        i = (0, v.YW)(t),
        { isPurchased: l, isPartiallyOwnedBundle: u } = (0, p.h)(t),
        o = i === a.R.PROFILE_EFFECT || i === a.R.PROFILE_FRAME || i === a.R.BUNDLE;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: s()(E.mA, { [E.zj]: (l || u) && !n, [E.Ge]: o }),
                children: (0, r.jsx)(R, { product: t, isCardHovered: n }),
            }),
            l && (0, r.jsx)(k, { hidden: n }),
        ],
    });
}
function R(e) {
    let t,
        { product: n, isCardHovered: i } = e,
        s = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
        o = (0, v.YW)(n),
        c =
            ((t = (0, I.Q)(n)),
            n?.type === a.R.VARIANTS_GROUP && null != n.variants && n.variants.length > t
                ? n.variants[t].items[0]
                : n.items[0]);
    switch (o) {
        case a.R.PROFILE_EFFECT:
            return (0, r.jsx)(f.A, { skuId: c.skuId, isHighlighted: i, removeSetHeight: !0, hideBackground: !0 });
        case a.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: E.pI, children: (0, r.jsx)(m.A, { frame: c, filterLayer: A }) });
        case a.R.AVATAR_DECORATION:
            return (0, r.jsx)(C.i, { item: c, user: s, isHighlighted: i, avatarSize: u._3.SIZE_120 });
        case a.R.NAMEPLATE:
            return (0, r.jsx)(h.A, { nameplate: c, user: s, isHighlighted: i });
        case a.R.BUNDLE:
            return (0, r.jsx)(_.X, { product: n, user: s, isHighlighted: i });
        case a.R.EXTERNAL_SKU:
            return (0, r.jsx)(x.B, { product: n, animationState: i ? "on" : "off" });
        default:
            return null;
    }
}
function k(e) {
    let { hidden: t } = e;
    return (0, r.jsx)(o.CheckmarkLargeBoldIcon, {
        size: "custom",
        color: c.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: s()(E.zo, { [E.R]: t }),
    });
}
let y = function (e) {
    let { skuId: t, isCardHovered: n, overrideVariantIndex: i } = e,
        s = (0, g.Vm)(t),
        a = (0, I.Q)(s);
    if (null == s) return null;
    let l = (0, v.rb)(s, i ?? a);
    return (0, r.jsx)(b, { product: l, isCardHovered: n });
};
