t.d(r, { F: () => R });
var n = t(17928),
    _ = t(166403),
    a = t(532309),
    i = t(440005),
    l = t(26508),
    u = t(150092),
    o = t(892227);
function R(e) {
    let r = e?.location ?? "useNitroProgramReward",
        t = (0, l.DK)(i.W.NITRO, r),
        {
            isReady: R,
            programReward: D,
            totalDays: s,
        } = (0, n.cf)([a.A], () => ({
            isReady: a.A.isReady(),
            programReward: a.A.getRewardForProgram(i.W.NITRO),
            totalDays: a.A.getTotalDaysInDuration(i.W.NITRO),
        })),
        d = (0, n.bG)([_.A], () => _.A.getPremiumTypeSubscription()?.isPurchasedExternally ?? !1),
        I = (0, u.q)(),
        c = (function (e, r) {
            if (!r || null == e) return !1;
            let t = e.next_reward_date,
                n = e.program_current_state;
            if (null == n) return !1;
            if (null == t || "" === t) {
                if (![i.L.PAYMENT_PROCESSING, i.L.PAYMENT_ERROR].includes(n)) return !1;
            } else {
                let e = new Date(t).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
        })(D, t),
        E = (function (e, r, t) {
            if (!t || null == e || null == r) return !1;
            let n = e.next_reward_date;
            if (null == n || "" === n) return !1;
            let _ = new Date(n).getTime();
            return !(Number.isNaN(_) || _ <= Date.now() || (0, o.default)(new Date(n), new Date()) > r);
        })(D, s, t);
    return {
        isEligible: t,
        isReady: R,
        passesGeneralUIInvariant: c,
        passesProgressBarInvariant: E,
        programReward: D,
        shouldFetch: I,
        totalDays: s,
        wouldBeEligibleForNitroOrbsButIsExternalSub: t && d,
    };
}
