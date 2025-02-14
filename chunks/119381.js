n.d(t, { y: () => r }), n(47120), n(653041);
var i = n(192379),
    l = n(497089);
let a = new Set([l.O7.INCOMING_GAME_FRIEND_REQUESTS, l.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, l.O7.INCOMING_FRIEND_REQUESTS, l.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED]);
function r(e) {
    return i.useMemo(() => {
        let t = new Set(),
            n = [];
        return (
            e.forEach((e) => {
                let { applicationId: i, type: l } = e;
                a.has(l) && (null == i || t.has(i) || (t.add(i), n.push(i)));
            }),
            n
        );
    }, [e]);
}
