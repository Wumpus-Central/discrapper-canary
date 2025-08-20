r.d(t, { Z: () => u }), r(388685);
var n = r(951288),
    l = r(647438),
    i = r(399606),
    a = r(224724),
    c = r(86419),
    o = r(206599),
    s = r(977416);
function u(e) {
    var { widgetType: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ["widgetType"]);
    let { games: u, isGameFetching: d, onAddGame: f } = (0, o.K)(t),
        [g] = (0, i.Wu)([a.Z], () => [a.Z.suggestedFetchIsLoading]),
        b = l.useCallback(
            (e, r, n) => {
                f(e),
                    (0, c.ES)(t, {
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
