n.d(t, { A: () => y });
var r = n(477900),
    i = n(503698),
    s = n.n(i),
    a = n(575593),
    l = n(17928),
    u = n(778712),
    o = n(947641),
    d = n(661531),
    c = n(287809),
    I = n(298072),
    f = n(466459),
    v = n(139136),
    p = n(395744),
    g = n(623373),
    x = n(561769),
    A = n(846957),
    m = n(929283),
    _ = n(448391),
    h = n(761365),
    E = n(844266);
function C(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function b(e) {
    let { product: t, isCardHovered: n } = e,
        i = (0, g.YW)(t),
        { isPurchased: l, isPartiallyOwnedBundle: u } = (0, f.h)(t),
        o = i === a.R.PROFILE_EFFECT || i === a.R.PROFILE_FRAME || i === a.R.BUNDLE;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: s()(E.mA, { [E.zj]: (l || u) && !n, [E.Ge]: o }),
                children: (0, r.jsx)(k, { product: t, isCardHovered: n }),
            }),
            l && (0, r.jsx)(R, { hidden: n }),
        ],
    });
}
function k(e) {
    let t,
        { product: n, isCardHovered: i } = e,
        s = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        o = (0, g.YW)(n),
        d =
            ((t = (0, I.Q)(n)),
            n?.type === a.R.VARIANTS_GROUP && null != n.variants && n.variants.length > t
                ? n.variants[t].items[0]
                : n.items[0]);
    switch (o) {
        case a.R.PROFILE_EFFECT:
            return (0, r.jsx)(v.A, { skuId: d.skuId, isHighlighted: i, removeSetHeight: !0, hideBackground: !0 });
        case a.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: E.pI, children: (0, r.jsx)(p.A, { frame: d, filterLayer: C }) });
        case a.R.AVATAR_DECORATION:
            return (0, r.jsx)(m.i, { item: d, user: s, isHighlighted: i, avatarSize: u._3.SIZE_120 });
        case a.R.NAMEPLATE:
            return (0, r.jsx)(h.A, { nameplate: d, user: s, isHighlighted: i });
        case a.R.BUNDLE:
            return (0, r.jsx)(_.X, { product: n, user: s, isHighlighted: i });
        case a.R.EXTERNAL_SKU:
            return (0, r.jsx)(A.B, { product: n, animationState: i ? "on" : "off" });
        default:
            return null;
    }
}
function R(e) {
    let { hidden: t } = e;
    return (0, r.jsx)(o.r, {
        size: "custom",
        color: d.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: s()(E.zo, { [E.R]: t }),
    });
}
let y = function (e) {
    let { skuId: t, isCardHovered: n, overrideVariantIndex: i } = e,
        s = (0, x.Vm)(t),
        a = (0, I.Q)(s);
    if (null == s) return null;
    let l = (0, g.rb)(s, i ?? a);
    return (0, r.jsx)(b, { product: l, isCardHovered: n });
};
