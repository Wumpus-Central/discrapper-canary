r.d(t, { Z: () => u });
var n = r(200651);
r(192379);
var i = r(120356),
    l = r.n(i),
    o = r(481060),
    a = r(932563),
    s = r(960919),
    c = r(388032),
    d = r(682255);
function u(e) {
    let { orbAmount: t, showInsufficientOrbBalanceTooltip: r } = e,
        i = (0, a.c)(),
        u = null != i && i >= t;
    return (0, n.jsx)(o.ua7, {
        position: 'top',
        text: c.NW.string(c.t.zqh7ZG),
        shouldShow: r && !u,
        children: (e) => {
            var r, i;
            return (0, n.jsxs)(
                o.Text,
                ((r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })(
                    {
                        variant: 'text-lg/bold',
                        className: l()(d.orbPriceTag, { [d.insufficientBalance]: !u })
                    },
                    e
                )),
                (i = i =
                    {
                        children: [(0, n.jsx)(s.Z, {}), t]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                r)
            );
        }
    });
}
