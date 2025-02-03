n.d(t, { H: () => s });
var i = n(442837),
    r = n(91896),
    a = n(320582);
function s(e) {
    let { userId: t } = e,
        n = (0, a.ML)(t);
    return {
        gameFriends: n,
        hasOutgoingPendingGameFriends: (0, i.e7)([r.Z], () => r.Z.getPendingOutgoingCount() > 0),
        hasIncomingPendingGameFriends: (0, i.e7)([r.Z], () => r.Z.getPendingIncomingCount() > 0)
    };
}
