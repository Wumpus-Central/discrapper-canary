(n.d(t, { i: () => f }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(667202),
    l = n(607070),
    o = n(530618),
    c = n(10508),
    d = n(594135),
    u = n(474936),
    m = n(388032),
    p = n(735912),
    g = n(997892),
    h = n(234286);
let f = () => {
    let { transitionState: e, onClose: t, premiumType: n, confettiCanvas: f, churnUserDiscountOffer: b, discountedPrice: x } = (0, d.a)(),
        _ = (0, r.useRef)(null),
        [j, E] = (0, r.useState)(!1),
        C = (0, s.e7)([l.Z], () => l.Z.useReducedMotion);
    if (
        ((0, r.useEffect)(() => {
            null !== _.current && null !== x && E(!0);
        }, [_, x]),
        null === b)
    )
        return null;
    let O = n === u.p9.TIER_2,
        v = [
            {
                text: m.intl.string(m.t['/r8g/v']),
                onClick: () => t(),
                variant: 'primary',
                fullWidth: !0
            }
        ];
    return (0, i.jsxs)('div', {
        ref: _,
        children: [
            (0, i.jsx)(a.I, {
                graphic: {
                    type: 'image',
                    src: O ? h : g
                },
                gradientColor: O ? 'nitro-pink' : 'nitro-green',
                transitionState: e,
                title: m.intl.string(m.t.PZSyRk),
                actions: v,
                onClose: async () => t(),
                children: (0, i.jsx)('div', {
                    className: p.offerDetailContainer,
                    children: (0, i.jsx)(c.o, {
                        offerState: c.w.APPLIED,
                        userDiscountOffer: b
                    })
                })
            }),
            !C &&
                j &&
                (0, i.jsx)(o.Z, {
                    confettiTarget: _.current,
                    confettiCanvas: f,
                    confettiVelocityMultiplier: 0.75
                })
        ]
    });
};
