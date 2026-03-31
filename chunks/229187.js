"use strict";
i.d(t, { A: () => a });
var n = i(803306),
    s = i(622543);
function a(e, t) {
    if (s.A.isFetchingFriends(e)) return;
    let i = s.A.getMutualFriendsCount(e);
    if (0 === i) return;
    let a = s.A.getMutualFriends(e);
    if (null == i || null == a || a.length !== i) return (0, n.q0)(e, t);
}
