n.d(t, { A: () => d, q: () => c });
var l = n(17928),
    i = n(800828),
    a = n(857071),
    r = n(885386),
    s = n(280450),
    o = n(696451),
    u = n(994500);
function c(e, t) {
    let n = s.default.getId() === e,
        l = null != t && a.A.isLurking(t),
        c = r.$s.getSetting(),
        d = u.A.isFriend(e);
    return (
        (!n && !l && (d || null != o.Ay.memberOf(e).find((e) => !c.includes(e)))) ||
        (i.A.getGameFriendsForUser(e).length > 0 && r.Zk.getSetting())
    );
}
function d(e, t) {
    let n = (0, l.bG)([s.default], () => s.default.getId() === e),
        c = (0, l.bG)([a.A], () => null != t && a.A.isLurking(t)),
        d = r.$s.useSetting();
    return (0, l.bG)(
        [u.A, o.Ay, i.A],
        () =>
            (!n && !c && (u.A.isFriend(e) || null != o.Ay.memberOf(e).find((e) => !d.includes(e)))) ||
            (i.A.getGameFriendsForUser(e).length > 0 && r.Zk.getSetting()),
    );
}
