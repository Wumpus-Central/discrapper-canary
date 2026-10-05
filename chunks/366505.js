n.d(t, { F: () => i });
var r = n(17928),
    a = n(532309),
    l = n(636592),
    u = n(150092),
    s = n(892227);
function i(e) {
    let {
            isReady: t,
            programReward: n,
            totalDays: i,
        } = (0, r.cf)([a.A], () => ({
            isReady: a.A.isReady(),
            programReward: a.A.getRewardForProgram(l.W.NITRO),
            totalDays: a.A.getTotalDaysInDuration(l.W.NITRO),
        })),
        c = (0, u.q)();
    return {
        isEligible: !0,
        isReady: t,
        passesGeneralUIInvariant: (function (e) {
            if (null == e) return !1;
            let t = e.next_reward_date,
                n = e.program_current_state;
            if (null == n) return !1;
            if (null == t || "" === t) {
                if (![l.L.PAYMENT_PROCESSING, l.L.PAYMENT_ERROR].includes(n)) return !1;
            } else {
                let e = new Date(t).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
        })(n),
        passesProgressBarInvariant: (function (e, t) {
            if (null == e || null == t) return !1;
            let n = e.next_reward_date;
            if (null == n || "" === n) return !1;
            let r = new Date(n).getTime();
            return !(Number.isNaN(r) || r <= Date.now() || (0, s.default)(new Date(n), new Date()) > t);
        })(n, i),
        programReward: n,
        shouldFetch: c,
        totalDays: i,
    };
}
