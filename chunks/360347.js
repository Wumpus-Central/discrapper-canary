n.d(t, { Z: () => l });
var r = n(91896),
    i = n(699516),
    a = n(453542);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            }));
    }
    return e;
}
function l() {
    return s(
        {
            num_friends: i.Z.getFriendCount(),
            num_outgoing_requests: i.Z.getOutgoingCount(),
            num_incoming_requests: i.Z.getPendingCount(),
            num_game_friends: r.Z.getGameFriendCount(),
            num_game_outgoing_requests: r.Z.getPendingOutgoingCount(),
            num_game_incoming_requests: r.Z.getPendingIncomingCount()
        },
        (0, a.X)()
    );
}
