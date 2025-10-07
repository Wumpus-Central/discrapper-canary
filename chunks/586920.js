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
            discountedPrice: C,
        } = (0, u.a)(),
        P = (0, r.useRef)(null),
        [v, y] = (0, r.useState)(!1),
        E = (0, l.e7)([s.Z], () => s.Z.useReducedMotion);
    if (
        ((0, r.useEffect)(() => {
            null !== P.current && null !== C && y(!0);
        }, [P, C]),
        null === x)
    )
        return null;
    let S = n === d.p9.TIER_2;
    return (0, i.jsxs)("div", {
        ref: P,
        children: [
            (0, i.jsx)(a.ExpressiveModal, {
                graphic: {
                    type: "image",
                    src: S ? g.Z : p,
                },
                gradientColor: S ? "nitro-pink" : "nitro-green",
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
            !E &&
                v &&
                (0, i.jsx)(o.Z, {
                    confettiTarget: P.current,
                    confettiCanvas: h,
                    confettiVelocityMultiplier: 0.75,
                }),
        ],
    });
};
