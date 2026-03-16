"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(688810),
    a = n(961350),
    o = n(994500),
    l = n(697250),
    u = n(102951),
    c = n(652215),
    d = n(996988);
function _(e) {
    let { user: t, themeType: n, setFriendRequestSent: _, toastShowing: f } = e,
        { newestAnalyticsLocation: p } = (0, s.Ay)(),
        h = (0, i.bG)([a.default], () => a.default.getId() === t.id),
        m = (0, i.bG)([o.A], () => o.A.getRelationshipType(t.id)),
        {
            gameFriends: E,
            hasOutgoingPendingGameFriends: g,
            hasIncomingPendingGameFriends: A,
        } = (0, u.J)({ userId: t.id }),
        I = E.length > 0 || g || A;
    if (null == t || t.bot || h || m === c.eA$.BLOCKED) return null;
    if (m === c.eA$.NONE && I)
        return n === d.d.MODAL
            ? null
            : (0, r.jsx)(l.VI, {
                  user: t,
                  gameFriends: E,
                  hasOutgoingPendingGameFriends: g,
                  hasIncomingPendingGameFriends: A,
                  analyticsLocation: p,
              });
    switch (m) {
        case c.eA$.FRIEND:
        case c.eA$.PENDING_INCOMING:
        case c.eA$.PENDING_OUTGOING:
            if (n === d.d.MODAL && m !== c.eA$.FRIEND) return null;
            return (0, r.jsx)(l.bc, { user: t, relationshipType: m, analyticsLocation: p, toastShowing: f });
        default:
            if (n === d.d.MODAL) return null;
            return (0, r.jsx)(l.SE, { userId: t.id, analyticsLocation: p, setFriendRequestSent: _ });
    }
}
