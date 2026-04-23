n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(688810),
    r = n(495544),
    a = n(994500),
    o = n(573355),
    d = n(102951),
    c = n(652215),
    u = n(996988);
function h(e) {
    let { user: t, themeType: n, setFriendRequestSent: h, toastShowing: A } = e,
        { newestAnalyticsLocation: _ } = (0, s.Ay)(),
        g = (0, l.bG)([r.default], () => r.default.getId() === t.id),
        m = (0, l.bG)([a.A], () => a.A.getRelationshipType(t.id)),
        {
            gameFriends: p,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: E,
        } = (0, d.J)({ userId: t.id }),
        C = p.length > 0 || f || E;
    if (null == t || t.bot || g || m === c.eA$.BLOCKED) return null;
    if (m === c.eA$.NONE && C)
        return n === u.d.MODAL
            ? null
            : (0, i.jsx)(o.VI, {
                  user: t,
                  gameFriends: p,
                  hasOutgoingPendingGameFriends: f,
                  hasIncomingPendingGameFriends: E,
                  analyticsLocation: _,
              });
    switch (m) {
        case c.eA$.FRIEND:
        case c.eA$.PENDING_INCOMING:
        case c.eA$.PENDING_OUTGOING:
            if (n === u.d.MODAL && m !== c.eA$.FRIEND) return null;
            return (0, i.jsx)(o.bc, { user: t, relationshipType: m, analyticsLocation: _, toastShowing: A });
        default:
            if (n === u.d.MODAL) return null;
            return (0, i.jsx)(o.SE, { userId: t.id, analyticsLocation: _, setFriendRequestSent: h });
    }
}
