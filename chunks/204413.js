a.d(t, { $: () => i });
var r = a(145310),
    n = a(938973),
    l = a(788868);
let i = (e) => {
    let {
            subscriptionTier: t = null,
            hasActivePromotion: a = !1,
            useShorterCTA: i = !1,
            isPersistentCTA: s = !1,
            buttonTextOverride: o,
            ...c
        } = e,
        { buttonText: d, marketingSubscriptionTierSkuId: u } = (0, r.s)({
            subscriptionTier: t,
            hasActivePromotion: a,
            useShorterCTA: i,
            isPersistentCTA: s,
        }),
        { subscribeButtonProps: h } = (0, n.B)({ ...c, subscriptionTier: u, buttonTextOverride: o ?? d });
    return { subscribeButtonProps: h, subscriptionTier: u === l.pe.NONE ? null : u };
};
