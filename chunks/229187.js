t.d(s, { A: () => l });
var n = t(803306),
    i = t(321191);
function l(e, s) {
    if (i.A.isFetchingFriends(e)) return;
    let t = i.A.getMutualFriendsCount(e);
    if (0 === t) return;
    let l = i.A.getMutualFriends(e);
    if (null == t || null == l || l.length !== t) return (0, n.fetchMutualFriends)(e, s);
}
