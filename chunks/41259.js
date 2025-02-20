n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    o = n(793030),
    a = n(974674),
    s = n(1561),
    l = n(993365),
    c = n(870822),
    u = n(385499),
    d = n(768581),
    f = n(630388),
    p = n(489863),
    _ = n(981631),
    h = n(182294),
    m = n(388032),
    g = n(193048);
function E(e) {
    let { id: t, user: n, application: E, bot: v, accountScopes: b, showLogout: y, location: O } = e,
        S = d.ZP.getApplicationIconURL({
            id: E.id,
            icon: E.icon
        }),
        I = d.ZP.getUserAvatarURL(n),
        T = i.useMemo(
            () =>
                (0, c.Z)(E)
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
                                      null != v
                                          ? (0, r.jsx)(u.Z, {
                                                className: g.botTag,
                                                verified: null != v.public_flags && (0, f.yE)(v.public_flags, _.xW$.VERIFIED_BOT)
                                            })
                                          : null
                                  ]
                              }),
                              b.length > 0
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
            [b.length, E, v]
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
                        src: I,
                        size: h.EF.SIZE_80,
                        'aria-label': n.username
                    })
                ]
            }),
            T,
            y
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
                                  onClick: () => (0, p.c$)(O),
                                  children: m.NW.string(m.t['yV/hjI'])
                              })
                          ]
                      })
                  })
                : null
        ]
    });
}
