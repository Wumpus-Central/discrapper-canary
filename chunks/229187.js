n.d(s, { A: () => i });
var l = n(803306),
    t = n(321191);
function i(e, s) {
    if (t.A.isFetchingFriends(e)) return;
    let n = t.A.getMutualFriendsCount(e);
    if (0 === n) return;
    let i = t.A.getMutualFriends(e);
    if (null == n || null == i || i.length !== n) return (0, l.fetchMutualFriends)(e, s);
}
