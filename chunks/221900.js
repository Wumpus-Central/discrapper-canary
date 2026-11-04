n.d(t, { A: () => o });
var i = n(290863),
    r = n(994500),
    a = n(652215),
    s = n(800828),
    l = n(660387);
function o() {
    return {
        num_friends: r.A.getFriendCount(),
        ...(function () {
            let e = 0,
                t = 0,
                n = 0;
            for (let s of r.A.getFriendIDs())
                switch (i.A.getStatus(s)) {
                    case a.clD.ONLINE:
                        e++;
                        break;
                    case a.clD.IDLE:
                        t++;
                        break;
                    case a.clD.DND:
                        n++;
                }
            return { num_friends_online: e, num_friends_idle: t, num_friends_dnd: n };
        })(),
        num_outgoing_requests: r.A.getOutgoingCount(),
        num_incoming_requests: r.A.getPendingCount(),
        num_game_friends: s.A.getGameFriendCount(),
        num_game_outgoing_requests: s.A.getPendingOutgoingCount(),
        num_game_incoming_requests: s.A.getPendingIncomingCount(),
        ...(0, l.F)(),
    };
}
