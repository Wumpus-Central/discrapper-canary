r.d(t, {
    Zq: () => d,
    _8: () => l,
    s$: () => u
}),
    r(388685);
var n = r(381814),
    a = r(286379),
    i = r(731965),
    c = r(797614);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let p = (0, n.U)((e) => ({ captchaServeVolume: {} }));
function l() {
    return 0 === Object.keys(p.getState().captchaServeVolume).length;
}
function u(e) {
    (0, i.j)(() => {
        p.setState((t) => (null == e ? t : e in t.captchaServeVolume ? { captchaServeVolume: s(o({}, t.captchaServeVolume), { [e]: t.captchaServeVolume[e] + 1 }) } : { captchaServeVolume: s(o({}, t.captchaServeVolume), { [e]: 1 }) }));
    });
}
function d() {
    for (let [e, t] of Object.entries(p.getState().captchaServeVolume))
        c.Z.distribution(
            {
                name: a.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
                tags: ['user_flow:'.concat(e)]
            },
            t,
            !0
        );
    (0, i.j)(() => p.setState({ captchaServeVolume: {} }));
}
