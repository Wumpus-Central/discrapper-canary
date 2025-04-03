n.d(t, { Z: () => x }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(780384),
    o = n(481060),
    c = n(239091),
    d = n(741247),
    u = n(75464),
    h = n(388032),
    g = n(189173);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let { role: t, guild: l } = e,
        [a, u] = i.useState(!1);
    return (0, d.e)(l, t)
        ? (0, r.jsx)(o.P3F, {
              onClick: (e) => {
                  u(!0),
                      (0, c.jW)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      p(m({}, n), {
                                          role: t,
                                          guild: l
                                      })
                                  );
                          },
                          { onClose: () => u(!1) }
                      );
              },
              className: s()(g.roleOverflow, { [g.open]: a }),
              children: (0, r.jsx)(o.xhG, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 20,
                  height: 20
              })
          })
        : null;
}
function x(e) {
    let { color: t, id: l, role: s, guild: d, children: x, isDragging: j, selectedItem: b, onItemSelect: N, itemType: v, locked: y, lockTooltip: C, showContextMenu: S, theme: w, roleStyle: Z, 'aria-label': O } = e,
        E = i.useCallback(
            (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            p(m({}, t), {
                                id: l,
                                label: h.NW.string(h.t.sMsaLi)
                            })
                        );
                });
            },
            [l]
        );
    return j
        ? (0, r.jsx)('div', { className: g.dragged })
        : (0, r.jsx)(o.njP.Item, {
              className: g.role,
              id: l,
              selectedItem: b,
              onItemSelect: N,
              itemType: v,
              'aria-label': null != C ? ''.concat(O, ', ').concat(C) : O,
              children: (0, r.jsxs)('div', {
                  className: g.roleContent,
                  children: [
                      'dot' === Z
                          ? (0, r.jsx)(o.FhE, {
                                color: null != t ? t : void 0,
                                className: g.roleDot,
                                background: !1,
                                tooltip: !1
                            })
                          : (0, r.jsx)(o.xko, {
                                color: null != t ? t : void 0,
                                className: g.roleCircle
                            }),
                      (function () {
                          if (!y) return null;
                          let e = (0, a.wj)(w) ? n(27377) : n(514811);
                          return (0, r.jsx)(o.ua7, {
                              text: C,
                              color: o.ua7.Colors.RED,
                              children: (t) =>
                                  (0, r.jsx)(
                                      u.Z,
                                      m(
                                          {
                                              className: g.lock,
                                              src: e
                                          },
                                          t
                                      )
                                  )
                          });
                      })(),
                      (0, r.jsx)('div', {
                          className: g.roleInner,
                          onContextMenu: E,
                          children: x
                      }),
                      S && null != s
                          ? (0, r.jsx)(f, {
                                guild: d,
                                role: s
                            })
                          : null
                  ]
              })
          });
}
