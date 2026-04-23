i.d(e, { V: () => p });
var n = i(627968),
    r = i(64700),
    l = i(772707),
    s = i(17928),
    a = i(775602),
    c = i(524246),
    u = i(816252),
    o = i(916974),
    d = i(788868),
    m = i(985018),
    f = i(476791),
    g = i(303930),
    x = i(977544);
let p = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: i,
            confettiCanvas: p,
            churnUserDiscountOffer: h,
            discountedPrice: C,
        } = (0, o.X)(),
        v = (0, r.useRef)(null),
        [P, j] = (0, r.useState)(!1),
        y = (0, s.bG)([a.A], () => a.A.useReducedMotion);
    if (
        ((0, r.useEffect)(() => {
            null !== v.current && null !== C && j(!0);
        }, [v, C]),
        null === h)
    )
        return null;
    let N = i === d.PremiumTypes.TIER_2;
    return (0, n.jsxs)("div", {
        ref: v,
        children: [
            (0, n.jsx)(l.k, {
                graphic: { type: "image", src: N ? x.A : g },
                gradientColor: N ? "nitro-pink" : "nitro-green",
                transitionState: t,
                title: m.intl.string(m.t.PZSyRk),
                onClose: async () => e(),
                children: (0, n.jsx)("div", {
                    className: f.TA,
                    children: (0, n.jsx)(u._, { offerState: u.b.APPLIED, userDiscountOffer: h }),
                }),
            }),
            !y &&
                P &&
                (0, n.jsx)(c.A, { confettiTarget: v.current, confettiCanvas: p, confettiVelocityMultiplier: 0.75 }),
        ],
    });
};
