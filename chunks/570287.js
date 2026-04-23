"use strict";
n.d(t, { A: () => u, q: () => _ });
var i = n(17928),
    r = n(800828),
    s = n(857071),
    a = n(253932),
    o = n(495544),
    l = n(696451),
    d = n(994500);
let _ = (e, t) => {
    let n = o.default.getId() === e,
        i = null != t && s.A.isLurking(t),
        _ = a.$s.getSetting(),
        u = d.A.isFriend(e);
    return (
        (!n && !i && (u || null != l.Ay.memberOf(e).find((e) => !_.includes(e)))) ||
        (r.A.getGameFriendsForUser(e).length > 0 && a.Zk.getSetting())
    );
};
function u(e, t) {
    let n = (0, i.bG)([o.default], () => o.default.getId() === e),
        _ = (0, i.bG)([s.A], () => null != t && s.A.isLurking(t)),
        u = a.$s.useSetting();
    return (0, i.bG)(
        [d.A, l.Ay, r.A],
        () =>
            (!n && !_ && (d.A.isFriend(e) || null != l.Ay.memberOf(e).find((e) => !u.includes(e)))) ||
            (r.A.getGameFriendsForUser(e).length > 0 && a.Zk.getSetting()),
    );
}
