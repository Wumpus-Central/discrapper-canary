n.d(t, { Z: () => j }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(780384),
    o = n(481060),
    c = n(239091),
    d = n(741247),
    u = n(75464),
    h = n(884902),
    g = n(388032),
    m = n(189173);
function p(e) {
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
function f(e, t) {
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
function x(e) {
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
                                      f(p({}, n), {
                                          role: t,
                                          guild: l
                                      })
                                  );
                          },
                          { onClose: () => u(!1) }
                      );
              },
              className: s()(m.roleOverflow, { [m.open]: a }),
              children: (0, r.jsx)(o.xhG, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 20,
                  height: 20
              })
          })
        : null;
}
function j(e) {
    let { color: t, id: l, role: s, guild: d, children: j, isDragging: b, selectedItem: N, onItemSelect: v, itemType: y, locked: C, lockTooltip: S, showContextMenu: w, theme: Z, roleStyle: O, 'aria-label': E } = e,
        T = (0, h.X)(d.id, null == s ? void 0 : s.colorStrings),
        R = i.useCallback(
            (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            f(p({}, t), {
                                id: l,
                                label: g.NW.string(g.t.sMsaLi)
                            })
                        );
                });
            },
            [l]
        );
    return b
        ? (0, r.jsx)('div', { className: m.dragged })
        : (0, r.jsx)(o.njP.Item, {
              className: m.role,
              id: l,
              selectedItem: N,
              onItemSelect: v,
              itemType: y,
              'aria-label': null != S ? ''.concat(E, ', ').concat(S) : E,
              children: (0, r.jsxs)('div', {
                  className: m.roleContent,
                  children: [
                      'dot' === O
                          ? (0, r.jsx)(o.FhE, {
                                color: null != t ? t : void 0,
                                colors: T,
                                className: m.roleDot,
                                background: !1,
                                tooltip: !1
                            })
                          : (0, r.jsx)(o.xko, {
                                color: null != t ? t : void 0,
                                colors: T,
                                className: m.roleCircle
                            }),
                      (function () {
                          if (!C) return null;
                          let e = (0, a.wj)(Z) ? n(27377) : n(514811);
                          return (0, r.jsx)(o.ua7, {
                              text: S,
                              color: o.ua7.Colors.RED,
                              children: (t) =>
                                  (0, r.jsx)(
                                      u.Z,
                                      p(
                                          {
                                              className: m.lock,
                                              src: e
                                          },
                                          t
                                      )
                                  )
                          });
                      })(),
                      (0, r.jsx)('div', {
                          className: m.roleInner,
                          onContextMenu: R,
                          children: j
                      }),
                      w && null != s
                          ? (0, r.jsx)(x, {
                                guild: d,
                                role: s
                            })
                          : null
                  ]
              })
          });
}
