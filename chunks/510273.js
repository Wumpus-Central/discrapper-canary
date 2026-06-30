r.r(t), r.d(t, { default: () => S });
var s = r(627968),
    a = r(64700),
    i = r(18005),
    n = r(575593),
    l = r(334279),
    c = r(702841),
    u = r(778712),
    d = r(717421),
    o = r(287809),
    h = r(344346),
    m = r(139136),
    f = r(395744),
    g = r(846957),
    j = r(929283),
    x = r(245068),
    p = r(966971),
    v = r(375708),
    y = r(416408),
    E = r(241988);
function N(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function R(e) {
    let { product: t, itemConsumed: r, forCollectedModal: a } = e,
        i = (0, c.bG)([o.default], () => o.default.getCurrentUser());
    if (null == i) return null;
    let [d] = t.items;
    switch (t.type) {
        case n.R.PROFILE_EFFECT:
            return (0, s.jsx)("div", {
                className: y.NM,
                children: (0, s.jsx)(m.A, {
                    skuId: d.skuId,
                    delayProfileEffectIntro: a,
                    withScaleAnimation: a,
                    removeSetHeight: !0,
                }),
            });
        case n.R.PROFILE_FRAME:
            return (0, s.jsx)("div", { className: y.jj, children: (0, s.jsx)(f.A, { frame: d, filterLayer: N }) });
        case n.R.AVATAR_DECORATION:
            return (0, s.jsx)(j.i, { item: d, user: i, avatarSize: u._3.SIZE_120, isHighlighted: !0 });
        case n.R.NAMEPLATE:
            return (0, s.jsx)("div", {
                className: y.qF,
                children: (0, s.jsx)(h.A, {
                    nameplate: d,
                    user: i,
                    nameplatePreviewSize: "large",
                    isHighlighted: !0,
                    hideDecorators: !0,
                }),
            });
        case n.R.BUNDLE:
            return (0, s.jsx)("div", {
                className: y.hT,
                children: (0, s.jsx)(x.X, {
                    product: t,
                    user: i,
                    isHighlighted: !0,
                    forCollectedModal: a,
                    staticPreviewClassName: y.Nq,
                }),
            });
        case n.R.EXTERNAL_SKU:
            if (Object.values(l.j).includes(t.skuId))
                return (0, s.jsx)("img", { src: E, alt: v.intl.string(r ? v.t.t0xkSB : v.t.g5W1g8) });
            return (0, s.jsx)(g.B, { product: t });
        default:
            return null;
    }
}
function A(e) {
    let { reducedMotion: t, displayOptions: r } = e,
        [n, l] = a.useState(!1),
        c = (0, d.z)({
            from: { transform: "translateX(100%)", right: "-100%" },
            to: { transform: "translateX(50%)", right: "50%" },
            config: { duration: 1550 },
            onRest: () => setTimeout(() => l(!0), 100),
        }),
        u = (0, d.z)({
            from: { transform: "translateX(100%)", right: "-100%" },
            to: { transform: "translateX(50%)", right: "50%" },
            config: { duration: 1550 },
            reverse: n,
        }),
        o = (0, d.z)(
            {
                from: { transform: "translateX(50%)", right: "50%", opacity: 1 },
                to: { transform: "translateX(50%)", right: "50%", opacity: 0 },
                config: { duration: 300 },
                delay: 600,
            },
            "animate-always",
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(i.animated.div, { className: y.VH, style: c, children: (0, s.jsx)(R, { ...e }) }),
            (0, s.jsx)(i.animated.div, {
                className: y.VH,
                style: t ? o : u,
                children: (0, s.jsx)("img", { src: r.getSrc(), style: r.style, alt: "", "aria-hidden": "true" }),
            }),
        ],
    });
}
function S(e) {
    let t = (0, p.K9)(e.product.categorySkuId);
    return null != t ? (0, s.jsx)(A, { ...e, displayOptions: t }) : (0, s.jsx)(R, { ...e });
}
