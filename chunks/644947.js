r.d(t, {
    Zq: () => b,
    _8: () => s,
    s$: () => l
}),
    r(47120);
var c = r(230383),
    n = r(286379),
    a = r(731965),
    o = r(797614);
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            c = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (c = c.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            c.forEach(function (t) {
                var c;
                (c = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = c);
            });
    }
    return e;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var c = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, c);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let p = (0, c.U)((e) => ({ captchaServeVolume: {} }));
function s() {
    return 0 === Object.keys(p.getState().captchaServeVolume).length;
}
function l(e) {
    (0, a.j)(() => {
        p.setState((t) => (null == e ? t : e in t.captchaServeVolume ? { captchaServeVolume: u(i({}, t.captchaServeVolume), { [e]: t.captchaServeVolume[e] + 1 }) } : { captchaServeVolume: u(i({}, t.captchaServeVolume), { [e]: 1 }) }));
    });
}
function b() {
    for (let [e, t] of Object.entries(p.getState().captchaServeVolume))
        o.Z.distribution(
            {
                name: n.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
                tags: ['user_flow:'.concat(e)]
            },
            t,
            !0
        );
    (0, a.j)(() => p.setState({ captchaServeVolume: {} }));
}
