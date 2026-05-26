i.d(t, { F: () => c });
var r = i(17928),
    l = i(166403),
    a = i(532309),
    s = i(440005),
    n = i(49132),
    o = i(150092),
    d = i(892227);
function c(e) {
    let t = e?.location ?? "useNitroProgramReward",
        i = (0, n.DK)(s.W.NITRO, t),
        {
            isReady: c,
            programReward: u,
            totalDays: m,
        } = (0, r.cf)([a.A], () => ({
            isReady: a.A.isReady(),
            programReward: a.A.getRewardForProgram(s.W.NITRO),
            totalDays: a.A.getTotalDaysInDuration(s.W.NITRO),
        })),
        h = (0, r.bG)([l.A], () => l.A.getPremiumTypeSubscription()?.isPurchasedExternally ?? !1),
        C = (0, o.q)(),
        p = (function (e, t) {
            if (!t || null == e) return !1;
            let i = e.next_reward_date,
                r = e.program_current_state;
            if (null == r) return !1;
            if (null == i || "" === i) {
                if (![s.L.PAYMENT_PROCESSING, s.L.PAYMENT_ERROR].includes(r)) return !1;
            } else {
                let e = new Date(i).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
        })(u, i),
        _ = (function (e, t, i) {
            if (!i || null == e || null == t) return !1;
            let r = e.next_reward_date;
            if (null == r || "" === r) return !1;
            let l = new Date(r).getTime();
            return !(Number.isNaN(l) || l <= Date.now() || (0, d.default)(new Date(r), new Date()) > t);
        })(u, m, i);
    return {
        isEligible: i,
        isReady: c,
        passesGeneralUIInvariant: p,
        passesProgressBarInvariant: _,
        programReward: u,
        shouldFetch: C,
        totalDays: m,
        wouldBeEligibleForNitroOrbsButIsExternalSub: i && h,
    };
}
