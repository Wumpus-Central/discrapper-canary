r.r(t), r.d(t, { default: () => N });
var s = r(627968),
    i = r(64700),
    a = r(490249),
    l = r(575593),
    n = r(334279),
    d = r(417597),
    u = r(397927),
    c = r(550111),
    o = r(331402),
    h = r(287809),
    m = r(846957),
    f = r(929283),
    g = r(245068),
    p = r(158216),
    j = r(985018),
    x = r(243821),
    y = r(743102),
    v = r(241988);
let _ = (e) => {
        let { product: t, itemConsumed: r, forCollectedModal: i } = e,
            a = (0, d.bG)([h.default], () => h.default.getCurrentUser());
        if (null == a) return null;
        let [p] = t.items;
        if (t.type === l.R.PROFILE_EFFECT)
            return (0, s.jsx)("div", {
                className: x.NM,
                children: (0, s.jsx)(o.A, {
                    skuId: p.skuId,
                    delayProfileEffectIntro: i,
                    withScaleAnimation: i,
                    removeSetHeight: !0,
                }),
            });
        if (t.type === l.R.AVATAR_DECORATION)
            return (0, s.jsx)(f.i, { item: p, user: a, avatarSize: u._3J.SIZE_120, isHighlighted: !0 });
        if (t.type === l.R.NAMEPLATE)
            return (0, s.jsx)("div", {
                className: x.qF,
                children: (0, s.jsx)(c.A, { nameplate: p, user: a, nameplatePreviewSize: "large", isHighlighted: !0 }),
            });
        if (t.type === l.R.BUNDLE)
            return (0, s.jsx)("div", {
                className: x.hT,
                children: (0, s.jsx)(g.X, { product: t, user: a, isHighlighted: !0, forCollectedModal: i }),
            });
        if (t.type === l.R.EXTERNAL_SKU) {
            if (Object.values(n.j).includes(t.skuId))
                if (r) return (0, s.jsx)("img", { src: v, alt: j.intl.string(j.t.t0xkSB), style: { width: "100%" } });
                else return (0, s.jsx)("img", { src: y, alt: j.intl.string(j.t.g5W1g8) });
            return (0, s.jsx)(m.B, { product: t });
        }
        return null;
    },
    E = (e) => {
        let { reducedMotion: t, displayOptions: r } = e,
            [l, n] = i.useState(!1),
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
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(a.animated.div, { className: x.VH, style: d, children: (0, s.jsx)(_, { ...e }) }),
                (0, s.jsx)(a.animated.div, {
                    className: x.VH,
                    style: t ? o : c,
                    children: (0, s.jsx)("img", { src: r.getSrc(), style: r.style, alt: "", "aria-hidden": "true" }),
                }),
            ],
        });
    };
function N(e) {
    let t = (0, p.K9)(e.product.categorySkuId);
    return null != t ? (0, s.jsx)(E, { ...e, displayOptions: t }) : (0, s.jsx)(_, { ...e });
}
