n.d(t, {
    fw: () => i,
    qy: () => o,
    sJ: () => c
});
var a,
    s,
    l = n(544891),
    r = n(981631),
    i = (((a = {}).HCAPTCHA_RQDATA = 'hCaptchaRqdata'), (a.SMITE_RQDATA = 'SmiteRqdata'), (a.RECAPTCHA = 'Recaptcha'), (a.RECAPTCHA_ENTERPRISE = 'RecaptchaEnterprise'), a),
    c = (((s = {})[(s.EASY = 1)] = 'EASY'), (s[(s.MODERATE = 2)] = 'MODERATE'), (s[(s.DIFFICULT = 3)] = 'DIFFICULT'), (s[(s.VERY_DIFFICULT = 4)] = 'VERY_DIFFICULT'), s);
async function o(e, t) {
    await l.tn.post({
        url: r.ANM.CAPTCHA_TEST,
        body: {
            decider: e,
            options: t
        },
        rejectWithError: !1
    });
}
