n.d(t, {
    A: () => d,
    q: () => u,
});
var r = n(311907),
    i = n(800828),
    a = n(857071),
    s = n(253932),
    o = n(961350),
    l = n(696451),
    c = n(994500);
let u = (e, t) => {
    let n = o.default.getId() === e,
        r = null != t && a.A.isLurking(t),
        u = s.$s.getSetting(),
        d = c.A.isFriend(e);
    return (
        (!n && !r && (d || null != l.Ay.memberOf(e).find((e) => !u.includes(e)))) ||
        (i.A.getGameFriendsForUser(e).length > 0 && s.Zk.getSetting())
    );
};
function d(e, t) {
    let n = (0, r.bG)([o.default], () => o.default.getId() === e),
        u = (0, r.bG)([a.A], () => null != t && a.A.isLurking(t)),
        d = s.$s.useSetting();
    return (0, r.bG)(
        [c.A, l.Ay, i.A],
        () =>
            (!n && !u && (c.A.isFriend(e) || null != l.Ay.memberOf(e).find((e) => !d.includes(e)))) ||
            (i.A.getGameFriendsForUser(e).length > 0 && s.Zk.getSetting()),
    );
}
