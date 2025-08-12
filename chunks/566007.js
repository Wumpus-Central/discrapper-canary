n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var l = n(750312),
    i = n(623132);
function o(e) {
    var { user: t, widget: n, isGameFetching: o, containerClassName: a, disableInteraction: c } = e,
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
        })(e, ["user", "widget", "isGameFetching", "containerClassName", "disableInteraction"]);
    let d = n.games[0];
    return (0, r.jsx)(l.Z, {
        userId: t.id,
        widget: n,
        className: a,
        disableInteraction: c,
        children:
            null != d &&
            (0, r.jsx)(
                i.Z,
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
                        user: t,
                        game: d,
                        loading: o(d.applicationId),
                        disableInteraction: c,
                    },
                    s,
                ),
            ),
    });
}
