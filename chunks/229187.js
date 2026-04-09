"use strict";
n.d(t, { A: () => a });
var i = n(803306),
    s = n(622543);
function a(e, t) {
    if (s.A.isFetchingFriends(e)) return;
    let n = s.A.getMutualFriendsCount(e);
    if (0 === n) return;
    let a = s.A.getMutualFriends(e);
    if (null == n || null == a || a.length !== n) return (0, i.q0)(e, t);
}
