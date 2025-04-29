n.d(t, { U: () => o });
var r = n(81825);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class o extends r.Z {
    static createFromServer(e) {
        var t, n;
        return new o({
            planId: e.plan_id,
            countryCode: e.country_code,
            amount: null == (t = e.price) ? void 0 : t.amount,
            currency: null == (n = e.price) ? void 0 : n.currency,
            paymentSourceTypes: e.payment_source_types
        });
    }
    constructor(e) {
        super(), i(this, 'planId', void 0), i(this, 'countryCode', void 0), i(this, 'amount', void 0), i(this, 'currency', void 0), i(this, 'paymentSourceTypes', void 0), (this.planId = e.planId), (this.countryCode = e.countryCode), (this.amount = e.amount), (this.currency = e.currency), (this.paymentSourceTypes = e.paymentSourceTypes);
    }
}
