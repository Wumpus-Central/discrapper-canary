n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    a = n(793030),
    o = n(974674),
    s = n(1561),
    l = n(993365),
    c = n(385499),
    u = n(768581),
    d = n(630388),
    _ = n(489863),
    f = n(713938),
    p = n(314583),
    h = n(981631),
    m = n(182294),
    g = n(388032),
    E = n(441533);
function b(e) {
    let { user: t, application: n, bot: b, accountScopes: y, showLogout: O, location: v, scopes: I } = e,
        T = (0, p.X)(),
        S = u.ZP.getApplicationIconURL({
            id: n.id,
            icon: n.icon
        }),
        A = u.ZP.getUserAvatarURL(t),
        N = i.useMemo(
            () =>
                I.some((e) => (0, f.sg)(e))
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l.x, {
                                  variant: 'text-lg/normal',
                                  color: 'header-secondary',
                                  children: g.intl.string(g.t.uT1CPT)
                              }),
                              (0, r.jsx)(a.X6, {
                                  variant: 'heading-xxl/bold',
                                  color: 'header-primary',
                                  children: n.name
                              })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)(l.x, {
                                  variant: 'text-lg/bold',
                                  color: 'header-primary',
                                  children: [
                                      n.name,
                                      null != b
                                          ? (0, r.jsx)(c.Z, {
                                                className: E.botTag,
                                                verified: null != b.public_flags && (0, d.yE)(b.public_flags, h.xW$.VERIFIED_BOT)
                                            })
                                          : null
                                  ]
                              }),
                              y.length > 0
                                  ? (0, r.jsx)(l.x, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: g.intl.string(g.t.jFbDnJ)
                                    })
                                  : (0, r.jsx)(l.x, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: g.intl.string(g.t['X+Fdpq'])
                                    })
                          ]
                      }),
            [y.length, n, b, I]
        );
    return (0, r.jsxs)('header', {
        id: T,
        className: E.header,
        children: [
            (0, r.jsxs)('div', {
                className: E.headerIcons,
                children: [
                    (0, r.jsx)(o.qE, {
                        className: E.avatar,
                        src: S,
                        size: m.EF.SIZE_80,
                        'aria-label': n.name
                    }),
                    (0, r.jsxs)('div', {
                        className: E.ellipseGroup,
                        children: [(0, r.jsx)('div', { className: E.ellipse }), (0, r.jsx)('div', { className: E.ellipse }), (0, r.jsx)('div', { className: E.ellipse })]
                    }),
                    (0, r.jsx)(o.qE, {
                        className: E.avatar,
                        src: A,
                        size: m.EF.SIZE_80,
                        'aria-label': t.username
                    })
                ]
            }),
            N,
            O
                ? (0, r.jsx)('div', {
                      className: E.currentUser,
                      children: (0, r.jsxs)(l.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          children: [
                              g.intl.format(g.t.qRvpYW, {
                                  userHook: () =>
                                      (0, r.jsxs)(
                                          l.x,
                                          {
                                              className: E.currentUserTag,
                                              variant: 'text-sm/normal',
                                              children: [
                                                  t.username,
                                                  !t.isPomelo() &&
                                                      (0, r.jsx)(l.x, {
                                                          className: E.currentUserDiscriminator,
                                                          variant: 'text-sm/normal',
                                                          children: '#'.concat(t.discriminator)
                                                      })
                                              ]
                                          },
                                          t.id
                                      )
                              }),
                              (0, r.jsx)(s.P, {
                                  tag: 'a',
                                  className: E.logoutLink,
                                  onClick: () => (0, _.c$)(v, 'oauth2_logout'),
                                  children: g.intl.string(g.t['yV/hjI'])
                              })
                          ]
                      })
                  })
                : null
        ]
    });
}
