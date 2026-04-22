"use strict";
n.d(t, { N6: () => l, di: () => u, il: () => d });
var r = n(353640),
    i = n(731738),
    s = n(121894),
    a = n(831062);
let o = (0, r.v)((e) => ({ captchaServeVolume: {} }));
function l() {
    return 0 === Object.keys(o.getState().captchaServeVolume).length;
}
function u(e) {
    (0, s.r)(() => {
        o.setState((t) =>
            null == e
                ? t
                : e in t.captchaServeVolume
                  ? { captchaServeVolume: { ...t.captchaServeVolume, [e]: t.captchaServeVolume[e] + 1 } }
                  : { captchaServeVolume: { ...t.captchaServeVolume, [e]: 1 } },
        );
    });
}
function d() {
    for (let [e, t] of Object.entries(o.getState().captchaServeVolume))
        a.A.distribution({ name: i.K.CAPTCHA_SERVE_VOLUME_DISTRIBUTION, tags: [`user_flow:${e}`] }, t, !0);
    (0, s.r)(() => o.setState({ captchaServeVolume: {} }));
}
