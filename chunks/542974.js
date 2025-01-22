r.d(n, {
    U: function () {
        return o;
    }
});
var i = r(81825);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class o extends i.Z {
    static createFromServer(e) {
        var n, r;
        return new o({
            planId: e.plan_id,
            countryCode: e.country_code,
            amount: null === (n = e.price) || void 0 === n ? void 0 : n.amount,
            currency: null === (r = e.price) || void 0 === r ? void 0 : r.currency,
            paymentSourceTypes: e.payment_source_types
        });
    }
    constructor(e) {
        super(), a(this, 'planId', void 0), a(this, 'countryCode', void 0), a(this, 'amount', void 0), a(this, 'currency', void 0), a(this, 'paymentSourceTypes', void 0), (this.planId = e.planId), (this.countryCode = e.countryCode), (this.amount = e.amount), (this.currency = e.currency), (this.paymentSourceTypes = e.paymentSourceTypes);
    }
}
