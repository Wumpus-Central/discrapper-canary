r.d(t, { J: () => c });
var n = r(255367);
r(73800);
var o = r(481060);
function c(e) {
    (0, o.ZDy)(async () => {
        let { default: t } = await r.e('9354').then(r.bind(r, 461533));
        return (r) => {
            var o, c;
            return (0, n.jsx)(
                t,
                ((o = (function (e) {
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
                })({}, r)),
                (c = c = { guildId: e }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(c)).forEach(function (e) {
                          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e));
                      }),
                o)
            );
        };
    });
}
