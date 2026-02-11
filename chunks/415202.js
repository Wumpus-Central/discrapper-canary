"use strict";
n.d(t, { A: () => d });
var r = n(239266),
    i = n(439372),
    a = n(927813),
    s = n(961250),
    o = n(895944),
    l = n(649032);
let u = 5 * a.A.Millis.MINUTE;
class c extends i.A {
    intervalId;
    newSubscriptionTimeoutId;
    actions = {
        POST_CONNECTION_OPEN: () => this._initializeProgramRewards(),
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => (0, s.uM)(),
        BILLING_SUBSCRIPTION_CANCEL_SUCCESS: () => (0, s.uM)(),
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: () => this._handleNewSubscription(),
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: () => (0, s.uM)(),
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: () => (0, s.uM)(),
        VIRTUAL_CURRENCY_BALANCE_UPDATE: () => (0, s.uM)(),
    };
    _handleNewSubscription() {
        (0, s.uM)(),
            null != this.newSubscriptionTimeoutId && clearTimeout(this.newSubscriptionTimeoutId),
            (this.newSubscriptionTimeoutId = setTimeout(() => {
                (0, s.uM)(), (this.newSubscriptionTimeoutId = void 0);
            }, u));
    }
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
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0)),
            null != this.newSubscriptionTimeoutId &&
                (clearTimeout(this.newSubscriptionTimeoutId), (this.newSubscriptionTimeoutId = void 0));
    }
}
let d = new c();
