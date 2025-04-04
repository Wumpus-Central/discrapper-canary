n.d(t, {
    Qy: () => u,
    Uy: () => d,
    ZP: () => _
}),
    n(757143),
    n(301563);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(386195);
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
var u = (function (e) {
    return (e.UNKNOWN = 'unknown'), (e.VISA = 'visa'), (e.DISCOVER = 'discover'), (e.MASTERCARD = 'mastercard'), (e.AMEX = 'amex'), (e.PAYPAL = 'paypal'), (e.PAYMENT_REQUEST = 'paymentRequest'), (e.G_PAY = 'gPay'), (e.DINERS = 'diners'), (e.JCB = 'jcb'), (e.UNIONPAY = 'unionpay'), (e.SOFORT = 'sofort'), (e.PRZELEWY24 = 'przelewy24'), (e.GIROPAY = 'giropay'), (e.PAYSAFECARD = 'paysafecard'), (e.GCASH = 'gcash'), (e.GRABPAY = 'grabpay'), (e.MOMO_WALLET = 'momo_wallet'), (e.VENMO = 'venmo'), (e.KAKAOPAY = 'kakaopay'), (e.GOPAY_WALLET = 'gopay_wallet'), (e.BANCONTACT = 'bancontact'), (e.EPS = 'eps'), (e.IDEAL = 'ideal'), (e.CASH_APP = 'cash_app'), (e.APPLE = 'apple'), (e.APPLE_LIGHT = 'apple_light'), e;
})({});
let d = {
    SMALL: l.cardIconSmall,
    MEDIUM: l.cardIconMedium,
    LARGE: l.cardIconLarge,
    XLARGE: l.cardIconXLarge
};
class f extends (r = o.PureComponent) {
    static getType(e) {
        return null == e ? 'unknown' : u[e.replace(/[^a-z0-9_]/gi, '').toUpperCase()] || 'unknown';
    }
    render() {
        let { flipped: e, type: t, className: n, size: r } = this.props;
        return (0, i.jsx)('div', {
            className: s()(r, l[t], n, { [l.flipped]: e }),
            children: t
        });
    }
}
c(f, 'Types', u),
    c(f, 'Sizes', d),
    c(f, 'defaultProps', {
        size: d.SMALL,
        flipped: !1
    });
let _ = f;
