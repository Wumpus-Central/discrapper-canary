r.r(t), r.d(t, { default: () => R });
var i = r(627968),
    a = r(64700),
    s = r(517738),
    l = r(575593),
    n = r(334279),
    d = r(417597),
    u = r(397927),
    c = r(242874),
    o = r(75825),
    h = r(287809),
    m = r(512213),
    f = r(139136),
    g = r(846957),
    p = r(929283),
    j = r(245068),
    x = r(158216),
    y = r(788868),
    A = r(985018),
    _ = r(416408),
    v = r(743102),
    N = r(241988);
let S = (e) => {
        let { product: t, itemConsumed: r, forCollectedModal: a } = e,
            s = (0, d.bG)([h.default], () => h.default.getCurrentUser());
        if (null == s) return null;
        let [x] = t.items;
        if (t.type === l.R.PROFILE_EFFECT)
            return (0, i.jsx)("div", {
                className: _.NM,
                children: (0, i.jsx)(f.A, {
                    skuId: x.skuId,
                    delayProfileEffectIntro: a,
                    withScaleAnimation: a,
                    removeSetHeight: !0,
                }),
            });
        if (t.type === l.R.AVATAR_DECORATION)
            return (0, i.jsx)(p.i, { item: x, user: s, avatarSize: u._3J.SIZE_120, isHighlighted: !0 });
        if (t.type === l.R.NAMEPLATE)
            return (0, i.jsx)("div", {
                className: _.qF,
                children: (0, i.jsx)(m.A, { nameplate: x, user: s, nameplatePreviewSize: "large", isHighlighted: !0 }),
            });
        if (t.type === l.R.PROFILE_FRAME)
            return (0, i.jsx)(o.A, {
                giftStyle: y.o2.STANDARD_BOX,
                defaultAnimationState: c.oA.ACTION,
                idleAnimationState: c.oA.LOOP,
            });
        if (t.type === l.R.BUNDLE)
            return (0, i.jsx)("div", {
                className: _.hT,
                children: (0, i.jsx)(j.X, {
                    product: t,
                    user: s,
                    isHighlighted: !0,
                    forCollectedModal: a,
                    staticPreviewClassName: _.Nq,
                }),
            });
        if (t.type === l.R.EXTERNAL_SKU) {
            if (Object.values(n.j).includes(t.skuId))
                if (r) return (0, i.jsx)("img", { src: N, alt: A.intl.string(A.t.t0xkSB), style: { width: "100%" } });
                else return (0, i.jsx)("img", { src: v, alt: A.intl.string(A.t.g5W1g8) });
            return (0, i.jsx)(g.B, { product: t });
        }
        return null;
    },
    E = (e) => {
        let { reducedMotion: t, displayOptions: r } = e,
            [l, n] = a.useState(!1),
            d = (0, u.zhh)({
                from: { transform: "translateX(100%)", right: "-100%" },
                to: { transform: "translateX(50%)", right: "50%" },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => n(!0), 100),
            }),
            c = (0, u.zhh)({
                from: { transform: "translateX(100%)", right: "-100%" },
                to: { transform: "translateX(50%)", right: "50%" },
                config: { duration: 1550 },
                reverse: l,
            }),
            o = (0, u.zhh)(
                {
                    from: { transform: "translateX(50%)", right: "50%", opacity: 1 },
                    to: { transform: "translateX(50%)", right: "50%", opacity: 0 },
                    config: { duration: 300 },
                    delay: 600,
                },
                "animate-always",
            );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.animated.div, { className: _.VH, style: d, children: (0, i.jsx)(S, { ...e }) }),
                (0, i.jsx)(s.animated.div, {
                    className: _.VH,
                    style: t ? o : c,
                    children: (0, i.jsx)("img", { src: r.getSrc(), style: r.style, alt: "", "aria-hidden": "true" }),
                }),
            ],
        });
    };
function R(e) {
    let t = (0, x.K9)(e.product.categorySkuId);
    return null != t ? (0, i.jsx)(E, { ...e, displayOptions: t }) : (0, i.jsx)(S, { ...e });
}
