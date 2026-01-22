n.d(t, {
    q: () => s,
}),
    n(896048),
    n(321073);
var r = n(64700),
    l = n(429913),
    i = n(322387);
let a = new Set([
    i.Uo.INCOMING_GAME_FRIEND_REQUESTS,
    i.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED,
    i.Uo.INCOMING_FRIEND_REQUESTS,
    i.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED,
]);

function s(e) {
    let t = r.useMemo(() => {
        let t = new Set(),
            n = [];
        return (
            e.forEach((e) => {
                let { applicationId: r, type: l } = e;
                !a.has(l) || null == r || t.has(r) || (t.add(r), n.push(r));
            }),
            n
        );
    }, [e]);
    return (0, l.A)(t);
}
