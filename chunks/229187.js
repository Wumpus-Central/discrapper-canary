i.d(s, { A: () => t });
var n = i(803306),
    a = i(321191);
function t(e, s) {
    if (a.A.isFetchingFriends(e)) return;
    let i = a.A.getMutualFriendsCount(e);
    if (0 === i) return;
    let t = a.A.getMutualFriends(e);
    if (null == i || null == t || t.length !== i) return (0, n.fetchMutualFriends)(e, s);
}
