r.d(t, { Z: () => d });
var n = r(951288);
r(647438);
var i = r(120356),
    l = r.n(i),
    o = r(481060),
    a = r(785717),
    c = r(86419),
    s = r(388032),
    u = r(51708);
function d(e) {
    let { game: t, widgetType: r, iconSize: i = "refresh_sm", className: d } = e,
        { trackUserProfileEditAction: f } = (0, a.KZ)(),
        b = () => {
            (0, c.$b)(r, t.applicationId),
                o.uvj.announce(s.intl.string(s.t["08HmMj"])),
                f({
                    action: "GAME_REMOVED",
                    gameId: t.applicationId,
                    widgetEdited: r,
                });
        };
    return (0, n.jsx)(o.ua7, {
        text: s.intl.string(s.t.HUvyDQ),
        children: (e) => {
            var t, r;
            return (0, n.jsx)(
                o.P3F,
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
                        onClick: b,
                        "aria-label": s.intl.string(s.t.HUvyDQ),
                        className: l()(d, u.clickable),
                        children: (0, n.jsx)(o.XHJ, {
                            size: i,
                            className: u.icon,
                            color: o.TVs.colors.STATUS_DANGER,
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
