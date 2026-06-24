e.d(i, { default: () => g });
var r = e(627968),
    a = e(772707),
    n = e(17928),
    o = e(192308),
    s = e(975807),
    l = e(166403),
    p = e(783420),
    u = e(938973),
    c = e(516044),
    d = e(788868),
    P = e(88001),
    b = e(466919),
    m = e(375708),
    T = e(438705);
let g = function (t) {
    let { subscribeButtonProps: i } = (0, u.B)({
            subscriptionTier: d.pe.TIER_2,
            subscriptionPlanId: d.gD.PREMIUM_GROUP_MONTH,
        }),
        { disabled: e, ...g } = i,
        k = (0, n.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
        f = k?.hasActiveTrial ?? !1,
        h = e && !f;
    return (0, r.jsx)(p.A, {
        subscriptionTier: d.pe.TIER_2,
        initialPlanId: d.gD.PREMIUM_GROUP_MONTH,
        children: (i) => {
            let { onClick: e } = i;
            return (0, r.jsx)(a.k, {
                ...t,
                graphic: { src: T, type: "image" },
                gradientColor: "nitro-pink",
                title: m.intl.formatToPlainString(b.default.tJbHtN, { premiumGroupProductName: (0, P.DP)() }),
                badge: { type: "beta", variant: "expressive" },
                subtitle: m.intl.formatToPlainString(b.default.csDq8A, {
                    premiumGroupProductName: (0, P.DP)(),
                    totalSeats: P.aw,
                }),
                actions: [
                    {
                        text: m.intl.string(b.default.z8re5H),
                        variant: "secondary",
                        onClick: () => {
                            (0, s.A)(P.TE);
                        },
                    },
                    {
                        ...g,
                        disabled: h,
                        onClick: (i) => {
                            f ? (0, o.openModalLazy)(() => Promise.resolve(c.default)) : (e?.(i), t.onClose?.());
                        },
                    },
                ],
            });
        },
    });
};
