n.d(t, { J: () => r });
var i = n(922590),
    l = n(652215);
function r(e) {
    let { userId: t } = e,
        n = (0, i.f1)(t);
    return {
        gameFriends: n,
        hasOutgoingPendingGameFriends: (0, i.KL)(t, l.eA$.PENDING_OUTGOING),
        hasIncomingPendingGameFriends: (0, i.KL)(t, l.eA$.PENDING_INCOMING),
    };
}
