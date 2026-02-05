"use strict";
n.d(t, { A: () => c });
var r = n(239266),
    i = n(439372),
    a = n(927813),
    s = n(961250),
    o = n(895944),
    l = n(649032);
class u extends i.A {
    intervalId;
    actions = {
        POST_CONNECTION_OPEN: () => this._initializeProgramRewards(),
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => (0, s.uM)(),
        CURRENT_USER_UPDATE: () => (0, s.uM)(),
        VIRTUAL_CURRENCY_BALANCE_UPDATE: () => (0, s.uM)(),
    };
    _initializeProgramRewards() {
        let e = o.A.getRewardForProgram(l.W.NITRO),
            t = e?.next_reward_date;
        null == e || (null != t && (0, r.A)(new Date(t))) ? (0, s.uM)() : (0, s.Ay)(),
            null != this.intervalId && clearInterval(this.intervalId),
            (this.intervalId = setInterval(() => {
                (0, s.Ay)();
            }, a.A.Millis.HOUR));
    }
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0));
    }
}
let c = new u();
