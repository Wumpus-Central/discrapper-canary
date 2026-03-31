n.d(t, { A: () => l });
var i = n(803306),
    a = n(622543);
function l(e, t) {
    if (a.A.isFetchingFriends(e)) return;
    let n = a.A.getMutualFriendsCount(e);
    if (0 === n) return;
    let l = a.A.getMutualFriends(e);
    if (null == n || null == l || l.length !== n) return (0, i.q0)(e, t);
}
