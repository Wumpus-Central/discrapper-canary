t.d(n, { Z: () => f });
var i = t(200651);
t(192379);
var o = t(481060),
    l = t(906732),
    r = t(705556),
    s = t(30556),
    a = t(821706),
    c = t(562831),
    d = t(981631),
    u = t(887910);
function f(e) {
    let { user: n, currentUser: t, guildId: f, relationshipType: p, friendToken: m, onClose: h } = e,
        { newestAnalyticsLocation: x } = (0, l.ZP)(),
        { gameFriends: I, hasOutgoingPendingGameFriends: j, hasIncomingPendingGameFriends: v } = (0, c.H)({ userId: n.id });
    if (p === d.OGo.BLOCKED) return null;
    if (n.id === t.id)
        return (0, i.jsx)('div', {
            className: u.container,
            children: (0, i.jsx)(r.Z, {
                user: n,
                guildId: f,
                onClose: h
            })
        });
    if (p === d.OGo.FRIEND || n.bot)
        return (0, i.jsx)('div', {
            className: u.container,
            children: (0, i.jsx)(s.Z, {
                type: 'text',
                userId: n.id,
                onClose: h,
                autoFocus: !0
            })
        });
    if (p === d.OGo.PENDING_OUTGOING || p === d.OGo.PENDING_INCOMING)
        return (0, i.jsxs)('div', {
            className: u.container,
            children: [
                (0, i.jsx)(a.g, {
                    type: 'icon',
                    user: n,
                    relationshipType: p,
                    shouldShowTooltip: !0,
                    analyticsLocation: x
                }),
                (0, i.jsx)(s.Z, {
                    type: 'text',
                    userId: n.id,
                    onClose: h,
                    autoFocus: !0
                })
            ]
        });
    let b = I.length > 0 || j || v;
    return p === d.OGo.NONE && b
        ? (0, i.jsxs)('div', {
              className: u.container,
              children: [
                  (0, i.jsx)(a.k9, {
                      type: 'icon',
                      user: n,
                      analyticsLocation: x,
                      gameFriends: I,
                      shouldShowTooltip: !0,
                      hasIncomingPendingGameFriends: v,
                      hasOutgoingPendingGameFriends: j
                  }),
                  (0, i.jsx)(s.Z, {
                      type: 'text',
                      userId: n.id,
                      onClose: h,
                      autoFocus: !0
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: u.container,
              children: [
                  (0, i.jsx)(s.Z, {
                      type: 'icon',
                      userId: n.id,
                      onClose: h
                  }),
                  (0, i.jsx)(a.Z7, {
                      type: 'text',
                      userId: n.id,
                      friendToken: m,
                      color: o.zxk.Colors.BRAND,
                      analyticsLocation: x,
                      autoFocus: !0
                  })
              ]
          });
}
