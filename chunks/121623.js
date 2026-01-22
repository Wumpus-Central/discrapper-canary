r.d(t, {
    A: () => b,
});
var n,
    o,
    l = r(400253),
    c = r(49485),
    u = r(80703),
    i = r(197111),
    a = r(954571),
    p = r(877062),
    f = r(292572),
    s = r(652215);
let O = "template",
    b =
        ((n = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, f.A)),
        (o = o =
            {
                openNativeAppModal(e) {
                    i.A.openNativeAppModal(e, s.e$_.GUILD_TEMPLATE_BROWSER);
                },
                openMobileApp(e, t) {
                    if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
                    let r = null != e ? (0, l.FH)(e) : (0, l.BH)(),
                        n = (0, c.I_)(),
                        o = (0, c.Ay)(r, {
                            utmSource: O,
                            fingerprint: t,
                            attemptId: n,
                        });
                    a.default.track(s.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, u.v)(t),
                        attempt_id: n,
                        source: O,
                        guild_template_code: e,
                    }),
                        p.A.launch(o, () => {});
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(o)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
              }),
        n);
