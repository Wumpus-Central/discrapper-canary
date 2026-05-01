"use strict";
n.d(t, { A: () => d, q: () => c });
var i = n(17928),
    r = n(800828),
    s = n(857071),
    a = n(885386),
    o = n(495544),
    l = n(696451),
    u = n(994500);
let c = (e, t) => {
    let n = o.default.getId() === e,
        i = null != t && s.A.isLurking(t),
        c = a.$s.getSetting(),
        d = u.A.isFriend(e);
    return (
        (!n && !i && (d || null != l.Ay.memberOf(e).find((e) => !c.includes(e)))) ||
        (r.A.getGameFriendsForUser(e).length > 0 && a.Zk.getSetting())
    );
};
function d(e, t) {
    let n = (0, i.bG)([o.default], () => o.default.getId() === e),
        c = (0, i.bG)([s.A], () => null != t && s.A.isLurking(t)),
        d = a.$s.useSetting();
    return (0, i.bG)(
        [u.A, l.Ay, r.A],
        () =>
            (!n && !c && (u.A.isFriend(e) || null != l.Ay.memberOf(e).find((e) => !d.includes(e)))) ||
            (r.A.getGameFriendsForUser(e).length > 0 && a.Zk.getSetting()),
    );
}
