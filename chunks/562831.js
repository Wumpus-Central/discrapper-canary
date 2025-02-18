n.d(t, { H: () => a });
var i = n(320582),
    r = n(981631);
function a(e) {
    let { userId: t } = e,
        n = (0, i.ML)(t);
    return {
        gameFriends: n,
        hasOutgoingPendingGameFriends: (0, i.N8)(t, r.OGo.PENDING_OUTGOING),
        hasIncomingPendingGameFriends: (0, i.N8)(t, r.OGo.PENDING_INCOMING)
    };
}
