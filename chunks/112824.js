n.d(t, {
    R: () => b,
    Z: () => j
});
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(149765),
    a = n(442837),
    o = n(481060),
    c = n(430824),
    u = n(496675),
    d = n(700785),
    m = n(647086),
    g = n(135899),
    p = n(388032),
    f = n(296205);
function h(e) {
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
function x(e, t) {
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
function b(e) {
    return g.$X.filter((t) => (null == e ? void 0 : e.id) !== m._ && d.oz(t, e));
}
function j(e) {
    let { guild: t } = e,
        i = (0, a.e7)([c.Z], () => c.Z.getRole(t.id, t.getEveryoneRoleId())),
        d = b(t),
        m = d.length > 0,
        j = g.$X.some((e) => !u.Z.can(e, t, null, { [i.id]: x(h({}, i), { permissions: s.Od(i.permissions, e) }) })),
        _ = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: f.itemContent,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: p.intl.string(p.t['+vaUlJ'])
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: p.intl.format(p.t.RXAtdH, { numPerms: d.length })
                        })
                    ]
                }),
                m
                    ? (0, r.jsx)(o.P4T, {
                          size: 'custom',
                          color: 'currentColor',
                          height: 24,
                          width: 24,
                          className: f.warning,
                          'aria-label': p.intl.string(p.t.bG7Gu7)
                      })
                    : (0, r.jsx)(o.owK, {
                          size: 'custom',
                          color: 'currentColor',
                          height: 24,
                          width: 24,
                          className: f.check,
                          'aria-label': p.intl.string(p.t['YQix8/'])
                      })
            ]
        });
    return m
        ? j
            ? (0, r.jsx)(o.ua7, {
                  text: p.intl.string(p.t['E5v/a2']),
                  children: (e) => (0, r.jsx)('div', x(h({ className: l()(f.simpleItemWrapper, f.disabled) }, e), { children: _ }))
              })
            : (0, r.jsx)(o.P3F, {
                  onClick: () => {
                      (0, o.ZDy)(async () => {
                          let { default: e } = await n.e('39627').then(n.bind(n, 193845));
                          return (n) => (0, r.jsx)(e, h({ guild: t }, n));
                      });
                  },
                  className: l()(f.simpleItemWrapper, f.clickable),
                  children: _
              })
        : (0, r.jsx)('div', {
              className: f.simpleItemWrapper,
              children: _
          });
}
