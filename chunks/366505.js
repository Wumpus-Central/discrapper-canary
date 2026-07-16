i.d(t, { F: () => c });
var r = i(17928),
    n = i(166403),
    s = i(532309),
    a = i(440005),
    l = i(26508),
    o = i(150092),
    d = i(892227);
function c(e) {
    let t = e?.location ?? "useNitroProgramReward",
        i = (0, l.DK)(a.W.NITRO, t),
        {
            isReady: c,
            programReward: u,
            totalDays: m,
        } = (0, r.cf)([s.A], () => ({
            isReady: s.A.isReady(),
            programReward: s.A.getRewardForProgram(a.W.NITRO),
            totalDays: s.A.getTotalDaysInDuration(a.W.NITRO),
        })),
        p = (0, r.bG)([n.A], () => n.A.getPremiumTypeSubscription()?.isPurchasedExternally ?? !1),
        f = (0, o.q)(),
        b = (function (e, t) {
            if (!t || null == e) return !1;
            let i = e.next_reward_date,
                r = e.program_current_state;
            if (null == r) return !1;
            if (null == i || "" === i) {
                if (![a.L.PAYMENT_PROCESSING, a.L.PAYMENT_ERROR].includes(r)) return !1;
            } else {
                let e = new Date(i).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
        })(u, i),
        h = (function (e, t, i) {
            if (!i || null == e || null == t) return !1;
            let r = e.next_reward_date;
            if (null == r || "" === r) return !1;
            let n = new Date(r).getTime();
            return !(Number.isNaN(n) || n <= Date.now() || (0, d.default)(new Date(r), new Date()) > t);
        })(u, m, i);
    return {
        isEligible: i,
        isReady: c,
        passesGeneralUIInvariant: b,
        passesProgressBarInvariant: h,
        programReward: u,
        shouldFetch: f,
        totalDays: m,
        wouldBeEligibleForNitroOrbsButIsExternalSub: i && p,
    };
}
