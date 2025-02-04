a.r(t),
    a.d(t, {
        CaptchaError: () => i,
        emitCaptchaDistributionMetric: () => u,
        extractCaptchaPropsFromResponse: () => n
    });
var c,
    r = a(644947),
    o = a(234888),
    i = (((c = {}).CANCEL = 'cancel'), (c.ERROR = 'error'), (c.EXPIRED = 'expired'), c);
function n(e) {
    var t;
    return {
        captchaService: e.captcha_service,
        sitekey: e.captcha_sitekey,
        options: {
            rqdata: e.captcha_rqdata,
            rqtoken: e.captcha_rqtoken,
            serveInvisible: null !== (t = e.should_serve_invisible) && void 0 !== t && t,
            userflow: e.user_flow
        }
    };
}
function u(e) {
    (0, r._8)() && setTimeout(() => (0, r.Zq)(), o.i), (0, r.s$)(e);
}
