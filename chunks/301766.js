(n.d(t, {
    Q0: () => l,
    ZP: () => c,
    kH: () => s
}),
    n(388685));
var r = n(81825),
    i = n(474936);
function a(e, t, n) {
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
        let t = {};
        return (
            null != e.prices &&
                (t = Object.keys(e.prices).reduce((t, n) => {
                    if (null == e.prices) return t;
                    let r = e.prices[n];
                    return (
                        (t[n] = {
                            countryPrices: {
                                countryCode: r.country_prices.country_code,
                                prices: r.country_prices.prices.map((t) => s(t, e.tax_inclusive))
                            },
                            paymentSourcePrices: Object.entries(r.payment_source_prices).reduce((t, n) => {
                                let [r, i] = n;
                                return ((t[r] = i.map((t) => s(t, e.tax_inclusive))), t);
                            }, {})
                        }),
                        t
                    );
                }, {})),
            new o({
                id: e.id,
                name: e.name,
                interval: e.interval,
                intervalCount: e.interval_count,
                taxInclusive: e.tax_inclusive,
                skuId: e.sku_id,
                currency: e.currency,
                price: e.price,
                prices: t
            })
        );
    }
    get premiumSubscriptionType() {
        switch (this.skuId) {
            case i.Si.LEGACY:
            case i.Si.TIER_2:
                return i.p9.TIER_2;
            case i.Si.TIER_1:
                return i.p9.TIER_1;
            case i.Si.TIER_0:
                return i.p9.TIER_0;
            default:
                return null;
        }
    }
    toServerData() {
        let e = {};
        return (
            Object.keys(this.prices).forEach((t) => {
                let n = this.prices[t];
                e[t] = {
                    country_prices: {
                        country_code: n.countryPrices.countryCode,
                        prices: n.countryPrices.prices
                    },
                    payment_source_prices: n.paymentSourcePrices
                };
            }),
            {
                id: this.id,
                name: this.name,
                sku_id: this.skuId,
                interval: this.interval,
                interval_count: this.intervalCount,
                tax_inclusive: this.taxInclusive,
                currency: this.currency,
                price: this.price,
                prices: e,
                price_tier: this.price
            }
        );
    }
    constructor(e) {
        (super(), a(this, 'id', void 0), a(this, 'name', void 0), a(this, 'interval', void 0), a(this, 'intervalCount', void 0), a(this, 'taxInclusive', void 0), a(this, 'skuId', void 0), a(this, 'currency', void 0), a(this, 'price', void 0), a(this, 'prices', void 0), (this.id = e.id), (this.name = e.name), (this.interval = e.interval), (this.intervalCount = e.intervalCount), (this.taxInclusive = e.taxInclusive), (this.skuId = e.skuId), (this.currency = e.currency), (this.price = e.price), (this.prices = e.prices));
    }
}
function s(e, t) {
    return {
        amount: e.amount,
        currency: e.currency,
        tax: 0,
        taxInclusive: t
    };
}
function l(e) {
    return [i.Xh.NONE_MONTH, i.Xh.NONE_3_MONTH, i.Xh.NONE_6_MONTH, i.Xh.NONE_YEAR].includes(e);
}
let c = o;
