i.d(l, { A: () => n });
var a = i(803306),
    s = i(321191);
function n(e, l) {
    if (s.A.isFetchingFriends(e)) return;
    let i = s.A.getMutualFriendsCount(e);
    if (0 === i) return;
    let n = s.A.getMutualFriends(e);
    if (null == i || null == n || n.length !== i) return (0, a.q0)(e, l);
}
