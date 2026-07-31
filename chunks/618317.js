n.d(t, { A: () => b });
var r = n(477900),
    i = n(503698),
    s = n.n(i),
    l = n(575593),
    a = n(947641),
    o = n(17928),
    u = n(778712),
    c = n(661531),
    d = n(287809),
    p = n(298072),
    g = n(466459),
    I = n(139136),
    _ = n(395744),
    C = n(623373),
    A = n(561769),
    f = n(846957),
    m = n(929283),
    E = n(245068),
    h = n(761365),
    v = n(955117);
function x(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function R(e) {
    let { product: t, isCardHovered: n } = e,
        i = (0, C.YW)(t),
        { isPurchased: a, isPartiallyOwnedBundle: o } = (0, g.h)(t),
        u = i === l.R.PROFILE_EFFECT || i === l.R.PROFILE_FRAME || i === l.R.BUNDLE;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: s()(v.mA, { [v.zj]: (a || o) && !n, [v.Ge]: u }),
                children: (0, r.jsx)(k, { product: t, isCardHovered: n }),
            }),
            a && (0, r.jsx)(y, { hidden: n }),
        ],
    });
}
function k(e) {
    let t,
        { product: n, isCardHovered: i } = e,
        s = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        a = (0, C.YW)(n),
        c =
            ((t = (0, p.Q)(n)),
            n?.type === l.R.VARIANTS_GROUP && null != n.variants && n.variants.length > t
                ? n.variants[t].items[0]
                : n.items[0]);
    switch (a) {
        case l.R.PROFILE_EFFECT:
            return (0, r.jsx)(I.A, { skuId: c.skuId, isHighlighted: i, removeSetHeight: !0, hideBackground: !0 });
        case l.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: v.pI, children: (0, r.jsx)(_.A, { frame: c, filterLayer: x }) });
        case l.R.AVATAR_DECORATION:
            return (0, r.jsx)(m.i, { item: c, user: s, isHighlighted: i, avatarSize: u._3.SIZE_120 });
        case l.R.NAMEPLATE:
            return (0, r.jsx)(h.A, { nameplate: c, user: s, isHighlighted: i });
        case l.R.BUNDLE:
            return (0, r.jsx)(E.X, { product: n, user: s, isHighlighted: i });
        case l.R.EXTERNAL_SKU:
            return (0, r.jsx)(f.B, { product: n, animationState: i ? "on" : "off" });
        default:
            return null;
    }
}
function y(e) {
    let { hidden: t } = e;
    return (0, r.jsx)(a.r, {
        size: "custom",
        color: c.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: s()(v.zo, { [v.R]: t }),
    });
}
let b = function (e) {
    let { skuId: t, isCardHovered: n, overrideVariantIndex: i } = e,
        s = (0, A.Vm)(t),
        l = (0, p.Q)(s);
    if (null == s) return null;
    let a = (0, C.rb)(s, i ?? l);
    return (0, r.jsx)(R, { product: a, isCardHovered: n });
};
