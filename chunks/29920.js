n.d(t, {
    Ei: () => c,
    He: () => s,
    es: () => o
});
var r = n(544891),
    i = n(570140),
    l = n(960048),
    a = n(981631);
function o(e) {
    i.Z.dispatch({
        type: 'BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS',
        eligible: e
    });
}
async function s(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
    try {
        let e = await r.tn.post({
            url: a.ANM.PREMIUM_MARKETING,
            body: {
                user_trial_offer: t,
                user_discount: n,
                user_discount_offer: i
            },
            rejectWithError: !0
        });
        if (e.ok) return e.body;
        return l.Z.captureMessage('fetchPremiumMarketingContentWithUserOffer failed'), [];
    } catch (e) {
        return [];
    }
}
async function c(e) {
    let { subscriptionId: t, rewardSkuIds: n } = e;
    try {
        let e = await r.tn.post({
            url: a.ANM.BILLING_SUBSCRIPTION_REWARDS(t),
            body: { reward_sku_ids: n },
            rejectWithError: !0
        });
        return (
            i.Z.dispatch({
                type: 'ENTITLEMENT_CREATE',
                entitlement: e.body
            }),
            e.ok
        );
    } catch (e) {
        return !1;
    }
}
