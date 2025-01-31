n.d(t, { H: () => s });
var i = n(442837),
    r = n(91896),
    a = n(981631);
function s(e) {
    let { userId: t } = e,
        n = (0, i.Wu)([r.Z], () => r.Z.getGameRelationshipsForUserOfType(t, a.OGo.FRIEND));
    return {
        gameFriends: n,
        hasOutgoingPendingGameFriends: (0, i.e7)([r.Z], () => r.Z.getGameRelationshipsForUserOfType(t, a.OGo.PENDING_OUTGOING).length > 0),
        hasIncomingPendingGameFriends: (0, i.e7)([r.Z], () => r.Z.getGameRelationshipsForUserOfType(t, a.OGo.PENDING_INCOMING).length > 0)
    };
}
