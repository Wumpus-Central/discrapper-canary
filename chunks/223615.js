"use strict";
n.d(t, { X: () => o });
var r = n(622543),
    i = n(287809),
    s = n(927578),
    a = n(649032);
function o(e) {
    if (null != e && e.reward_program !== a.W.NITRO) return !1;
    if (e?.program_current_state === a.L.PAYMENT_PROCESSING) return !0;
    let t = i.default.getCurrentUser(),
        n = null != t ? r.A.getUserProfile(t.id)?.premiumSince : null;
    return !((0, s.To)(n) >= 1) && null == e;
}
