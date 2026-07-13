n.d(t, { A: () => u, q: () => c });
var i = n(17928),
    l = n(800828),
    s = n(857071),
    a = n(885386),
    r = n(280450),
    o = n(696451),
    d = n(994500);
function c(e, t) {
    let n = r.default.getId() === e,
        i = null != t && s.A.isLurking(t),
        c = a.$s.getSetting(),
        u = d.A.isFriend(e);
    return (
        (!n && !i && (u || null != o.Ay.memberOf(e).find((e) => !c.includes(e)))) ||
        (l.A.getGameFriendsForUser(e).length > 0 && a.Zk.getSetting())
    );
}
function u(e, t) {
    let n = (0, i.bG)([r.default], () => r.default.getId() === e),
        c = (0, i.bG)([s.A], () => null != t && s.A.isLurking(t)),
        u = a.$s.useSetting();
    return (0, i.bG)(
        [d.A, o.Ay, l.A],
        () =>
            (!n && !c && (d.A.isFriend(e) || null != o.Ay.memberOf(e).find((e) => !u.includes(e)))) ||
            (l.A.getGameFriendsForUser(e).length > 0 && a.Zk.getSetting()),
    );
}
