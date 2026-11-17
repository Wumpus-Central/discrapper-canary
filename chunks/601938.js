n.d(t, { A: () => O });
var r = n(477900),
    i = n(503698),
    s = n.n(i),
    a = n(575593),
    l = n(855986),
    o = n(778712),
    u = n(947641),
    d = n(646514),
    c = n(287809),
    I = n(298072),
    v = n(466459),
    f = n(139136),
    p = n(395744),
    m = n(623373),
    g = n(561769),
    x = n(846957),
    _ = n(929283),
    A = n(842385),
    E = n(761365),
    C = n(844266);
function h(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function b(e) {
    let { product: t, isCardHovered: n } = e,
        i = (0, m.YW)(t),
        { isPurchased: l, isPartiallyOwnedBundle: o } = (0, v.h)(t),
        u = i === a.R.PROFILE_EFFECT || i === a.R.PROFILE_FRAME || i === a.R.BUNDLE;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: s()(C.mA, { [C.zj]: (l || o) && !n, [C.Ge]: u }),
                children: (0, r.jsx)(R, { product: t, isCardHovered: n }),
            }),
            l && (0, r.jsx)(k, { hidden: n }),
        ],
    });
}
function R(e) {
    let t,
        { product: n, isCardHovered: i } = e,
        s = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        u = (0, m.YW)(n),
        d =
            ((t = (0, I.Q)(n)),
            n?.type === a.R.VARIANTS_GROUP && null != n.variants && n.variants.length > t
                ? n.variants[t].items[0]
                : n.items[0]);
    switch (u) {
        case a.R.PROFILE_EFFECT:
            return (0, r.jsx)(f.A, { skuId: d.skuId, isHighlighted: i, removeSetHeight: !0, hideBackground: !0 });
        case a.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: C.pI, children: (0, r.jsx)(p.A, { frame: d, filterLayer: h }) });
        case a.R.AVATAR_DECORATION:
            return (0, r.jsx)(_.i, { item: d, user: s, isHighlighted: i, avatarSize: o._3.SIZE_120 });
        case a.R.NAMEPLATE:
            return (0, r.jsx)(E.A, { nameplate: d, user: s, isHighlighted: i });
        case a.R.BUNDLE:
            return (0, r.jsx)(A.X, { product: n, user: s, isHighlighted: i });
        case a.R.EXTERNAL_SKU:
            return (0, r.jsx)(x.B, { product: n, animationState: i ? "on" : "off" });
        default:
            return null;
    }
}
function k(e) {
    let { hidden: t } = e;
    return (0, r.jsx)(u.CheckmarkLargeBoldIcon, {
        size: "custom",
        color: d.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: s()(C.zo, { [C.R]: t }),
    });
}
let O = function (e) {
    let { skuId: t, isCardHovered: n, overrideVariantIndex: i } = e,
        s = (0, g.Vm)(t),
        a = (0, I.Q)(s);
    if (null == s) return null;
    let l = (0, m.rb)(s, i ?? a);
    return (0, r.jsx)(b, { product: l, isCardHovered: n });
};
