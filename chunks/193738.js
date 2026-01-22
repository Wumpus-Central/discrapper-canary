n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(688810),
    s = n(961350),
    o = n(994500),
    l = n(697250),
    c = n(102951),
    u = n(652215),
    d = n(996988);
function f(e) {
    let { user: t, themeType: n } = e,
        { newestAnalyticsLocation: f } = (0, a.Ay)(),
        p = (0, i.bG)([s.default], () => s.default.getId() === t.id),
        _ = (0, i.bG)([o.A], () => o.A.getRelationshipType(t.id)),
        {
            gameFriends: h,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: g,
        } = (0, c.J)({ userId: t.id }),
        E = h.length > 0 || m || g;
    if (null == t || t.bot || p || _ === u.eA$.BLOCKED) return null;
    if (_ === u.eA$.NONE && E)
        return n === d.d.MODAL
            ? null
            : (0, r.jsx)(l.VI, {
                  user: t,
                  gameFriends: h,
                  hasOutgoingPendingGameFriends: m,
                  hasIncomingPendingGameFriends: g,
                  analyticsLocation: f,
              });
    switch (_) {
        case u.eA$.FRIEND:
        case u.eA$.PENDING_INCOMING:
        case u.eA$.PENDING_OUTGOING:
            if (n === d.d.MODAL && _ !== u.eA$.FRIEND) return null;
            return (0, r.jsx)(l.bc, {
                user: t,
                relationshipType: _,
                analyticsLocation: f,
            });
        default:
            if (n === d.d.MODAL) return null;
            return (0, r.jsx)(l.SE, {
                userId: t.id,
                analyticsLocation: f,
            });
    }
}
