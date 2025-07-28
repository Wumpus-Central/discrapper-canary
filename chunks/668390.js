(n.d(t, { Z: () => f }), n(388685));
var i = n(255367),
    l = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(780384),
    o = n(481060),
    c = n(239091),
    d = n(741247),
    u = n(75464),
    h = n(884902),
    m = n(189173);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function p(e) {
    let { role: t, guild: r } = e,
        [a, u] = l.useState(!1);
    return (0, d.e)(r, t)
        ? (0, i.jsx)(o.P3F, {
              onClick: (e) => {
                  (u(!0),
                      (0, c.jW)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                              return (n) => {
                                  var l, s;
                                  return (0, i.jsx)(
                                      e,
                                      ((l = g({}, n)),
                                      (s = s =
                                          {
                                              role: t,
                                              guild: r
                                          }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var i = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, i);
                                                }
                                                return n;
                                            })(Object(s)).forEach(function (e) {
                                                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                                            }),
                                      l)
                                  );
                              };
                          },
                          { onClose: () => u(!1) }
                      ));
              },
              className: s()(m.roleOverflow, { [m.open]: a }),
              children: (0, i.jsx)(o.xhG, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 20,
                  height: 20
              })
          })
        : null;
}
function f(e) {
    let { color: t, id: l, role: r, guild: s, children: c, isDragging: d, selectedItem: f, onItemSelect: x, itemType: j, locked: b, lockTooltip: v, showContextMenu: y, theme: C, roleStyle: N, onContextMenu: S, 'aria-label': E } = e,
        O = (0, h._f)(s.id, r, null == r ? void 0 : r.colorStrings);
    return d
        ? (0, i.jsx)('div', { className: m.dragged })
        : (0, i.jsx)(o.njP.Item, {
              className: m.role,
              id: l,
              selectedItem: f,
              onItemSelect: x,
              itemType: j,
              'aria-label': null != v ? ''.concat(E, ', ').concat(v) : E,
              onContextMenu: S,
              children: (0, i.jsxs)('div', {
                  className: m.roleContent,
                  children: [
                      'dot' === N
                          ? (0, i.jsx)(o.FhE, {
                                color: null != t ? t : void 0,
                                colors: O,
                                className: m.roleDot,
                                background: !1,
                                tooltip: !1
                            })
                          : (0, i.jsx)(o.xko, {
                                color: null != t ? t : null,
                                colors: O,
                                className: m.roleCircle
                            }),
                      (function () {
                          if (!b) return null;
                          let e = (0, a.wj)(C) ? n(27377) : n(514811);
                          return (0, i.jsx)(o.ua7, {
                              text: v,
                              color: o.ua7.Colors.RED,
                              children: (t) =>
                                  (0, i.jsx)(
                                      u.Z,
                                      g(
                                          {
                                              className: m.lock,
                                              src: e
                                          },
                                          t
                                      )
                                  )
                          });
                      })(),
                      (0, i.jsx)('div', {
                          className: m.roleInner,
                          children: c
                      }),
                      y && null != r
                          ? (0, i.jsx)(p, {
                                guild: s,
                                role: r
                            })
                          : null
                  ]
              })
          });
}
