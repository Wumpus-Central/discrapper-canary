n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(780384),
    o = n(481060),
    d = n(239091),
    c = n(741247),
    u = n(75464),
    h = n(388032),
    m = n(413174);
function g(e) {
    let { role: t, guild: s } = e,
        [a, u] = l.useState(!1);
    return (0, c.useHasGuildRoleItems)(s, t)
        ? (0, i.jsx)(o.Clickable, {
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
              className: r()(m.roleOverflow, { [m.open]: a }),
              children: (0, i.jsx)(o.MoreHorizontalIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 20,
                  height: 20
              })
          })
        : null;
}
function p(e) {
    let { color: t, id: s, role: r, guild: c, children: p, isDragging: x, selectedItem: f, onItemSelect: v, itemType: j, locked: C, lockTooltip: b, showContextMenu: T, theme: N, roleStyle: S, 'aria-label': Z } = e,
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
        : (0, i.jsx)(o.TabBar.Item, {
              className: m.role,
              id: s,
              selectedItem: f,
              onItemSelect: v,
              itemType: j,
              'aria-label': null != b ? ''.concat(Z, ', ').concat(b) : Z,
              children: (0, i.jsxs)('div', {
                  className: m.roleContent,
                  children: [
                      'dot' === S
                          ? (0, i.jsx)(o.RoleDot, {
                                color: null != t ? t : void 0,
                                className: m.roleDot,
                                background: !1,
                                tooltip: !1
                            })
                          : (0, i.jsx)(o.RoleCircle, {
                                color: null != t ? t : void 0,
                                className: m.roleCircle
                            }),
                      (function () {
                          if (!C) return null;
                          let e = (0, a.wj)(N) ? n(27377) : n(514811);
                          return (0, i.jsx)(o.Tooltip, {
                              text: b,
                              color: o.Tooltip.Colors.RED,
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
                      T && null != r
                          ? (0, i.jsx)(g, {
                                guild: c,
                                role: r
                            })
                          : null
                  ]
              })
          });
}
