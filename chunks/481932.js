n.d(t, { Z: () => _ });
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
function _(e) {
    let { user: t, friendToken: n, profileType: _, shouldShowTooltip: p = !1 } = e,
        { newestAnalyticsLocation: h } = (0, o.ZP)(),
        m = (0, a.wn)({ location: 'useFriendRequestButtonTooltip' }),
        g = (0, i.e7)([s.default], () => s.default.getId() === t.id),
        E = (0, i.e7)([l.Z], () => l.Z.getRelationshipType(t.id)),
        { gameFriends: b, hasOutgoingPendingGameFriends: y, hasIncomingPendingGameFriends: v } = (0, u.H)({ userId: t.id }),
        O = b.length > 0 || y || v;
    if (null == t || t.bot || g || E === f.OGo.BLOCKED) return null;
    if (E === f.OGo.NONE && m && O)
        return _ === d.y0.FULL_SIZE
            ? null
            : (0, r.jsx)(c.l, {
                  user: t,
                  gameFriends: b,
                  hasOutgoingPendingGameFriends: y,
                  hasIncomingPendingGameFriends: v,
                  analyticsLocation: h,
                  shouldShowTooltip: p
              });
    switch (E) {
        case f.OGo.FRIEND:
        case f.OGo.PENDING_INCOMING:
        case f.OGo.PENDING_OUTGOING:
            if (_ === d.y0.FULL_SIZE && E !== f.OGo.FRIEND) return null;
            return (0, r.jsx)(c.PE, {
                user: t,
                relationshipType: E,
                analyticsLocation: h,
                shouldShowTooltip: p
            });
        default:
            if (_ === d.y0.FULL_SIZE) return null;
            return (0, r.jsx)(c.pM, {
                userId: t.id,
                shouldShowTooltip: p,
                friendToken: n,
                analyticsLocation: h
            });
    }
}
