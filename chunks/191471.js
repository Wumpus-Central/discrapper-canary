n.d(t, { J: () => o });
var r = n(255367);
n(73800);
var c = n(481060);
function o(e) {
    (0, c.ZDy)(async () => {
        let { default: t } = await n.e('9354').then(n.bind(n, 461533));
        return (n) => {
            var c, o;
            return (0, r.jsx)(
                t,
                ((c = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, n)),
                (o = o = { guildId: e }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                c)
            );
        };
    });
}
n(558511);
