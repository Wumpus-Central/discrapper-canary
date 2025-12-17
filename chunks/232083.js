n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(314897),
    l = n(733231),
    o = n(262804),
    c = n(141014),
    s = n(385153),
    u = n(623132),
    d = n(34335),
    f = n(553087);
function g(e) {
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
function p(e) {
    var { games: t, user: n, widgetType: i } = e,
        a = (function (e, t) {
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
        })(e, ["games", "user", "widgetType"]);
    let { registerItemRef: o, manageFocusOnDelete: c } = (0, l.C)();
    return (0, r.jsx)("ul", {
        className: f.cardList,
        children: t.map((e, t) =>
            (0, r.jsx)(
                "li",
                {
                    children: (0, r.jsx)(
                        u.Z,
                        g(
                            {
                                index: t,
                                user: n,
                                game: e,
                                widgetType: i,
                                coverRef: o(e.applicationId),
                                onRemoveGame: c,
                            },
                            a,
                        ),
                    ),
                },
                e.applicationId,
            ),
        ),
    });
}
function b(e) {
    var t, n;
    let { user: u, widgetType: f, disableInteraction: b, games: m } = e,
        h = (0, i.e7)([a.default], () => a.default.getId() === u.id),
        { getManageButtonForWidget: y } = (0, d.j)(),
        v = y(f),
        { expanded: O, setExpanded: j } = (0, c.g)(),
        x = O ? m : m.slice(0, 2),
        P = m.length > 2,
        w = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(
                    p,
                    ((t = g({}, e)),
                    (n = n = { games: x }),
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
                P &&
                    (0, r.jsx)(s.Z, {
                        expanded: O,
                        onClick: () => j((e) => !e),
                    }),
            ],
        });
    return h && !b
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.Z, {
                      widgetType: f,
                      gameCount: m.length,
                  }),
                  (0, r.jsx)(l.d, {
                      emptyListFallbackRef: v,
                      children: w,
                  }),
              ],
          })
        : w;
}
