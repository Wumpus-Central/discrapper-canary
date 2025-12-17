n.d(t, {
    Qy: () => u,
    Uy: () => f,
    ZP: () => _,
    hx: () => d,
}),
    n(704826),
    n(35282);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(166651);
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
var u = (function (e) {
    return (
        (e.UNKNOWN = "unknown"),
        (e.VISA = "visa"),
        (e.DISCOVER = "discover"),
        (e.MASTERCARD = "mastercard"),
        (e.AMEX = "amex"),
        (e.PAYPAL = "paypal"),
        (e.PAYMENT_REQUEST = "paymentRequest"),
        (e.G_PAY = "gPay"),
        (e.DINERS = "diners"),
        (e.JCB = "jcb"),
        (e.UNIONPAY = "unionpay"),
        (e.SOFORT = "sofort"),
        (e.PRZELEWY24 = "przelewy24"),
        (e.GIROPAY = "giropay"),
        (e.PAYSAFECARD = "paysafecard"),
        (e.GCASH = "gcash"),
        (e.GRABPAY = "grabpay"),
        (e.MOMO_WALLET = "momo_wallet"),
        (e.VENMO = "venmo"),
        (e.KAKAOPAY = "kakaopay"),
        (e.GOPAY_WALLET = "gopay_wallet"),
        (e.BANCONTACT = "bancontact"),
        (e.EPS = "eps"),
        (e.IDEAL = "ideal"),
        (e.CASH_APP = "cash_app"),
        (e.APPLE = "apple"),
        (e.APPLE_LIGHT = "apple_light"),
        e
    );
})({});
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dark";
    if ("light" === t) {
        if ("apple" === e) return n(822158);
        if ("venmo" === e) return n(134474);
    }
    switch (e) {
        case "visa":
            return n(706614);
        case "amex":
            return n(658317);
        case "discover":
            return n(325202);
        case "mastercard":
            return n(394865);
        case "paypal":
            return n(105822);
        case "paymentRequest":
            return n(158841);
        case "gPay":
            return n(933099);
        case "sofort":
            return n(158934);
        case "przelewy24":
            return n(530287);
        case "giropay":
            return n(459171);
        case "paysafecard":
            return n(866110);
        case "gcash":
            return n(962505);
        case "grabpay":
            return n(897166);
        case "momo_wallet":
            return n(264577);
        case "venmo":
            return n(707466);
        case "kakaopay":
            return n(786989);
        case "gopay_wallet":
            return n(514164);
        case "bancontact":
            return n(242917);
        case "eps":
            return n(623533);
        case "ideal":
            return n(834438);
        case "cash_app":
            return n(97007);
        case "apple":
            return n(822158);
        case "apple_light":
            return n(813659);
        default:
            return n(525656);
    }
}
let f = {
    SMALL: l.cardIconSmall,
    MEDIUM: l.cardIconMedium,
    LARGE: l.cardIconLarge,
    XLARGE: l.cardIconXLarge,
};
class p extends (r = a.PureComponent) {
    static getType(e) {
        return null == e ? "unknown" : u[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown";
    }
    render() {
        let { flipped: e, type: t, className: n, size: r } = this.props;
        return (0, i.jsx)("div", {
            className: s()(r, l[t], n, { [l.flipped]: e }),
            children: t,
        });
    }
}
c(p, "Types", u),
    c(p, "Sizes", f),
    c(p, "defaultProps", {
        size: f.SMALL,
        flipped: !1,
    });
let _ = p;
