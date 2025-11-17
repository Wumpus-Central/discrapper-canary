t.d(n, { Z: () => i });
var r = t(54381),
    a = t(481060);
function i(e, n) {
    return (0, a.ZDy)(async () => {
        let { default: a } = await t.e("19038").then(t.bind(t, 571769));
        return (t) => {
            var i, l;
            return (0, r.jsx)(
                a,
                ((i = (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            r.forEach(function (n) {
                                var r;
                                (r = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[n] = r);
                            });
                    }
                    return e;
                })({}, t)),
                (l = l =
                    {
                        guildId: e,
                        instance: n,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                    : (function (e, n) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, r);
                          }
                          return t;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                i),
            );
        };
    });
}
