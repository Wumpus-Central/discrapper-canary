n.d(t, { c: () => o }), n(388685), n(539854);
var r = n(73800),
    i = n(835473),
    l = n(497089);
let a = new Set([l.O7.INCOMING_GAME_FRIEND_REQUESTS, l.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, l.O7.INCOMING_FRIEND_REQUESTS, l.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED]);
function o(e) {
    let t = r.useMemo(() => {
        let t = new Set(),
            n = [];
        return (
            e.forEach((e) => {
                let { applicationId: r, type: i } = e;
                a.has(i) && (null == r || t.has(r) || (t.add(r), n.push(r)));
            }),
            n
        );
    }, [e]);
    return (0, i.Z)(t);
}
