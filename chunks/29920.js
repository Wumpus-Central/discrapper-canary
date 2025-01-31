n.d(t, { H: () => a });
var i = n(544891),
    l = n(960048),
    r = n(981631);
async function a(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: a } = e;
    try {
        let e = await i.tn.post({
            url: r.ANM.PREMIUM_MARKETING,
            body: {
                user_trial_offer: t,
                user_discount: n,
                user_discount_offer: a
            },
            rejectWithError: !0
        });
        if (e.ok) return e.body;
        return l.Z.captureMessage('fetchPremiumMarketingContentWithUserOffer failed'), [];
    } catch (e) {
        return [];
    }
}
