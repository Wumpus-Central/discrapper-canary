var i = e(477900),
    r = e(582128),
    l = e(855986),
    a = e(772707),
    s = e(775602),
    o = e(524246),
    u = e(816252),
    c = e(916974),
    d = e(682901),
    m = e(792996),
    f = e(871710),
    p = e(303930),
    C = e(977544);
e.d(
    n,
    {},
    {
        V: () => {
            let {
                    transitionState: t,
                    onClose: n,
                    premiumType: e,
                    confettiCanvas: g,
                    churnUserDiscountOffer: y,
                    discountedPrice: h,
                } = (0, c.X)(),
                P = (0, r.useRef)(null),
                [x, v] = (0, r.useState)(!1),
                E = (0, l.bG)([s.Ay], () => s.Ay.useReducedMotion);
            if (
                ((0, r.useEffect)(() => {
                    null !== P.current && null !== h && v(!0);
                }, [P, h]),
                null === y)
            )
                return null;
            let D = e === d.PremiumTypes.TIER_2;
            return (0, i.jsxs)("div", {
                ref: P,
                children: [
                    (0, i.jsx)(a.k, {
                        graphic: { type: "image", src: D ? C.A : p },
                        gradientColor: D ? "nitro-pink" : "nitro-green",
                        transitionState: t,
                        title: m.intl.string(m.t.PZSyRk),
                        onClose: async () => n(),
                        children: (0, i.jsx)("div", {
                            className: f.TA,
                            children: (0, i.jsx)(u._, { offerState: u.b.APPLIED, userDiscountOffer: y }),
                        }),
                    }),
                    !E &&
                        x &&
                        (0, i.jsx)(o.A, {
                            confettiTarget: P.current,
                            confettiCanvas: g,
                            confettiVelocityMultiplier: 0.75,
                        }),
                ],
            });
        },
    },
);
