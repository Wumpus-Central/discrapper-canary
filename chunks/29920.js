n.d(t, {
    Ei: () => d,
    He: () => c,
    b2: () => l,
    es: () => o
});
var r = n(544891),
    i = n(570140),
    s = n(960048),
    a = n(981631);
async function l(e) {
    i.Z.dispatch({ type: 'BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START' });
    try {
        let t = await r.tn.get({
            url: a.ANM.Billing_SUBSCRIPTION_REWARD_ELIGIBILITY(e),
            rejectWithError: !0
        });
        if (t.ok) {
            let e = !!t.body.eligible;
            return (
                i.Z.dispatch({
                    type: 'BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS',
                    eligible: e
                }),
                e
            );
        }
        return i.Z.dispatch({ type: 'BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE' }), !1;
    } catch (e) {
        return i.Z.dispatch({ type: 'BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE' }), !1;
    }
}
function o(e) {
    i.Z.dispatch({
        type: 'BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS',
        eligible: e
    });
}
async function c(e) {
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
        return s.Z.captureMessage('fetchPremiumMarketingContentWithUserOffer failed'), [];
    } catch (e) {
        return [];
    }
}
async function d(e) {
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
