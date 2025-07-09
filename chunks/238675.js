a.d(t, {
    fw: () => i,
    qy: () => c,
    sJ: () => o
});
var n,
    s,
    l = a(544891),
    r = a(981631),
    i = (((n = {}).HCAPTCHA_RQDATA = 'hCaptchaRqdata'), (n.SMITE_RQDATA = 'SmiteRqdata'), (n.RECAPTCHA = 'Recaptcha'), (n.RECAPTCHA_ENTERPRISE = 'RecaptchaEnterprise'), n),
    o = (((s = {})[(s.EASY = 1)] = 'EASY'), (s[(s.MODERATE = 2)] = 'MODERATE'), (s[(s.DIFFICULT = 3)] = 'DIFFICULT'), (s[(s.VERY_DIFFICULT = 4)] = 'VERY_DIFFICULT'), s);
async function c(e, t) {
    await l.tn.post({
        url: r.ANM.CAPTCHA_TEST,
        body: {
            decider: e,
            options: t
        },
        rejectWithError: !1
    });
}
