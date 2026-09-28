n.d(t, { F: () => s });
var r = n(17928),
    a = n(166403),
    l = n(532309),
    u = n(440005),
    i = n(17843),
    o = n(150092),
    d = n(892227);
function s(e) {
    let t = e?.location ?? "useNitroProgramReward",
        n = (0, i.DK)(u.W.NITRO, t),
        {
            isReady: s,
            programReward: c,
            totalDays: m,
        } = (0, r.cf)([l.A], () => ({
            isReady: l.A.isReady(),
            programReward: l.A.getRewardForProgram(u.W.NITRO),
            totalDays: l.A.getTotalDaysInDuration(u.W.NITRO),
        })),
        f = (0, r.bG)([a.A], () => a.A.getPremiumTypeSubscription()?.isPurchasedExternally ?? !1),
        g = (0, o.q)(),
        b = (function (e, t) {
            if (!t || null == e) return !1;
            let n = e.next_reward_date,
                r = e.program_current_state;
            if (null == r) return !1;
            if (null == n || "" === n) {
                if (![u.L.PAYMENT_PROCESSING, u.L.PAYMENT_ERROR].includes(r)) return !1;
            } else {
                let e = new Date(n).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
        })(c, n),
        p = (function (e, t, n) {
            if (!n || null == e || null == t) return !1;
            let r = e.next_reward_date;
            if (null == r || "" === r) return !1;
            let a = new Date(r).getTime();
            return !(Number.isNaN(a) || a <= Date.now() || (0, d.default)(new Date(r), new Date()) > t);
        })(c, m, n);
    return {
        isEligible: n,
        isReady: s,
        passesGeneralUIInvariant: b,
        passesProgressBarInvariant: p,
        programReward: c,
        shouldFetch: g,
        totalDays: m,
        wouldBeEligibleForNitroOrbsButIsExternalSub: n && f,
    };
}
