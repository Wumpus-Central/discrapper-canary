i.d(t, { F: () => c });
var r = i(17928),
    s = i(166403),
    n = i(532309),
    l = i(440005),
    a = i(49132),
    o = i(150092),
    d = i(892227);
function c(e) {
    let t = e?.location ?? "useNitroProgramReward",
        i = (0, a.DK)(l.W.NITRO, t),
        {
            isReady: c,
            programReward: u,
            totalDays: m,
        } = (0, r.cf)([n.A], () => ({
            isReady: n.A.isReady(),
            programReward: n.A.getRewardForProgram(l.W.NITRO),
            totalDays: n.A.getTotalDaysInDuration(l.W.NITRO),
        })),
        h = (0, r.bG)([s.A], () => s.A.getPremiumTypeSubscription()?.isPurchasedExternally ?? !1),
        C = (0, o.q)(),
        x = (function (e, t) {
            if (!t || null == e) return !1;
            let i = e.next_reward_date,
                r = e.program_current_state;
            if (null == r) return !1;
            if (null == i || "" === i) {
                if (![l.L.PAYMENT_PROCESSING, l.L.PAYMENT_ERROR].includes(r)) return !1;
            } else {
                let e = new Date(i).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
        })(u, i),
        p = (function (e, t, i) {
            if (!i || null == e || null == t) return !1;
            let r = e.next_reward_date;
            if (null == r || "" === r) return !1;
            let s = new Date(r).getTime();
            return !(Number.isNaN(s) || s <= Date.now() || (0, d.default)(new Date(r), new Date()) > t);
        })(u, m, i);
    return {
        isEligible: i,
        isReady: c,
        passesGeneralUIInvariant: x,
        passesProgressBarInvariant: p,
        programReward: u,
        shouldFetch: C,
        totalDays: m,
        wouldBeEligibleForNitroOrbsButIsExternalSub: i && h,
    };
}
