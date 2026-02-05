n.d(t, { A: () => S });
var i,
    r,
    a,
    l = n(627968),
    s = n(64700);
function o(e, t) {
    return {
        "@type": e,
        ...(function e(t) {
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
    };
}
function d(e) {
    return o("Thing", e);
}
function c(e) {
    return o("Organization", e);
}
function u(e) {
    return o("Product", e);
}
function A(e) {
    return o("ItemPage", e);
}
u.Image = function (e) {
    if (null == e) return null;
    let t = e.filter((e) => null != e && "" !== e);
    return 0 === t.length ? null : 1 === t.length ? t[0] : t;
};
var h =
        (((i = h || {}).DAMAGED = "http://schema.org/DamagedCondition"),
        (i.NEW = "http://schema.org/NewCondition"),
        (i.REFURBISHED = "http://schema.org/RefurbishedCondition"),
        (i.USED = "http://schema.org/UsedCondition"),
        i),
    _ =
        (((r = _ || {}).DISCONTINUED = "http://schema.org/Discontinued"),
        (r.IN_STOCK = "http://schema.org/InStock"),
        (r.IN_STORE_ONLY = "http://schema.org/InStoreOnly"),
        (r.LIMITED_AVAILABILITY = "http://schema.org/LimitedAvailability"),
        (r.ONLINE_ONLY = "http://schema.org/OnlineOnly"),
        (r.OUT_OF_STOCK = "http://schema.org/OutOfStock"),
        (r.PREORDER = "http://schema.org/PreOrder"),
        (r.PRESALE = "http://schema.org/PreSale"),
        (r.SOLD_OUT = "http://schema.org/SoldOut"),
        r);
function m(e) {
    return o("Offer", e);
}
(m.ItemConditions = h), (m.ItemAvailability = _);
var p = (((a = p || {}).YEARLY = "ANN"), (a.MONTHLY = "MON"), a);
function g(e) {
    return o("QuantitativeValue", e);
}
function E(e) {
    return o("UnitPriceSpecification", e);
}
function f(e) {
    return o("AggregateOffer", e);
}
function I(e) {
    return o("Person", e);
}
function C(e) {
    return o("Rating", e);
}
function N(e) {
    return o("AggregateRating", e);
}
g.UnitCodes = p;
class T extends s.Component {
    static Thing = d;
    static Brand = d;
    static Person = I;
    static Organization = c;
    static ItemPage = A;
    static Product = u;
    static Offer = m;
    static Rating = C;
    static AggregateRating = N;
    static AggregateOffer = f;
    static QuantitativeValue = g;
    static UnitPriceSpecification = E;
    render() {
        let { debug: e, data: t } = this.props,
            n = JSON.stringify({ "@context": "http://schema.org", ...t });
        return (0, l.jsx)("script", { type: "application/ld+json", children: n });
    }
}
let S = T;
