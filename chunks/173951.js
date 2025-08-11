n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var l = n(624238),
    i = n(750312),
    o = n(30344);
function a(e) {
    var { user: t, widget: n, isGameFetching: a, showHeaderActionButtons: c } = e,
        s = (function (e, t) {
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
        })(e, ["user", "widget", "isGameFetching", "showHeaderActionButtons"]);
    let d = n.games.length >= l.k.played_games;
    return (0, r.jsx)(i.Z, {
        userId: t.id,
        widgetType: n.type,
        reachedMaxGamesLimit: d,
        showHeaderActionButtons: c,
        children: (0, r.jsx)(
            o.Z,
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
                    games: n.games,
                    userId: t.id,
                    isGameFetching: a,
                },
                s,
            ),
        ),
    });
}
