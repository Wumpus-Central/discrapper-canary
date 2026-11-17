D.d(e, { F: () => I });
var R = D(855986),
    r = D(895944),
    a = D(921894),
    n = D(544978),
    t = D(892227);
function I() {
    let {
            isReady: _,
            programReward: e,
            totalDays: D,
        } = (0, R.cf)([r.A], () => ({
            isReady: r.A.isReady(),
            programReward: r.A.getRewardForProgram(a.W.NITRO),
            totalDays: r.A.getTotalDaysInDuration(a.W.NITRO),
        })),
        I = (0, n.q)();
    return {
        isEligible: !0,
        isReady: _,
        passesGeneralUIInvariant: (function (_) {
            if (null == _) return !1;
            let e = _.next_reward_date,
                D = _.program_current_state;
            if (null == D) return !1;
            if (null == e || "" === e) {
                if (![a.L.PAYMENT_PROCESSING, a.L.PAYMENT_ERROR].includes(D)) return !1;
            } else {
                let _ = new Date(e).getTime();
                if (Number.isNaN(_) || _ < Date.now()) return !1;
            }
            return !0;
        })(e),
        passesProgressBarInvariant: (function (_, e) {
            if (null == _ || null == e) return !1;
            let D = _.next_reward_date;
            if (null == D || "" === D) return !1;
            let R = new Date(D).getTime();
            return !(Number.isNaN(R) || R <= Date.now() || (0, t.default)(new Date(D), new Date()) > e);
        })(e, D),
        programReward: e,
        shouldFetch: I,
        totalDays: D,
    };
}
