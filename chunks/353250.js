n.r(t),
    n.d(t, {
        CaptchaCancelError: () => c,
        CaptchaError: () => a,
        emitCaptchaDistributionMetric: () => s,
        extractCaptchaPropsFromResponse: () => o,
    }),
    n(415506);
var r,
    i = n(644947),
    l = n(234888),
    a = (((r = {}).CANCEL = "cancel"), (r.ERROR = "error"), (r.EXPIRED = "expired"), r);
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
    (0, i._8)() && setTimeout(() => (0, i.Zq)(), l.i), (0, i.s$)(e);
}
class c extends Error {
    constructor() {
        super("Captcha cancelled");
    }
}
