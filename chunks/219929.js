r.d(n, {
    Qy: function () {
        return i;
    },
    Uy: function () {
        return p;
    }
});
var i,
    a,
    o = r(757143);
var s = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(986203);
function f(e, n, r) {
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
!(function (e) {
    (e.UNKNOWN = 'unknown'), (e.VISA = 'visa'), (e.DISCOVER = 'discover'), (e.MASTERCARD = 'mastercard'), (e.AMEX = 'amex'), (e.PAYPAL = 'paypal'), (e.PAYMENT_REQUEST = 'paymentRequest'), (e.G_PAY = 'gPay'), (e.DINERS = 'diners'), (e.JCB = 'jcb'), (e.UNIONPAY = 'unionpay'), (e.SOFORT = 'sofort'), (e.PRZELEWY24 = 'przelewy24'), (e.GIROPAY = 'giropay'), (e.PAYSAFECARD = 'paysafecard'), (e.GCASH = 'gcash'), (e.GRABPAY = 'grabpay'), (e.MOMO_WALLET = 'momo_wallet'), (e.VENMO = 'venmo'), (e.KAKAOPAY = 'kakaopay'), (e.GOPAY_WALLET = 'gopay_wallet'), (e.BANCONTACT = 'bancontact'), (e.EPS = 'eps'), (e.IDEAL = 'ideal'), (e.CASH_APP = 'cash_app'), (e.APPLE = 'apple'), (e.APPLE_LIGHT = 'apple_light');
})(i || (i = {}));
let p = {
    SMALL: d.cardIconSmall,
    MEDIUM: d.cardIconMedium,
    LARGE: d.cardIconLarge,
    XLARGE: d.cardIconXLarge
};
class h extends (a = l.PureComponent) {
    static getType(e) {
        return null == e ? 'unknown' : i[e.replace(/[^a-z0-9_]/gi, '').toUpperCase()] || 'unknown';
    }
    render() {
        let { flipped: e, type: n, className: r, size: i } = this.props;
        return (0, s.jsx)('div', {
            className: c()(i, d[n], r, { [d.flipped]: e }),
            children: n
        });
    }
}
f(h, 'Types', i),
    f(h, 'Sizes', p),
    f(h, 'defaultProps', {
        size: p.SMALL,
        flipped: !1
    }),
    (n.ZP = h);
