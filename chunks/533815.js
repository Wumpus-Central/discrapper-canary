n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    o = n(481060),
    a = n(86419),
    c = n(388032),
    s = n(51708);
function d(e) {
    let { game: t, widgetType: n, iconSize: l = "refresh_sm", className: d } = e,
        u = () => {
            (0, a.$b)(n, t.applicationId);
        };
    return (0, r.jsx)(o.ua7, {
        text: c.intl.string(c.t.HUvyDQ),
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                o.P3F,
                ((t = (function (e) {
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
                (n = n =
                    {
                        onClick: u,
                        "aria-label": c.intl.string(c.t.HUvyDQ),
                        role: "button",
                        tabIndex: 0,
                        className: i()(d, s.clickable),
                        children: (0, r.jsx)(o.XHJ, {
                            size: l,
                            color: o.TVs.colors.STATUS_DANGER,
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            );
        },
    });
}
