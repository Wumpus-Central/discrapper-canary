n.d(t, {
    fw: () => r,
    qy: () => o,
    sJ: () => c
});
var a,
    l,
    s = n(544891),
    i = n(981631),
    r = (((a = {}).HCAPTCHA_RQDATA = 'hCaptchaRqdata'), (a.SMITE_RQDATA = 'SmiteRqdata'), (a.RECAPTCHA = 'Recaptcha'), (a.RECAPTCHA_ENTERPRISE = 'RecaptchaEnterprise'), a),
    c = (((l = {})[(l.EASY = 1)] = 'EASY'), (l[(l.MODERATE = 2)] = 'MODERATE'), (l[(l.DIFFICULT = 3)] = 'DIFFICULT'), (l[(l.VERY_DIFFICULT = 4)] = 'VERY_DIFFICULT'), l);
async function o(e, t) {
    await s.tn.post({
        url: i.ANM.CAPTCHA_TEST,
        body: {
            decider: e,
            options: t
        },
        rejectWithError: !1
    });
}
