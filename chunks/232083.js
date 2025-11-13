n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(314897),
    l = n(733231),
    o = n(141014),
    c = n(385153),
    s = n(623132),
    u = n(34335),
    d = n(112794);
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
        className: d.cardList,
        children: t.map((e, t) =>
            (0, r.jsx)(
                "li",
                {
                    children: (0, r.jsx)(
                        s.Z,
                        f(
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
function p(e) {
    var t, n;
    let { user: s, widgetType: d, disableInteraction: p, games: m } = e,
        b = (0, i.e7)([a.default], () => a.default.getId() === s.id),
        { getManageButtonForWidget: h } = (0, u.j)(),
        y = h(d),
        { expanded: v, setExpanded: O } = (0, o.g)(),
        j = v ? m : m.slice(0, 2),
        x = m.length > 2,
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
                    (0, r.jsx)(c.Z, {
                        expanded: v,
                        onClick: () => O((e) => !e),
                    }),
            ],
        });
    return b && !p
        ? (0, r.jsx)(l.d, {
              emptyListFallbackRef: y,
              children: _,
          })
        : _;
}
