i.d(s, { A: () => t });
var a = i(803306),
    n = i(321191);
function t(e, s) {
    if (n.A.isFetchingFriends(e)) return;
    let i = n.A.getMutualFriendsCount(e);
    if (0 === i) return;
    let t = n.A.getMutualFriends(e);
    if (null == i || null == t || t.length !== i) return (0, a.fetchMutualFriends)(e, s);
}
