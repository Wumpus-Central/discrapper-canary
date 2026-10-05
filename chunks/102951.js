n.d(t, { J: () => r });
var l = n(922590),
    i = n(652215);
function r(e) {
    let { userId: t } = e,
        n = (0, l.f1)(t);
    return {
        gameFriends: n,
        hasOutgoingPendingGameFriends: (0, l.KL)(t, i.eA$.PENDING_OUTGOING),
        hasIncomingPendingGameFriends: (0, l.KL)(t, i.eA$.PENDING_INCOMING),
    };
}
