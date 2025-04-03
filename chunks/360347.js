n.d(t, { Z: () => a });
var r = n(91896),
    i = n(699516),
    l = n(453542);
function a() {
    return (function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            'function' == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                )),
                r.forEach(function (t) {
                    var r;
                    (r = n[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[t] = r);
                });
        }
        return e;
    })(
        {
            num_friends: i.Z.getFriendCount(),
            num_outgoing_requests: i.Z.getOutgoingCount(),
            num_incoming_requests: i.Z.getPendingCount(),
            num_game_friends: r.Z.getGameFriendCount(),
            num_game_outgoing_requests: r.Z.getPendingOutgoingCount(),
            num_game_incoming_requests: r.Z.getPendingIncomingCount()
        },
        (0, l.X)()
    );
}
