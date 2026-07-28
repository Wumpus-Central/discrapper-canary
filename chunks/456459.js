n.d(e, { V: () => h });
var i = n(477900),
    r = n(582128),
    l = n(772707),
    a = n(17928),
    s = n(775602),
    o = n(524246),
    u = n(816252),
    c = n(916974),
    d = n(202541),
    m = n(375708),
    f = n(299183),
    g = n(303930),
    p = n(977544);
let h = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: n,
            confettiCanvas: h,
            churnUserDiscountOffer: x,
            discountedPrice: P,
        } = (0, c.X)(),
        C = (0, r.useRef)(null),
        [y, E] = (0, r.useState)(!1),
        v = (0, a.bG)([s.Ay], () => s.Ay.useReducedMotion);
    if (
        ((0, r.useEffect)(() => {
            null !== C.current && null !== P && E(!0);
        }, [C, P]),
        null === x)
    )
        return null;
    let D = n === d.PremiumTypes.TIER_2;
    return (0, i.jsxs)("div", {
        ref: C,
        children: [
            (0, i.jsx)(l.k, {
                graphic: { type: "image", src: D ? p.A : g },
                gradientColor: D ? "nitro-pink" : "nitro-green",
                transitionState: t,
                title: m.intl.string(m.t.PZSyRk),
                onClose: async () => e(),
                children: (0, i.jsx)("div", {
                    className: f.TA,
                    children: (0, i.jsx)(u._, { offerState: u.b.APPLIED, userDiscountOffer: x }),
                }),
            }),
            !v &&
                y &&
                (0, i.jsx)(o.A, { confettiTarget: C.current, confettiCanvas: h, confettiVelocityMultiplier: 0.75 }),
        ],
    });
};
