n.d(t, {
    N6: () => f,
    di: () => p,
    il: () => _,
}),
    n(896048);
var r = n(353640),
    i = n(731738),
    a = n(121894),
    s = n(831062);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = (0, r.v)((e) => ({ captchaServeVolume: {} }));
function f() {
    return 0 === Object.keys(d.getState().captchaServeVolume).length;
}
function p(e) {
    (0, a.r)(() => {
        d.setState((t) =>
            null == e
                ? t
                : e in t.captchaServeVolume
                  ? { captchaServeVolume: u(l({}, t.captchaServeVolume), { [e]: t.captchaServeVolume[e] + 1 }) }
                  : { captchaServeVolume: u(l({}, t.captchaServeVolume), { [e]: 1 }) },
        );
    });
}
function _() {
    let e = !0;
    for (let [t, n] of Object.entries(d.getState().captchaServeVolume))
        s.A.distribution(
            {
                name: i.K.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
                tags: ["user_flow:".concat(t)],
            },
            n,
            e,
        );
    (0, a.r)(() => d.setState({ captchaServeVolume: {} }));
}
