i.d(e, { V: () => x });
var n = i(627968),
    r = i(64700),
    l = i(158954),
    a = i(311907),
    s = i(775602),
    u = i(524246),
    o = i(816252),
    c = i(916974),
    d = i(788868),
    m = i(985018),
    f = i(333291),
    g = i(303930),
    p = i(938822);
let x = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: i,
            confettiCanvas: x,
            churnUserDiscountOffer: h,
            discountedPrice: P,
        } = (0, c.X)(),
        y = (0, r.useRef)(null),
        [C, v] = (0, r.useState)(!1),
        E = (0, a.bG)([s.A], () => s.A.useReducedMotion);
    if (
        ((0, r.useEffect)(() => {
            null !== y.current && null !== P && v(!0);
        }, [y, P]),
        null === h)
    )
        return null;
    let D = i === d.PremiumTypes.TIER_2;
    return (0, n.jsxs)("div", {
        ref: y,
        children: [
            (0, n.jsx)(l.ExpressiveModal, {
                graphic: { type: "image", src: D ? p.A : g },
                gradientColor: D ? "nitro-pink" : "nitro-green",
                transitionState: t,
                title: m.intl.string(m.t.PZSyRk),
                onClose: async () => e(),
                children: (0, n.jsx)("div", {
                    className: f.TA,
                    children: (0, n.jsx)(o._, { offerState: o.b.APPLIED, userDiscountOffer: h }),
                }),
            }),
            !E &&
                C &&
                (0, n.jsx)(u.A, { confettiTarget: y.current, confettiCanvas: x, confettiVelocityMultiplier: 0.75 }),
        ],
    });
};
