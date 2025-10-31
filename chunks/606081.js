n.d(t, { Z: () => O }), n(49124), n(415506);
var r,
    i,
    l,
    a,
    s = n(951288),
    o = n(647438);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    return u(
        { "@type": e },
        (function e(t) {
            return (
                Object.keys(t).forEach((n) => {
                    null == t[n] ? delete t[n] : "object" == typeof t[n] && (t[n] = e(t[n]));
                }),
                t
            );
        })(
            (function (e) {
                let t;
                try {
                    t = JSON.parse(JSON.stringify(e));
                } catch (e) {
                    throw Error("[JSONLD] Invalid object format");
                }
                return t;
            })(t),
        ),
    );
}
function p(e) {
    return d("Thing", e);
}
function f(e) {
    return d("Product", e);
}
f.Image = function (e) {
    if (null == e) return null;
    let t = e.filter((e) => null != e && "" !== e);
    return 0 === t.length ? null : 1 === t.length ? t[0] : t;
};
var m =
        (((i = m || {}).DAMAGED = "http://schema.org/DamagedCondition"),
        (i.NEW = "http://schema.org/NewCondition"),
        (i.REFURBISHED = "http://schema.org/RefurbishedCondition"),
        (i.USED = "http://schema.org/UsedCondition"),
        i),
    h =
        (((l = h || {}).DISCONTINUED = "http://schema.org/Discontinued"),
        (l.IN_STOCK = "http://schema.org/InStock"),
        (l.IN_STORE_ONLY = "http://schema.org/InStoreOnly"),
        (l.LIMITED_AVAILABILITY = "http://schema.org/LimitedAvailability"),
        (l.ONLINE_ONLY = "http://schema.org/OnlineOnly"),
        (l.OUT_OF_STOCK = "http://schema.org/OutOfStock"),
        (l.PREORDER = "http://schema.org/PreOrder"),
        (l.PRESALE = "http://schema.org/PreSale"),
        (l.SOLD_OUT = "http://schema.org/SoldOut"),
        l);
function g(e) {
    return d("Offer", e);
}
(g.ItemConditions = m), (g.ItemAvailability = h);
var _ = (((a = _ || {}).YEARLY = "ANN"), (a.MONTHLY = "MON"), a);
function b(e) {
    return d("QuantitativeValue", e);
}
b.UnitCodes = _;
class E extends (r = o.Component) {
    render() {
        let { debug: e, data: t } = this.props,
            n = JSON.stringify(u({ "@context": "http://schema.org" }, t));
        return (0, s.jsx)("script", {
            type: "application/ld+json",
            children: n,
        });
    }
}
c(E, "Thing", p),
    c(E, "Brand", p),
    c(E, "Person", function (e) {
        return d("Person", e);
    }),
    c(E, "Organization", function (e) {
        return d("Organization", e);
    }),
    c(E, "ItemPage", function (e) {
        return d("ItemPage", e);
    }),
    c(E, "Product", f),
    c(E, "Offer", g),
    c(E, "Rating", function (e) {
        return d("Rating", e);
    }),
    c(E, "AggregateRating", function (e) {
        return d("AggregateRating", e);
    }),
    c(E, "AggregateOffer", function (e) {
        return d("AggregateOffer", e);
    }),
    c(E, "QuantitativeValue", b),
    c(E, "UnitPriceSpecification", function (e) {
        return d("UnitPriceSpecification", e);
    });
let O = E;
