n.r(t),
    n.d(t, {
        CaptchaCancelError: () => l,
        CaptchaError: () => a,
        emitCaptchaDistributionMetric: () => s,
        extractCaptchaPropsFromResponse: () => o,
    }),
    n(415506);
var r = n(644947),
    i = n(234888),
    a = (function (e) {
        return (e.CANCEL = "cancel"), (e.ERROR = "error"), (e.EXPIRED = "expired"), e;
    })({});
function o(e) {
    var t;
    return {
        captchaService: e.captcha_service,
        sitekey: e.captcha_sitekey,
        captchaSessionId: e.captcha_session_id,
        options: {
            rqdata: e.captcha_rqdata,
            rqtoken: e.captcha_rqtoken,
            serveInvisible: null != (t = e.should_serve_invisible) && t,
            userflow: e.user_flow,
        },
    };
}
function s(e) {
    (0, r._8)() && setTimeout(() => (0, r.Zq)(), i.i), (0, r.s$)(e);
}
class l extends Error {
    constructor() {
        super("Captcha cancelled");
    }
}
