n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(906732),
    a = n(314897),
    s = n(699516),
    l = n(821706),
    c = n(562831),
    u = n(228168),
    d = n(981631);
function f(e) {
    let { user: t, friendToken: n, themeType: f, shouldShowTooltip: _ = !1 } = e,
        { newestAnalyticsLocation: p } = (0, o.ZP)(),
        h = (0, i.e7)([a.default], () => a.default.getId() === t.id),
        m = (0, i.e7)([s.Z], () => s.Z.getRelationshipType(t.id)),
        { gameFriends: g, hasOutgoingPendingGameFriends: E, hasIncomingPendingGameFriends: b } = (0, c.H)({ userId: t.id }),
        y = g.length > 0 || E || b;
    if (null == t || t.bot || h || m === d.OGo.BLOCKED) return null;
    if (m === d.OGo.NONE && y)
        return f === u.lY.MODAL
            ? null
            : (0, r.jsx)(l.k9, {
                  type: 'banner',
                  user: t,
                  gameFriends: g,
                  hasOutgoingPendingGameFriends: E,
                  hasIncomingPendingGameFriends: b,
                  analyticsLocation: p,
                  shouldShowTooltip: _
              });
    switch (m) {
        case d.OGo.FRIEND:
        case d.OGo.PENDING_INCOMING:
        case d.OGo.PENDING_OUTGOING:
            if (f === u.lY.MODAL && m !== d.OGo.FRIEND) return null;
            return (0, r.jsx)(l.g, {
                type: 'banner',
                user: t,
                relationshipType: m,
                analyticsLocation: p,
                shouldShowTooltip: _
            });
        default:
            if (f === u.lY.MODAL) return null;
            return (0, r.jsx)(l.Z7, {
                type: 'banner',
                userId: t.id,
                shouldShowTooltip: _,
                friendToken: n,
                analyticsLocation: p
            });
    }
}
