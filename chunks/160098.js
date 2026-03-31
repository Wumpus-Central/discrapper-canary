n.d(t, { q: () => r }), n(321073);
var i = n(64700),
    l = n(429913),
    s = n(322387);
let a = new Set([
    s.Uo.INCOMING_GAME_FRIEND_REQUESTS,
    s.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED,
    s.Uo.INCOMING_FRIEND_REQUESTS,
    s.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED,
]);
function r(e) {
    let t = i.useMemo(() => {
        let t = new Set(),
            n = [];
        return (
            e.forEach((e) => {
                let { applicationId: i, type: l } = e;
                !a.has(l) || null == i || t.has(i) || (t.add(i), n.push(i));
            }),
            n
        );
    }, [e]);
    return (0, l.A)(t);
}
