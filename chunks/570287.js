"use strict";
n.d(t, { A: () => u, q: () => c });
var i = n(17928),
    r = n(800828),
    a = n(857071),
    s = n(885386),
    l = n(280450),
    o = n(696451),
    d = n(994500);
function c(e, t) {
    let n = l.default.getId() === e,
        i = null != t && a.A.isLurking(t),
        c = s.$s.getSetting(),
        u = d.A.isFriend(e);
    return (
        (!n && !i && (u || null != o.Ay.memberOf(e).find((e) => !c.includes(e)))) ||
        (r.A.getGameFriendsForUser(e).length > 0 && s.Zk.getSetting())
    );
}
function u(e, t) {
    let n = (0, i.bG)([l.default], () => l.default.getId() === e),
        c = (0, i.bG)([a.A], () => null != t && a.A.isLurking(t)),
        u = s.$s.useSetting();
    return (0, i.bG)(
        [d.A, o.Ay, r.A],
        () =>
            (!n && !c && (d.A.isFriend(e) || null != o.Ay.memberOf(e).find((e) => !u.includes(e)))) ||
            (r.A.getGameFriendsForUser(e).length > 0 && s.Zk.getSetting()),
    );
}
