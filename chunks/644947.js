(n.d(t, {
    Zq: () => h,
    _8: () => u,
    s$: () => d
}),
    n(388685));
var r = n(97519),
    i = n(286379),
    l = n(731965),
    s = n(797614);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = (0, r.U)((e) => ({ captchaServeVolume: {} }));
function u() {
    return 0 === Object.keys(c.getState().captchaServeVolume).length;
}
function d(e) {
    (0, l.j)(() => {
        c.setState((t) => (null == e ? t : e in t.captchaServeVolume ? { captchaServeVolume: o(a({}, t.captchaServeVolume), { [e]: t.captchaServeVolume[e] + 1 }) } : { captchaServeVolume: o(a({}, t.captchaServeVolume), { [e]: 1 }) }));
    });
}
function h() {
    for (let [e, t] of Object.entries(c.getState().captchaServeVolume))
        s.Z.distribution(
            {
                name: i.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
                tags: ['user_flow:'.concat(e)]
            },
            t,
            !0
        );
    (0, l.j)(() => c.setState({ captchaServeVolume: {} }));
}
