"use strict";
n.d(t, { q: () => u });
var i = n(532309),
    r = n(636592),
    s = n(841595),
    a = n(287809),
    o = n(428262),
    l = n(51935);
function u() {
    let e = i.A.shouldFetch();
    return (
        !!e.shouldFetch ||
        (e.reason === i.V.CACHE_SHOULD_NOT_FETCH &&
            !!(function (e) {
                if ((null != e && e.reward_program !== r.W.NITRO) || !(0, l.CC)("shouldAggressivelyFetchNitroRewards"))
                    return !1;
                if (e?.program_current_state === r.L.PAYMENT_PROCESSING) return !0;
                let t = a.default.getCurrentUser(),
                    n = null != t ? s.A.getUserProfile(t.id)?.premiumSince : null;
                return !((0, o.To)(n) >= 1) && null == e;
            })(i.A.getRewardForProgram(r.W.NITRO)))
    );
}
