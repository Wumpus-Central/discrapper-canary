n.d(t, { A: () => l });
var i = n(803306),
    s = n(841595);
function l(e, t) {
    if (s.A.isFetchingFriends(e)) return;
    let n = s.A.getMutualFriendsCount(e);
    if (0 === n) return;
    let l = s.A.getMutualFriends(e);
    if (null == n || null == l || l.length !== n) return (0, i.q0)(e, t);
}
