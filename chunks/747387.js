r.d(t, { Z: () => v }), r(47120);
var n = r(200651),
    a = r(192379),
    i = r(894582),
    c = r(29978),
    o = r(772848),
    s = r(286379),
    p = r(343817),
    l = r(797614),
    u = r(626135),
    d = r(353250),
    h = r(599857),
    f = r(981631);
function y(e) {
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
function b(e, t) {
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
let v = (e) => {
    var { captchaService: t = p.hP.RECAPTCHA, sitekey: r, rqdata: v, onRender: m, onVerify: O, onError: g, onOpen: C, onClose: E, onChalExpired: j, size: w, userflow: R } = e,
        _ = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            }
            return a;
        })(e, ['captchaService', 'sitekey', 'rqdata', 'onRender', 'onVerify', 'onError', 'onOpen', 'onClose', 'onChalExpired', 'size', 'userflow']);
    let x = a.useRef(null),
        P = (0, o.Z)(),
        [S, k] = a.useState(!1),
        A = a.useCallback(
            (e) => {
                u.default.track(f.rMx.CAPTCHA_EVENT, {
                    captcha_event_name: e,
                    captcha_service: t,
                    sitekey: r,
                    captcha_flow_key: P
                });
            },
            [P, t, r]
        ),
        I = a.useCallback(
            (e) => {
                l.Z.increment({
                    name: s.V.CAPTCHA_EVENT,
                    tags: ['event_name:'.concat(e), 'captcha_service:'.concat(t)]
                });
            },
            [t]
        ),
        D = a.useCallback(() => {
            if (t === p.hP.HCAPTCHA) {
                var e, r;
                null != v && '' !== v && null != x.current && (null == (e = x.current) || e.setData({ rqdata: v })), 'invisible' === w && null != x.current && (null == (r = x.current) || r.execute());
            }
        }, [v, x, w, t]),
        N = a.useCallback(() => {
            S || (A('initial-load'), I('initial-load'), k(!0)), D();
        }, [I, S, A, D]);
    a.useEffect(() => {
        D();
    }, [D]),
        a.useEffect(() => {
            N();
        }, [N]);
    let L = a.useCallback(() => {
            A('error'), I('error'), D(), null == g || g();
        }, [A, I, D, g]),
        V = a.useCallback(
            (e) => {
                A('verify'), I('verify'), O(e);
            },
            [I, O, A]
        ),
        T = a.useCallback(() => {
            A('render'), (0, d.emitCaptchaDistributionMetric)(R), null == m || m();
        }, [m, A, R]),
        Z = a.useCallback(() => {
            A('open'), I('open'), (0, d.emitCaptchaDistributionMetric)(R), null == C || C();
        }, [I, C, A, R]),
        M = a.useCallback(() => {
            A('close'), null == E || E(), D();
        }, [E, A, D]),
        q = a.useCallback(() => {
            A('chal-expire'), null == j || j();
        }, [j, A]);
    return ((null == r || '' === r) && (r = f.OL7), t === p.hP.RECAPTCHA)
        ? (0, n.jsx)(
              c.Z,
              b(y({}, _), {
                  onLoad: N,
                  onRender: T,
                  onVerify: V,
                  onError: L,
                  sitekey: r
              })
          )
        : t === p.hP.RECAPTCHA_ENTERPRISE
          ? (0, n.jsx)(
                h._,
                b(y({}, _), {
                    onLoad: N,
                    onRender: T,
                    onVerify: V,
                    onError: L,
                    sitekey: r,
                    action: R
                })
            )
          : t === p.hP.HCAPTCHA
            ? (0, n.jsx)(
                  i.Z,
                  b(y({ ref: x }, _), {
                      sitekey: r,
                      onLoad: N,
                      onError: L,
                      onVerify: V,
                      onChalExpired: q,
                      onOpen: Z,
                      onClose: M,
                      size: w,
                      reCaptchaCompat: !1
                  })
              )
            : (0, n.jsx)(
                  c.Z,
                  b(y({}, _), {
                      sitekey: r,
                      onLoad: N,
                      onRender: T,
                      onVerify: V,
                      onError: L
                  })
              );
};
