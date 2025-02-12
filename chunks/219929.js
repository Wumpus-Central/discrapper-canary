n.d(t, {
    Qy: () => c,
    Uy: () => d,
    ZP: () => _
}),
    n(757143);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(232538);
function u(e, t, n) {
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
var c = (function (e) {
    return (e.UNKNOWN = 'unknown'), (e.VISA = 'visa'), (e.DISCOVER = 'discover'), (e.MASTERCARD = 'mastercard'), (e.AMEX = 'amex'), (e.PAYPAL = 'paypal'), (e.PAYMENT_REQUEST = 'paymentRequest'), (e.G_PAY = 'gPay'), (e.DINERS = 'diners'), (e.JCB = 'jcb'), (e.UNIONPAY = 'unionpay'), (e.SOFORT = 'sofort'), (e.PRZELEWY24 = 'przelewy24'), (e.GIROPAY = 'giropay'), (e.PAYSAFECARD = 'paysafecard'), (e.GCASH = 'gcash'), (e.GRABPAY = 'grabpay'), (e.MOMO_WALLET = 'momo_wallet'), (e.VENMO = 'venmo'), (e.KAKAOPAY = 'kakaopay'), (e.GOPAY_WALLET = 'gopay_wallet'), (e.BANCONTACT = 'bancontact'), (e.EPS = 'eps'), (e.IDEAL = 'ideal'), (e.CASH_APP = 'cash_app'), (e.APPLE = 'apple'), (e.APPLE_LIGHT = 'apple_light'), e;
})({});
let d = {
    SMALL: l.cardIconSmall,
    MEDIUM: l.cardIconMedium,
    LARGE: l.cardIconLarge,
    XLARGE: l.cardIconXLarge
};
class f extends (i = a.PureComponent) {
    static getType(e) {
        return null == e ? 'unknown' : c[e.replace(/[^a-z0-9_]/gi, '').toUpperCase()] || 'unknown';
    }
    render() {
        let { flipped: e, type: t, className: n, size: i } = this.props;
        return (0, r.jsx)('div', {
            className: o()(i, l[t], n, { [l.flipped]: e }),
            children: t
        });
    }
}
u(f, 'Types', c),
    u(f, 'Sizes', d),
    u(f, 'defaultProps', {
        size: d.SMALL,
        flipped: !1
    });
let _ = f;
