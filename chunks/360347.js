n.d(t, { Z: () => a });
var i = n(91896),
    l = n(699516),
    r = n(453542);
function a() {
    return {
        num_friends: l.Z.getFriendCount(),
        num_outgoing_requests: l.Z.getOutgoingCount(),
        num_incoming_requests: l.Z.getPendingCount(),
        num_game_friends: i.Z.getGameFriendCount(),
        num_game_outgoing_requests: i.Z.getPendingOutgoingCount(),
        num_game_incoming_requests: i.Z.getPendingIncomingCount(),
        ...(0, r.X)()
    };
}
