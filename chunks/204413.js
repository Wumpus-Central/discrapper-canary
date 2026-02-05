"use strict";
n.d(t, { $: () => s });
var r = n(145310),
    i = n(938973),
    a = n(788868);
let s = (e) => {
    let {
            subscriptionTier: t = null,
            hasActivePromotion: n = !1,
            useShorterCTA: s = !1,
            isPersistentCTA: o = !1,
            buttonTextOverride: l,
            ...u
        } = e,
        c = { subscriptionTier: t, hasActivePromotion: n, useShorterCTA: s, isPersistentCTA: o },
        { buttonText: d, marketingSubscriptionTierSkuId: _ } = (0, r.s)(c),
        { subscribeButtonProps: f } = (0, i.B)({ ...u, subscriptionTier: _, buttonTextOverride: l ?? d });
    return { subscribeButtonProps: f, subscriptionTier: _ === a.pe.NONE ? null : _ };
};
