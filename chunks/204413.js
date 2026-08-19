i.d(n, { $: () => s });
var e = i(145310),
    r = i(938973),
    u = i(202541);
function s(t) {
    let {
            subscriptionTier: n = null,
            hasActivePromotion: i = !1,
            useShorterCTA: s = !1,
            isPersistentCTA: l = !1,
            buttonTextOverride: a,
            ...o
        } = t,
        { buttonText: c, marketingSubscriptionTierSkuId: p } = (0, e.s)({
            subscriptionTier: n,
            hasActivePromotion: i,
            useShorterCTA: s,
            isPersistentCTA: l,
        }),
        { subscribeButtonProps: d } = (0, r.B)({ ...o, subscriptionTier: p, buttonTextOverride: a ?? c });
    return { subscribeButtonProps: d, subscriptionTier: p === u.pe.NONE ? null : p };
}
