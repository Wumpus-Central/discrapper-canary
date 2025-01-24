n.d(t, {
    fw: function () {
        return l;
    },
    qy: function () {
        return c;
    },
    sJ: function () {
        return o;
    }
});
var a,
    r,
    l,
    o,
    i = n(544891),
    s = n(981631);
async function c(e, t) {
    await i.tn.post({
        url: s.ANM.CAPTCHA_TEST,
        body: {
            decider: e,
            options: t
        },
        rejectWithError: !1
    });
}
((a = l || (l = {})).HCAPTCHA_RQDATA = 'hCaptchaRqdata'), (a.SMITE_RQDATA = 'SmiteRqdata'), (a.RECAPTCHA = 'Recaptcha'), (a.RECAPTCHA_ENTERPRISE = 'RecaptchaEnterprise'), ((r = o || (o = {}))[(r.EASY = 1)] = 'EASY'), (r[(r.MODERATE = 2)] = 'MODERATE'), (r[(r.DIFFICULT = 3)] = 'DIFFICULT'), (r[(r.VERY_DIFFICULT = 4)] = 'VERY_DIFFICULT');
