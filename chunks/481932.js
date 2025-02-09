n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(906732),
    s = n(372460),
    o = n(314897),
    l = n(699516),
    u = n(821706),
    c = n(562831),
    d = n(228168),
    f = n(981631);
function _(e) {
    let { user: t, friendToken: n, profileType: _, shouldShowTooltip: p = !1 } = e,
        { newestAnalyticsLocation: h } = (0, a.ZP)(),
        m = (0, s.wn)({ location: 'useFriendRequestButtonTooltip' }),
        g = (0, r.e7)([o.default], () => o.default.getId() === t.id),
        E = (0, r.e7)([l.Z], () => l.Z.getRelationshipType(t.id)),
        { gameFriends: v, hasOutgoingPendingGameFriends: y, hasIncomingPendingGameFriends: I } = (0, c.H)({ userId: t.id }),
        T = v.length > 0 || y || I;
    if (null == t || t.bot || g || E === f.OGo.BLOCKED) return null;
    if (E === f.OGo.NONE && m && T)
        return _ === d.y0.FULL_SIZE
            ? null
            : (0, i.jsx)(u.l, {
                  user: t,
                  gameFriends: v,
                  hasOutgoingPendingGameFriends: y,
                  hasIncomingPendingGameFriends: I,
                  analyticsLocation: h,
                  shouldShowTooltip: p
              });
    switch (E) {
        case f.OGo.FRIEND:
        case f.OGo.PENDING_INCOMING:
        case f.OGo.PENDING_OUTGOING:
            if (_ === d.y0.FULL_SIZE && E !== f.OGo.FRIEND) return null;
            return (0, i.jsx)(u.PE, {
                user: t,
                relationshipType: E,
                analyticsLocation: h,
                shouldShowTooltip: p
            });
        default:
            if (_ === d.y0.FULL_SIZE) return null;
            return (0, i.jsx)(u.pM, {
                userId: t.id,
                shouldShowTooltip: p,
                friendToken: n,
                analyticsLocation: h
            });
    }
}
