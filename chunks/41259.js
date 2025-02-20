n.d(t, { Z: () => g }), n(789020);
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
    p = n(981631),
    _ = n(182294),
    h = n(388032),
    m = n(193048);
function g(e) {
    let { id: t, user: n, application: g, bot: E, accountScopes: v, showLogout: b, location: y } = e,
        O = u.ZP.getApplicationIconURL({
            id: g.id,
            icon: g.icon
        }),
        S = u.ZP.getUserAvatarURL(n),
        I = i.useMemo(() => {
            var e;
            return (0, d.yE)(null !== (e = g.flags) && void 0 !== e ? e : 0, p.udG.SOCIAL_LAYER_INTEGRATION)
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.x, {
                              variant: 'text-lg/normal',
                              color: 'header-secondary',
                              children: h.NW.string(h.t.uT1CPT)
                          }),
                          (0, r.jsx)(o.X6, {
                              variant: 'heading-xxl/bold',
                              color: 'header-primary',
                              children: g.name
                          })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(l.x, {
                              variant: 'text-lg/bold',
                              color: 'header-primary',
                              children: [
                                  g.name,
                                  null != E
                                      ? (0, r.jsx)(c.Z, {
                                            className: m.botTag,
                                            verified: null != E.public_flags && (0, d.yE)(E.public_flags, p.xW$.VERIFIED_BOT)
                                        })
                                      : null
                              ]
                          }),
                          v.length > 0
                              ? (0, r.jsx)(l.x, {
                                    variant: 'text-md/normal',
                                    color: 'header-secondary',
                                    children: h.NW.string(h.t.jFbDnJ)
                                })
                              : (0, r.jsx)(l.x, {
                                    variant: 'text-md/normal',
                                    color: 'header-secondary',
                                    children: h.NW.string(h.t['X+Fdpq'])
                                })
                      ]
                  });
        }, [v.length, g.flags, g.name, E]);
    return (0, r.jsxs)('header', {
        id: t,
        className: m.header,
        children: [
            (0, r.jsxs)('div', {
                className: m.headerIcons,
                children: [
                    (0, r.jsx)(a.qE, {
                        className: m.avatar,
                        src: O,
                        size: _.EF.SIZE_80,
                        'aria-label': g.name
                    }),
                    (0, r.jsxs)('div', {
                        className: m.ellipseGroup,
                        children: [(0, r.jsx)('div', { className: m.ellipse }), (0, r.jsx)('div', { className: m.ellipse }), (0, r.jsx)('div', { className: m.ellipse })]
                    }),
                    (0, r.jsx)(a.qE, {
                        className: m.avatar,
                        src: S,
                        size: _.EF.SIZE_80,
                        'aria-label': n.username
                    })
                ]
            }),
            I,
            b
                ? (0, r.jsx)('div', {
                      className: m.currentUser,
                      children: (0, r.jsxs)(l.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          children: [
                              h.NW.format(h.t.qRvpYW, {
                                  userHook: () =>
                                      (0, r.jsxs)(
                                          l.x,
                                          {
                                              className: m.currentUserTag,
                                              variant: 'text-sm/normal',
                                              children: [
                                                  n.username,
                                                  !n.isPomelo() &&
                                                      (0, r.jsx)(l.x, {
                                                          className: m.currentUserDiscriminator,
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
                                  className: m.logoutLink,
                                  onClick: () => (0, f.c$)(y),
                                  children: h.NW.string(h.t['yV/hjI'])
                              })
                          ]
                      })
                  })
                : null
        ]
    });
}
