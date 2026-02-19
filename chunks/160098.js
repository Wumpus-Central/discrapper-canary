"use strict";
n.d(t, { q: () => a }), n(321073);
var i = n(64700),
    s = n(429913),
    l = n(322387);
let r = new Set([
    l.Uo.INCOMING_GAME_FRIEND_REQUESTS,
    l.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED,
    l.Uo.INCOMING_FRIEND_REQUESTS,
    l.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED,
]);
function a(e) {
    let t = i.useMemo(() => {
        let t = new Set(),
            n = [];
        return (
            e.forEach((e) => {
                let { applicationId: i, type: s } = e;
                !r.has(s) || null == i || t.has(i) || (t.add(i), n.push(i));
            }),
            n
        );
    }, [e]);
    return (0, s.A)(t);
}
