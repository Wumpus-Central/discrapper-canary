var r = e(477900),
    a = e(855986),
    n = e(772707),
    s = e(192308),
    o = e(975807),
    l = e(166403),
    u = e(783420),
    p = e(938973),
    c = e(516044),
    d = e(682901),
    P = e(88001),
    m = e(107198),
    b = e(792996),
    T = e(438705);
e.d(
    i,
    {},
    {
        default: function (t) {
            let { subscribeButtonProps: i } = (0, p.B)({
                    subscriptionTier: d.pe.TIER_2,
                    subscriptionPlanId: d.gD.PREMIUM_GROUP_MONTH,
                }),
                { disabled: e, ...g } = i,
                k = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
                f = k?.hasActiveTrial ?? !1,
                h = e && !f;
            return (0, r.jsx)(u.A, {
                subscriptionTier: d.pe.TIER_2,
                initialPlanId: d.gD.PREMIUM_GROUP_MONTH,
                children: (i) => {
                    let { onClick: e } = i;
                    return (0, r.jsx)(n.k, {
                        ...t,
                        graphic: { src: T, type: "image" },
                        gradientColor: "nitro-pink",
                        title: b.intl.formatToPlainString(m.default.tJbHtN, { premiumGroupProductName: (0, P.DP)() }),
                        badge: { type: "beta", variant: "expressive" },
                        subtitle: b.intl.formatToPlainString(m.default.csDq8A, {
                            premiumGroupProductName: (0, P.DP)(),
                            totalSeats: 6,
                        }),
                        actions: [
                            {
                                text: b.intl.string(m.default.z8re5H),
                                variant: "secondary",
                                onClick: () => {
                                    (0, o.A)(P.TE);
                                },
                            },
                            {
                                ...g,
                                disabled: h,
                                onClick: (i) => {
                                    f ? (0, s.mM)(() => Promise.resolve(c.default)) : (e?.(i), t.onClose?.());
                                },
                            },
                        ],
                    });
                },
            });
        },
    },
);
