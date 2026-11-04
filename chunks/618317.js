n.d(t, { A: () => y });
var r = n(477900),
    i = n(503698),
    l = n.n(i),
    s = n(575593),
    a = n(17928),
    u = n(778712),
    o = n(947641),
    d = n(661531),
    c = n(287809),
    f = n(298072),
    I = n(466459),
    v = n(139136),
    p = n(395744),
    m = n(623373),
    A = n(561769),
    g = n(846957),
    E = n(929283),
    x = n(448391),
    h = n(761365),
    _ = n(844266);
function C(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function b(e) {
    let { product: t, isCardHovered: n } = e,
        i = (0, m.YW)(t),
        { isPurchased: a, isPartiallyOwnedBundle: u } = (0, I.h)(t),
        o = i === s.R.PROFILE_EFFECT || i === s.R.PROFILE_FRAME || i === s.R.BUNDLE;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(_.mA, { [_.zj]: (a || u) && !n, [_.Ge]: o }),
                children: (0, r.jsx)(R, { product: t, isCardHovered: n }),
            }),
            a && (0, r.jsx)(k, { hidden: n }),
        ],
    });
}
function R(e) {
    let t,
        { product: n, isCardHovered: i } = e,
        l = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        o = (0, m.YW)(n),
        d =
            ((t = (0, f.Q)(n)),
            n?.type === s.R.VARIANTS_GROUP && null != n.variants && n.variants.length > t
                ? n.variants[t].items[0]
                : n.items[0]);
    switch (o) {
        case s.R.PROFILE_EFFECT:
            return (0, r.jsx)(v.A, { skuId: d.skuId, isHighlighted: i, removeSetHeight: !0, hideBackground: !0 });
        case s.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: _.pI, children: (0, r.jsx)(p.A, { frame: d, filterLayer: C }) });
        case s.R.AVATAR_DECORATION:
            return (0, r.jsx)(E.i, { item: d, user: l, isHighlighted: i, avatarSize: u._3.SIZE_120 });
        case s.R.NAMEPLATE:
            return (0, r.jsx)(h.A, { nameplate: d, user: l, isHighlighted: i });
        case s.R.BUNDLE:
            return (0, r.jsx)(x.X, { product: n, user: l, isHighlighted: i });
        case s.R.EXTERNAL_SKU:
            return (0, r.jsx)(g.B, { product: n, animationState: i ? "on" : "off" });
        default:
            return null;
    }
}
function k(e) {
    let { hidden: t } = e;
    return (0, r.jsx)(o.r, {
        size: "custom",
        color: d.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: l()(_.zo, { [_.R]: t }),
    });
}
let y = function (e) {
    let { skuId: t, isCardHovered: n, overrideVariantIndex: i } = e,
        l = (0, A.Vm)(t),
        s = (0, f.Q)(l);
    if (null == l) return null;
    let a = (0, m.rb)(l, i ?? s);
    return (0, r.jsx)(b, { product: a, isCardHovered: n });
};
