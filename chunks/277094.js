t.d(n, { Z: () => f });
var o = t(200651);
t(192379);
var i = t(481060),
    c = t(906732),
    r = t(705556),
    a = t(30556),
    l = t(821706),
    d = t(562831),
    s = t(981631),
    u = t(887910);
function f(e) {
    let { user: n, currentUser: t, guildId: f, relationshipType: p, friendToken: _, onClose: b } = e,
        { newestAnalyticsLocation: m } = (0, c.ZP)(),
        { gameFriends: I, hasOutgoingPendingGameFriends: h, hasIncomingPendingGameFriends: y } = (0, d.H)({ userId: n.id });
    if (p === s.OGo.BLOCKED) return null;
    if (n.id === t.id)
        return (0, o.jsx)('div', {
            className: u.container,
            children: (0, o.jsx)(r.Z, {
                user: n,
                guildId: f,
                onClose: b
            })
        });
    if (p === s.OGo.FRIEND || n.bot)
        return (0, o.jsx)('div', {
            className: u.container,
            children: (0, o.jsx)(a.Z, {
                type: 'text',
                userId: n.id,
                onClose: b,
                autoFocus: !0
            })
        });
    if (p === s.OGo.PENDING_OUTGOING || p === s.OGo.PENDING_INCOMING)
        return (0, o.jsxs)('div', {
            className: u.container,
            children: [
                (0, o.jsx)(l.g, {
                    type: 'icon',
                    user: n,
                    relationshipType: p,
                    shouldShowTooltip: !0,
                    analyticsLocation: m
                }),
                (0, o.jsx)(a.Z, {
                    type: 'text',
                    userId: n.id,
                    onClose: b,
                    autoFocus: !0
                })
            ]
        });
    let x = I.length > 0 || h || y;
    return p === s.OGo.NONE && x
        ? (0, o.jsxs)('div', {
              className: u.container,
              children: [
                  (0, o.jsx)(l.k9, {
                      type: 'icon',
                      user: n,
                      analyticsLocation: m,
                      gameFriends: I,
                      shouldShowTooltip: !0,
                      hasIncomingPendingGameFriends: y,
                      hasOutgoingPendingGameFriends: h
                  }),
                  (0, o.jsx)(a.Z, {
                      type: 'text',
                      userId: n.id,
                      onClose: b,
                      autoFocus: !0
                  })
              ]
          })
        : (0, o.jsxs)('div', {
              className: u.container,
              children: [
                  (0, o.jsx)(a.Z, {
                      type: 'icon',
                      userId: n.id,
                      onClose: b
                  }),
                  (0, o.jsx)(l.Z7, {
                      type: 'text',
                      userId: n.id,
                      friendToken: _,
                      color: i.zxk.Colors.BRAND,
                      analyticsLocation: m,
                      autoFocus: !0
                  })
              ]
          });
}
