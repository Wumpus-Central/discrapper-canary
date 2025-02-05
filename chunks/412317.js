t.d(n, { Z: () => v });
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
    m = t(562831),
    x = t(981631),
    p = t(388032),
    I = t(997243);
function f(e) {
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
function h(e) {
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
    return (0, i.jsx)(f, {
        tooltipText: c,
        ariaLabel: d,
        icon: l.KED,
        onMouseEnter: a,
        user: s,
        analyticsLocation: r
    });
}
function v(e) {
    let { isCurrentUser: n, user: t, relationshipType: c, friendToken: u, onClose: v } = e,
        { newestAnalyticsLocation: Z } = (0, s.ZP)(),
        g = (0, r.wn)({ location: 'UserProfileModalHeaderActionButtons' }),
        { gameFriends: _, hasOutgoingPendingGameFriends: j, hasIncomingPendingGameFriends: E } = (0, m.H)({ userId: t.id }),
        N = _.length > 0 || j || E;
    return n || c === x.OGo.BLOCKED
        ? null
        : c === x.OGo.FRIEND || t.bot
          ? (0, i.jsx)('div', {
                className: I.multipleButtons,
                children: (0, i.jsx)(d.c, {
                    userId: t.id,
                    onClose: v
                })
            })
          : c === x.OGo.NONE && g && N
            ? (0, i.jsxs)('div', {
                  className: I.multipleButtons,
                  children: [
                      (0, i.jsx)(h, {
                          user: t,
                          analyticsLocation: Z,
                          gameFriends: _,
                          hasIncomingPendingGameFriends: E,
                          hasOutgoingPendingGameFriends: j
                      }),
                      (0, i.jsx)(d.c, {
                          userId: t.id,
                          onClose: v
                      })
                  ]
              })
            : c === x.OGo.PENDING_OUTGOING
              ? (0, i.jsxs)('div', {
                    className: I.multipleButtons,
                    children: [
                        (0, i.jsx)(f, {
                            icon: l.iHX,
                            tooltipText: p.intl.string(p.t.zz2i8v),
                            user: t,
                            analyticsLocation: Z
                        }),
                        (0, i.jsx)(d.c, {
                            userId: t.id,
                            onClose: v
                        })
                    ]
                })
              : c === x.OGo.PENDING_INCOMING
                ? (0, i.jsxs)('div', {
                      className: I.multipleButtons,
                      children: [
                          (0, i.jsx)(f, {
                              icon: l.iHX,
                              tooltipText: p.intl.string(p.t.ZOFd1N),
                              user: t,
                              analyticsLocation: Z
                          }),
                          (0, i.jsx)(d.c, {
                              userId: t.id,
                              onClose: v
                          })
                      ]
                  })
                : (0, i.jsxs)('div', {
                      className: I.multipleButtons,
                      children: [
                          (0, i.jsx)(d.v, {
                              userId: t.id,
                              onClose: v
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
