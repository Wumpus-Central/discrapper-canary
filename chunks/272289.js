r.d(t, { Z: () => u }), r(388685);
var n = r(951288),
    i = r(647438),
    a = r(399606),
    l = r(224724),
    o = r(86419),
    c = r(206599),
    s = r(977416);
function u(e) {
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
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (r = a[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["widgetType"]);
    let { games: u, isGameFetching: d, onAddGame: f } = (0, c.K)(t),
        [g] = (0, a.Wu)([l.Z], () => [l.Z.suggestedFetchIsLoading]),
        b = i.useCallback(
            (e, r, n) => {
                f(e),
                    (0, o.ES)(t, {
                        applicationId: e,
                        gameName: r,
                        imageSrc: n,
                    });
            },
            [f, t],
        );
    return (0, n.jsx)(
        s.Z,
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
                games: u,
                isGameFetching: d,
                isSuggestedGamesLoading: g,
                onClick: b,
            },
            r,
        ),
    );
}
