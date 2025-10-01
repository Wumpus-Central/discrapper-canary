n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    l = n(785717),
    c = n(86419),
    s = n(388032),
    u = n(145624);
function d(e) {
    let { game: t, widgetType: n, iconSize: i = "refresh_sm", className: d } = e,
        { trackUserProfileEditAction: g } = (0, l.KZ)(),
        f = () => {
            (0, c.$b)(n, t.applicationId),
                o.uvj.announce(s.intl.string(s.t["08HmMj"])),
                g({
                    action: "GAME_REMOVED",
                    gameId: t.applicationId,
                    widgetEdited: n,
                });
        };
    return (0, r.jsx)(o.ua7, {
        text: s.intl.string(s.t.HUvyDQ),
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
                        onClick: f,
                        "aria-label": s.intl.string(s.t.HUvyDQ),
                        className: a()(d, u.clickable),
                        children: (0, r.jsx)(o.XHJ, {
                            size: i,
                            className: u.icon,
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
