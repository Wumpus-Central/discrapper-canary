"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(688810),
    s = n(961350),
    o = n(994500),
    l = n(697250),
    u = n(102951),
    c = n(652215),
    d = n(996988);
function _(e) {
    let { user: t, themeType: n } = e,
        { newestAnalyticsLocation: _ } = (0, a.Ay)(),
        f = (0, i.bG)([s.default], () => s.default.getId() === t.id),
        p = (0, i.bG)([o.A], () => o.A.getRelationshipType(t.id)),
        {
            gameFriends: h,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: g,
        } = (0, u.J)({ userId: t.id }),
        E = h.length > 0 || m || g;
    if (null == t || t.bot || f || p === c.eA$.BLOCKED) return null;
    if (p === c.eA$.NONE && E)
        return n === d.d.MODAL
            ? null
            : (0, r.jsx)(l.VI, {
                  user: t,
                  gameFriends: h,
                  hasOutgoingPendingGameFriends: m,
                  hasIncomingPendingGameFriends: g,
                  analyticsLocation: _,
              });
    switch (p) {
        case c.eA$.FRIEND:
        case c.eA$.PENDING_INCOMING:
        case c.eA$.PENDING_OUTGOING:
            if (n === d.d.MODAL && p !== c.eA$.FRIEND) return null;
            return (0, r.jsx)(l.bc, { user: t, relationshipType: p, analyticsLocation: _ });
        default:
            if (n === d.d.MODAL) return null;
            return (0, r.jsx)(l.SE, { userId: t.id, analyticsLocation: _ });
    }
}
