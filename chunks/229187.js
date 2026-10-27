i.d(l, { A: () => a });
var t = i(803306),
    n = i(321191);
function a(e, l) {
    if (n.A.isFetchingFriends(e)) return;
    let i = n.A.getMutualFriendsCount(e);
    if (0 === i) return;
    let a = n.A.getMutualFriends(e);
    if (null == i || null == a || a.length !== i) return (0, t.q0)(e, l);
}
