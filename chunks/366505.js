"use strict";
n.d(t, { F: () => c });
var i = n(17928),
    r = n(166403),
    s = n(532309),
    a = n(636592),
    o = n(26508),
    l = n(150092),
    u = n(892227);
function c(e) {
    let t = e?.location ?? "useNitroProgramReward",
        n = (0, o.DK)(a.W.NITRO, t),
        {
            isReady: c,
            programReward: d,
            totalDays: _,
        } = (0, i.cf)([s.A], () => ({
            isReady: s.A.isReady(),
            programReward: s.A.getRewardForProgram(a.W.NITRO),
            totalDays: s.A.getTotalDaysInDuration(a.W.NITRO),
        })),
        f = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription()?.isPurchasedExternally ?? !1),
        h = (0, l.q)(),
        p = (function (e, t) {
            if (!t || null == e) return !1;
            let n = e.next_reward_date,
                i = e.program_current_state;
            if (null == i) return !1;
            if (null == n || "" === n) {
                if (![a.L.PAYMENT_PROCESSING, a.L.PAYMENT_ERROR].includes(i)) return !1;
            } else {
                let e = new Date(n).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
        })(d, n),
        E = (function (e, t, n) {
            if (!n || null == e || null == t) return !1;
            let i = e.next_reward_date;
            if (null == i || "" === i) return !1;
            let r = new Date(i).getTime();
            return !(Number.isNaN(r) || r <= Date.now() || (0, u.default)(new Date(i), new Date()) > t);
        })(d, _, n);
    return {
        isEligible: n,
        isReady: c,
        passesGeneralUIInvariant: p,
        passesProgressBarInvariant: E,
        programReward: d,
        shouldFetch: h,
        totalDays: _,
        wouldBeEligibleForNitroOrbsButIsExternalSub: n && f,
    };
}
