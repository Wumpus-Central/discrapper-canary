n.d(t, { $: () => r });
var a = n(145310),
    i = n(938973),
    l = n(788868);
let r = (e) => {
    let {
            subscriptionTier: t = null,
            hasActivePromotion: n = !1,
            useShorterCTA: r = !1,
            isPersistentCTA: o = !1,
            buttonTextOverride: s,
            ...c
        } = e,
        { buttonText: d, marketingSubscriptionTierSkuId: u } = (0, a.s)({
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: r,
            isPersistentCTA: o,
        }),
        { subscribeButtonProps: _ } = (0, i.B)({ ...c, subscriptionTier: u, buttonTextOverride: s ?? d });
    return { subscribeButtonProps: _, subscriptionTier: u === l.pe.NONE ? null : u };
};
