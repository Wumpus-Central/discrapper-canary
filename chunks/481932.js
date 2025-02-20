n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(906732),
    a = n(372460),
    s = n(314897),
    l = n(699516),
    c = n(821706),
    u = n(562831),
    d = n(228168),
    f = n(981631);
function p(e) {
    let { user: t, friendToken: n, profileType: p, shouldShowTooltip: _ = !1 } = e,
        { newestAnalyticsLocation: h } = (0, o.ZP)(),
        m = (0, a.wn)({ location: 'useFriendRequestButtonTooltip' }),
        g = (0, i.e7)([s.default], () => s.default.getId() === t.id),
        E = (0, i.e7)([l.Z], () => l.Z.getRelationshipType(t.id)),
        { gameFriends: v, hasOutgoingPendingGameFriends: b, hasIncomingPendingGameFriends: y } = (0, u.H)({ userId: t.id }),
        O = v.length > 0 || b || y;
    if (null == t || t.bot || g || E === f.OGo.BLOCKED) return null;
    if (E === f.OGo.NONE && m && O)
        return p === d.y0.FULL_SIZE
            ? null
            : (0, r.jsx)(c.l, {
                  user: t,
                  gameFriends: v,
                  hasOutgoingPendingGameFriends: b,
                  hasIncomingPendingGameFriends: y,
                  analyticsLocation: h,
                  shouldShowTooltip: _
              });
    switch (E) {
        case f.OGo.FRIEND:
        case f.OGo.PENDING_INCOMING:
        case f.OGo.PENDING_OUTGOING:
            if (p === d.y0.FULL_SIZE && E !== f.OGo.FRIEND) return null;
            return (0, r.jsx)(c.PE, {
                user: t,
                relationshipType: E,
                analyticsLocation: h,
                shouldShowTooltip: _
            });
        default:
            if (p === d.y0.FULL_SIZE) return null;
            return (0, r.jsx)(c.pM, {
                userId: t.id,
                shouldShowTooltip: _,
                friendToken: n,
                analyticsLocation: h
            });
    }
}
