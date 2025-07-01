(r.d(t, { Z: () => v }), r(388685));
var n = r(255367),
    a = r(73800),
    i = r(927919),
    c = r(15155),
    o = r(772848),
    s = r(286379),
    l = r(343817),
    p = r(797614),
    d = r(626135),
    u = r(353250),
    h = r(599857),
    f = r(981631);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
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
    var { captchaService: t = l.hP.RECAPTCHA, sitekey: r, rqdata: v, onRender: m, onVerify: O, onError: g, onOpen: C, onClose: E, onChalExpired: j, size: w, userflow: _ } = e,
        R = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) ((r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
            }
            return a;
        })(e, ['captchaService', 'sitekey', 'rqdata', 'onRender', 'onVerify', 'onError', 'onOpen', 'onClose', 'onChalExpired', 'size', 'userflow']);
    let x = a.useRef(null),
        P = (0, o.Z)(),
        [S, k] = a.useState(!1),
        A = a.useCallback(
            (e) => {
                d.default.track(f.rMx.CAPTCHA_EVENT, {
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
                p.Z.increment({
                    name: s.V.CAPTCHA_EVENT,
                    tags: ['event_name:'.concat(e), 'captcha_service:'.concat(t)]
                });
            },
            [t]
        ),
        D = a.useCallback(() => {
            if (t === l.hP.HCAPTCHA) {
                var e, r;
                (null != v && '' !== v && null != x.current && (null == (e = x.current) || e.setData({ rqdata: v })), 'invisible' === w && null != x.current && (null == (r = x.current) || r.execute()));
            }
        }, [v, x, w, t]),
        N = a.useCallback(() => {
            (S || (A('initial-load'), I('initial-load'), k(!0)), D());
        }, [I, S, A, D]);
    (a.useEffect(() => {
        D();
    }, [D]),
        a.useEffect(() => {
            N();
        }, [N]));
    let L = a.useCallback(() => {
            (A('error'), I('error'), D(), null == g || g());
        }, [A, I, D, g]),
        T = a.useCallback(
            (e) => {
                (A('verify'), I('verify'), O(e));
            },
            [I, O, A]
        ),
        V = a.useCallback(() => {
            (A('render'), (0, u.emitCaptchaDistributionMetric)(_), null == m || m());
        }, [m, A, _]),
        Z = a.useCallback(() => {
            (A('open'), I('open'), (0, u.emitCaptchaDistributionMetric)(_), null == C || C());
        }, [I, C, A, _]),
        M = a.useCallback(() => {
            (A('close'), null == E || E(), D());
        }, [E, A, D]),
        q = a.useCallback(() => {
            (A('chal-expire'), null == j || j());
        }, [j, A]);
    return ((null == r || '' === r) && (r = f.OL7), t === l.hP.RECAPTCHA)
        ? (0, n.jsx)(
              c.Z,
              b(y({}, R), {
                  onLoad: N,
                  onRender: V,
                  onVerify: T,
                  onError: L,
                  sitekey: r
              })
          )
        : t === l.hP.RECAPTCHA_ENTERPRISE
          ? (0, n.jsx)(
                h._,
                b(y({}, R), {
                    onLoad: N,
                    onRender: V,
                    onVerify: T,
                    onError: L,
                    sitekey: r,
                    action: _
                })
            )
          : t === l.hP.HCAPTCHA
            ? (0, n.jsx)(
                  i.Z,
                  b(y({ ref: x }, R), {
                      sitekey: r,
                      onLoad: N,
                      onError: L,
                      onVerify: T,
                      onChalExpired: q,
                      onOpen: Z,
                      onClose: M,
                      size: w,
                      reCaptchaCompat: !1
                  })
              )
            : (0, n.jsx)(
                  c.Z,
                  b(y({}, R), {
                      sitekey: r,
                      onLoad: N,
                      onRender: V,
                      onVerify: T,
                      onError: L
                  })
              );
};
