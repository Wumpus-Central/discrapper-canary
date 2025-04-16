n.d(t, { Z: () => j }), n(388685);
var i = n(200651),
    r = n(192379),
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
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
        [a, u] = r.useState(!1);
    return (0, d.e)(l, t)
        ? (0, i.jsx)(o.P3F, {
              onClick: (e) => {
                  u(!0),
                      (0, c.jW)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                              return (n) =>
                                  (0, i.jsx)(
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
              children: (0, i.jsx)(o.xhG, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 20,
                  height: 20
              })
          })
        : null;
}
function j(e) {
    let { color: t, id: l, role: s, guild: d, children: j, isDragging: b, selectedItem: N, onItemSelect: v, itemType: y, locked: C, lockTooltip: S, showContextMenu: w, theme: O, roleStyle: Z, 'aria-label': T } = e,
        E = (0, h.X)(d.id, null == s ? void 0 : s.colorStrings),
        R = r.useCallback(
            (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, i.jsx)(
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
        ? (0, i.jsx)('div', { className: m.dragged })
        : (0, i.jsx)(o.njP.Item, {
              className: m.role,
              id: l,
              selectedItem: N,
              onItemSelect: v,
              itemType: y,
              'aria-label': null != S ? ''.concat(T, ', ').concat(S) : T,
              children: (0, i.jsxs)('div', {
                  className: m.roleContent,
                  children: [
                      'dot' === Z
                          ? (0, i.jsx)(o.FhE, {
                                color: null != t ? t : void 0,
                                colors: E,
                                className: m.roleDot,
                                background: !1,
                                tooltip: !1
                            })
                          : (0, i.jsx)(o.xko, {
                                color: null != t ? t : void 0,
                                colors: E,
                                className: m.roleCircle
                            }),
                      (function () {
                          if (!C) return null;
                          let e = (0, a.wj)(O) ? n(27377) : n(514811);
                          return (0, i.jsx)(o.ua7, {
                              text: S,
                              color: o.ua7.Colors.RED,
                              children: (t) =>
                                  (0, i.jsx)(
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
                      (0, i.jsx)('div', {
                          className: m.roleInner,
                          onContextMenu: R,
                          children: j
                      }),
                      w && null != s
                          ? (0, i.jsx)(x, {
                                guild: d,
                                role: s
                            })
                          : null
                  ]
              })
          });
}
