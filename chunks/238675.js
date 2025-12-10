a.d(t, {
    fw: () => A,
    qy: () => r,
    sJ: () => u,
});
var n,
    l,
    i = a(544891),
    s = a(981631),
    A =
        (((n = {}).HCAPTCHA_RQDATA = "hCaptchaRqdata"),
        (n.SMITE_RQDATA = "SmiteRqdata"),
        (n.RECAPTCHA = "Recaptcha"),
        (n.RECAPTCHA_ENTERPRISE = "RecaptchaEnterprise"),
        n),
    u =
        (((l = {})[(l.EASY = 1)] = "EASY"),
        (l[(l.MODERATE = 2)] = "MODERATE"),
        (l[(l.DIFFICULT = 3)] = "DIFFICULT"),
        (l[(l.VERY_DIFFICULT = 4)] = "VERY_DIFFICULT"),
        l);
async function r(e, t) {
    await i.tn.post({
        url: s.ANM.CAPTCHA_TEST,
        body: {
            decider: e,
            options: t,
        },
        rejectWithError: !1,
    });
}
