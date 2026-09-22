n.d(s, { A: () => l });
var t = n(803306),
    i = n(321191);
function l(e, s) {
    if (i.A.isFetchingFriends(e)) return;
    let n = i.A.getMutualFriendsCount(e);
    if (0 === n) return;
    let l = i.A.getMutualFriends(e);
    if (null == n || null == l || l.length !== n) return (0, t.q0)(e, s);
}
