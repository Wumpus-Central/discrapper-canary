"use strict";
n.d(t, { F: () => c });
var i = n(17928),
    r = n(166403),
    a = n(532309),
    s = n(440005),
    l = n(26508),
    o = n(150092),
    d = n(892227);
function c(e) {
    let t = e?.location ?? "useNitroProgramReward",
        n = (0, l.DK)(s.W.NITRO, t),
        {
            isReady: c,
            programReward: u,
            totalDays: _,
        } = (0, i.cf)([a.A], () => ({
            isReady: a.A.isReady(),
            programReward: a.A.getRewardForProgram(s.W.NITRO),
            totalDays: a.A.getTotalDaysInDuration(s.W.NITRO),
        })),
        E = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription()?.isPurchasedExternally ?? !1),
        A = (0, o.q)(),
        h = (function (e, t) {
            if (!t || null == e) return !1;
            let n = e.next_reward_date,
                i = e.program_current_state;
            if (null == i) return !1;
            if (null == n || "" === n) {
                if (![s.L.PAYMENT_PROCESSING, s.L.PAYMENT_ERROR].includes(i)) return !1;
            } else {
                let e = new Date(n).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
        })(u, n),
        I = (function (e, t, n) {
            if (!n || null == e || null == t) return !1;
            let i = e.next_reward_date;
            if (null == i || "" === i) return !1;
            let r = new Date(i).getTime();
            return !(Number.isNaN(r) || r <= Date.now() || (0, d.default)(new Date(i), new Date()) > t);
        })(u, _, n);
    return {
        isEligible: n,
        isReady: c,
        passesGeneralUIInvariant: h,
        passesProgressBarInvariant: I,
        programReward: u,
        shouldFetch: A,
        totalDays: _,
        wouldBeEligibleForNitroOrbsButIsExternalSub: n && E,
    };
}
