n.d(t, { i: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(667202),
    s = n(607070),
    l = n(530618),
    c = n(219673),
    u = n(10508),
    d = n(594135),
    f = n(474936),
    _ = n(388032),
    p = n(607993),
    h = n(997892),
    m = n(234286);
let g = () => {
    let {
            transitionState: e,
            onClose: t,
            premiumType: n,
            confettiCanvas: g,
            churnUserDiscountOffer: E,
            discountedPrice: b,
        } = (0, d.a)(),
        y = (0, i.useRef)(null),
        [O, v] = (0, i.useState)(!1),
        { enabled: I } = c.b.useConfig({ location: "DiscountAppliedStep" }),
        T = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
    if (
        ((0, i.useEffect)(() => {
            null !== y.current && null !== b && v(!0);
        }, [y, b]),
        null === E)
    )
        return null;
    let S = n === f.p9.TIER_2,
        A = I
            ? []
            : [
                  {
                      text: _.intl.string(_.t["/r8g/v"]),
                      onClick: () => t(),
                      variant: "primary",
                      fullWidth: !0,
                  },
              ];
    return (0, r.jsxs)("div", {
        ref: y,
        children: [
            (0, r.jsx)(o.I, {
                graphic: {
                    type: "image",
                    src: S ? m : h,
                },
                gradientColor: S ? "nitro-pink" : "nitro-green",
                transitionState: e,
                title: _.intl.string(_.t.PZSyRk),
                actions: A,
                onClose: async () => t(),
                children: (0, r.jsx)("div", {
                    className: p.offerDetailContainer,
                    children: (0, r.jsx)(u.o, {
                        offerState: u.w.APPLIED,
                        userDiscountOffer: E,
                    }),
                }),
            }),
            !T &&
                O &&
                (0, r.jsx)(l.Z, {
                    confettiTarget: y.current,
                    confettiCanvas: g,
                    confettiVelocityMultiplier: 0.75,
                }),
        ],
    });
};
