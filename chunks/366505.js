t.d(n, { F: () => o });
var r = t(17928),
    a = t(166403),
    i = t(532309),
    _ = t(440005),
    l = t(26508),
    u = t(150092),
    d = t(892227);
function o(e) {
    let n = e?.location ?? "useNitroProgramReward",
        t = (0, l.DK)(_.W.NITRO, n),
        {
            isReady: o,
            programReward: s,
            totalDays: D,
        } = (0, r.cf)([i.A], () => ({
            isReady: i.A.isReady(),
            programReward: i.A.getRewardForProgram(_.W.NITRO),
            totalDays: i.A.getTotalDaysInDuration(_.W.NITRO),
        })),
        R = (0, r.bG)([a.A], () => a.A.getPremiumTypeSubscription()?.isPurchasedExternally ?? !1),
        c = (0, u.q)(),
        I = (function (e, n) {
            if (!n || null == e) return !1;
            let t = e.next_reward_date,
                r = e.program_current_state;
            if (null == r) return !1;
            if (null == t || "" === t) {
                if (![_.L.PAYMENT_PROCESSING, _.L.PAYMENT_ERROR].includes(r)) return !1;
            } else {
                let e = new Date(t).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
        })(s, t),
        C = (function (e, n, t) {
            if (!t || null == e || null == n) return !1;
            let r = e.next_reward_date;
            if (null == r || "" === r) return !1;
            let a = new Date(r).getTime();
            return !(Number.isNaN(a) || a <= Date.now() || (0, d.default)(new Date(r), new Date()) > n);
        })(s, D, t);
    return {
        isEligible: t,
        isReady: o,
        passesGeneralUIInvariant: I,
        passesProgressBarInvariant: C,
        programReward: s,
        shouldFetch: c,
        totalDays: D,
        wouldBeEligibleForNitroOrbsButIsExternalSub: t && R,
    };
}
