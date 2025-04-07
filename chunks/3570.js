n.d(t, {
    T: () => s,
    s: () => c
});
var r = n(536285),
    i = n(703656),
    l = n(314897),
    a = n(358085),
    o = n(981631);
let s = a.isPlatformEmbedded
        ? o.dG4
        : (e, t) => {
              if (!(0, i.DB)())
                  return r.default.request(o.Etm.DEEP_LINK, {
                      type: e,
                      params: t
                  });
          },
    c = a.isPlatformEmbedded
        ? o.dG4
        : (e, t) => {
              if (!l.default.isAuthenticated()) {
                  var n, r;
                  return s(
                      e,
                      ((n = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })({}, t || {})),
                      (r = r = { fingerprint: l.default.getFingerprint() }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(r)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                            }),
                      n)
                  );
              }
          };
