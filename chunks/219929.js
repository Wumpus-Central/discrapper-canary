t.d(n, {
    Qy: function () {
        return i;
    },
    Uy: function () {
        return p;
    }
}),
    t(757143);
var i,
    r,
    a,
    l = t(200651),
    s = t(192379),
    o = t(120356),
    c = t.n(o),
    u = t(199509);
function d(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
((a = i || (i = {})).UNKNOWN = 'unknown'), (a.VISA = 'visa'), (a.DISCOVER = 'discover'), (a.MASTERCARD = 'mastercard'), (a.AMEX = 'amex'), (a.PAYPAL = 'paypal'), (a.PAYMENT_REQUEST = 'paymentRequest'), (a.G_PAY = 'gPay'), (a.DINERS = 'diners'), (a.JCB = 'jcb'), (a.UNIONPAY = 'unionpay'), (a.SOFORT = 'sofort'), (a.PRZELEWY24 = 'przelewy24'), (a.GIROPAY = 'giropay'), (a.PAYSAFECARD = 'paysafecard'), (a.GCASH = 'gcash'), (a.GRABPAY = 'grabpay'), (a.MOMO_WALLET = 'momo_wallet'), (a.VENMO = 'venmo'), (a.KAKAOPAY = 'kakaopay'), (a.GOPAY_WALLET = 'gopay_wallet'), (a.BANCONTACT = 'bancontact'), (a.EPS = 'eps'), (a.IDEAL = 'ideal'), (a.CASH_APP = 'cash_app'), (a.APPLE = 'apple'), (a.APPLE_LIGHT = 'apple_light');
let p = {
    SMALL: u.cardIconSmall,
    MEDIUM: u.cardIconMedium,
    LARGE: u.cardIconLarge,
    XLARGE: u.cardIconXLarge
};
class f extends (r = s.PureComponent) {
    static getType(e) {
        return null == e ? 'unknown' : i[e.replace(/[^a-z0-9_]/gi, '').toUpperCase()] || 'unknown';
    }
    render() {
        let { flipped: e, type: n, className: t, size: i } = this.props;
        return (0, l.jsx)('div', {
            className: c()(i, u[n], t, { [u.flipped]: e }),
            children: n
        });
    }
}
d(f, 'Types', i),
    d(f, 'Sizes', p),
    d(f, 'defaultProps', {
        size: p.SMALL,
        flipped: !1
    }),
    (n.ZP = f);
