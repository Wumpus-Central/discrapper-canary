i.d(e, { default: () => g });
var r = i(627968),
    a = i(772707),
    n = i(17928),
    l = i(192308),
    s = i(975807),
    o = i(166403),
    u = i(783420),
    d = i(938973),
    c = i(516044),
    p = i(788868),
    m = i(88001),
    P = i(466919),
    f = i(985018),
    b = i(438705);
let g = (t) => {
    let { subscribeButtonProps: e } = (0, d.B)({
            subscriptionTier: p.pe.TIER_2,
            subscriptionPlanId: p.gD.PREMIUM_GROUP_MONTH,
        }),
        { disabled: i, ...g } = e,
        T = (0, n.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        k = T?.hasActiveTrial ?? !1,
        h = i && !k;
    return (0, r.jsx)(u.A, {
        subscriptionTier: p.pe.TIER_2,
        initialPlanId: p.gD.PREMIUM_GROUP_MONTH,
        children: (e) => {
            let { onClick: i } = e;
            return (0, r.jsx)(a.k, {
                ...t,
                graphic: { src: b, type: "image" },
                gradientColor: "nitro-pink",
                title: f.intl.formatToPlainString(P.default.tJbHtN, { premiumGroupProductName: (0, m.DP)() }),
                badge: { type: "beta", variant: "expressive" },
                subtitle: f.intl.formatToPlainString(P.default.csDq8A, {
                    premiumGroupProductName: (0, m.DP)(),
                    totalSeats: m.aw,
                }),
                actions: [
                    {
                        text: f.intl.string(P.default.z8re5H),
                        variant: "secondary",
                        onClick: () => {
                            (0, s.A)(m.TE);
                        },
                    },
                    {
                        ...g,
                        disabled: h,
                        onClick: (e) => {
                            k ? (0, l.openModalLazy)(() => Promise.resolve(c.default)) : (i?.(e), t.onClose?.());
                        },
                    },
                ],
            });
        },
    });
};
