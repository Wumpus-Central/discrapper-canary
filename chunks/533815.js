r.d(t, { Z: () => u });
var n = r(951288);
r(647438);
var i = r(120356),
    l = r.n(i),
    a = r(481060),
    o = r(86419),
    c = r(388032),
    s = r(51708);
function u(e) {
    let { game: t, widgetType: r, iconSize: i = "refresh_sm", className: u } = e,
        d = () => {
            (0, o.$b)(r, t.applicationId);
        };
    return (0, n.jsx)(a.ua7, {
        text: c.intl.string(c.t.HUvyDQ),
        children: (e) => {
            var t, r;
            return (0, n.jsx)(
                a.P3F,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, e)),
                (r = r =
                    {
                        onClick: d,
                        "aria-label": c.intl.string(c.t.HUvyDQ),
                        className: l()(u, s.clickable),
                        children: (0, n.jsx)(a.XHJ, {
                            size: i,
                            className: s.icon,
                            color: a.TVs.colors.STATUS_DANGER,
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                t),
            );
        },
    });
}
