n.d(t, { Z: () => g }), n(789020);
var i = n(200651),
    r = n(192379),
    a = n(793030),
    s = n(974674),
    o = n(1561),
    l = n(993365),
    u = n(385499),
    c = n(768581),
    d = n(630388),
    f = n(489863),
    _ = n(981631),
    p = n(182294),
    h = n(388032),
    m = n(180223);
function g(e) {
    let { id: t, user: n, application: g, bot: E, accountScopes: v, showLogout: y, location: I } = e,
        T = c.ZP.getApplicationIconURL({
            id: g.id,
            icon: g.icon
        }),
        b = c.ZP.getUserAvatarURL(n),
        S = r.useMemo(() => {
            var e;
            return (0, d.yE)(null !== (e = g.flags) && void 0 !== e ? e : 0, _.udG.SOCIAL_LAYER_INTEGRATION)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(l.x, {
                              variant: 'text-lg/normal',
                              color: 'header-secondary',
                              children: h.intl.string(h.t.uT1CPT)
                          }),
                          (0, i.jsx)(a.X6, {
                              variant: 'heading-xxl/bold',
                              color: 'header-primary',
                              children: g.name
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)(l.x, {
                              variant: 'text-lg/bold',
                              color: 'header-primary',
                              children: [
                                  g.name,
                                  null != E
                                      ? (0, i.jsx)(u.Z, {
                                            className: m.botTag,
                                            verified: null != E.public_flags && (0, d.yE)(E.public_flags, _.xW$.VERIFIED_BOT)
                                        })
                                      : null
                              ]
                          }),
                          v.length > 0
                              ? (0, i.jsx)(l.x, {
                                    variant: 'text-md/normal',
                                    color: 'header-secondary',
                                    children: h.intl.string(h.t.jFbDnJ)
                                })
                              : (0, i.jsx)(l.x, {
                                    variant: 'text-md/normal',
                                    color: 'header-secondary',
                                    children: h.intl.string(h.t['X+Fdpq'])
                                })
                      ]
                  });
        }, [v.length, g.flags, g.name, E]);
    return (0, i.jsxs)('header', {
        id: t,
        className: m.header,
        children: [
            (0, i.jsxs)('div', {
                className: m.headerIcons,
                children: [
                    (0, i.jsx)(s.qE, {
                        className: m.avatar,
                        src: T,
                        size: p.EF.SIZE_80,
                        'aria-label': g.name
                    }),
                    (0, i.jsxs)('div', {
                        className: m.ellipseGroup,
                        children: [(0, i.jsx)('div', { className: m.ellipse }), (0, i.jsx)('div', { className: m.ellipse }), (0, i.jsx)('div', { className: m.ellipse })]
                    }),
                    (0, i.jsx)(s.qE, {
                        className: m.avatar,
                        src: b,
                        size: p.EF.SIZE_80,
                        'aria-label': n.username
                    })
                ]
            }),
            S,
            y
                ? (0, i.jsx)('div', {
                      className: m.currentUser,
                      children: (0, i.jsxs)(l.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          children: [
                              h.intl.format(h.t.qRvpYW, {
                                  userHook: () =>
                                      (0, i.jsxs)(
                                          l.x,
                                          {
                                              className: m.currentUserTag,
                                              variant: 'text-sm/normal',
                                              children: [
                                                  n.username,
                                                  !n.isPomelo() &&
                                                      (0, i.jsx)(l.x, {
                                                          className: m.currentUserDiscriminator,
                                                          variant: 'text-sm/normal',
                                                          children: '#'.concat(n.discriminator)
                                                      })
                                              ]
                                          },
                                          n.id
                                      )
                              }),
                              (0, i.jsx)(o.P, {
                                  tag: 'a',
                                  className: m.logoutLink,
                                  onClick: () => (0, f.c$)(I),
                                  children: h.intl.string(h.t['yV/hjI'])
                              })
                          ]
                      })
                  })
                : null
        ]
    });
}
