a.d(t, { F: () => c });
var r = a(17928),
    n = a(895944),
    s = a(636592),
    d = a(150092),
    i = a(892227);
function c() {
    let {
            isReady: e,
            programReward: t,
            totalDays: a,
        } = (0, r.cf)([n.A], () => ({
            isReady: n.A.isReady(),
            programReward: n.A.getRewardForProgram(s.W.NITRO),
            totalDays: n.A.getTotalDaysInDuration(s.W.NITRO),
        })),
        c = (0, d.q)();
    return {
        isEligible: !0,
        isReady: e,
        passesGeneralUIInvariant: (function (e) {
            if (null == e) return !1;
            let t = e.next_reward_date,
                a = e.program_current_state;
            if (null == a) return !1;
            if (null == t || "" === t) {
                if (![s.L.PAYMENT_PROCESSING, s.L.PAYMENT_ERROR].includes(a)) return !1;
            } else {
                let e = new Date(t).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
        })(t),
        passesProgressBarInvariant: (function (e, t) {
            if (null == e || null == t) return !1;
            let a = e.next_reward_date;
            if (null == a || "" === a) return !1;
            let r = new Date(a).getTime();
            return !(Number.isNaN(r) || r <= Date.now() || (0, i.default)(new Date(a), new Date()) > t);
        })(t, a),
        programReward: t,
        shouldFetch: c,
        totalDays: a,
    };
}
