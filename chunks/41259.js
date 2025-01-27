r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(200651);
r(192379);
var a = r(974674),
    o = r(1561),
    s = r(993365),
    l = r(385499),
    u = r(768581),
    c = r(630388),
    d = r(489863),
    f = r(981631),
    p = r(182294),
    h = r(388032),
    _ = r(256405);
function m(e) {
    let { id: n, user: r, application: m, bot: g, accountScopes: E, showLogout: v, location: y } = e,
        b = u.ZP.getApplicationIconURL({
            id: m.id,
            icon: m.icon
        }),
        I = u.ZP.getUserAvatarURL(r);
    return (0, i.jsxs)('header', {
        id: n,
        className: _.header,
        children: [
            (0, i.jsxs)('div', {
                className: _.headerIcons,
                children: [
                    (0, i.jsx)(a.qE, {
                        className: _.avatar,
                        src: b,
                        size: p.EF.SIZE_56,
                        'aria-label': m.name
                    }),
                    (0, i.jsxs)('div', {
                        className: _.ellipseGroup,
                        children: [(0, i.jsx)('div', { className: _.ellipse }), (0, i.jsx)('div', { className: _.ellipse }), (0, i.jsx)('div', { className: _.ellipse })]
                    }),
                    (0, i.jsx)(a.qE, {
                        className: _.avatar,
                        src: I,
                        size: p.EF.SIZE_56,
                        'aria-label': r.username
                    })
                ]
            }),
            (0, i.jsxs)(s.x, {
                variant: 'text-lg/bold',
                color: 'header-primary',
                children: [
                    m.name,
                    null != g
                        ? (0, i.jsx)(l.Z, {
                              className: _.botTag,
                              verified: null != g.public_flags && (0, c.yE)(g.public_flags, f.xW$.VERIFIED_BOT)
                          })
                        : null
                ]
            }),
            E.length > 0
                ? (0, i.jsx)(s.x, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      className: _.label,
                      children: h.intl.string(h.t.jFbDnJ)
                  })
                : (0, i.jsx)(s.x, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      className: _.label,
                      children: h.intl.string(h.t['X+Fdpq'])
                  }),
            v
                ? (0, i.jsx)('div', {
                      className: _.currentUser,
                      children: (0, i.jsxs)(s.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          children: [
                              h.intl.format(h.t.qRvpYW, {
                                  userHook: () =>
                                      (0, i.jsxs)(
                                          s.x,
                                          {
                                              className: _.currentUserTag,
                                              variant: 'text-sm/normal',
                                              children: [
                                                  r.username,
                                                  !r.isPomelo() &&
                                                      (0, i.jsx)(s.x, {
                                                          className: _.currentUserDiscriminator,
                                                          variant: 'text-sm/normal',
                                                          children: '#'.concat(r.discriminator)
                                                      })
                                              ]
                                          },
                                          r.id
                                      )
                              }),
                              (0, i.jsx)(o.P, {
                                  tag: 'a',
                                  className: _.logoutLink,
                                  onClick: () => (0, d.c$)(y),
                                  children: h.intl.string(h.t['yV/hjI'])
                              })
                          ]
                      })
                  })
                : null
        ]
    });
}
