r.d(t, { Z: () => d }), r(388685);
var n = r(951288),
    a = r(647438),
    i = r(399606),
    l = r(785717),
    o = r(224724),
    c = r(86419),
    s = r(206599),
    u = r(977416);
function d(e) {
    var { widgetType: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            }
            return a;
        })(e, ["widgetType"]);
    let { games: d, isGameFetching: f, onAddGame: g } = (0, s.K)(t),
        [b] = (0, i.Wu)([o.Z], () => [o.Z.suggestedFetchIsLoading]),
        { trackUserProfileAction: p } = (0, l.KZ)(),
        m = a.useCallback(
            (e, r, n) => {
                g(e),
                    (0, c.ES)(t, {
                        applicationId: e,
                        gameName: r,
                        imageSrc: n,
                    }),
                    p({ action: "EDIT_ACTION" });
            },
            [g, t, p],
        );
    return (0, n.jsx)(
        u.Z,
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
                games: d,
                isGameFetching: f,
                isSuggestedGamesLoading: b,
                onClick: m,
            },
            r,
        ),
    );
}
