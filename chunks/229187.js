t.d(l, { A: () => i });
var s = t(803306),
    n = t(321191);
function i(e, l) {
    if (n.A.isFetchingFriends(e)) return;
    let t = n.A.getMutualFriendsCount(e);
    if (0 === t) return;
    let i = n.A.getMutualFriends(e);
    if (null == t || null == i || i.length !== t) return (0, s.q0)(e, l);
}
