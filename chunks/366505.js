l.d(t, { F: () => c });
var i = l(17928),
    r = l(166403),
    a = l(532309),
    s = l(440005),
    n = l(49132),
    o = l(150092),
    d = l(892227);
function c(e) {
    let t = e?.location ?? "useNitroProgramReward",
        l = (0, n.DK)(s.W.NITRO, t),
        {
            isReady: c,
            programReward: u,
            totalDays: m,
        } = (0, i.cf)([a.A], () => ({
            isReady: a.A.isReady(),
            programReward: a.A.getRewardForProgram(s.W.NITRO),
            totalDays: a.A.getTotalDaysInDuration(s.W.NITRO),
        })),
        h = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription()?.isPurchasedExternally ?? !1),
        C = (0, o.q)(),
        _ = (function (e, t) {
            if (!t || null == e) return !1;
            let l = e.next_reward_date,
                i = e.program_current_state;
            if (null == i) return !1;
            if (null == l || "" === l) {
                if (![s.L.PAYMENT_PROCESSING, s.L.PAYMENT_ERROR].includes(i)) return !1;
            } else {
                let e = new Date(l).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
        })(u, l),
        p = (function (e, t, l) {
            if (!l || null == e || null == t) return !1;
            let i = e.next_reward_date;
            if (null == i || "" === i) return !1;
            let r = new Date(i).getTime();
            return !(Number.isNaN(r) || r <= Date.now() || (0, d.default)(new Date(i), new Date()) > t);
        })(u, m, l);
    return {
        isEligible: l,
        isReady: c,
        passesGeneralUIInvariant: _,
        passesProgressBarInvariant: p,
        programReward: u,
        shouldFetch: C,
        totalDays: m,
        wouldBeEligibleForNitroOrbsButIsExternalSub: l && h,
    };
}
