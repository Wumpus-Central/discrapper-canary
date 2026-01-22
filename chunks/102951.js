n.d(t, { J: () => a });
var r = n(922590),
    i = n(652215);
function a(e) {
    let { userId: t } = e,
        n = (0, r.f1)(t);
    return {
        gameFriends: n,
        hasOutgoingPendingGameFriends: (0, r.KL)(t, i.eA$.PENDING_OUTGOING),
        hasIncomingPendingGameFriends: (0, r.KL)(t, i.eA$.PENDING_INCOMING),
    };
}
