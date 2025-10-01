n.d(e, { i: () => x }), n(388685);
var i = n(951288),
    r = n(647438),
    a = n(442837),
    l = n(667202),
    s = n(607070),
    o = n(530618),
    c = n(219673),
    u = n(10508),
    d = n(594135),
    m = n(474936),
    f = n(388032),
    p = n(950728),
    g = n(997892),
    h = n(234286);
let x = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: n,
            confettiCanvas: x,
            churnUserDiscountOffer: C,
            discountedPrice: P,
        } = (0, d.a)(),
        v = (0, r.useRef)(null),
        [y, S] = (0, r.useState)(!1),
        { enabled: E } = c.b.useConfig({ location: "DiscountAppliedStep" }),
        _ = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
    if (
        ((0, r.useEffect)(() => {
            null !== v.current && null !== P && S(!0);
        }, [v, P]),
        null === C)
    )
        return null;
    let D = n === m.p9.TIER_2,
        N = E
            ? []
            : [
                  {
                      text: f.intl.string(f.t["/r8g/v"]),
                      onClick: () => e(),
                      variant: "primary",
                      fullWidth: !0,
                  },
              ];
    return (0, i.jsxs)("div", {
        ref: v,
        children: [
            (0, i.jsx)(l.ExpressiveModal, {
                graphic: {
                    type: "image",
                    src: D ? h : g,
                },
                gradientColor: D ? "nitro-pink" : "nitro-green",
                transitionState: t,
                title: f.intl.string(f.t.PZSyRk),
                actions: N,
                onClose: async () => e(),
                children: (0, i.jsx)("div", {
                    className: p.offerDetailContainer,
                    children: (0, i.jsx)(u.o, {
                        offerState: u.w.APPLIED,
                        userDiscountOffer: C,
                    }),
                }),
            }),
            !_ &&
                y &&
                (0, i.jsx)(o.Z, {
                    confettiTarget: v.current,
                    confettiCanvas: x,
                    confettiVelocityMultiplier: 0.75,
                }),
        ],
    });
};
