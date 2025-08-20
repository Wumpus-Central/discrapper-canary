n.d(t, { i: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(667202),
    s = n(607070),
    l = n(530618),
    c = n(10508),
    u = n(594135),
    d = n(474936),
    f = n(388032),
    _ = n(950728),
    p = n(997892),
    h = n(234286);
let m = () => {
    let {
            transitionState: e,
            onClose: t,
            premiumType: n,
            confettiCanvas: m,
            churnUserDiscountOffer: g,
            discountedPrice: E,
        } = (0, u.a)(),
        b = (0, i.useRef)(null),
        [y, O] = (0, i.useState)(!1),
        v = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
    if (
        ((0, i.useEffect)(() => {
            null !== b.current && null !== E && O(!0);
        }, [b, E]),
        null === g)
    )
        return null;
    let I = n === d.p9.TIER_2,
        T = [
            {
                text: f.intl.string(f.t["/r8g/v"]),
                onClick: () => t(),
                variant: "primary",
                fullWidth: !0,
            },
        ];
    return (0, r.jsxs)("div", {
        ref: b,
        children: [
            (0, r.jsx)(o.I, {
                graphic: {
                    type: "image",
                    src: I ? h : p,
                },
                gradientColor: I ? "nitro-pink" : "nitro-green",
                transitionState: e,
                title: f.intl.string(f.t.PZSyRk),
                actions: T,
                onClose: async () => t(),
                children: (0, r.jsx)("div", {
                    className: _.offerDetailContainer,
                    children: (0, r.jsx)(c.o, {
                        offerState: c.w.APPLIED,
                        userDiscountOffer: g,
                    }),
                }),
            }),
            !v &&
                y &&
                (0, r.jsx)(l.Z, {
                    confettiTarget: b.current,
                    confettiCanvas: m,
                    confettiVelocityMultiplier: 0.75,
                }),
        ],
    });
};
