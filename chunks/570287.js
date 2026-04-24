n.d(t, { A: () => u, q: () => d });
var i = n(17928),
    r = n(800828),
    a = n(857071),
    l = n(253932),
    o = n(495544),
    s = n(696451),
    c = n(994500);
let d = (e, t) => {
    let n = o.default.getId() === e,
        i = null != t && a.A.isLurking(t),
        d = l.$s.getSetting(),
        u = c.A.isFriend(e);
    return (
        (!n && !i && (u || null != s.Ay.memberOf(e).find((e) => !d.includes(e)))) ||
        (r.A.getGameFriendsForUser(e).length > 0 && l.Zk.getSetting())
    );
};
function u(e, t) {
    let n = (0, i.bG)([o.default], () => o.default.getId() === e),
        d = (0, i.bG)([a.A], () => null != t && a.A.isLurking(t)),
        u = l.$s.useSetting();
    return (0, i.bG)(
        [c.A, s.Ay, r.A],
        () =>
            (!n && !d && (c.A.isFriend(e) || null != s.Ay.memberOf(e).find((e) => !u.includes(e)))) ||
            (r.A.getGameFriendsForUser(e).length > 0 && l.Zk.getSetting()),
    );
}
