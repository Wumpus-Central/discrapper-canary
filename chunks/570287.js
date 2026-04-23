"use strict";
n.d(t, { A: () => d, q: () => c });
var r = n(311907),
    i = n(800828),
    s = n(857071),
    a = n(253932),
    o = n(961350),
    l = n(696451),
    u = n(994500);
let c = (e, t) => {
    let n = o.default.getId() === e,
        r = null != t && s.A.isLurking(t),
        c = a.$s.getSetting(),
        d = u.A.isFriend(e);
    return (
        (!n && !r && (d || null != l.Ay.memberOf(e).find((e) => !c.includes(e)))) ||
        (i.A.getGameFriendsForUser(e).length > 0 && a.Zk.getSetting())
    );
};
function d(e, t) {
    let n = (0, r.bG)([o.default], () => o.default.getId() === e),
        c = (0, r.bG)([s.A], () => null != t && s.A.isLurking(t)),
        d = a.$s.useSetting();
    return (0, r.bG)(
        [u.A, l.Ay, i.A],
        () =>
            (!n && !c && (u.A.isFriend(e) || null != l.Ay.memberOf(e).find((e) => !d.includes(e)))) ||
            (i.A.getGameFriendsForUser(e).length > 0 && a.Zk.getSetting()),
    );
}
