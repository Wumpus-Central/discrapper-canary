r.d(n, {
    Q0: function () {
        return p;
    },
    kH: function () {
        return f;
    }
});
var i = r(724458);
var a = r(47120);
var o = r(411104);
var s = r(81825),
    l = r(981631),
    u = r(474936);
function c(e, n, r) {
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
class d extends s.Z {
    static createFromServer(e) {
        let n = {};
        null != e.prices &&
            (n = Object.keys(e.prices).reduce((n, r) => {
                if (null == e.prices) return n;
                let i = e.prices[r];
                return (
                    (n[r] = {
                        countryPrices: {
                            countryCode: i.country_prices.country_code,
                            prices: i.country_prices.prices.map((n) => f(n, e.tax_inclusive))
                        },
                        paymentSourcePrices: Object.entries(i.payment_source_prices).reduce((n, r) => {
                            let [i, a] = r;
                            return (n[i] = a.map((n) => f(n, e.tax_inclusive))), n;
                        }, {})
                    }),
                    n
                );
            }, {}));
        let r = {
            id: e.id,
            name: e.name,
            interval: e.interval,
            intervalCount: e.interval_count,
            taxInclusive: e.tax_inclusive,
            skuId: e.sku_id,
            currency: e.currency,
            price: e.price,
            prices: n,
            premiumUserPrice: e.discount_price
        };
        return (
            null != e.fallback_price &&
                0 !== e.fallback_price &&
                Object.assign(r, {
                    fallbackPrice: e.fallback_price,
                    fallbackCurrency: e.fallback_currency,
                    fallbackPremiumUserPrice: e.fallback_discount_price
                }),
            new d(r)
        );
    }
    get premiumSubscriptionType() {
        switch (this.skuId) {
            case u.Si.LEGACY:
            case u.Si.TIER_2:
                return u.p9.TIER_2;
            case u.Si.TIER_1:
                return u.p9.TIER_1;
            case u.Si.TIER_0:
                return u.p9.TIER_0;
            default:
                return null;
        }
    }
    get isGiftableCurrency() {
        return l.w2V.has(this.currency);
    }
    get giftPrice() {
        if (this.isGiftableCurrency) return this.price;
        if ('number' == typeof this.fallbackPrice) return this.fallbackPrice;
        throw Error('Missing fallback price for non-giftable currency');
    }
    get giftCurrency() {
        if (this.isGiftableCurrency) return this.currency;
        if ('string' == typeof this.fallbackCurrency) return this.fallbackCurrency;
        throw Error('Missing fallback currency for non-giftable currency');
    }
    get giftPremiumUserPrice() {
        return this.isGiftableCurrency ? this.premiumUserPrice : this.fallbackPremiumUserPrice;
    }
    getPrice() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e ? this.giftPrice : this.price;
    }
    getCurrency() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e ? this.giftCurrency : this.currency;
    }
    getPremiumUserPrice() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e ? this.giftPremiumUserPrice : this.premiumUserPrice;
    }
    toServerData() {
        let e = {};
        return (
            Object.keys(this.prices).forEach((n) => {
                let r = this.prices[n];
                e[n] = {
                    country_prices: {
                        country_code: r.countryPrices.countryCode,
                        prices: r.countryPrices.prices
                    },
                    payment_source_prices: r.paymentSourcePrices
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
                price_tier: this.price,
                discount_price: this.premiumUserPrice,
                fallback_price: this.fallbackPrice,
                fallback_currency: this.fallbackCurrency,
                fallback_discount_price: this.fallbackPremiumUserPrice
            }
        );
    }
    constructor(e) {
        super(), c(this, 'id', void 0), c(this, 'name', void 0), c(this, 'interval', void 0), c(this, 'intervalCount', void 0), c(this, 'taxInclusive', void 0), c(this, 'skuId', void 0), c(this, 'currency', void 0), c(this, 'price', void 0), c(this, 'prices', void 0), c(this, 'premiumUserPrice', void 0), c(this, 'fallbackPrice', void 0), c(this, 'fallbackCurrency', void 0), c(this, 'fallbackPremiumUserPrice', void 0), (this.id = e.id), (this.name = e.name), (this.interval = e.interval), (this.intervalCount = e.intervalCount), (this.taxInclusive = e.taxInclusive), (this.skuId = e.skuId), (this.currency = e.currency), (this.price = e.price), (this.premiumUserPrice = e.premiumUserPrice), (this.prices = e.prices), e.fallbackPrice && ((this.fallbackPrice = e.fallbackPrice), (this.fallbackCurrency = e.fallbackCurrency), (this.fallbackPremiumUserPrice = e.fallbackPremiumUserPrice));
    }
}
function f(e, n) {
    return {
        amount: e.amount,
        currency: e.currency,
        tax: 0,
        taxInclusive: n
    };
}
function p(e) {
    return [u.Xh.NONE_MONTH, u.Xh.NONE_3_MONTH, u.Xh.NONE_6_MONTH, u.Xh.NONE_YEAR].includes(e);
}
n.ZP = d;
