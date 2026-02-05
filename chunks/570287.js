"use strict";
n.d(t, { A: () => d, q: () => c });
var r = n(311907),
    i = n(800828),
    a = n(857071),
    s = n(253932),
    o = n(961350),
    l = n(696451),
    u = n(994500);
let c = (e, t) => {
    let n = o.default.getId() === e,
        r = null != t && a.A.isLurking(t),
        c = s.$s.getSetting(),
        d = u.A.isFriend(e);
    return (
        (!n && !r && (d || null != l.Ay.memberOf(e).find((e) => !c.includes(e)))) ||
        (i.A.getGameFriendsForUser(e).length > 0 && s.Zk.getSetting())
    );
};
function d(e, t) {
    let n = (0, r.bG)([o.default], () => o.default.getId() === e),
        c = (0, r.bG)([a.A], () => null != t && a.A.isLurking(t)),
        d = s.$s.useSetting();
    return (0, r.bG)(
        [u.A, l.Ay, i.A],
        () =>
            (!n && !c && (u.A.isFriend(e) || null != l.Ay.memberOf(e).find((e) => !d.includes(e)))) ||
            (i.A.getGameFriendsForUser(e).length > 0 && s.Zk.getSetting()),
    );
}
