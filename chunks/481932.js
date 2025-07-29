n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(906732),
    o = n(314897),
    s = n(699516),
    l = n(821706),
    c = n(562831),
    u = n(228168),
    d = n(981631);
function _(e) {
    let { user: t, themeType: n, shouldShowTooltip: _ = !1 } = e,
        { newestAnalyticsLocation: f } = (0, a.ZP)(),
        p = (0, i.e7)([o.default], () => o.default.getId() === t.id),
        h = (0, i.e7)([s.Z], () => s.Z.getRelationshipType(t.id)),
        { gameFriends: m, hasOutgoingPendingGameFriends: g, hasIncomingPendingGameFriends: E } = (0, c.H)({ userId: t.id }),
        b = m.length > 0 || g || E;
    if (null == t || t.bot || p || h === d.OGo.BLOCKED) return null;
    if (h === d.OGo.NONE && b)
        return n === u.lY.MODAL
            ? null
            : (0, r.jsx)(l.k9, {
                  type: 'banner',
                  user: t,
                  gameFriends: m,
                  hasOutgoingPendingGameFriends: g,
                  hasIncomingPendingGameFriends: E,
                  analyticsLocation: f,
                  shouldShowTooltip: _
              });
    switch (h) {
        case d.OGo.FRIEND:
        case d.OGo.PENDING_INCOMING:
        case d.OGo.PENDING_OUTGOING:
            if (n === u.lY.MODAL && h !== d.OGo.FRIEND) return null;
            return (0, r.jsx)(l.g, {
                type: 'banner',
                user: t,
                relationshipType: h,
                analyticsLocation: f,
                shouldShowTooltip: _
            });
        default:
            if (n === u.lY.MODAL) return null;
            return (0, r.jsx)(l.Z7, {
                type: 'banner',
                userId: t.id,
                shouldShowTooltip: _,
                analyticsLocation: f
            });
    }
}
