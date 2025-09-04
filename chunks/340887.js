n.d(t, { Z: () => s });
var r = n(951288),
    a = n(481060);
function s(e) {
    return (0, a.ZDy)(async () => {
        let { default: t } = await n.e("28934").then(n.bind(n, 826011));
        return (n) => {
            var a, s;
            return (0, r.jsx)(
                t,
                ((a = (function (e) {
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
                })({}, n)),
                (s = s = { instance: e }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                a),
            );
        };
    });
}
