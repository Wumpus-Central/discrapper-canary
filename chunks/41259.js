r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(200651);
r(192379);
var a = r(974674),
    s = r(1561),
    o = r(993365),
    l = r(385499),
    u = r(768581),
    c = r(630388),
    d = r(489863),
    f = r(981631),
    _ = r(182294),
    h = r(388032),
    p = r(256405);
function m(e) {
    let { id: n, user: r, application: m, bot: g, accountScopes: E, showLogout: v, location: I } = e,
        T = u.ZP.getApplicationIconURL({
            id: m.id,
            icon: m.icon
        }),
        b = u.ZP.getUserAvatarURL(r);
    return (0, i.jsxs)('header', {
        id: n,
        className: p.header,
        children: [
            (0, i.jsxs)('div', {
                className: p.headerIcons,
                children: [
                    (0, i.jsx)(a.qE, {
                        src: T,
                        size: _.EF.SIZE_56,
                        'aria-label': m.name
                    }),
                    (0, i.jsxs)('div', {
                        className: p.ellipseGroup,
                        children: [(0, i.jsx)('div', { className: p.ellipse }), (0, i.jsx)('div', { className: p.ellipse }), (0, i.jsx)('div', { className: p.ellipse })]
                    }),
                    (0, i.jsx)(a.qE, {
                        src: b,
                        size: _.EF.SIZE_56,
                        'aria-label': r.username
                    })
                ]
            }),
            (0, i.jsxs)(o.x, {
                variant: 'text-lg/bold',
                color: 'header-primary',
                children: [
                    m.name,
                    null != g
                        ? (0, i.jsx)(l.Z, {
                              className: p.botTag,
                              verified: null != g.public_flags && (0, c.yE)(g.public_flags, f.xW$.VERIFIED_BOT)
                          })
                        : null
                ]
            }),
            E.length > 0
                ? (0, i.jsx)(o.x, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      className: p.label,
                      children: h.intl.string(h.t.jFbDnJ)
                  })
                : (0, i.jsx)(o.x, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      className: p.label,
                      children: h.intl.string(h.t['X+Fdpq'])
                  }),
            v
                ? (0, i.jsx)('div', {
                      className: p.currentUser,
                      children: (0, i.jsxs)(o.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          children: [
                              h.intl.format(h.t.qRvpYW, {
                                  userHook: () =>
                                      (0, i.jsxs)(
                                          o.x,
                                          {
                                              className: p.currentUserTag,
                                              variant: 'text-sm/normal',
                                              children: [
                                                  r.username,
                                                  !r.isPomelo() &&
                                                      (0, i.jsx)(o.x, {
                                                          className: p.currentUserDiscriminator,
                                                          variant: 'text-sm/normal',
                                                          children: '#'.concat(r.discriminator)
                                                      })
                                              ]
                                          },
                                          r.id
                                      )
                              }),
                              (0, i.jsx)(s.P, {
                                  tag: 'a',
                                  className: p.logoutLink,
                                  onClick: () => (0, d.c$)(I),
                                  children: h.intl.string(h.t['yV/hjI'])
                              })
                          ]
                      })
                  })
                : null
        ]
    });
}
