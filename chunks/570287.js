n.d(e, { A: () => c, q: () => d });
var i = n(17928),
    l = n(800828),
    a = n(857071),
    s = n(885386),
    r = n(495544),
    u = n(696451),
    o = n(994500);
let d = (t, e) => {
    let n = r.default.getId() === t,
        i = null != e && a.A.isLurking(e),
        d = s.$s.getSetting(),
        c = o.A.isFriend(t);
    return (
        (!n && !i && (c || null != u.Ay.memberOf(t).find((t) => !d.includes(t)))) ||
        (l.A.getGameFriendsForUser(t).length > 0 && s.Zk.getSetting())
    );
};
function c(t, e) {
    let n = (0, i.bG)([r.default], () => r.default.getId() === t),
        d = (0, i.bG)([a.A], () => null != e && a.A.isLurking(e)),
        c = s.$s.useSetting();
    return (0, i.bG)(
        [o.A, u.Ay, l.A],
        () =>
            (!n && !d && (o.A.isFriend(t) || null != u.Ay.memberOf(t).find((t) => !c.includes(t)))) ||
            (l.A.getGameFriendsForUser(t).length > 0 && s.Zk.getSetting()),
    );
}
