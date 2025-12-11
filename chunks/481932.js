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
    let { user: t, themeType: n } = e,
        { newestAnalyticsLocation: f } = (0, a.ZP)(),
        p = (0, i.e7)([o.default], () => o.default.getId() === t.id),
        _ = (0, i.e7)([s.Z], () => s.Z.getRelationshipType(t.id)),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: h,
            hasIncomingPendingGameFriends: g,
        } = (0, c.H)({ userId: t.id }),
        E = m.length > 0 || h || g;
    if (null == t || t.bot || p || _ === u.OGo.BLOCKED) return null;
    if (_ === u.OGo.NONE && E)
        return n === d.l.MODAL
            ? null
            : (0, r.jsx)(l.xv, {
                  user: t,
                  gameFriends: m,
                  hasOutgoingPendingGameFriends: h,
                  hasIncomingPendingGameFriends: g,
                  analyticsLocation: f,
              });
    switch (_) {
        case u.OGo.FRIEND:
        case u.OGo.PENDING_INCOMING:
        case u.OGo.PENDING_OUTGOING:
            if (n === d.l.MODAL && _ !== u.OGo.FRIEND) return null;
            return (0, r.jsx)(l.Xi, {
                user: t,
                relationshipType: _,
                analyticsLocation: f,
            });
        default:
            if (n === d.l.MODAL) return null;
            return (0, r.jsx)(l.lJ, {
                userId: t.id,
                analyticsLocation: f,
            });
    }
}
