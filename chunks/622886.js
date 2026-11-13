D.d(e, { F: () => a });
var R = D(855986),
    r = D(895944),
    I = D(921894),
    A = D(544978),
    t = D(892227);
function a() {
    let {
            isReady: _,
            programReward: e,
            totalDays: D,
        } = (0, R.cf)([r.A], () => ({
            isReady: r.A.isReady(),
            programReward: r.A.getRewardForProgram(I.W.NITRO),
            totalDays: r.A.getTotalDaysInDuration(I.W.NITRO),
        })),
        a = (0, A.q)();
    return {
        isEligible: !0,
        isReady: _,
        passesGeneralUIInvariant: (function (_) {
            if (null == _) return !1;
            let e = _.next_reward_date,
                D = _.program_current_state;
            if (null == D) return !1;
            if (null == e || "" === e) {
                if (![I.L.PAYMENT_PROCESSING, I.L.PAYMENT_ERROR].includes(D)) return !1;
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
        shouldFetch: a,
        totalDays: D,
    };
}
