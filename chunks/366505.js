t.d(n, { F: () => c });
var r = t(17928),
    a = t(166403),
    i = t(532309),
    u = t(440005),
    l = t(26508),
    d = t(150092),
    o = t(892227);
function c(e) {
    let n = e?.location ?? "useNitroProgramReward",
        t = (0, l.DK)(u.W.NITRO, n),
        {
            isReady: c,
            programReward: s,
            totalDays: f,
        } = (0, r.cf)([i.A], () => ({
            isReady: i.A.isReady(),
            programReward: i.A.getRewardForProgram(u.W.NITRO),
            totalDays: i.A.getTotalDaysInDuration(u.W.NITRO),
        })),
        m = (0, r.bG)([a.A], () => a.A.getPremiumTypeSubscription()?.isPurchasedExternally ?? !1),
        p = (0, d.q)(),
        b = (function (e, n) {
            if (!n || null == e) return !1;
            let t = e.next_reward_date,
                r = e.program_current_state;
            if (null == r) return !1;
            if (null == t || "" === t) {
                if (![u.L.PAYMENT_PROCESSING, u.L.PAYMENT_ERROR].includes(r)) return !1;
            } else {
                let e = new Date(t).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
        })(s, t),
        g = (function (e, n, t) {
            if (!t || null == e || null == n) return !1;
            let r = e.next_reward_date;
            if (null == r || "" === r) return !1;
            let a = new Date(r).getTime();
            return !(Number.isNaN(a) || a <= Date.now() || (0, o.default)(new Date(r), new Date()) > n);
        })(s, f, t);
    return {
        isEligible: t,
        isReady: c,
        passesGeneralUIInvariant: b,
        passesProgressBarInvariant: g,
        programReward: s,
        shouldFetch: p,
        totalDays: f,
        wouldBeEligibleForNitroOrbsButIsExternalSub: t && m,
    };
}
