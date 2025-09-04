n.d(t, {
    He: () => s,
    Ul: () => u,
});
var r = n(544891),
    i = n(570140),
    a = n(960048),
    l = n(219333),
    o = n(304426),
    c = n(981631);
async function s(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: i } = e;
    try {
        let e = await r.tn.post({
            url: c.ANM.PREMIUM_MARKETING,
            body: {
                user_trial_offer: t,
                user_discount: n,
                user_discount_offer: i,
            },
            rejectWithError: !0,
        });
        if (e.ok) return e.body;
        return a.Z.captureMessage("fetchPremiumMarketingContentWithUserOffer failed"), [];
    } catch (e) {
        return [];
    }
}
async function u(e) {
    let { subscriptionId: t } = e;
    try {
        let e = await r.tn.post({
            url: c.ANM.BILLING_SUBSCRIPTION_PROMOTION_REWARD(t),
            rejectWithError: !0,
        });
        return (
            i.Z.dispatch({
                type: "ENTITLEMENT_CREATE",
                entitlement: e.body,
            }),
            (0, l.j)({ campaignID: o.C }),
            e.ok
        );
    } catch (e) {
        return !1;
    }
}
