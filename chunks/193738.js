n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(688810),
    a = n(961350),
    r = n(994500),
    o = n(697250),
    d = n(102951),
    c = n(652215),
    u = n(996988);
function h(e) {
    let { user: t, themeType: n, setFriendRequestSent: h, toastShowing: A } = e,
        { newestAnalyticsLocation: _ } = (0, s.Ay)(),
        m = (0, l.bG)([a.default], () => a.default.getId() === t.id),
        g = (0, l.bG)([r.A], () => r.A.getRelationshipType(t.id)),
        {
            gameFriends: p,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: E,
        } = (0, d.J)({ userId: t.id }),
        x = p.length > 0 || f || E;
    if (null == t || t.bot || m || g === c.eA$.BLOCKED) return null;
    if (g === c.eA$.NONE && x)
        return n === u.d.MODAL
            ? null
            : (0, i.jsx)(o.VI, {
                  user: t,
                  gameFriends: p,
                  hasOutgoingPendingGameFriends: f,
                  hasIncomingPendingGameFriends: E,
                  analyticsLocation: _,
              });
    switch (g) {
        case c.eA$.FRIEND:
        case c.eA$.PENDING_INCOMING:
        case c.eA$.PENDING_OUTGOING:
            if (n === u.d.MODAL && g !== c.eA$.FRIEND) return null;
            return (0, i.jsx)(o.bc, { user: t, relationshipType: g, analyticsLocation: _, toastShowing: A });
        default:
            if (n === u.d.MODAL) return null;
            return (0, i.jsx)(o.SE, { userId: t.id, analyticsLocation: _, setFriendRequestSent: h });
    }
}
