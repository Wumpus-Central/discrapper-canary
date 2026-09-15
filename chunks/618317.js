n.d(t, { A: () => y });
var r = n(477900),
    i = n(503698),
    s = n.n(i),
    l = n(575593),
    a = n(947641),
    o = n(17928),
    u = n(778712),
    d = n(661531),
    c = n(287809),
    I = n(298072),
    f = n(466459),
    p = n(139136),
    g = n(395744),
    A = n(623373),
    v = n(561769),
    x = n(846957),
    C = n(929283),
    m = n(245068),
    _ = n(761365),
    h = n(844266);
function E(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function b(e) {
    let { product: t, isCardHovered: n } = e,
        i = (0, A.YW)(t),
        { isPurchased: a, isPartiallyOwnedBundle: o } = (0, f.h)(t),
        u = i === l.R.PROFILE_EFFECT || i === l.R.PROFILE_FRAME || i === l.R.BUNDLE;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: s()(h.mA, { [h.zj]: (a || o) && !n, [h.Ge]: u }),
                children: (0, r.jsx)(R, { product: t, isCardHovered: n }),
            }),
            a && (0, r.jsx)(k, { hidden: n }),
        ],
    });
}
function R(e) {
    let t,
        { product: n, isCardHovered: i } = e,
        s = (0, o.bG)([c.default], () => c.default.getCurrentUser()),
        a = (0, A.YW)(n),
        d =
            ((t = (0, I.Q)(n)),
            n?.type === l.R.VARIANTS_GROUP && null != n.variants && n.variants.length > t
                ? n.variants[t].items[0]
                : n.items[0]);
    switch (a) {
        case l.R.PROFILE_EFFECT:
            return (0, r.jsx)(p.A, { skuId: d.skuId, isHighlighted: i, removeSetHeight: !0, hideBackground: !0 });
        case l.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: h.pI, children: (0, r.jsx)(g.A, { frame: d, filterLayer: E }) });
        case l.R.AVATAR_DECORATION:
            return (0, r.jsx)(C.i, { item: d, user: s, isHighlighted: i, avatarSize: u._3.SIZE_120 });
        case l.R.NAMEPLATE:
            return (0, r.jsx)(_.A, { nameplate: d, user: s, isHighlighted: i });
        case l.R.BUNDLE:
            return (0, r.jsx)(m.X, { product: n, user: s, isHighlighted: i });
        case l.R.EXTERNAL_SKU:
            return (0, r.jsx)(x.B, { product: n, animationState: i ? "on" : "off" });
        default:
            return null;
    }
}
function k(e) {
    let { hidden: t } = e;
    return (0, r.jsx)(a.r, {
        size: "custom",
        color: d.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: s()(h.zo, { [h.R]: t }),
    });
}
let y = function (e) {
    let { skuId: t, isCardHovered: n, overrideVariantIndex: i } = e,
        s = (0, v.Vm)(t),
        l = (0, I.Q)(s);
    if (null == s) return null;
    let a = (0, A.rb)(s, i ?? l);
    return (0, r.jsx)(b, { product: a, isCardHovered: n });
};
