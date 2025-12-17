n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(314897),
    l = n(733231),
    o = n(890814),
    c = n(262804),
    s = n(141014),
    u = n(385153),
    d = n(753436),
    f = n(34335);
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
                d.S,
                g(
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
function b(e) {
    var t, n;
    let { userId: o, widgetType: d, disableInteraction: b, games: m } = e,
        h = (0, i.e7)([a.default], () => a.default.getId() === o),
        { getManageButtonForWidget: y } = (0, f.j)(),
        v = y(d),
        { expanded: O, setExpanded: j } = (0, s.g)(),
        x = O ? m : m.slice(0, 8),
        P = m.length > 8,
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
                    (0, r.jsx)(u.Z, {
                        expanded: O,
                        onClick: () => j((e) => !e),
                    }),
            ],
        });
    return h && !b
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.Z, {
                      widgetType: d,
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
