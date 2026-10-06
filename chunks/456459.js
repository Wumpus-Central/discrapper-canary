n.d(e, { V: () => g });
var i = n(477900),
    r = n(582128),
    l = n(17928),
    a = n(772707),
    s = n(775602),
    o = n(524246),
    u = n(816252),
    c = n(916974),
    d = n(202541),
    m = n(375708),
    f = n(871710),
    p = n(303930),
    C = n(977544);
let g = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: n,
            confettiCanvas: g,
            churnUserDiscountOffer: x,
            discountedPrice: h,
        } = (0, c.X)(),
        y = (0, r.useRef)(null),
        [P, v] = (0, r.useState)(!1),
        E = (0, l.bG)([s.Ay], () => s.Ay.useReducedMotion);
    if (
        ((0, r.useEffect)(() => {
            null !== y.current && null !== h && v(!0);
        }, [y, h]),
        null === x)
    )
        return null;
    let D = n === d.PremiumTypes.TIER_2;
    return (0, i.jsxs)("div", {
        ref: y,
        children: [
            (0, i.jsx)(a.k, {
                graphic: { type: "image", src: D ? C.A : p },
                gradientColor: D ? "nitro-pink" : "nitro-green",
                transitionState: t,
                title: m.intl.string(m.t.PZSyRk),
                onClose: async () => e(),
                children: (0, i.jsx)("div", {
                    className: f.TA,
                    children: (0, i.jsx)(u._, { offerState: u.b.APPLIED, userDiscountOffer: x }),
                }),
            }),
            !E &&
                P &&
                (0, i.jsx)(o.A, { confettiTarget: y.current, confettiCanvas: g, confettiVelocityMultiplier: 0.75 }),
        ],
    });
};
