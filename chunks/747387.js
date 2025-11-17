n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    a = n(473749),
    i = n(707310),
    o = n(462654),
    c = n(772848),
    s = n(286379),
    p = n(343817),
    l = n(797614),
    d = n(626135),
    u = n(353250),
    h = n(599857),
    f = n(981631);
function y(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
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
let v = (e) => {
    var {
            captchaService: t = p.hP.RECAPTCHA,
            sitekey: n,
            rqdata: v,
            onRender: m,
            onVerify: O,
            onError: g,
            onOpen: C,
            onClose: E,
            onChalExpired: w,
            size: R,
            userflow: j,
        } = e,
        x = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, [
            "captchaService",
            "sitekey",
            "rqdata",
            "onRender",
            "onVerify",
            "onError",
            "onOpen",
            "onClose",
            "onChalExpired",
            "size",
            "userflow",
        ]);
    let _ = a.useRef(null),
        P = (0, c.Z)(),
        [k, A] = a.useState(!1),
        S = a.useCallback(
            (e) => {
                d.default.track(f.rMx.CAPTCHA_EVENT, {
                    captcha_event_name: e,
                    captcha_service: t,
                    sitekey: n,
                    captcha_flow_key: P,
                });
            },
            [P, t, n],
        ),
        I = a.useCallback(
            (e) => {
                l.Z.increment({
                    name: s.V.CAPTCHA_EVENT,
                    tags: ["event_name:".concat(e), "captcha_service:".concat(t)],
                });
            },
            [t],
        ),
        D = a.useCallback(() => {
            if (t === p.hP.HCAPTCHA) {
                var e, n;
                null != v && "" !== v && null != _.current && (null == (e = _.current) || e.setData({ rqdata: v })),
                    "invisible" === R && null != _.current && (null == (n = _.current) || n.execute());
            }
        }, [v, _, R, t]),
        L = a.useCallback(() => {
            k || (S("initial-load"), I("initial-load"), A(!0)), D();
        }, [I, k, S, D]);
    a.useEffect(() => {
        D();
    }, [D]),
        a.useEffect(() => {
            L();
        }, [L]);
    let T = a.useCallback(() => {
            S("error"), I("error"), D(), null == g || g();
        }, [S, I, D, g]),
        Z = a.useCallback(
            (e) => {
                S("verify"), I("verify"), O(e);
            },
            [I, O, S],
        ),
        N = a.useCallback(() => {
            S("render"), (0, u.emitCaptchaDistributionMetric)(j), null == m || m();
        }, [m, S, j]),
        M = a.useCallback(() => {
            S("open"), I("open"), (0, u.emitCaptchaDistributionMetric)(j), null == C || C();
        }, [I, C, S, j]),
        V = a.useCallback(() => {
            S("close"), null == E || E(), D();
        }, [E, S, D]),
        z = a.useCallback(() => {
            S("chal-expire"), null == w || w();
        }, [w, S]);
    return ((null == n || "" === n) && (n = f.OL7), t === p.hP.RECAPTCHA)
        ? (0, r.jsx)(
              o.Z,
              b(y({}, x), {
                  onLoad: L,
                  onRender: N,
                  onVerify: Z,
                  onError: T,
                  sitekey: n,
              }),
          )
        : t === p.hP.RECAPTCHA_ENTERPRISE
          ? (0, r.jsx)(
                h._,
                b(y({}, x), {
                    onLoad: L,
                    onRender: N,
                    onVerify: Z,
                    onError: T,
                    sitekey: n,
                    action: j,
                }),
            )
          : t === p.hP.HCAPTCHA
            ? (0, r.jsx)(
                  i.Z,
                  b(y({ ref: _ }, x), {
                      sitekey: n,
                      onLoad: L,
                      onError: T,
                      onVerify: Z,
                      onChalExpired: z,
                      onOpen: M,
                      onClose: V,
                      size: R,
                      reCaptchaCompat: !1,
                  }),
              )
            : (0, r.jsx)(
                  o.Z,
                  b(y({}, x), {
                      sitekey: n,
                      onLoad: L,
                      onRender: N,
                      onVerify: Z,
                      onError: T,
                  }),
              );
};
