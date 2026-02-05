"use strict";
n.d(t, { N6: () => l, di: () => u, il: () => c });
var r = n(353640),
    i = n(731738),
    a = n(121894),
    s = n(831062);
let o = (0, r.v)((e) => ({ captchaServeVolume: {} }));
function l() {
    return 0 === Object.keys(o.getState().captchaServeVolume).length;
}
function u(e) {
    (0, a.r)(() => {
        o.setState((t) =>
            null == e
                ? t
                : e in t.captchaServeVolume
                  ? { captchaServeVolume: { ...t.captchaServeVolume, [e]: t.captchaServeVolume[e] + 1 } }
                  : { captchaServeVolume: { ...t.captchaServeVolume, [e]: 1 } },
        );
    });
}
function c() {
    let e = !0;
    for (let [t, n] of Object.entries(o.getState().captchaServeVolume))
        s.A.distribution({ name: i.K.CAPTCHA_SERVE_VOLUME_DISTRIBUTION, tags: [`user_flow:${t}`] }, n, e);
    (0, a.r)(() => o.setState({ captchaServeVolume: {} }));
}
