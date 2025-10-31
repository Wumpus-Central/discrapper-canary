n.d(t, { i: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(442837),
    s = n(607070),
    l = n(530618),
    c = n(10508),
    u = n(594135),
    d = n(474936),
    f = n(388032),
    _ = n(950728),
    p = n(997892),
    h = n(730949);
let m = () => {
    let {
            transitionState: e,
            onClose: t,
            premiumType: n,
            confettiCanvas: m,
            churnUserDiscountOffer: g,
            discountedPrice: E,
        } = (0, u.a)(),
        b = (0, i.useRef)(null),
        [y, O] = (0, i.useState)(!1),
        v = (0, o.e7)([s.Z], () => s.Z.useReducedMotion);
    if (
        ((0, i.useEffect)(() => {
            null !== b.current && null !== E && O(!0);
        }, [b, E]),
        null === g)
    )
        return null;
    let I = n === d.PremiumTypes.TIER_2;
    return (0, r.jsxs)("div", {
        ref: b,
        children: [
            (0, r.jsx)(a.ExpressiveModal, {
                graphic: {
                    type: "image",
                    src: I ? h.Z : p,
                },
                gradientColor: I ? "nitro-pink" : "nitro-green",
                transitionState: e,
                title: f.intl.string(f.t.PZSyRk),
                onClose: async () => t(),
                children: (0, r.jsx)("div", {
                    className: _.offerDetailContainer,
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
                    confettiCanvas: m,
                    confettiVelocityMultiplier: 0.75,
                }),
        ],
    });
};
