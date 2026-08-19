"use strict";
n.d(t, { q: () => d });
var i = n(532309),
    r = n(440005),
    a = n(321191),
    s = n(287809),
    l = n(158045),
    o = n(26508);
function d() {
    let e = i.A.shouldFetch();
    return (
        !!e.shouldFetch ||
        (e.reason === i.V.CACHE_SHOULD_NOT_FETCH &&
            !!(function (e) {
                if ((null != e && e.reward_program !== r.W.NITRO) || !(0, o.CC)("shouldAggressivelyFetchNitroRewards"))
                    return !1;
                if (e?.program_current_state === r.L.PAYMENT_PROCESSING) return !0;
                let t = s.default.getCurrentUser(),
                    n = null != t ? a.A.getUserProfile(t.id)?.premiumSince : null;
                return !((0, l.To)(n) >= 1) && null == e;
            })(i.A.getRewardForProgram(r.W.NITRO)))
    );
}
