n.d(t, { Z: () => O }), n(26686), n(411104);
var r,
    i,
    l,
    a,
    o = n(200651),
    s = n(192379);
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    return u(
        { '@type': e },
        (function e(t) {
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
    );
}
function p(e) {
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
var f = (((i = f || {}).DAMAGED = 'http://schema.org/DamagedCondition'), (i.NEW = 'http://schema.org/NewCondition'), (i.REFURBISHED = 'http://schema.org/RefurbishedCondition'), (i.USED = 'http://schema.org/UsedCondition'), i),
    g = (((l = g || {}).DISCONTINUED = 'http://schema.org/Discontinued'), (l.IN_STOCK = 'http://schema.org/InStock'), (l.IN_STORE_ONLY = 'http://schema.org/InStoreOnly'), (l.LIMITED_AVAILABILITY = 'http://schema.org/LimitedAvailability'), (l.ONLINE_ONLY = 'http://schema.org/OnlineOnly'), (l.OUT_OF_STOCK = 'http://schema.org/OutOfStock'), (l.PREORDER = 'http://schema.org/PreOrder'), (l.PRESALE = 'http://schema.org/PreSale'), (l.SOLD_OUT = 'http://schema.org/SoldOut'), l);
function m(e) {
    return d('Offer', e);
}
(m.ItemConditions = f), (m.ItemAvailability = g);
var b = (((a = b || {}).YEARLY = 'ANN'), (a.MONTHLY = 'MON'), a);
function _(e) {
    return d('QuantitativeValue', e);
}
_.UnitCodes = b;
class E extends (r = s.Component) {
    render() {
        let { debug: e, data: t } = this.props,
            n = JSON.stringify(u({ '@context': 'http://schema.org' }, t));
        return (0, o.jsx)('script', {
            type: 'application/ld+json',
            children: n
        });
    }
}
c(E, 'Thing', p),
    c(E, 'Brand', p),
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
    c(E, 'Offer', m),
    c(E, 'Rating', function (e) {
        return d('Rating', e);
    }),
    c(E, 'AggregateRating', function (e) {
        return d('AggregateRating', e);
    }),
    c(E, 'AggregateOffer', function (e) {
        return d('AggregateOffer', e);
    }),
    c(E, 'QuantitativeValue', _),
    c(E, 'UnitPriceSpecification', function (e) {
        return d('UnitPriceSpecification', e);
    });
let O = E;
