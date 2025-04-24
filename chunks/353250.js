r.r(t),
    r.d(t, {
        CaptchaError: () => o,
        emitCaptchaDistributionMetric: () => u,
        extractCaptchaPropsFromResponse: () => i
    });
var c,
    n = r(644947),
    a = r(234888),
    o = (((c = {}).CANCEL = 'cancel'), (c.ERROR = 'error'), (c.EXPIRED = 'expired'), c);
function i(e) {
    var t;
    return {
        captchaService: e.captcha_service,
        sitekey: e.captcha_sitekey,
        options: {
            rqdata: e.captcha_rqdata,
            rqtoken: e.captcha_rqtoken,
            serveInvisible: null != (t = e.should_serve_invisible) && t,
            userflow: e.user_flow
        }
    };
}
function u(e) {
    (0, n._8)() && setTimeout(() => (0, n.Zq)(), a.i), (0, n.s$)(e);
}
