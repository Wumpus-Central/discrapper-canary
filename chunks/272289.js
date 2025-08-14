n.d(t, { Z: () => s }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(392711),
    o = n(804919),
    a = n(747101),
    c = n(977416);
function s(e) {
    var { widgetGames: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["widgetGames"]);
    let { games: s, isGameFetching: d } = (function () {
            let [e] = l.useState(() => (0, i.sampleSize)(o.qs, 4)),
                { gameDataMap: t, isGameFetching: n } = (0, a.F)(e);
            return {
                games: l.useMemo(
                    () =>
                        e.map((e) => {
                            let n = t[e];
                            return {
                                applicationId: e,
                                gameName: null == n ? void 0 : n.name,
                                imageSrc: null == n ? void 0 : n.coverImageUrl,
                            };
                        }),
                    [e, t],
                ),
                isGameFetching: n,
            };
        })(),
        u = new Set(t.map((e) => e.applicationId)),
        f = s.filter((e) => !u.has(e.applicationId));
    return (0, r.jsx)(
        c.Z,
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
                games: f,
                isGameFetching: d,
            },
            n,
        ),
    );
}
