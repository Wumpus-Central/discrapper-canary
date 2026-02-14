r.r(e), r.d(e, { default: () => R });
var s = r(627968),
    i = r(64700),
    a = r(522160),
    l = r(575593),
    n = r(334279),
    c = r(417597),
    d = r(397927),
    o = r(550111),
    u = r(170887),
    h = r(331402),
    f = r(287809),
    g = r(846957),
    m = r(929283),
    p = r(245068),
    x = r(158216),
    j = r(985018),
    y = r(243821),
    _ = r(743102),
    v = r(497451),
    E = r(241988);
let A = (t) => {
        let { product: e, itemConsumed: r, forCollectedModal: i } = t,
            a = (0, u.A)({ location: "CollectiblesProductPreview" }),
            x = (0, c.bG)([f.default], () => f.default.getCurrentUser());
        if (null == x) return null;
        let [A] = e.items;
        if (e.type === l.R.PROFILE_EFFECT)
            return (0, s.jsx)("div", {
                className: y.NM,
                children: (0, s.jsx)(h.A, { skuId: A.skuId, delayProfileEffectIntro: i, withScaleAnimation: i }),
            });
        if (e.type === l.R.AVATAR_DECORATION)
            return (0, s.jsx)(m.i, { item: A, user: x, avatarSize: d._3J.SIZE_120, isHighlighted: !0 });
        if (e.type === l.R.NAMEPLATE)
            return (0, s.jsx)("div", {
                className: y.qF,
                children: (0, s.jsx)(o.A, { nameplate: A, user: x, nameplatePreviewSize: "large", isHighlighted: !0 }),
            });
        if (e.type === l.R.BUNDLE)
            return (0, s.jsx)("div", {
                className: y.hT,
                children: (0, s.jsx)(p.X, { product: e, user: x, isHighlighted: !0, forCollectedModal: i }),
            });
        if (e.type === l.R.EXTERNAL_SKU) {
            if (Object.values(n.j).includes(e.skuId))
                if (r)
                    return (0, s.jsx)("img", {
                        src: a ? E : v,
                        alt: j.intl.string(j.t.t0xkSB),
                        style: { width: "100%" },
                    });
                else return (0, s.jsx)("img", { src: _, alt: j.intl.string(j.t.g5W1g8) });
            return (0, s.jsx)(g.B, { product: e });
        }
        return null;
    },
    N = (t) => {
        let { reducedMotion: e, displayOptions: r } = t,
            [l, n] = i.useState(!1),
            c = (0, d.zhh)({
                from: { transform: "translateX(100%)", right: "-100%" },
                to: { transform: "translateX(50%)", right: "50%" },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => n(!0), 100),
            }),
            o = (0, d.zhh)({
                from: { transform: "translateX(100%)", right: "-100%" },
                to: { transform: "translateX(50%)", right: "50%" },
                config: { duration: 1550 },
                reverse: l,
            }),
            u = (0, d.zhh)(
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
                (0, s.jsx)(a.animated.div, { className: y.VH, style: c, children: (0, s.jsx)(A, { ...t }) }),
                (0, s.jsx)(a.animated.div, {
                    className: y.VH,
                    style: e ? u : o,
                    children: (0, s.jsx)("img", { src: r.getSrc(), style: r.style, alt: "", "aria-hidden": "true" }),
                }),
            ],
        });
    };
function R(t) {
    let e = (0, x.K9)(t.product.categorySkuId);
    return null != e ? (0, s.jsx)(N, { ...t, displayOptions: e }) : (0, s.jsx)(A, { ...t });
}
