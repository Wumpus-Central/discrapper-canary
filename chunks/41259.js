n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    o = n(793030),
    a = n(974674),
    s = n(1561),
    l = n(993365),
    c = n(385499),
    u = n(768581),
    d = n(630388),
    f = n(489863),
    _ = n(713938),
    p = n(981631),
    h = n(182294),
    m = n(388032),
    g = n(441533);
function E(e) {
    let { id: t, user: n, application: E, bot: b, accountScopes: y, showLogout: v, location: O, scopes: I } = e,
        S = u.ZP.getApplicationIconURL({
            id: E.id,
            icon: E.icon
        }),
        T = u.ZP.getUserAvatarURL(n),
        N = i.useMemo(
            () =>
                I.some((e) => (0, _.sg)(e))
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l.x, {
                                  variant: 'text-lg/normal',
                                  color: 'header-secondary',
                                  children: m.NW.string(m.t.uT1CPT)
                              }),
                              (0, r.jsx)(o.X6, {
                                  variant: 'heading-xxl/bold',
                                  color: 'header-primary',
                                  children: E.name
                              })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)(l.x, {
                                  variant: 'text-lg/bold',
                                  color: 'header-primary',
                                  children: [
                                      E.name,
                                      null != b
                                          ? (0, r.jsx)(c.Z, {
                                                className: g.botTag,
                                                verified: null != b.public_flags && (0, d.yE)(b.public_flags, p.xW$.VERIFIED_BOT)
                                            })
                                          : null
                                  ]
                              }),
                              y.length > 0
                                  ? (0, r.jsx)(l.x, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: m.NW.string(m.t.jFbDnJ)
                                    })
                                  : (0, r.jsx)(l.x, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: m.NW.string(m.t['X+Fdpq'])
                                    })
                          ]
                      }),
            [y.length, E, b, I]
        );
    return (0, r.jsxs)('header', {
        id: t,
        className: g.header,
        children: [
            (0, r.jsxs)('div', {
                className: g.headerIcons,
                children: [
                    (0, r.jsx)(a.qE, {
                        className: g.avatar,
                        src: S,
                        size: h.EF.SIZE_80,
                        'aria-label': E.name
                    }),
                    (0, r.jsxs)('div', {
                        className: g.ellipseGroup,
                        children: [(0, r.jsx)('div', { className: g.ellipse }), (0, r.jsx)('div', { className: g.ellipse }), (0, r.jsx)('div', { className: g.ellipse })]
                    }),
                    (0, r.jsx)(a.qE, {
                        className: g.avatar,
                        src: T,
                        size: h.EF.SIZE_80,
                        'aria-label': n.username
                    })
                ]
            }),
            N,
            v
                ? (0, r.jsx)('div', {
                      className: g.currentUser,
                      children: (0, r.jsxs)(l.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          children: [
                              m.NW.format(m.t.qRvpYW, {
                                  userHook: () =>
                                      (0, r.jsxs)(
                                          l.x,
                                          {
                                              className: g.currentUserTag,
                                              variant: 'text-sm/normal',
                                              children: [
                                                  n.username,
                                                  !n.isPomelo() &&
                                                      (0, r.jsx)(l.x, {
                                                          className: g.currentUserDiscriminator,
                                                          variant: 'text-sm/normal',
                                                          children: '#'.concat(n.discriminator)
                                                      })
                                              ]
                                          },
                                          n.id
                                      )
                              }),
                              (0, r.jsx)(s.P, {
                                  tag: 'a',
                                  className: g.logoutLink,
                                  onClick: () => (0, f.c$)(O),
                                  children: m.NW.string(m.t['yV/hjI'])
                              })
                          ]
                      })
                  })
                : null
        ]
    });
}
