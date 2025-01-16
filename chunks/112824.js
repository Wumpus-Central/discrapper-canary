n.d(t, {
    R: function () {
        return p;
    },
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(149765),
    a = n(442837),
    o = n(481060),
    c = n(430824),
    d = n(496675),
    u = n(700785),
    m = n(647086),
    h = n(135899),
    g = n(388032),
    x = n(232203);
function p(e) {
    return h.$X.filter((t) => (null == e ? void 0 : e.id) !== m._ && u.oz(t, e));
}
function f(e) {
    let { guild: t } = e,
        r = (0, a.e7)([c.Z], () => c.Z.getRole(t.id, t.getEveryoneRoleId())),
        u = p(t),
        m = u.length > 0,
        f = h.$X.some(
            (e) =>
                !d.Z.can(e, t, null, {
                    [r.id]: {
                        ...r,
                        permissions: s.Od(r.permissions, e)
                    }
                })
        ),
        C = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: x.itemContent,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: g.intl.string(g.t['+vaUlJ'])
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: g.intl.format(g.t.RXAtdH, { numPerms: u.length })
                        })
                    ]
                }),
                m
                    ? (0, i.jsx)(o.CircleWarningIcon, {
                          size: 'custom',
                          color: 'currentColor',
                          height: 24,
                          width: 24,
                          className: x.warning,
                          'aria-label': g.intl.string(g.t.bG7Gu7)
                      })
                    : (0, i.jsx)(o.CircleCheckIcon, {
                          size: 'custom',
                          color: 'currentColor',
                          height: 24,
                          width: 24,
                          className: x.check,
                          'aria-label': g.intl.string(g.t['YQix8/'])
                      })
            ]
        });
    return m
        ? f
            ? (0, i.jsx)(o.Tooltip, {
                  text: g.intl.string(g.t['E5v/a2']),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          className: l()(x.simpleItemWrapper, x.disabled),
                          ...e,
                          children: C
                      })
              })
            : (0, i.jsx)(o.Clickable, {
                  onClick: () => {
                      (0, o.openModalLazy)(async () => {
                          let { default: e } = await n.e('39627').then(n.bind(n, 193845));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  guild: t,
                                  ...n
                              });
                      });
                  },
                  className: l()(x.simpleItemWrapper, x.clickable),
                  children: C
              })
        : (0, i.jsx)('div', {
              className: x.simpleItemWrapper,
              children: C
          });
}
