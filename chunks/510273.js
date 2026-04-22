a.r(t), a.d(t, { default: () => N });
var r = a(627968),
    n = a(64700),
    l = a(517738),
    s = a(575593),
    i = a(334279),
    c = a(417597),
    d = a(778712),
    o = a(717421),
    u = a(242874),
    _ = a(75825),
    f = a(287809),
    E = a(512213),
    A = a(139136),
    h = a(846957),
    p = a(929283),
    m = a(245068),
    I = a(158216),
    b = a(788868),
    g = a(985018),
    T = a(416408),
    R = a(743102),
    S = a(241988);
let v = (e) => {
        let { product: t, itemConsumed: a, forCollectedModal: n } = e,
            l = (0, c.bG)([f.default], () => f.default.getCurrentUser());
        if (null == l) return null;
        let [o] = t.items;
        if (t.type === s.R.PROFILE_EFFECT)
            return (0, r.jsx)("div", {
                className: T.NM,
                children: (0, r.jsx)(A.A, {
                    skuId: o.skuId,
                    delayProfileEffectIntro: n,
                    withScaleAnimation: n,
                    removeSetHeight: !0,
                }),
            });
        if (t.type === s.R.AVATAR_DECORATION)
            return (0, r.jsx)(p.i, { item: o, user: l, avatarSize: d._3.SIZE_120, isHighlighted: !0 });
        if (t.type === s.R.NAMEPLATE)
            return (0, r.jsx)("div", {
                className: T.qF,
                children: (0, r.jsx)(E.A, { nameplate: o, user: l, nameplatePreviewSize: "large", isHighlighted: !0 }),
            });
        if (t.type === s.R.PROFILE_FRAME)
            return (0, r.jsx)(_.A, {
                giftStyle: b.o2.STANDARD_BOX,
                defaultAnimationState: u.oA.ACTION,
                idleAnimationState: u.oA.LOOP,
            });
        if (t.type === s.R.BUNDLE)
            return (0, r.jsx)("div", {
                className: T.hT,
                children: (0, r.jsx)(m.X, {
                    product: t,
                    user: l,
                    isHighlighted: !0,
                    forCollectedModal: n,
                    staticPreviewClassName: T.Nq,
                }),
            });
        if (t.type === s.R.EXTERNAL_SKU) {
            if (Object.values(i.j).includes(t.skuId))
                if (a) return (0, r.jsx)("img", { src: S, alt: g.intl.string(g.t.t0xkSB), style: { width: "100%" } });
                else return (0, r.jsx)("img", { src: R, alt: g.intl.string(g.t.g5W1g8) });
            return (0, r.jsx)(h.B, { product: t });
        }
        return null;
    },
    O = (e) => {
        let { reducedMotion: t, displayOptions: a } = e,
            [s, i] = n.useState(!1),
            c = (0, o.z)({
                from: { transform: "translateX(100%)", right: "-100%" },
                to: { transform: "translateX(50%)", right: "50%" },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => i(!0), 100),
            }),
            d = (0, o.z)({
                from: { transform: "translateX(100%)", right: "-100%" },
                to: { transform: "translateX(50%)", right: "50%" },
                config: { duration: 1550 },
                reverse: s,
            }),
            u = (0, o.z)(
                {
                    from: { transform: "translateX(50%)", right: "50%", opacity: 1 },
                    to: { transform: "translateX(50%)", right: "50%", opacity: 0 },
                    config: { duration: 300 },
                    delay: 600,
                },
                "animate-always",
            );
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.animated.div, { className: T.VH, style: c, children: (0, r.jsx)(v, { ...e }) }),
                (0, r.jsx)(l.animated.div, {
                    className: T.VH,
                    style: t ? u : d,
                    children: (0, r.jsx)("img", { src: a.getSrc(), style: a.style, alt: "", "aria-hidden": "true" }),
                }),
            ],
        });
    };
function N(e) {
    let t = (0, I.K9)(e.product.categorySkuId);
    return null != t ? (0, r.jsx)(O, { ...e, displayOptions: t }) : (0, r.jsx)(v, { ...e });
}
