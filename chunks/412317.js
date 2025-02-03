i.d(n, { Z: () => v });
var t = i(200651);
i(192379);
var l = i(481060),
    o = i(194359),
    s = i(906732),
    r = i(372460),
    a = i(475413),
    d = i(934861),
    c = i(156518),
    u = i(690501),
    m = i(562831),
    x = i(981631),
    p = i(388032),
    f = i(997243);
function I(e) {
    let { user: n, analyticsLocation: i, ...l } = e,
        o = (0, c.Y)({
            user: n,
            analyticsLocation: i
        });
    return 0 === o.length
        ? (0, t.jsx)(a.ef, {
              ...l,
              disabled: !0
          })
        : (0, t.jsx)(c.Z, {
              menuItems: o,
              children: (e) =>
                  (0, t.jsx)('div', {
                      ...e,
                      children: (0, t.jsx)(a.ef, { ...l })
                  })
          });
}
function h(e) {
    let { gameFriends: n, hasIncomingPendingGameFriends: i, hasOutgoingPendingGameFriends: o, user: s, analyticsLocation: r } = e,
        {
            onMouseEnter: a,
            ariaLabel: d,
            tooltipText: c
        } = (0, u.N)({
            gameFriends: n,
            hasIncomingPendingGameFriends: i,
            hasOutgoingPendingGameFriends: o
        });
    return (0, t.jsx)(I, {
        tooltipText: c,
        ariaLabel: d,
        icon: l.KED,
        onMouseEnter: a,
        user: s,
        analyticsLocation: r
    });
}
function v(e) {
    let { isCurrentUser: n, user: i, relationshipType: c, friendToken: u, onClose: v } = e,
        { newestAnalyticsLocation: g } = (0, s.ZP)(),
        Z = (0, r.wn)({ location: 'UserProfileModalHeaderActionButtons' }),
        { gameFriends: _, hasOutgoingPendingGameFriends: j, hasIncomingPendingGameFriends: E } = (0, m.H)({ userId: i.id }),
        N = _.length > 0 || j || E;
    return n || c === x.OGo.BLOCKED
        ? null
        : c === x.OGo.FRIEND || i.bot
          ? (0, t.jsx)('div', {
                className: f.multipleButtons,
                children: (0, t.jsx)(d.c, {
                    userId: i.id,
                    onClose: v
                })
            })
          : c === x.OGo.NONE && Z && N
            ? (0, t.jsxs)('div', {
                  className: f.multipleButtons,
                  children: [
                      (0, t.jsx)(h, {
                          user: i,
                          analyticsLocation: g,
                          gameFriends: _,
                          hasIncomingPendingGameFriends: j,
                          hasOutgoingPendingGameFriends: E
                      }),
                      (0, t.jsx)(d.c, {
                          userId: i.id,
                          onClose: v
                      })
                  ]
              })
            : c === x.OGo.PENDING_OUTGOING
              ? (0, t.jsxs)('div', {
                    className: f.multipleButtons,
                    children: [
                        (0, t.jsx)(I, {
                            icon: l.iHX,
                            tooltipText: p.intl.string(p.t.zz2i8v),
                            user: i,
                            analyticsLocation: g
                        }),
                        (0, t.jsx)(d.c, {
                            userId: i.id,
                            onClose: v
                        })
                    ]
                })
              : c === x.OGo.PENDING_INCOMING
                ? (0, t.jsxs)('div', {
                      className: f.multipleButtons,
                      children: [
                          (0, t.jsx)(I, {
                              icon: l.iHX,
                              tooltipText: p.intl.string(p.t.ZOFd1N),
                              user: i,
                              analyticsLocation: g
                          }),
                          (0, t.jsx)(d.c, {
                              userId: i.id,
                              onClose: v
                          })
                      ]
                  })
                : (0, t.jsxs)('div', {
                      className: f.multipleButtons,
                      children: [
                          (0, t.jsx)(d.v, {
                              userId: i.id,
                              onClose: v
                          }),
                          (0, t.jsx)(a.tG, {
                              action: 'SEND_FRIEND_REQUEST',
                              icon: l.oLu,
                              text: p.intl.string(p.t['7815aW']),
                              color: l.zxk.Colors.BRAND,
                              onClick: () => {
                                  o.Z.addRelationship({
                                      userId: i.id,
                                      context: { location: g },
                                      friendToken: u
                                  });
                              }
                          })
                      ]
                  });
}
