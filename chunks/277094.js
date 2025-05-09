t.d(n, { Z: () => f });
var o = t(255367);
t(73800);
var c = t(481060),
    i = t(906732),
    r = t(705556),
    a = t(30556),
    d = t(821706),
    l = t(562831),
    s = t(981631),
    u = t(887910);
function f(e) {
    let { user: n, currentUser: t, guildId: f, relationshipType: _, friendToken: p, onClose: b } = e,
        { newestAnalyticsLocation: m } = (0, i.ZP)(),
        { gameFriends: I, hasOutgoingPendingGameFriends: y, hasIncomingPendingGameFriends: h } = (0, l.H)({ userId: n.id });
    if (_ === s.OGo.BLOCKED) return null;
    if (n.id === t.id)
        return (0, o.jsx)('div', {
            className: u.container,
            children: (0, o.jsx)(r.Z, {
                user: n,
                guildId: f,
                onClose: b
            })
        });
    if (_ === s.OGo.FRIEND || n.bot)
        return (0, o.jsx)('div', {
            className: u.container,
            children: (0, o.jsx)(a.Z, {
                type: 'text',
                userId: n.id,
                onClose: b,
                autoFocus: !0
            })
        });
    if (_ === s.OGo.PENDING_OUTGOING || _ === s.OGo.PENDING_INCOMING)
        return (0, o.jsxs)('div', {
            className: u.container,
            children: [
                (0, o.jsx)(d.g, {
                    type: 'icon',
                    user: n,
                    relationshipType: _,
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
    let x = I.length > 0 || y || h;
    return _ === s.OGo.NONE && x
        ? (0, o.jsxs)('div', {
              className: u.container,
              children: [
                  (0, o.jsx)(d.k9, {
                      type: 'icon',
                      user: n,
                      analyticsLocation: m,
                      gameFriends: I,
                      shouldShowTooltip: !0,
                      hasIncomingPendingGameFriends: h,
                      hasOutgoingPendingGameFriends: y
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
                  (0, o.jsx)(d.Z7, {
                      type: 'text',
                      userId: n.id,
                      friendToken: p,
                      color: c.zxk.Colors.BRAND,
                      analyticsLocation: m,
                      autoFocus: !0
                  })
              ]
          });
}
