n.d(t, {
    Q0: () => u,
    ZP: () => c,
    kH: () => l
}),
    n(724458),
    n(47120),
    n(411104);
var i = n(81825),
    r = n(981631),
    a = n(474936);
function s(e, t, n) {
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
class o extends i.Z {
    static createFromServer(e) {
        let t = {};
        null != e.prices &&
            (t = Object.keys(e.prices).reduce((t, n) => {
                if (null == e.prices) return t;
                let i = e.prices[n];
                return (
                    (t[n] = {
                        countryPrices: {
                            countryCode: i.country_prices.country_code,
                            prices: i.country_prices.prices.map((t) => l(t, e.tax_inclusive))
                        },
                        paymentSourcePrices: Object.entries(i.payment_source_prices).reduce((t, n) => {
                            let [i, r] = n;
                            return (t[i] = r.map((t) => l(t, e.tax_inclusive))), t;
                        }, {})
                    }),
                    t
                );
            }, {}));
        let n = {
            id: e.id,
            name: e.name,
            interval: e.interval,
            intervalCount: e.interval_count,
            taxInclusive: e.tax_inclusive,
            skuId: e.sku_id,
            currency: e.currency,
            price: e.price,
            prices: t,
            premiumUserPrice: e.discount_price
        };
        return (
            null != e.fallback_price &&
                0 !== e.fallback_price &&
                Object.assign(n, {
                    fallbackPrice: e.fallback_price,
                    fallbackCurrency: e.fallback_currency,
                    fallbackPremiumUserPrice: e.fallback_discount_price
                }),
            new o(n)
        );
    }
    get premiumSubscriptionType() {
        switch (this.skuId) {
            case a.Si.LEGACY:
            case a.Si.TIER_2:
                return a.p9.TIER_2;
            case a.Si.TIER_1:
                return a.p9.TIER_1;
            case a.Si.TIER_0:
                return a.p9.TIER_0;
            default:
                return null;
        }
    }
    get isGiftableCurrency() {
        return r.w2V.has(this.currency);
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
                price_tier: this.price,
                discount_price: this.premiumUserPrice,
                fallback_price: this.fallbackPrice,
                fallback_currency: this.fallbackCurrency,
                fallback_discount_price: this.fallbackPremiumUserPrice
            }
        );
    }
    constructor(e) {
        super(), s(this, 'id', void 0), s(this, 'name', void 0), s(this, 'interval', void 0), s(this, 'intervalCount', void 0), s(this, 'taxInclusive', void 0), s(this, 'skuId', void 0), s(this, 'currency', void 0), s(this, 'price', void 0), s(this, 'prices', void 0), s(this, 'premiumUserPrice', void 0), s(this, 'fallbackPrice', void 0), s(this, 'fallbackCurrency', void 0), s(this, 'fallbackPremiumUserPrice', void 0), (this.id = e.id), (this.name = e.name), (this.interval = e.interval), (this.intervalCount = e.intervalCount), (this.taxInclusive = e.taxInclusive), (this.skuId = e.skuId), (this.currency = e.currency), (this.price = e.price), (this.premiumUserPrice = e.premiumUserPrice), (this.prices = e.prices), e.fallbackPrice && ((this.fallbackPrice = e.fallbackPrice), (this.fallbackCurrency = e.fallbackCurrency), (this.fallbackPremiumUserPrice = e.fallbackPremiumUserPrice));
    }
}
function l(e, t) {
    return {
        amount: e.amount,
        currency: e.currency,
        tax: 0,
        taxInclusive: t
    };
}
function u(e) {
    return [a.Xh.NONE_MONTH, a.Xh.NONE_3_MONTH, a.Xh.NONE_6_MONTH, a.Xh.NONE_YEAR].includes(e);
}
let c = o;
