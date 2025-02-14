n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    r = n(780384),
    o = n(481060),
    d = n(239091),
    c = n(741247),
    u = n(75464),
    h = n(388032),
    m = n(552872);
function g(e) {
    let { role: t, guild: s } = e,
        [r, u] = l.useState(!1);
    return (0, c.e)(s, t)
        ? (0, i.jsx)(o.P3F, {
              onClick: (e) => {
                  u(!0),
                      (0, d.jW)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      role: t,
                                      guild: s
                                  });
                          },
                          { onClose: () => u(!1) }
                      );
              },
              className: a()(m.roleOverflow, { [m.open]: r }),
              children: (0, i.jsx)(o.xhG, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 20,
                  height: 20
              })
          })
        : null;
}
function p(e) {
    let { color: t, id: s, role: a, guild: c, children: p, isDragging: x, selectedItem: f, onItemSelect: v, itemType: j, locked: C, lockTooltip: N, showContextMenu: Z, theme: b, roleStyle: T, 'aria-label': S } = e,
        E = l.useCallback(
            (e) => {
                (0, d.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            id: s,
                            label: h.intl.string(h.t.sMsaLi)
                        });
                });
            },
            [s]
        );
    return x
        ? (0, i.jsx)('div', { className: m.dragged })
        : (0, i.jsx)(o.njP.Item, {
              className: m.role,
              id: s,
              selectedItem: f,
              onItemSelect: v,
              itemType: j,
              'aria-label': null != N ? ''.concat(S, ', ').concat(N) : S,
              children: (0, i.jsxs)('div', {
                  className: m.roleContent,
                  children: [
                      'dot' === T
                          ? (0, i.jsx)(o.FhE, {
                                color: null != t ? t : void 0,
                                className: m.roleDot,
                                background: !1,
                                tooltip: !1
                            })
                          : (0, i.jsx)(o.xko, {
                                color: null != t ? t : void 0,
                                className: m.roleCircle
                            }),
                      (function () {
                          if (!C) return null;
                          let e = (0, r.wj)(b) ? n(27377) : n(514811);
                          return (0, i.jsx)(o.ua7, {
                              text: N,
                              color: o.ua7.Colors.RED,
                              children: (t) =>
                                  (0, i.jsx)(u.Z, {
                                      className: m.lock,
                                      src: e,
                                      ...t
                                  })
                          });
                      })(),
                      (0, i.jsx)('div', {
                          className: m.roleInner,
                          onContextMenu: E,
                          children: p
                      }),
                      Z && null != a
                          ? (0, i.jsx)(g, {
                                guild: c,
                                role: a
                            })
                          : null
                  ]
              })
          });
}
