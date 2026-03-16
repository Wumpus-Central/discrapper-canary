e.d(i, { default: () => g });
var r = e(627968),
    a = e(158954),
    n = e(311907),
    l = e(192308),
    s = e(975807),
    o = e(166403),
    u = e(783420),
    d = e(938973),
    c = e(516044),
    p = e(788868),
    m = e(88001),
    P = e(519412),
    b = e(985018),
    f = e(438705);
let g = (t) => {
    let { subscribeButtonProps: i } = (0, d.B)({
            subscriptionTier: p.pe.TIER_2,
            subscriptionPlanId: p.gD.PREMIUM_GROUP_MONTH,
        }),
        { disabled: e, ...g } = i,
        T = (0, n.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        h = T?.hasActiveTrial ?? !1,
        k = e && !h;
    return (0, r.jsx)(u.A, {
        subscriptionTier: p.pe.TIER_2,
        initialPlanId: p.gD.PREMIUM_GROUP_MONTH,
        children: (i) => {
            let { onClick: e } = i;
            return (0, r.jsx)(a.ExpressiveModal, {
                ...t,
                graphic: { src: f, type: "image" },
                gradientColor: "nitro-pink",
                title: b.intl.formatToPlainString(P.default.tJbHtN, { premiumGroupProductName: (0, m.DP)() }),
                badge: { type: "beta", variant: "expressive" },
                subtitle: b.intl.formatToPlainString(P.default.csDq8A, {
                    premiumGroupProductName: (0, m.DP)(),
                    totalSeats: m.aw,
                }),
                actions: [
                    {
                        text: b.intl.string(P.default.z8re5H),
                        variant: "secondary",
                        onClick: () => {
                            (0, s.A)(m.TE);
                        },
                    },
                    {
                        ...g,
                        disabled: k,
                        onClick: (i) => {
                            h ? (0, l.openModalLazy)(() => Promise.resolve(c.default)) : (e?.(i), t.onClose?.());
                        },
                    },
                ],
            });
        },
    });
};
