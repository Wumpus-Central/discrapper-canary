n.d(t, { Z: () => o });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(388032);
let o = (e) => {
    let { onGift: t, tooltipDelay: n } = e;
    return (0, r.jsx)(i.ua7, {
        text: l.intl.string(l.t["JCFN//"]),
        delay: n,
        children: (e) => {
            var n, o;
            return (0, r.jsx)(
                i.hU,
                ((n = (function (e) {
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
                })({}, e)),
                (o = o =
                    {
                        "aria-label": l.intl.string(l.t["JCFN//"]),
                        variant: "primary",
                        icon: i.OgN,
                        size: "md",
                        onClick: t,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                n),
            );
        },
    });
};
