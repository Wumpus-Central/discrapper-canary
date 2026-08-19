"use strict";
n.d(t, { A: () => E });
var i = n(439372),
    r = n(927813),
    a = n(961250),
    s = n(532309),
    l = n(440005),
    o = n(26508),
    d = n(25827);
let c = 5 * r.A.Millis.MINUTE,
    u = 30 * r.A.Millis.SECOND;
class _ extends i.A {
    intervalId;
    newSubscriptionTimeoutId;
    virtualCurrencyUpdateTimeoutId;
    actions = {
        POST_CONNECTION_OPEN: () => this._initializeProgramRewards(),
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => (0, a.uM)(),
        BILLING_SUBSCRIPTION_CANCEL_SUCCESS: () => (0, a.uM)(),
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: () => this._handleNewSubscription(),
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: () => (0, a.uM)(),
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: () => (0, a.uM)(),
        VIRTUAL_CURRENCY_BALANCE_UPDATE: () => this._handleVirtualCurrencyUpdate(),
        ENTITLEMENT_CREATE: (e) => this._handleCrepeEntitlementChange(e),
        ENTITLEMENT_UPDATE: (e) => this._handleCrepeEntitlementChange(e),
        ENTITLEMENT_DELETE: (e) => this._handleCrepeEntitlementChange(e),
    };
    _handleCrepeEntitlementChange(e) {
        e.entitlement.sku_id === d.S && (0, a.uM)();
    }
    _handleVirtualCurrencyUpdate() {
        null != this.virtualCurrencyUpdateTimeoutId && clearTimeout(this.virtualCurrencyUpdateTimeoutId),
            (this.virtualCurrencyUpdateTimeoutId = setTimeout(() => {
                (0, a.uM)(), (this.virtualCurrencyUpdateTimeoutId = void 0);
            }, u));
    }
    _handleNewSubscription() {
        (0, a.uM)(),
            null != this.newSubscriptionTimeoutId && clearTimeout(this.newSubscriptionTimeoutId),
            (this.newSubscriptionTimeoutId = setTimeout(() => {
                (0, a.uM)(), (this.newSubscriptionTimeoutId = void 0);
            }, c));
    }
    _initializeProgramRewards() {
        if (!(0, o.CC)("ProgramRewardsManager")) return;
        let e = s.A.getRewardForProgram(l.W.NITRO);
        (0, o.J8)(e) ? (0, a.uM)() : (0, a.Ay)(),
            null != this.intervalId && clearInterval(this.intervalId),
            (this.intervalId = setInterval(() => {
                (0, a.Ay)();
            }, r.A.Millis.HOUR));
    }
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0)),
            null != this.newSubscriptionTimeoutId &&
                (clearTimeout(this.newSubscriptionTimeoutId), (this.newSubscriptionTimeoutId = void 0)),
            null != this.virtualCurrencyUpdateTimeoutId &&
                (clearTimeout(this.virtualCurrencyUpdateTimeoutId), (this.virtualCurrencyUpdateTimeoutId = void 0));
    }
}
let E = new _();
