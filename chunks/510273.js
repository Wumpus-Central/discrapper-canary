r.r(t), r.d(t, { default: () => S });
var s = r(627968),
    a = r(64700),
    i = r(922139),
    l = r(575593),
    n = r(334279),
    d = r(702841),
    c = r(778712),
    u = r(717421),
    o = r(287809),
    h = r(344346),
    m = r(139136),
    g = r(395744),
    f = r(846957),
    j = r(929283),
    x = r(245068),
    p = r(966971),
    v = r(375708),
    y = r(416408),
    E = r(241988);
let N = (e) => {
        let { responsive: t } = e;
        return !0 !== t;
    },
    R = (e) => {
        let { product: t, itemConsumed: r, forCollectedModal: a } = e,
            i = (0, d.bG)([o.default], () => o.default.getCurrentUser());
        if (null == i) return null;
        let [u] = t.items;
        switch (t.type) {
            case l.R.PROFILE_EFFECT:
                return (0, s.jsx)("div", {
                    className: y.NM,
                    children: (0, s.jsx)(m.A, {
                        skuId: u.skuId,
                        delayProfileEffectIntro: a,
                        withScaleAnimation: a,
                        removeSetHeight: !0,
                    }),
                });
            case l.R.PROFILE_FRAME:
                return (0, s.jsx)("div", { className: y.jj, children: (0, s.jsx)(g.A, { frame: u, filterLayer: N }) });
            case l.R.AVATAR_DECORATION:
                return (0, s.jsx)(j.i, { item: u, user: i, avatarSize: c._3.SIZE_120, isHighlighted: !0 });
            case l.R.NAMEPLATE:
                return (0, s.jsx)("div", {
                    className: y.qF,
                    children: (0, s.jsx)(h.A, {
                        nameplate: u,
                        user: i,
                        nameplatePreviewSize: "large",
                        isHighlighted: !0,
                        hideDecorators: !0,
                    }),
                });
            case l.R.BUNDLE:
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
            case l.R.EXTERNAL_SKU:
                if (Object.values(n.j).includes(t.skuId))
                    return (0, s.jsx)("img", { src: E, alt: v.intl.string(r ? v.t.t0xkSB : v.t.g5W1g8) });
                return (0, s.jsx)(f.B, { product: t });
            default:
                return null;
        }
    },
    A = (e) => {
        let { reducedMotion: t, displayOptions: r } = e,
            [l, n] = a.useState(!1),
            d = (0, u.z)({
                from: { transform: "translateX(100%)", right: "-100%" },
                to: { transform: "translateX(50%)", right: "50%" },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => n(!0), 100),
            }),
            c = (0, u.z)({
                from: { transform: "translateX(100%)", right: "-100%" },
                to: { transform: "translateX(50%)", right: "50%" },
                config: { duration: 1550 },
                reverse: l,
            }),
            o = (0, u.z)(
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
                (0, s.jsx)(i.animated.div, { className: y.VH, style: d, children: (0, s.jsx)(R, { ...e }) }),
                (0, s.jsx)(i.animated.div, {
                    className: y.VH,
                    style: t ? o : c,
                    children: (0, s.jsx)("img", { src: r.getSrc(), style: r.style, alt: "", "aria-hidden": "true" }),
                }),
            ],
        });
    };
function S(e) {
    let t = (0, p.K9)(e.product.categorySkuId);
    return null != t ? (0, s.jsx)(A, { ...e, displayOptions: t }) : (0, s.jsx)(R, { ...e });
}
