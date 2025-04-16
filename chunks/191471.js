n.d(t, { J: () => a });
var i = n(200651);
n(192379);
var r = n(481060);
function a(e) {
    (0, r.ZDy)(async () => {
        let { default: t } = await n.e('9354').then(n.bind(n, 461533));
        return (n) => {
            var r, a;
            return (0, i.jsx)(
                t,
                ((r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, n)),
                (a = a = { guildId: e }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                r)
            );
        };
    });
}
n(558511);
