n.d(t, { q: () => r }), n(321073);
var s = n(64700),
    a = n(429913),
    l = n(322387);
let i = new Set([
    l.Uo.INCOMING_GAME_FRIEND_REQUESTS,
    l.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED,
    l.Uo.INCOMING_FRIEND_REQUESTS,
    l.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED,
]);
function r(e) {
    let t = s.useMemo(() => {
        let t = new Set(),
            n = [];
        return (
            e.forEach((e) => {
                let { applicationId: s, type: a } = e;
                !i.has(a) || null == s || t.has(s) || (t.add(s), n.push(s));
            }),
            n
        );
    }, [e]);
    return (0, a.A)(t);
}
