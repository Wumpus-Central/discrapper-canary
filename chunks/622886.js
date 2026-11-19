r.d(_, { F: () => E });
var D = r(855986),
    a = r(895944),
    t = r(921894),
    R = r(544978),
    n = r(892227);
function E() {
    let {
            isReady: e,
            programReward: _,
            totalDays: r,
        } = (0, D.cf)([a.A], () => ({
            isReady: a.A.isReady(),
            programReward: a.A.getRewardForProgram(t.W.NITRO),
            totalDays: a.A.getTotalDaysInDuration(t.W.NITRO),
        })),
        E = (0, R.q)();
    return {
        isEligible: !0,
        isReady: e,
        passesGeneralUIInvariant: (function (e) {
            if (null == e) return !1;
            let _ = e.next_reward_date,
                r = e.program_current_state;
            if (null == r) return !1;
            if (null == _ || "" === _) {
                if (![t.L.PAYMENT_PROCESSING, t.L.PAYMENT_ERROR].includes(r)) return !1;
            } else {
                let e = new Date(_).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
        })(_),
        passesProgressBarInvariant: (function (e, _) {
            if (null == e || null == _) return !1;
            let r = e.next_reward_date;
            if (null == r || "" === r) return !1;
            let D = new Date(r).getTime();
            return !(Number.isNaN(D) || D <= Date.now() || (0, n.default)(new Date(r), new Date()) > _);
        })(_, r),
        programReward: _,
        shouldFetch: E,
        totalDays: r,
    };
}
