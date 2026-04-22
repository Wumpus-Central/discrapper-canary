"use strict";
n.r(t),
    n.d(t, {
        CaptchaCancelError: () => l,
        CaptchaError: () => s,
        emitCaptchaDistributionMetric: () => o,
        extractCaptchaPropsFromResponse: () => a,
    });
var r,
    i = n(1136);
n(320028);
var s = (((r = {}).CANCEL = "cancel"), (r.ERROR = "error"), (r.EXPIRED = "expired"), r);
function a(e) {
    return {
        captchaService: e.captcha_service,
        sitekey: e.captcha_sitekey,
        captchaSessionId: e.captcha_session_id,
        options: {
            rqdata: e.captcha_rqdata,
            rqtoken: e.captcha_rqtoken,
            serveInvisible: e.should_serve_invisible ?? !1,
            userflow: e.user_flow,
        },
    };
}
function o(e) {
    (0, i.N6)() && setTimeout(() => (0, i.il)(), 3e4), (0, i.di)(e);
}
class l extends Error {
    constructor() {
        super("Captcha cancelled");
    }
}
