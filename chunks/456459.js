var i = e(477900),
    r = e(582128),
    l = e(855986),
    a = e(772707),
    s = e(775602),
    o = e(524246),
    u = e(816252),
    c = e(916974),
    d = e(394660),
    m = e(682901),
    f = e(891027),
    p = e(792996),
    y = e(871710),
    P = e(303930),
    g = e(977544);
e.d(
    n,
    {},
    {
        V: () => {
            let {
                    transitionState: t,
                    onClose: n,
                    premiumType: e,
                    isPremiumGroupContinuation: h,
                    confettiCanvas: x,
                    churnUserDiscountOffer: C,
                    discountedPrice: v,
                } = (0, c.X)(),
                E = (0, r.useRef)(null),
                [b, D] = (0, r.useState)(!1),
                j = (0, l.bG)([s.Ay], () => s.Ay.useReducedMotion);
            if (
                ((0, r.useEffect)(() => {
                    null !== E.current && null !== v && D(!0);
                }, [E, v]),
                null === C)
            )
                return null;
            let N = e === m.PremiumTypes.TIER_2;
            return (0, i.jsxs)("div", {
                ref: E,
                children: [
                    (0, i.jsx)(a.k, {
                        graphic: { type: "image", src: N ? g.A : P },
                        gradientColor: N ? "nitro-pink" : "nitro-green",
                        transitionState: t,
                        title: h ? p.intl.string(f.default.rblVTR) : p.intl.string(p.t.PZSyRk),
                        onClose: async () => n(),
                        children: (0, i.jsx)("div", {
                            className: y.TA,
                            children: h
                                ? (0, i.jsx)(d.o, { offerState: u.b.APPLIED, userDiscountOffer: C })
                                : (0, i.jsx)(u._, { offerState: u.b.APPLIED, userDiscountOffer: C }),
                        }),
                    }),
                    !j &&
                        b &&
                        (0, i.jsx)(o.A, {
                            confettiTarget: E.current,
                            confettiCanvas: x,
                            confettiVelocityMultiplier: 0.75,
                        }),
                ],
            });
        },
    },
);
