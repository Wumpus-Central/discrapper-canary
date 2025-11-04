n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    l = n(314897),
    o = n(733231),
    c = n(890814),
    s = n(385153),
    u = n(753436),
    d = n(34335);
function f(e) {
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
function g(e) {
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
    let { registerItemRef: i, manageFocusOnDelete: a } = (0, o.C)();
    return (0, r.jsx)(c.Z, {
        games: t,
        renderGame: (e, t) =>
            (0, r.jsx)(
                u.S,
                f(
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
function p(e) {
    var t, n;
    let { userId: c, widgetType: u, disableInteraction: p, games: m } = e,
        b = (0, a.e7)([l.default], () => l.default.getId() === c),
        { getManageButtonForWidget: y } = (0, d.j)(),
        h = y(u),
        [v, O] = i.useState(!1),
        j = v ? m : m.slice(0, 8),
        x = m.length > 8,
        _ = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(
                    g,
                    ((t = f({}, e)),
                    (n = n = { games: j }),
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
                ),
                x &&
                    (0, r.jsx)(s.Z, {
                        expanded: v,
                        onClick: () => O((e) => !e),
                    }),
            ],
        });
    return b && !p
        ? (0, r.jsx)(o.d, {
              emptyListFallbackRef: h,
              children: _,
          })
        : _;
}
