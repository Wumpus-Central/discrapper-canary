n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(974674),
    a = n(1561),
    s = n(993365),
    o = n(385499),
    l = n(768581),
    u = n(630388),
    c = n(489863),
    d = n(981631),
    f = n(182294),
    _ = n(388032),
    p = n(256405);
function h(e) {
    let { id: t, user: n, application: h, bot: m, accountScopes: g, showLogout: E, location: v } = e,
        y = l.ZP.getApplicationIconURL({
            id: h.id,
            icon: h.icon
        }),
        I = l.ZP.getUserAvatarURL(n);
    return (0, i.jsxs)('header', {
        id: t,
        className: p.header,
        children: [
            (0, i.jsxs)('div', {
                className: p.headerIcons,
                children: [
                    (0, i.jsx)(r.qE, {
                        className: p.avatar,
                        src: y,
                        size: f.EF.SIZE_56,
                        'aria-label': h.name
                    }),
                    (0, i.jsxs)('div', {
                        className: p.ellipseGroup,
                        children: [(0, i.jsx)('div', { className: p.ellipse }), (0, i.jsx)('div', { className: p.ellipse }), (0, i.jsx)('div', { className: p.ellipse })]
                    }),
                    (0, i.jsx)(r.qE, {
                        className: p.avatar,
                        src: I,
                        size: f.EF.SIZE_56,
                        'aria-label': n.username
                    })
                ]
            }),
            (0, i.jsxs)(s.x, {
                variant: 'text-lg/bold',
                color: 'header-primary',
                children: [
                    h.name,
                    null != m
                        ? (0, i.jsx)(o.Z, {
                              className: p.botTag,
                              verified: null != m.public_flags && (0, u.yE)(m.public_flags, d.xW$.VERIFIED_BOT)
                          })
                        : null
                ]
            }),
            g.length > 0
                ? (0, i.jsx)(s.x, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      className: p.label,
                      children: _.intl.string(_.t.jFbDnJ)
                  })
                : (0, i.jsx)(s.x, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      className: p.label,
                      children: _.intl.string(_.t['X+Fdpq'])
                  }),
            E
                ? (0, i.jsx)('div', {
                      className: p.currentUser,
                      children: (0, i.jsxs)(s.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          children: [
                              _.intl.format(_.t.qRvpYW, {
                                  userHook: () =>
                                      (0, i.jsxs)(
                                          s.x,
                                          {
                                              className: p.currentUserTag,
                                              variant: 'text-sm/normal',
                                              children: [
                                                  n.username,
                                                  !n.isPomelo() &&
                                                      (0, i.jsx)(s.x, {
                                                          className: p.currentUserDiscriminator,
                                                          variant: 'text-sm/normal',
                                                          children: '#'.concat(n.discriminator)
                                                      })
                                              ]
                                          },
                                          n.id
                                      )
                              }),
                              (0, i.jsx)(a.P, {
                                  tag: 'a',
                                  className: p.logoutLink,
                                  onClick: () => (0, c.c$)(v),
                                  children: _.intl.string(_.t['yV/hjI'])
                              })
                          ]
                      })
                  })
                : null
        ]
    });
}
