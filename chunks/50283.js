n.d(t, {
    _C: () => a,
});
var r = n(562465);
n(73153);
var i = n(728458),
    l = n(652215);
async function a(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: a } = e;
    try {
        let e = await r.Bo.post({
            url: l.Rsh.PREMIUM_MARKETING,
            body: {
                user_trial_offer: t,
                user_discount: n,
                user_discount_offer: a,
            },
            rejectWithError: !0,
        });
        if (e.ok) return e.body;
        return i.A.captureMessage("fetchPremiumMarketingContentWithUserOffer failed"), [];
    } catch (e) {
        return [];
    }
}
