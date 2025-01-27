n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(91896),
    r = n(699516),
    l = n(453542);
function a() {
    return {
        num_friends: r.Z.getFriendCount(),
        num_outgoing_requests: r.Z.getOutgoingCount(),
        num_incoming_requests: r.Z.getPendingCount(),
        num_game_friends: i.Z.getGameFriendCount(),
        num_game_outgoing_requests: i.Z.getPendingOutgoingCount(),
        num_game_incoming_requests: i.Z.getPendingIncomingCount(),
        ...(0, l.X)()
    };
}
