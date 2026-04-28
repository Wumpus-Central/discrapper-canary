"use strict";
n.d(t, { $: () => l });
var r = n(145310),
    a = n(938973),
    i = n(788868);
let l = (e) => {
    let {
            subscriptionTier: t = null,
            hasActivePromotion: n = !1,
            useShorterCTA: l = !1,
            isPersistentCTA: s = !1,
            buttonTextOverride: o,
            ...c
        } = e,
        { buttonText: d, marketingSubscriptionTierSkuId: u } = (0, r.s)({
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: l,
            isPersistentCTA: s,
        }),
        { subscribeButtonProps: _ } = (0, a.B)({ ...c, subscriptionTier: u, buttonTextOverride: o ?? d });
    return { subscribeButtonProps: _, subscriptionTier: u === i.pe.NONE ? null : u };
};
