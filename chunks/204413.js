"use strict";
n.d(t, { $: () => a });
var i = n(145310),
    r = n(938973),
    s = n(788868);
let a = (e) => {
    let {
            subscriptionTier: t = null,
            hasActivePromotion: n = !1,
            useShorterCTA: a = !1,
            isPersistentCTA: o = !1,
            buttonTextOverride: l,
            ...u
        } = e,
        { buttonText: c, marketingSubscriptionTierSkuId: d } = (0, i.s)({
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: a,
            isPersistentCTA: o,
        }),
        { subscribeButtonProps: _ } = (0, r.B)({ ...u, subscriptionTier: d, buttonTextOverride: l ?? c });
    return { subscribeButtonProps: _, subscriptionTier: d === s.pe.NONE ? null : d };
};
