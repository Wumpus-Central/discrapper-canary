n.d(t, { q: () => a });
var r = n(200651),
    i = n(772848),
    s = n(481060);
let a = (e) => {
    let t = (0, i.Z)();
    return (0, s.ZDy)(async () => {
        let { OrbCheckoutModalInPaymentModal: i } = await n.e('89001').then(n.bind(n, 396639));
        return (n) => {
            var s, a;
            return (0, r.jsx)(
                i,
                ((s = (function (e) {
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
                })({}, e, n)),
                (a = a = { loadId: t }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                s)
            );
        };
    }, {});
};
