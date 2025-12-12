n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    a = n(785717),
    l = n(86419),
    o = n(206599),
    c = n(141014),
    s = n(977416);
function u(e) {
    var { widgetType: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["widgetType"]);
    let { games: u, onAddGame: d } = (0, o.K)(t),
        { setExpanded: f } = (0, c.g)(),
        { trackUserProfileEditAction: g } = (0, a.KZ)(),
        p = i.useCallback(
            (e, n, r) => {
                d(e),
                    f(!0),
                    (0, l.ES)({
                        widgetType: t,
                        game: {
                            applicationId: e,
                            gameName: n,
                            imageSrc: r,
                        },
                    }),
                    g({
                        action: "GAME_ADDED",
                        gameId: e,
                        widgetEdited: t,
                    });
            },
            [d, t, g, f],
        );
    return (0, r.jsx)(
        s.Z,
        (function (e) {
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
        })(
            {
                games: u,
                onClick: p,
            },
            n,
        ),
    );
}
