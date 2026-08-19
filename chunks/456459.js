e.d(n, { V: () => g });
var i = e(477900),
    r = e(582128),
    l = e(772707),
    a = e(17928),
    s = e(775602),
    o = e(524246),
    u = e(816252),
    c = e(916974),
    d = e(202541),
    m = e(375708),
    f = e(299183),
    p = e(303930),
    C = e(977544);
let g = () => {
    let {
            transitionState: t,
            onClose: n,
            premiumType: e,
            confettiCanvas: g,
            churnUserDiscountOffer: h,
            discountedPrice: x,
        } = (0, c.X)(),
        y = (0, r.useRef)(null),
        [P, v] = (0, r.useState)(!1),
        E = (0, a.bG)([s.Ay], () => s.Ay.useReducedMotion);
    if (
        ((0, r.useEffect)(() => {
            null !== y.current && null !== x && v(!0);
        }, [y, x]),
        null === h)
    )
        return null;
    let D = e === d.PremiumTypes.TIER_2;
    return (0, i.jsxs)("div", {
        ref: y,
        children: [
            (0, i.jsx)(l.k, {
                graphic: { type: "image", src: D ? C.A : p },
                gradientColor: D ? "nitro-pink" : "nitro-green",
                transitionState: t,
                title: m.intl.string(m.t.PZSyRk),
                onClose: async () => n(),
                children: (0, i.jsx)("div", {
                    className: f.TA,
                    children: (0, i.jsx)(u._, { offerState: u.b.APPLIED, userDiscountOffer: h }),
                }),
            }),
            !E &&
                P &&
                (0, i.jsx)(o.A, { confettiTarget: y.current, confettiCanvas: g, confettiVelocityMultiplier: 0.75 }),
        ],
    });
};
