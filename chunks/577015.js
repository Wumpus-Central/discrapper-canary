"use strict";
n.r(t),
    n.d(t, {
        CaptchaCancelError: () => o,
        CaptchaError: () => i,
        emitCaptchaDistributionMetric: () => s,
        extractCaptchaPropsFromResponse: () => a,
    });
var r = n(1136);
n(320028);
var i = (function (e) {
    return (e.CANCEL = "cancel"), (e.ERROR = "error"), (e.EXPIRED = "expired"), e;
})({});
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
function s(e) {
    (0, r.N6)() && setTimeout(() => (0, r.il)(), 3e4), (0, r.di)(e);
}
class o extends Error {
    constructor() {
        super("Captcha cancelled");
    }
}
