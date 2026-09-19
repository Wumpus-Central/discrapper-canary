t.d(i, { $: () => a });
var e = t(145310),
    n = t(938973),
    u = t(202541);
function a(r) {
    let {
            subscriptionTier: i = null,
            hasActivePromotion: t = !1,
            useShorterCTA: a = !1,
            isPersistentCTA: s = !1,
            buttonTextOverride: l,
            ...o
        } = r,
        { buttonText: c, marketingSubscriptionTierSkuId: p } = (0, e.s)({
            subscriptionTier: i,
            hasActivePromotion: t,
            useShorterCTA: a,
            isPersistentCTA: s,
        }),
        { subscribeButtonProps: d } = (0, n.B)({ ...o, subscriptionTier: p, buttonTextOverride: l ?? c });
    return { subscribeButtonProps: d, subscriptionTier: p === u.pe.NONE ? null : p };
}
