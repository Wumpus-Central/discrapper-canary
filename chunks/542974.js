n.d(t, { U: () => a });
var i = n(81825);
function r(e, t, n) {
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
class a extends i.Z {
    static createFromServer(e) {
        var t, n;
        return new a({
            planId: e.plan_id,
            countryCode: e.country_code,
            amount: null === (t = e.price) || void 0 === t ? void 0 : t.amount,
            currency: null === (n = e.price) || void 0 === n ? void 0 : n.currency,
            paymentSourceTypes: e.payment_source_types
        });
    }
    constructor(e) {
        super(), r(this, 'planId', void 0), r(this, 'countryCode', void 0), r(this, 'amount', void 0), r(this, 'currency', void 0), r(this, 'paymentSourceTypes', void 0), (this.planId = e.planId), (this.countryCode = e.countryCode), (this.amount = e.amount), (this.currency = e.currency), (this.paymentSourceTypes = e.paymentSourceTypes);
    }
}
