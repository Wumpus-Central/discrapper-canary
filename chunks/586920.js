(n.d(t, { i: () => h }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(667202),
    s = n(607070),
    l = n(530618),
    c = n(230916),
    u = n(10508),
    d = n(594135),
    m = n(474936),
    _ = n(388032),
    p = n(735912),
    f = n(997892),
    C = n(234286);
let h = () => {
    let { transitionState: e, onClose: t, premiumType: n, premiumSubscription: h, confettiCanvas: x, churnUserDiscountOffer: y } = (0, d.a)(),
        b = (0, i.useRef)(null),
        [g, j] = (0, i.useState)(!1),
        I = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        v = (0, c._)(h, m.Xh.PREMIUM_MONTH_TIER_2, y);
    if (
        ((0, i.useEffect)(() => {
            null !== b.current && null !== v && j(!0);
        }, [b, v]),
        null === y)
    )
        return null;
    let T = n === m.p9.TIER_2,
        E = [
            {
                text: _.intl.string(_.t['/r8g/v']),
                onClick: () => t(),
                variant: 'primary',
                fullWidth: !0
            }
        ];
    return (0, r.jsxs)('div', {
        ref: b,
        children: [
            (0, r.jsx)(a.I, {
                graphic: { src: T ? C : f },
                gradientColor: T ? 'nitro-pink' : 'nitro-green',
                transitionState: e,
                title: _.intl.string(_.t.PZSyRk),
                actions: E,
                onClose: async () => t(),
                children: (0, r.jsx)('div', {
                    className: p.offerDetailContainer,
                    children: (0, r.jsx)(u.o, {
                        applied: !0,
                        userDiscountOffer: y
                    })
                })
            }),
            !I &&
                g &&
                (0, r.jsx)(l.Z, {
                    confettiTarget: b.current,
                    confettiCanvas: x,
                    confettiVelocityMultiplier: 0.75
                })
        ]
    });
};
