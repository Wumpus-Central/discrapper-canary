n.d(t, {
    A: () => i,
});
var r = n(803306),
    l = n(622543);

function i(e, t) {
    if (l.A.isFetchingFriends(e)) return;
    let n = l.A.getMutualFriendsCount(e);
    if (0 === n) return;
    let i = l.A.getMutualFriends(e);
    if (null == n || null == i || i.length !== n) return (0, r.q0)(e, t);
}
