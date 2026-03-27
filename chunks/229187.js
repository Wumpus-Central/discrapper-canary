n.d(t, { A: () => a });
var i = n(803306),
    l = n(622543);
function a(e, t) {
    if (l.A.isFetchingFriends(e)) return;
    let n = l.A.getMutualFriendsCount(e);
    if (0 === n) return;
    let a = l.A.getMutualFriends(e);
    if (null == n || null == a || a.length !== n) return (0, i.q0)(e, t);
}
