n.d(t, {
    R: () => x,
    Z: () => j
});
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(149765),
    l = n(442837),
    o = n(481060),
    c = n(430824),
    d = n(496675),
    u = n(700785),
    m = n(647086),
    g = n(135899),
    p = n(388032),
    h = n(296205);
function f(e) {
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
function b(e, t) {
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
    return g.$X.filter((t) => (null == e ? void 0 : e.id) !== m._ && u.oz(t, e));
}
function j(e) {
    let { guild: t } = e,
        i = (0, l.e7)([c.Z], () => c.Z.getRole(t.id, t.getEveryoneRoleId())),
        u = x(t),
        m = u.length > 0,
        j = g.$X.some((e) => !d.Z.can(e, t, null, { [i.id]: b(f({}, i), { permissions: a.Od(i.permissions, e) }) })),
        N = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: h.itemContent,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: p.NW.string(p.t['+vaUlJ'])
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: p.NW.format(p.t.RXAtdH, { numPerms: u.length })
                        })
                    ]
                }),
                m
                    ? (0, r.jsx)(o.P4T, {
                          size: 'custom',
                          color: 'currentColor',
                          height: 24,
                          width: 24,
                          className: h.warning,
                          'aria-label': p.NW.string(p.t.bG7Gu7)
                      })
                    : (0, r.jsx)(o.owK, {
                          size: 'custom',
                          color: 'currentColor',
                          height: 24,
                          width: 24,
                          className: h.check,
                          'aria-label': p.NW.string(p.t['YQix8/'])
                      })
            ]
        });
    return m
        ? j
            ? (0, r.jsx)(o.ua7, {
                  text: p.NW.string(p.t['E5v/a2']),
                  children: (e) => (0, r.jsx)('div', b(f({ className: s()(h.simpleItemWrapper, h.disabled) }, e), { children: N }))
              })
            : (0, r.jsx)(o.P3F, {
                  onClick: () => {
                      (0, o.ZDy)(async () => {
                          let { default: e } = await n.e('39627').then(n.bind(n, 193845));
                          return (n) => (0, r.jsx)(e, f({ guild: t }, n));
                      });
                  },
                  className: s()(h.simpleItemWrapper, h.clickable),
                  children: N
              })
        : (0, r.jsx)('div', {
              className: h.simpleItemWrapper,
              children: N
          });
}
