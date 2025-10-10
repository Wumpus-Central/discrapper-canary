n.d(e, { i: () => h }), n(388685);
var i = n(951288),
    r = n(647438),
    a = n(793030),
    l = n(442837),
    s = n(607070),
    o = n(530618),
    c = n(10508),
    u = n(594135),
    d = n(474936),
    m = n(388032),
    f = n(950728),
    p = n(997892),
    g = n(730949);
let h = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: n,
            confettiCanvas: h,
            churnUserDiscountOffer: x,
            discountedPrice: P,
        } = (0, u.a)(),
        C = (0, r.useRef)(null),
        [v, y] = (0, r.useState)(!1),
        T = (0, l.e7)([s.Z], () => s.Z.useReducedMotion);
    if (
        ((0, r.useEffect)(() => {
            null !== C.current && null !== P && y(!0);
        }, [C, P]),
        null === x)
    )
        return null;
    let E = n === d.PremiumTypes.TIER_2;
    return (0, i.jsxs)("div", {
        ref: C,
        children: [
            (0, i.jsx)(a.ExpressiveModal, {
                graphic: {
                    type: "image",
                    src: E ? g.Z : p,
                },
                gradientColor: E ? "nitro-pink" : "nitro-green",
                transitionState: t,
                title: m.intl.string(m.t.PZSyRk),
                onClose: async () => e(),
                children: (0, i.jsx)("div", {
                    className: f.offerDetailContainer,
                    children: (0, i.jsx)(c.o, {
                        offerState: c.w.APPLIED,
                        userDiscountOffer: x,
                    }),
                }),
            }),
            !T &&
                v &&
                (0, i.jsx)(o.Z, {
                    confettiTarget: C.current,
                    confettiCanvas: h,
                    confettiVelocityMultiplier: 0.75,
                }),
        ],
    });
};
