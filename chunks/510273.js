r.r(t), r.d(t, { default: () => S });
var s = r(627968),
    i = r(64700),
    a = r(442215),
    l = r(575593),
    n = r(334279),
    d = r(417597),
    c = r(397927),
    u = r(550111),
    o = r(170887),
    h = r(331402),
    f = r(287809),
    m = r(846957),
    g = r(929283),
    p = r(245068),
    x = r(158216),
    j = r(985018),
    v = r(848175),
    y = r(743102),
    _ = r(497451),
    E = r(241988);
let N = (e) => {
        let { product: t, itemConsumed: r, forCollectedModal: i } = e,
            a = (0, o.A)({ location: "CollectiblesProductPreview" }),
            x = (0, d.bG)([f.default], () => f.default.getCurrentUser());
        if (null == x) return null;
        let [N] = t.items;
        if (t.type === l.R.PROFILE_EFFECT)
            return (0, s.jsx)("div", {
                className: v.NM,
                children: (0, s.jsx)(h.A, {
                    skuId: N.skuId,
                    delayProfileEffectIntro: i,
                    withScaleAnimation: i,
                    removeSetHeight: !0,
                }),
            });
        if (t.type === l.R.AVATAR_DECORATION)
            return (0, s.jsx)(g.i, { item: N, user: x, avatarSize: c._3J.SIZE_120, isHighlighted: !0 });
        if (t.type === l.R.NAMEPLATE)
            return (0, s.jsx)("div", {
                className: v.qF,
                children: (0, s.jsx)(u.A, { nameplate: N, user: x, nameplatePreviewSize: "large", isHighlighted: !0 }),
            });
        if (t.type === l.R.BUNDLE)
            return (0, s.jsx)("div", {
                className: v.hT,
                children: (0, s.jsx)(p.X, { product: t, user: x, isHighlighted: !0, forCollectedModal: i }),
            });
        if (t.type === l.R.EXTERNAL_SKU) {
            if (Object.values(n.j).includes(t.skuId))
                if (r)
                    return (0, s.jsx)("img", {
                        src: a ? E : _,
                        alt: j.intl.string(j.t.t0xkSB),
                        style: { width: "100%" },
                    });
                else return (0, s.jsx)("img", { src: y, alt: j.intl.string(j.t.g5W1g8) });
            return (0, s.jsx)(m.B, { product: t });
        }
        return null;
    },
    A = (e) => {
        let { reducedMotion: t, displayOptions: r } = e,
            [l, n] = i.useState(!1),
            d = (0, c.zhh)({
                from: { transform: "translateX(100%)", right: "-100%" },
                to: { transform: "translateX(50%)", right: "50%" },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => n(!0), 100),
            }),
            u = (0, c.zhh)({
                from: { transform: "translateX(100%)", right: "-100%" },
                to: { transform: "translateX(50%)", right: "50%" },
                config: { duration: 1550 },
                reverse: l,
            }),
            o = (0, c.zhh)(
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
                (0, s.jsx)(a.animated.div, { className: v.VH, style: d, children: (0, s.jsx)(N, { ...e }) }),
                (0, s.jsx)(a.animated.div, {
                    className: v.VH,
                    style: t ? o : u,
                    children: (0, s.jsx)("img", { src: r.getSrc(), style: r.style, alt: "", "aria-hidden": "true" }),
                }),
            ],
        });
    };
function S(e) {
    let t = (0, x.K9)(e.product.categorySkuId);
    return null != t ? (0, s.jsx)(A, { ...e, displayOptions: t }) : (0, s.jsx)(N, { ...e });
}
