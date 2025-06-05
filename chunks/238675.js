a.d(t, {
    fw: () => i,
    qy: () => c,
    sJ: () => o
});
var n,
    l,
    s = a(544891),
    r = a(981631),
    i = (((n = {}).HCAPTCHA_RQDATA = 'hCaptchaRqdata'), (n.SMITE_RQDATA = 'SmiteRqdata'), (n.RECAPTCHA = 'Recaptcha'), (n.RECAPTCHA_ENTERPRISE = 'RecaptchaEnterprise'), n),
    o = (((l = {})[(l.EASY = 1)] = 'EASY'), (l[(l.MODERATE = 2)] = 'MODERATE'), (l[(l.DIFFICULT = 3)] = 'DIFFICULT'), (l[(l.VERY_DIFFICULT = 4)] = 'VERY_DIFFICULT'), l);
async function c(e, t) {
    await s.tn.post({
        url: r.ANM.CAPTCHA_TEST,
        body: {
            decider: e,
            options: t
        },
        rejectWithError: !1
    });
}
