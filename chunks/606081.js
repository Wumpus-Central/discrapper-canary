n.d(t, { Z: () => I }), n(411104);
var i,
    l,
    r,
    a,
    s = n(200651),
    o = n(192379);
function c(e, t, n) {
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
function d(e, t) {
    return {
        '@type': e,
        ...(function e(t) {
            return (
                Object.keys(t).forEach((n) => {
                    null == t[n] ? delete t[n] : 'object' == typeof t[n] && (t[n] = e(t[n]));
                }),
                t
            );
        })(
            (function (e) {
                let t;
                try {
                    t = JSON.parse(JSON.stringify(e));
                } catch (e) {
                    throw Error('[JSONLD] Invalid object format');
                }
                return t;
            })(t)
        )
    };
}
function u(e) {
    return d('Thing', e);
}
function h(e) {
    return d('Product', e);
}
h.Image = function (e) {
    if (null == e) return null;
    let t = e.filter((e) => null != e && '' !== e);
    return 0 === t.length ? null : 1 === t.length ? t[0] : t;
};
var m = (((l = m || {}).DAMAGED = 'http://schema.org/DamagedCondition'), (l.NEW = 'http://schema.org/NewCondition'), (l.REFURBISHED = 'http://schema.org/RefurbishedCondition'), (l.USED = 'http://schema.org/UsedCondition'), l),
    p = (((r = p || {}).DISCONTINUED = 'http://schema.org/Discontinued'), (r.IN_STOCK = 'http://schema.org/InStock'), (r.IN_STORE_ONLY = 'http://schema.org/InStoreOnly'), (r.LIMITED_AVAILABILITY = 'http://schema.org/LimitedAvailability'), (r.ONLINE_ONLY = 'http://schema.org/OnlineOnly'), (r.OUT_OF_STOCK = 'http://schema.org/OutOfStock'), (r.PREORDER = 'http://schema.org/PreOrder'), (r.PRESALE = 'http://schema.org/PreSale'), (r.SOLD_OUT = 'http://schema.org/SoldOut'), r);
function g(e) {
    return d('Offer', e);
}
(g.ItemConditions = m), (g.ItemAvailability = p);
var _ = (((a = _ || {}).YEARLY = 'ANN'), (a.MONTHLY = 'MON'), a);
function f(e) {
    return d('QuantitativeValue', e);
}
f.UnitCodes = _;
class E extends (i = o.Component) {
    render() {
        let { debug: e, data: t } = this.props,
            n = JSON.stringify({
                '@context': 'http://schema.org',
                ...t
            });
        return (0, s.jsx)('script', {
            type: 'application/ld+json',
            children: n
        });
    }
}
c(E, 'Thing', u),
    c(E, 'Brand', u),
    c(E, 'Person', function (e) {
        return d('Person', e);
    }),
    c(E, 'Organization', function (e) {
        return d('Organization', e);
    }),
    c(E, 'ItemPage', function (e) {
        return d('ItemPage', e);
    }),
    c(E, 'Product', h),
    c(E, 'Offer', g),
    c(E, 'Rating', function (e) {
        return d('Rating', e);
    }),
    c(E, 'AggregateRating', function (e) {
        return d('AggregateRating', e);
    }),
    c(E, 'AggregateOffer', function (e) {
        return d('AggregateOffer', e);
    }),
    c(E, 'QuantitativeValue', f),
    c(E, 'UnitPriceSpecification', function (e) {
        return d('UnitPriceSpecification', e);
    });
let I = E;
