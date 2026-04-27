r.r(t), r.d(t, { default: () => S });
var a = r(627968),
    s = r(64700),
    l = r(487514),
    n = r(575593),
    i = r(334279),
    c = r(702841),
    o = r(778712),
    d = r(717421),
    u = r(287809),
    _ = r(344346),
    f = r(139136),
    p = r(395744),
    A = r(846957),
    m = r(929283),
    E = r(245068),
    h = r(158216),
    I = r(985018),
    g = r(416408),
    v = r(743102),
    b = r(241988);
let T = (e) => {
        let { product: t, itemConsumed: r, forCollectedModal: s } = e,
            l = (0, c.bG)([u.default], () => u.default.getCurrentUser());
        if (null == l) return null;
        let [d] = t.items;
        switch (t.type) {
            case n.R.PROFILE_EFFECT:
                return (0, a.jsx)("div", {
                    className: g.NM,
                    children: (0, a.jsx)(f.A, {
                        skuId: d.skuId,
                        delayProfileEffectIntro: s,
                        withScaleAnimation: s,
                        removeSetHeight: !0,
                    }),
                });
            case n.R.PROFILE_FRAME:
                return (0, a.jsx)("div", { className: g.jj, children: (0, a.jsx)(p.A, { profileFrame: d }) });
            case n.R.AVATAR_DECORATION:
                return (0, a.jsx)(m.i, { item: d, user: l, avatarSize: o._3.SIZE_120, isHighlighted: !0 });
            case n.R.NAMEPLATE:
                return (0, a.jsx)("div", {
                    className: g.qF,
                    children: (0, a.jsx)(_.A, {
                        nameplate: d,
                        user: l,
                        nameplatePreviewSize: "large",
                        isHighlighted: !0,
                    }),
                });
            case n.R.BUNDLE:
                return (0, a.jsx)("div", {
                    className: g.hT,
                    children: (0, a.jsx)(E.X, {
                        product: t,
                        user: l,
                        isHighlighted: !0,
                        forCollectedModal: s,
                        staticPreviewClassName: g.Nq,
                    }),
                });
            case n.R.EXTERNAL_SKU:
                if (Object.values(i.j).includes(t.skuId))
                    if (r)
                        return (0, a.jsx)("img", { src: b, alt: I.intl.string(I.t.t0xkSB), style: { width: "100%" } });
                    else return (0, a.jsx)("img", { src: v, alt: I.intl.string(I.t.g5W1g8) });
                return (0, a.jsx)(A.B, { product: t });
            default:
                return null;
        }
    },
    R = (e) => {
        let { reducedMotion: t, displayOptions: r } = e,
            [n, i] = s.useState(!1),
            c = (0, d.z)({
                from: { transform: "translateX(100%)", right: "-100%" },
                to: { transform: "translateX(50%)", right: "50%" },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => i(!0), 100),
            }),
            o = (0, d.z)({
                from: { transform: "translateX(100%)", right: "-100%" },
                to: { transform: "translateX(50%)", right: "50%" },
                config: { duration: 1550 },
                reverse: n,
            }),
            u = (0, d.z)(
                {
                    from: { transform: "translateX(50%)", right: "50%", opacity: 1 },
                    to: { transform: "translateX(50%)", right: "50%", opacity: 0 },
                    config: { duration: 300 },
                    delay: 600,
                },
                "animate-always",
            );
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(l.animated.div, { className: g.VH, style: c, children: (0, a.jsx)(T, { ...e }) }),
                (0, a.jsx)(l.animated.div, {
                    className: g.VH,
                    style: t ? u : o,
                    children: (0, a.jsx)("img", { src: r.getSrc(), style: r.style, alt: "", "aria-hidden": "true" }),
                }),
            ],
        });
    };
function S(e) {
    let t = (0, h.K9)(e.product.categorySkuId);
    return null != t ? (0, a.jsx)(R, { ...e, displayOptions: t }) : (0, a.jsx)(T, { ...e });
}
