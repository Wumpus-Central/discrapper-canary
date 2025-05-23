t.d(n, { Z: () => p });
var o = t(255367);
t(73800);
var i = t(481060),
    c = t(572691),
    r = t(906732),
    a = t(705556),
    l = t(30556),
    d = t(821706),
    s = t(562831),
    u = t(981631),
    f = t(887910);
function p(e) {
    let { user: n, currentUser: t, guildId: p, relationshipType: _, onClose: m } = e,
        { newestAnalyticsLocation: b } = (0, r.ZP)(),
        { gameFriends: I, hasOutgoingPendingGameFriends: h, hasIncomingPendingGameFriends: y } = (0, s.H)({ userId: n.id });
    if (_ === u.OGo.BLOCKED) return null;
    if (n.id === t.id)
        return (0, o.jsx)('div', {
            className: f.container,
            children: (0, o.jsx)(a.Z, {
                user: n,
                guildId: p,
                onClose: m
            })
        });
    if (_ === u.OGo.FRIEND || n.bot)
        return (0, o.jsx)('div', {
            className: f.container,
            children: (0, o.jsx)(l.Z, {
                type: 'text',
                userId: n.id,
                onClose: c.Z.popAll,
                autoFocus: !0
            })
        });
    if (_ === u.OGo.PENDING_OUTGOING || _ === u.OGo.PENDING_INCOMING)
        return (0, o.jsxs)('div', {
            className: f.container,
            children: [
                (0, o.jsx)(d.g, {
                    type: 'icon',
                    user: n,
                    relationshipType: _,
                    shouldShowTooltip: !0,
                    analyticsLocation: b
                }),
                (0, o.jsx)(l.Z, {
                    type: 'text',
                    userId: n.id,
                    onClose: c.Z.popAll,
                    autoFocus: !0
                })
            ]
        });
    let x = I.length > 0 || h || y;
    return _ === u.OGo.NONE && x
        ? (0, o.jsxs)('div', {
              className: f.container,
              children: [
                  (0, o.jsx)(d.k9, {
                      type: 'icon',
                      user: n,
                      analyticsLocation: b,
                      gameFriends: I,
                      shouldShowTooltip: !0,
                      hasIncomingPendingGameFriends: y,
                      hasOutgoingPendingGameFriends: h
                  }),
                  (0, o.jsx)(l.Z, {
                      type: 'text',
                      userId: n.id,
                      onClose: c.Z.popAll,
                      autoFocus: !0
                  })
              ]
          })
        : (0, o.jsxs)('div', {
              className: f.container,
              children: [
                  (0, o.jsx)(l.Z, {
                      type: 'icon',
                      userId: n.id,
                      onClose: c.Z.popAll
                  }),
                  (0, o.jsx)(d.Z7, {
                      type: 'text',
                      userId: n.id,
                      color: i.zxk.Colors.BRAND,
                      analyticsLocation: b,
                      autoFocus: !0
                  })
              ]
          });
}
