n.d(t, { _: () => l });
var i = n(562465);
n(73153);
var r = n(728458),
    a = n(652215);
async function l(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: l } = e;
    try {
        let e = await i.Bo.post({
            url: a.Rsh.PREMIUM_MARKETING,
            body: { user_trial_offer: t, user_discount: n, user_discount_offer: l },
            rejectWithError: !0,
        });
        if (e.ok) return e.body;
        return r.A.captureMessage("fetchPremiumMarketingContentWithUserOffer failed"), [];
    } catch (e) {
        return [];
    }
}
