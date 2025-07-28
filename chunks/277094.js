t.d(n, { Z: () => f });
var o = t(255367);
t(73800);
var c = t(755721),
    i = t(572691),
    a = t(906732),
    r = t(705556),
    d = t(30556),
    l = t(821706),
    s = t(562831),
    u = t(981631),
    _ = t(887910);
function f(e) {
    let { user: n, currentUser: t, guildId: f, relationshipType: p, onClose: m } = e,
        { newestAnalyticsLocation: I } = (0, a.ZP)(),
        { gameFriends: h, hasOutgoingPendingGameFriends: x, hasIncomingPendingGameFriends: b } = (0, s.H)({ userId: n.id });
    if (p === u.OGo.BLOCKED) return null;
    if (n.id === t.id)
        return (0, o.jsx)('div', {
            className: _.container,
            children: (0, o.jsx)(r.Z, {
                user: n,
                guildId: f,
                onClose: m
            })
        });
    if (p === u.OGo.FRIEND || n.bot)
        return (0, o.jsx)('div', {
            className: _.container,
            children: (0, o.jsx)(d.Z, {
                type: 'text',
                userId: n.id,
                onClose: i.Z.popAll,
                autoFocus: !0
            })
        });
    if (p === u.OGo.PENDING_OUTGOING || p === u.OGo.PENDING_INCOMING)
        return (0, o.jsxs)('div', {
            className: _.container,
            children: [
                (0, o.jsx)(l.g, {
                    type: 'icon',
                    user: n,
                    relationshipType: p,
                    shouldShowTooltip: !0,
                    analyticsLocation: I
                }),
                (0, o.jsx)(d.Z, {
                    type: 'text',
                    userId: n.id,
                    onClose: i.Z.popAll,
                    autoFocus: !0
                })
            ]
        });
    let y = h.length > 0 || x || b;
    return p === u.OGo.NONE && y
        ? (0, o.jsxs)('div', {
              className: _.container,
              children: [
                  (0, o.jsx)(l.k9, {
                      type: 'icon',
                      user: n,
                      analyticsLocation: I,
                      gameFriends: h,
                      shouldShowTooltip: !0,
                      hasIncomingPendingGameFriends: b,
                      hasOutgoingPendingGameFriends: x
                  }),
                  (0, o.jsx)(d.Z, {
                      type: 'text',
                      userId: n.id,
                      onClose: i.Z.popAll,
                      autoFocus: !0
                  })
              ]
          })
        : (0, o.jsxs)('div', {
              className: _.container,
              children: [
                  (0, o.jsx)(d.Z, {
                      type: 'icon',
                      userId: n.id,
                      onClose: i.Z.popAll
                  }),
                  (0, o.jsx)(l.Z7, {
                      type: 'text',
                      userId: n.id,
                      color: c.zx.Colors.BRAND,
                      analyticsLocation: I,
                      autoFocus: !0
                  })
              ]
          });
}
