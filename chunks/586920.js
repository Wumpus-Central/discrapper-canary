n.d(t, { i: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(793030),
    a = n(442837),
    s = n(607070),
    l = n(530618),
    c = n(10508),
    u = n(594135),
    d = n(474936),
    f = n(388032),
    p = n(950728),
    _ = n(997892),
    m = n(730949);
let h = () => {
    let {
            transitionState: e,
            onClose: t,
            premiumType: n,
            confettiCanvas: h,
            churnUserDiscountOffer: g,
            discountedPrice: E,
        } = (0, u.a)(),
        b = (0, i.useRef)(null),
        [y, O] = (0, i.useState)(!1),
        v = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
    if (
        ((0, i.useEffect)(() => {
            null !== b.current && null !== E && O(!0);
        }, [b, E]),
        null === g)
    )
        return null;
    let S = n === d.PremiumTypes.TIER_2;
    return (0, r.jsxs)("div", {
        ref: b,
        children: [
            (0, r.jsx)(o.ExpressiveModal, {
                graphic: {
                    type: "image",
                    src: S ? m.Z : _,
                },
                gradientColor: S ? "nitro-pink" : "nitro-green",
                transitionState: e,
                title: f.intl.string(f.t.PZSyRk),
                onClose: async () => t(),
                children: (0, r.jsx)("div", {
                    className: p.offerDetailContainer,
                    children: (0, r.jsx)(c.o, {
                        offerState: c.w.APPLIED,
                        userDiscountOffer: g,
                    }),
                }),
            }),
            !v &&
                y &&
                (0, r.jsx)(l.Z, {
                    confettiTarget: b.current,
                    confettiCanvas: h,
                    confettiVelocityMultiplier: 0.75,
                }),
        ],
    });
};
