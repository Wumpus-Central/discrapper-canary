t.d(n, { Z: () => f });
var o = t(255367);
t(73800);
var c = t(481060),
    i = t(906732),
    r = t(705556),
    a = t(30556),
    l = t(821706),
    d = t(562831),
    s = t(981631),
    u = t(887910);
function f(e) {
    let { user: n, currentUser: t, guildId: f, relationshipType: p, onClose: _ } = e,
        { newestAnalyticsLocation: m } = (0, i.ZP)(),
        { gameFriends: b, hasOutgoingPendingGameFriends: I, hasIncomingPendingGameFriends: h } = (0, d.H)({ userId: n.id });
    if (p === s.OGo.BLOCKED) return null;
    if (n.id === t.id)
        return (0, o.jsx)('div', {
            className: u.container,
            children: (0, o.jsx)(r.Z, {
                user: n,
                guildId: f,
                onClose: _
            })
        });
    if (p === s.OGo.FRIEND || n.bot)
        return (0, o.jsx)('div', {
            className: u.container,
            children: (0, o.jsx)(a.Z, {
                type: 'text',
                userId: n.id,
                onClose: _,
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
                    onClose: _,
                    autoFocus: !0
                })
            ]
        });
    let y = b.length > 0 || I || h;
    return p === s.OGo.NONE && y
        ? (0, o.jsxs)('div', {
              className: u.container,
              children: [
                  (0, o.jsx)(l.k9, {
                      type: 'icon',
                      user: n,
                      analyticsLocation: m,
                      gameFriends: b,
                      shouldShowTooltip: !0,
                      hasIncomingPendingGameFriends: h,
                      hasOutgoingPendingGameFriends: I
                  }),
                  (0, o.jsx)(a.Z, {
                      type: 'text',
                      userId: n.id,
                      onClose: _,
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
                      onClose: _
                  }),
                  (0, o.jsx)(l.Z7, {
                      type: 'text',
                      userId: n.id,
                      color: c.zxk.Colors.BRAND,
                      analyticsLocation: m,
                      autoFocus: !0
                  })
              ]
          });
}
