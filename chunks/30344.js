n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(314897),
    l = n(733231),
    o = n(890814),
    s = n(753436),
    c = n(34335);
function u(e) {
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
}
function d(e) {
    var { games: t } = e,
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
        })(e, ["games"]);
    let { registerItemRef: i, manageFocusOnDelete: a } = (0, l.C)();
    return (0, r.jsx)(o.Z, {
        games: t,
        renderGame: (e, t) =>
            (0, r.jsx)(
                s.S,
                u(
                    {
                        index: t,
                        game: e,
                        coverRef: i(e.applicationId),
                        onRemoveGame: a,
                    },
                    n,
                ),
            ),
    });
}
function f(e) {
    let { userId: t, widgetType: n, disableInteraction: o } = e,
        s = (0, i.e7)([a.default], () => a.default.getId() === t),
        { getManageButtonForWidget: f } = (0, c.j)(),
        g = f(n);
    return s && !o
        ? (0, r.jsx)(l.d, {
              emptyListFallbackRef: g,
              children: (0, r.jsx)(d, u({}, e)),
          })
        : (0, r.jsx)(d, u({}, e));
}
