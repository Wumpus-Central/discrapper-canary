r.d(t, { A: () => y });
var n = r(477900),
    i = r(503698),
    s = r.n(i),
    l = r(575593),
    a = r(947641),
    o = r(17928),
    u = r(778712),
    c = r(661531),
    d = r(287809),
    p = r(298072),
    g = r(466459),
    f = r(139136),
    I = r(395744),
    _ = r(623373),
    A = r(561769),
    C = r(846957),
    m = r(929283),
    v = r(245068),
    E = r(761365),
    h = r(844266);
function x(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function R(e) {
    let { product: t, isCardHovered: r } = e,
        i = (0, _.YW)(t),
        { isPurchased: a, isPartiallyOwnedBundle: o } = (0, g.h)(t),
        u = i === l.R.PROFILE_EFFECT || i === l.R.PROFILE_FRAME || i === l.R.BUNDLE;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: s()(h.mA, { [h.zj]: (a || o) && !r, [h.Ge]: u }),
                children: (0, n.jsx)(k, { product: t, isCardHovered: r }),
            }),
            a && (0, n.jsx)(b, { hidden: r }),
        ],
    });
}
function k(e) {
    let t,
        { product: r, isCardHovered: i } = e,
        s = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        a = (0, _.YW)(r),
        c =
            ((t = (0, p.Q)(r)),
            r?.type === l.R.VARIANTS_GROUP && null != r.variants && r.variants.length > t
                ? r.variants[t].items[0]
                : r.items[0]);
    switch (a) {
        case l.R.PROFILE_EFFECT:
            return (0, n.jsx)(f.A, { skuId: c.skuId, isHighlighted: i, removeSetHeight: !0, hideBackground: !0 });
        case l.R.PROFILE_FRAME:
            return (0, n.jsx)("div", { className: h.pI, children: (0, n.jsx)(I.A, { frame: c, filterLayer: x }) });
        case l.R.AVATAR_DECORATION:
            return (0, n.jsx)(m.i, { item: c, user: s, isHighlighted: i, avatarSize: u._3.SIZE_120 });
        case l.R.NAMEPLATE:
            return (0, n.jsx)(E.A, { nameplate: c, user: s, isHighlighted: i });
        case l.R.BUNDLE:
            return (0, n.jsx)(v.X, { product: r, user: s, isHighlighted: i });
        case l.R.EXTERNAL_SKU:
            return (0, n.jsx)(C.B, { product: r, animationState: i ? "on" : "off" });
        default:
            return null;
    }
}
function b(e) {
    let { hidden: t } = e;
    return (0, n.jsx)(a.r, {
        size: "custom",
        color: c.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: s()(h.zo, { [h.R]: t }),
    });
}
let y = function (e) {
    let { skuId: t, isCardHovered: r, overrideVariantIndex: i } = e,
        s = (0, A.Vm)(t),
        l = (0, p.Q)(s);
    if (null == s) return null;
    let a = (0, _.rb)(s, i ?? l);
    return (0, n.jsx)(R, { product: a, isCardHovered: r });
};
