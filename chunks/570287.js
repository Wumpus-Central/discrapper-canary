n.d(e, { A: () => d, q: () => c });
var i = n(17928),
    l = n(800828),
    a = n(857071),
    r = n(885386),
    s = n(280450),
    u = n(696451),
    o = n(994500);
function c(t, e) {
    let n = s.default.getId() === t,
        i = null != e && a.A.isLurking(e),
        c = r.$s.getSetting(),
        d = o.A.isFriend(t);
    return (
        (!n && !i && (d || null != u.Ay.memberOf(t).find((t) => !c.includes(t)))) ||
        (l.A.getGameFriendsForUser(t).length > 0 && r.Zk.getSetting())
    );
}
function d(t, e) {
    let n = (0, i.bG)([s.default], () => s.default.getId() === t),
        c = (0, i.bG)([a.A], () => null != e && a.A.isLurking(e)),
        d = r.$s.useSetting();
    return (0, i.bG)(
        [o.A, u.Ay, l.A],
        () =>
            (!n && !c && (o.A.isFriend(t) || null != u.Ay.memberOf(t).find((t) => !d.includes(t)))) ||
            (l.A.getGameFriendsForUser(t).length > 0 && r.Zk.getSetting()),
    );
}
