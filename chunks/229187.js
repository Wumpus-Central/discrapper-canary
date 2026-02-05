n.d(t, { A: () => s });
var i = n(803306),
    l = n(622543);
function s(e, t) {
    if (l.A.isFetchingFriends(e)) return;
    let n = l.A.getMutualFriendsCount(e);
    if (0 === n) return;
    let s = l.A.getMutualFriends(e);
    if (null == n || null == s || s.length !== n) return (0, i.q0)(e, t);
}
