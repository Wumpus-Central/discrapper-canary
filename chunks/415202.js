"use strict";
n.d(t, { A: () => u });
var i = n(239266),
    r = n(439372),
    s = n(927813),
    a = n(961250),
    o = n(532309),
    l = n(636592);
let _ = 5 * s.A.Millis.MINUTE;
class d extends r.A {
    intervalId;
    newSubscriptionTimeoutId;
    actions = {
        POST_CONNECTION_OPEN: () => this._initializeProgramRewards(),
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => (0, a.uM)(),
        BILLING_SUBSCRIPTION_CANCEL_SUCCESS: () => (0, a.uM)(),
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: () => this._handleNewSubscription(),
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: () => (0, a.uM)(),
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: () => (0, a.uM)(),
        VIRTUAL_CURRENCY_BALANCE_UPDATE: () => (0, a.uM)(),
    };
    _handleNewSubscription() {
        (0, a.uM)(),
            null != this.newSubscriptionTimeoutId && clearTimeout(this.newSubscriptionTimeoutId),
            (this.newSubscriptionTimeoutId = setTimeout(() => {
                (0, a.uM)(), (this.newSubscriptionTimeoutId = void 0);
            }, _));
    }
    _initializeProgramRewards() {
        let e = o.A.getRewardForProgram(l.W.NITRO),
            t = e?.next_reward_date;
        null == e || (null != t && (0, i.A)(new Date(t))) ? (0, a.uM)() : (0, a.Ay)(),
            null != this.intervalId && clearInterval(this.intervalId),
            (this.intervalId = setInterval(() => {
                (0, a.Ay)();
            }, s.A.Millis.HOUR));
    }
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0)),
            null != this.newSubscriptionTimeoutId &&
                (clearTimeout(this.newSubscriptionTimeoutId), (this.newSubscriptionTimeoutId = void 0));
    }
}
let u = new d();
