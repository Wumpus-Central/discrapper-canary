n.d(t, {
    V: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(775602),
    l = n(524246),
    c = n(816252),
    u = n(916974),
    d = n(788868),
    f = n(985018),
    p = n(555672),
    _ = n(303930),
    h = n(938822);
let m = () => {
    let {
            transitionState: e,
            onClose: t,
            premiumType: n,
            confettiCanvas: m,
            churnUserDiscountOffer: g,
            discountedPrice: E,
        } = (0, u.X)(),
        b = (0, i.useRef)(null),
        [y, O] = (0, i.useState)(!1),
        A = (0, s.bG)([o.A], () => o.A.useReducedMotion);
    if (
        ((0, i.useEffect)(() => {
            null !== b.current && null !== E && O(!0);
        }, [b, E]),
        null === g)
    )
        return null;
    let v = n === d.PremiumTypes.TIER_2;
    return (0, r.jsxs)("div", {
        ref: b,
        children: [
            (0, r.jsx)(a.ExpressiveModal, {
                graphic: {
                    type: "image",
                    src: v ? h.A : _,
                },
                gradientColor: v ? "nitro-pink" : "nitro-green",
                transitionState: e,
                title: f.intl.string(f.t.PZSyRk),
                onClose: async () => t(),
                children: (0, r.jsx)("div", {
                    className: p.TA,
                    children: (0, r.jsx)(c._, {
                        offerState: c.b.APPLIED,
                        userDiscountOffer: g,
                    }),
                }),
            }),
            !A &&
                y &&
                (0, r.jsx)(l.A, {
                    confettiTarget: b.current,
                    confettiCanvas: m,
                    confettiVelocityMultiplier: 0.75,
                }),
        ],
    });
};
