a.d(t, { $: () => i });
var n = a(145310),
    r = a(938973),
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
        { buttonText: d, marketingSubscriptionTierSkuId: u } = (0, n.s)({
            subscriptionTier: t,
            hasActivePromotion: a,
            useShorterCTA: i,
            isPersistentCTA: s,
        }),
        { subscribeButtonProps: h } = (0, r.B)({ ...c, subscriptionTier: u, buttonTextOverride: o ?? d });
    return { subscribeButtonProps: h, subscriptionTier: u === l.pe.NONE ? null : u };
};
