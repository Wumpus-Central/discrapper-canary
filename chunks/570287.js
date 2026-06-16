n.d(t, { A: () => d, q: () => c });
var i = n(17928),
    l = n(800828),
    a = n(857071),
    r = n(885386),
    s = n(495544),
    u = n(696451),
    o = n(994500);
let c = (e, t) => {
    let n = s.default.getId() === e,
        i = null != t && a.A.isLurking(t),
        c = r.$s.getSetting(),
        d = o.A.isFriend(e);
    return (
        (!n && !i && (d || null != u.Ay.memberOf(e).find((e) => !c.includes(e)))) ||
        (l.A.getGameFriendsForUser(e).length > 0 && r.Zk.getSetting())
    );
};
function d(e, t) {
    let n = (0, i.bG)([s.default], () => s.default.getId() === e),
        c = (0, i.bG)([a.A], () => null != t && a.A.isLurking(t)),
        d = r.$s.useSetting();
    return (0, i.bG)(
        [o.A, u.Ay, l.A],
        () =>
            (!n && !c && (o.A.isFriend(e) || null != u.Ay.memberOf(e).find((e) => !d.includes(e)))) ||
            (l.A.getGameFriendsForUser(e).length > 0 && r.Zk.getSetting()),
    );
}
