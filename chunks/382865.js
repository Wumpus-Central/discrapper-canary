n.d(t, { c: () => s }), n(47120), n(653041);
var i = n(192379),
    l = n(835473),
    a = n(497089);
let r = new Set([a.O7.INCOMING_GAME_FRIEND_REQUESTS, a.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, a.O7.INCOMING_FRIEND_REQUESTS, a.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED]);
function s(e) {
    let t = i.useMemo(() => {
        let t = new Set(),
            n = [];
        return (
            e.forEach((e) => {
                let { applicationId: i, type: l } = e;
                r.has(l) && (null == i || t.has(i) || (t.add(i), n.push(i)));
            }),
            n
        );
    }, [e]);
    return (0, l.Z)(t);
}
