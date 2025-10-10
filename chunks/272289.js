r.d(t, { Z: () => s });
var n = r(951288),
    i = r(647438),
    o = r(785717),
    a = r(86419),
    l = r(206599),
    c = r(977416);
function s(e) {
    var { widgetType: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                    (r = o[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["widgetType"]);
    let { games: s, onAddGame: u } = (0, l.K)(t),
        { trackUserProfileEditAction: d } = (0, o.KZ)(),
        f = i.useCallback(
            (e, r, n) => {
                u(e),
                    (0, a.ES)(t, {
                        applicationId: e,
                        gameName: r,
                        imageSrc: n,
                    }),
                    d({
                        action: "GAME_ADDED",
                        gameId: e,
                        widgetEdited: t,
                    });
            },
            [u, t, d],
        );
    return (0, n.jsx)(
        c.Z,
        (function (e) {
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
        })(
            {
                games: s,
                onClick: f,
            },
            r,
        ),
    );
}
