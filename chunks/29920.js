n.d(t, {
    Ei: () => a,
    He: () => o
});
var r = n(544891),
    l = n(570140),
    i = n(960048),
    s = n(981631);
async function o(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: l } = e;
    try {
        let e = await r.tn.post({
            url: s.ANM.PREMIUM_MARKETING,
            body: {
                user_trial_offer: t,
                user_discount: n,
                user_discount_offer: l
            },
            rejectWithError: !0
        });
        if (e.ok) return e.body;
        return i.Z.captureMessage('fetchPremiumMarketingContentWithUserOffer failed'), [];
    } catch (e) {
        return [];
    }
}
async function a(e) {
    let { subscriptionId: t, rewardSkuIds: n } = e;
    try {
        let e = await r.tn.post({
            url: s.ANM.BILLING_SUBSCRIPTION_REWARDS(t),
            body: { reward_sku_ids: n },
            rejectWithError: !0
        });
        return (
            l.Z.dispatch({
                type: 'ENTITLEMENT_CREATE',
                entitlement: e.body
            }),
            e.ok
        );
    } catch (e) {
        return !1;
    }
}
