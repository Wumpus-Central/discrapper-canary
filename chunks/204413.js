s.d(r, { $: () => u });
var t = s(145310),
    e = s(938973),
    n = s(202541);
function u(i) {
    let {
            subscriptionTier: r = null,
            hasActivePromotion: s = !1,
            useShorterCTA: u = !1,
            isPersistentCTA: p = !1,
            buttonTextOverride: c,
            ...o
        } = i,
        { buttonText: b, marketingSubscriptionTierSkuId: d } = (0, t.s)({
            subscriptionTier: r,
            hasActivePromotion: s,
            useShorterCTA: u,
            isPersistentCTA: p,
        }),
        { subscribeButtonProps: a } = (0, e.B)({ ...o, subscriptionTier: d, buttonTextOverride: c ?? b });
    return { subscribeButtonProps: a, subscriptionTier: d === n.pe.NONE ? null : d };
}
