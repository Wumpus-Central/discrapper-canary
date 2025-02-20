n.d(t, { He: () => o });
var r = n(544891);
n(570140);
var i = n(960048),
    l = n(981631);
async function o(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: o } = e;
    try {
        let e = await r.tn.post({
            url: l.ANM.PREMIUM_MARKETING,
            body: {
                user_trial_offer: t,
                user_discount: n,
                user_discount_offer: o
            },
            rejectWithError: !0
        });
        if (e.ok) return e.body;
        return i.Z.captureMessage('fetchPremiumMarketingContentWithUserOffer failed'), [];
    } catch (e) {
        return [];
    }
}
