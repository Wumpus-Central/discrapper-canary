n.r(t),
    n.d(t, {
        CaptchaCancelError: () => o,
        CaptchaError: () => i,
        emitCaptchaDistributionMetric: () => s,
        extractCaptchaPropsFromResponse: () => a,
    }),
    n(65821);
var r = n(1136);
n(320028);
var i = (function (e) {
    return (e.CANCEL = "cancel"), (e.ERROR = "error"), (e.EXPIRED = "expired"), e;
})({});
function a(e) {
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
    (0, r.N6)() && setTimeout(() => (0, r.il)(), 30000), (0, r.di)(e);
}
class o extends Error {
    constructor() {
        super("Captcha cancelled");
    }
}
