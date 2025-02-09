t.d(n, { Z: () => h });
var i = t(200651);
t(192379);
var l = t(481060),
    o = t(194359),
    s = t(906732),
    r = t(372460),
    a = t(475413),
    d = t(934861),
    c = t(156518),
    u = t(690501),
    I = t(562831),
    f = t(981631),
    p = t(388032),
    x = t(101197);
function _(e) {
    let { user: n, analyticsLocation: t, ...l } = e,
        o = (0, c.Y)({
            user: n,
            analyticsLocation: t
        });
    return 0 === o.length
        ? (0, i.jsx)(a.ef, {
              ...l,
              disabled: !0
          })
        : (0, i.jsx)(c.Z, {
              menuItems: o,
              children: (e) =>
                  (0, i.jsx)('div', {
                      ...e,
                      children: (0, i.jsx)(a.ef, { ...l })
                  })
          });
}
function m(e) {
    let { gameFriends: n, hasIncomingPendingGameFriends: t, hasOutgoingPendingGameFriends: o, user: s, analyticsLocation: r } = e,
        {
            onMouseEnter: a,
            ariaLabel: d,
            tooltipText: c
        } = (0, u.N)({
            gameFriends: n,
            hasIncomingPendingGameFriends: t,
            hasOutgoingPendingGameFriends: o
        });
    return (0, i.jsx)(_, {
        tooltipText: c,
        ariaLabel: d,
        icon: l.KED,
        onMouseEnter: a,
        user: s,
        analyticsLocation: r
    });
}
function h(e) {
    let { isCurrentUser: n, user: t, relationshipType: c, friendToken: u, onClose: h } = e,
        { newestAnalyticsLocation: Z } = (0, s.ZP)(),
        v = (0, r.wn)({ location: 'UserProfileModalHeaderActionButtons' }),
        { gameFriends: g, hasOutgoingPendingGameFriends: j, hasIncomingPendingGameFriends: E } = (0, I.H)({ userId: t.id }),
        y = g.length > 0 || j || E;
    return n || c === f.OGo.BLOCKED
        ? null
        : c === f.OGo.FRIEND || t.bot
          ? (0, i.jsx)('div', {
                className: x.multipleButtons,
                children: (0, i.jsx)(d.c, {
                    userId: t.id,
                    onClose: h
                })
            })
          : c === f.OGo.NONE && v && y
            ? (0, i.jsxs)('div', {
                  className: x.multipleButtons,
                  children: [
                      (0, i.jsx)(m, {
                          user: t,
                          analyticsLocation: Z,
                          gameFriends: g,
                          hasIncomingPendingGameFriends: E,
                          hasOutgoingPendingGameFriends: j
                      }),
                      (0, i.jsx)(d.c, {
                          userId: t.id,
                          onClose: h
                      })
                  ]
              })
            : c === f.OGo.PENDING_OUTGOING
              ? (0, i.jsxs)('div', {
                    className: x.multipleButtons,
                    children: [
                        (0, i.jsx)(_, {
                            icon: l.iHX,
                            tooltipText: p.intl.string(p.t.zz2i8v),
                            user: t,
                            analyticsLocation: Z
                        }),
                        (0, i.jsx)(d.c, {
                            userId: t.id,
                            onClose: h
                        })
                    ]
                })
              : c === f.OGo.PENDING_INCOMING
                ? (0, i.jsxs)('div', {
                      className: x.multipleButtons,
                      children: [
                          (0, i.jsx)(_, {
                              icon: l.iHX,
                              tooltipText: p.intl.string(p.t.ZOFd1N),
                              user: t,
                              analyticsLocation: Z
                          }),
                          (0, i.jsx)(d.c, {
                              userId: t.id,
                              onClose: h
                          })
                      ]
                  })
                : (0, i.jsxs)('div', {
                      className: x.multipleButtons,
                      children: [
                          (0, i.jsx)(d.v, {
                              userId: t.id,
                              onClose: h
                          }),
                          (0, i.jsx)(a.tG, {
                              action: 'SEND_FRIEND_REQUEST',
                              icon: l.oLu,
                              text: p.intl.string(p.t['7815aW']),
                              color: l.zxk.Colors.BRAND,
                              onClick: () => {
                                  o.Z.addRelationship({
                                      userId: t.id,
                                      context: { location: Z },
                                      friendToken: u
                                  });
                              }
                          })
                      ]
                  });
}
