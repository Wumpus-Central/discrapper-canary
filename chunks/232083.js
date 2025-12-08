n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(314897),
    a = n(733231),
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
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["games", "user", "widgetType"]);
    let { registerItemRef: o, manageFocusOnDelete: c } = (0, a.C)();
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
                            l,
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
        b = (0, i.e7)([l.default], () => l.default.getId() === s.id),
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
        ? (0, r.jsx)(a.d, {
              emptyListFallbackRef: y,
              children: _,
          })
        : _;
}
