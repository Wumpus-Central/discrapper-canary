s.d(t, { F: () => c });
var a = s(17928),
    r = s(166403),
    l = s(532309),
    i = s(636592),
    n = s(26508),
    d = s(150092),
    o = s(892227);
function c(e) {
    let t = e?.location ?? "useNitroProgramReward",
        s = (0, n.DK)(i.W.NITRO, t),
        {
            isReady: c,
            programReward: u,
            totalDays: m,
        } = (0, a.cf)([l.A], () => ({
            isReady: l.A.isReady(),
            programReward: l.A.getRewardForProgram(i.W.NITRO),
            totalDays: l.A.getTotalDaysInDuration(i.W.NITRO),
        })),
        h = (0, a.bG)([r.A], () => r.A.getPremiumTypeSubscription()?.isPurchasedExternally ?? !1),
        x = (0, d.q)(),
        C = (function (e, t) {
            if (!t || null == e) return !1;
            let s = e.next_reward_date,
                a = e.program_current_state;
            if (null == a) return !1;
            if (null == s || "" === s) {
                if (![i.L.PAYMENT_PROCESSING, i.L.PAYMENT_ERROR].includes(a)) return !1;
            } else {
                let e = new Date(s).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
        })(u, s),
        _ = (function (e, t, s) {
            if (!s || null == e || null == t) return !1;
            let a = e.next_reward_date;
            if (null == a || "" === a) return !1;
            let r = new Date(a).getTime();
            return !(Number.isNaN(r) || r <= Date.now() || (0, o.default)(new Date(a), new Date()) > t);
        })(u, m, s);
    return {
        isEligible: s,
        isReady: c,
        passesGeneralUIInvariant: C,
        passesProgressBarInvariant: _,
        programReward: u,
        shouldFetch: x,
        totalDays: m,
        wouldBeEligibleForNitroOrbsButIsExternalSub: s && h,
    };
}
