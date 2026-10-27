i.d(l, { A: () => t });
var a = i(803306),
    s = i(321191);
function t(e, l) {
    if (s.A.isFetchingFriends(e)) return;
    let i = s.A.getMutualFriendsCount(e);
    if (0 === i) return;
    let t = s.A.getMutualFriends(e);
    if (null == i || null == t || t.length !== i) return (0, a.q0)(e, l);
}
