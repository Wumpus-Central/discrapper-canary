n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(906732),
    o = n(314897),
    s = n(699516),
    l = n(821706),
    c = n(562831),
    u = n(981631),
    d = n(671955);
function f(e) {
    let { user: t, themeType: n, shouldShowTooltip: f = !1 } = e,
        { newestAnalyticsLocation: p } = (0, a.ZP)(),
        _ = (0, i.e7)([o.default], () => o.default.getId() === t.id),
        m = (0, i.e7)([s.Z], () => s.Z.getRelationshipType(t.id)),
        {
            gameFriends: h,
            hasOutgoingPendingGameFriends: g,
            hasIncomingPendingGameFriends: E,
        } = (0, c.H)({ userId: t.id }),
        b = h.length > 0 || g || E;
    if (null == t || t.bot || _ || m === u.OGo.BLOCKED) return null;
    if (m === u.OGo.NONE && b)
        return n === d.l.MODAL
            ? null
            : (0, r.jsx)(l.k9, {
                  type: "banner",
                  user: t,
                  gameFriends: h,
                  hasOutgoingPendingGameFriends: g,
                  hasIncomingPendingGameFriends: E,
                  analyticsLocation: p,
                  shouldShowTooltip: f,
              });
    switch (m) {
        case u.OGo.FRIEND:
        case u.OGo.PENDING_INCOMING:
        case u.OGo.PENDING_OUTGOING:
            if (n === d.l.MODAL && m !== u.OGo.FRIEND) return null;
            return (0, r.jsx)(l.g, {
                type: "banner",
                user: t,
                relationshipType: m,
                analyticsLocation: p,
                shouldShowTooltip: f,
            });
        default:
            if (n === d.l.MODAL) return null;
            return (0, r.jsx)(l.lJ, {
                userId: t.id,
                analyticsLocation: p,
            });
    }
}
