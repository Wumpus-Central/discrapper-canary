"use strict";
n.d(t, { V: () => m });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(775602),
    l = n(524246),
    u = n(816252),
    c = n(916974),
    d = n(788868),
    _ = n(985018),
    f = n(333291),
    p = n(303930),
    h = n(938822);
let m = () => {
    let {
            transitionState: e,
            onClose: t,
            premiumType: n,
            confettiCanvas: m,
            churnUserDiscountOffer: g,
            discountedPrice: E,
        } = (0, c.X)(),
        A = (0, i.useRef)(null),
        [I, T] = (0, i.useState)(!1),
        y = (0, s.bG)([o.A], () => o.A.useReducedMotion);
    if (
        ((0, i.useEffect)(() => {
            null !== A.current && null !== E && T(!0);
        }, [A, E]),
        null === g)
    )
        return null;
    let S = n === d.PremiumTypes.TIER_2;
    return (0, r.jsxs)("div", {
        ref: A,
        children: [
            (0, r.jsx)(a.ExpressiveModal, {
                graphic: { type: "image", src: S ? h.A : p },
                gradientColor: S ? "nitro-pink" : "nitro-green",
                transitionState: e,
                title: _.intl.string(_.t.PZSyRk),
                onClose: async () => t(),
                children: (0, r.jsx)("div", {
                    className: f.TA,
                    children: (0, r.jsx)(u._, { offerState: u.b.APPLIED, userDiscountOffer: g }),
                }),
            }),
            !y &&
                I &&
                (0, r.jsx)(l.A, { confettiTarget: A.current, confettiCanvas: m, confettiVelocityMultiplier: 0.75 }),
        ],
    });
};
