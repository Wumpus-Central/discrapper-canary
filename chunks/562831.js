n.d(t, { H: () => o });
var r = n(320582),
    i = n(981631);
function o(e) {
    let { userId: t } = e,
        n = (0, r.ML)(t);
    return {
        gameFriends: n,
        hasOutgoingPendingGameFriends: (0, r.N8)(t, i.OGo.PENDING_OUTGOING),
        hasIncomingPendingGameFriends: (0, r.N8)(t, i.OGo.PENDING_INCOMING)
    };
}
