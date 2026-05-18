"use strict";
n.d(t, { A: () => _ });
var i = n(439372),
    r = n(927813),
    s = n(961250),
    a = n(532309),
    o = n(636592),
    l = n(51935);
let u = 5 * r.A.Millis.MINUTE,
    c = 30 * r.A.Millis.SECOND;
class d extends i.A {
    intervalId;
    newSubscriptionTimeoutId;
    virtualCurrencyUpdateTimeoutId;
    actions = {
        POST_CONNECTION_OPEN: () => this._initializeProgramRewards(),
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: () => (0, s.uM)(),
        BILLING_SUBSCRIPTION_CANCEL_SUCCESS: () => (0, s.uM)(),
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: () => this._handleNewSubscription(),
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: () => (0, s.uM)(),
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: () => (0, s.uM)(),
        VIRTUAL_CURRENCY_BALANCE_UPDATE: () => this._handleVirtualCurrencyUpdate(),
        ENTITLEMENT_CREATE: (e) => this._handleCrepeEntitlementChange(e),
        ENTITLEMENT_UPDATE: (e) => this._handleCrepeEntitlementChange(e),
        ENTITLEMENT_DELETE: (e) => this._handleCrepeEntitlementChange(e),
    };
    _handleCrepeEntitlementChange(e) {
        "1478888214021410877" === e.entitlement.sku_id && (0, s.uM)();
    }
    _handleVirtualCurrencyUpdate() {
        null != this.virtualCurrencyUpdateTimeoutId && clearTimeout(this.virtualCurrencyUpdateTimeoutId),
            (this.virtualCurrencyUpdateTimeoutId = setTimeout(() => {
                (0, s.uM)(), (this.virtualCurrencyUpdateTimeoutId = void 0);
            }, c));
    }
    _handleNewSubscription() {
        (0, s.uM)(),
            null != this.newSubscriptionTimeoutId && clearTimeout(this.newSubscriptionTimeoutId),
            (this.newSubscriptionTimeoutId = setTimeout(() => {
                (0, s.uM)(), (this.newSubscriptionTimeoutId = void 0);
            }, u));
    }
    _initializeProgramRewards() {
        if (!(0, l.CC)("ProgramRewardsManager")) return;
        let e = a.A.getRewardForProgram(o.W.NITRO);
        (0, l.J8)(e) ? (0, s.uM)() : (0, s.Ay)(),
            null != this.intervalId && clearInterval(this.intervalId),
            (this.intervalId = setInterval(() => {
                (0, s.Ay)();
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
let _ = new d();
