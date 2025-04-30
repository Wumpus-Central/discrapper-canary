r.r(t),
    r.d(t, {
        CaptchaError: () => c,
        emitCaptchaDistributionMetric: () => s,
        extractCaptchaPropsFromResponse: () => o
    });
var n,
    a = r(644947),
    i = r(234888),
    c = (((n = {}).CANCEL = 'cancel'), (n.ERROR = 'error'), (n.EXPIRED = 'expired'), n);
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
            userflow: e.user_flow
        }
    };
}
function s(e) {
    (0, a._8)() && setTimeout(() => (0, a.Zq)(), i.i), (0, a.s$)(e);
}
