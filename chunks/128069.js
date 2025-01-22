r.d(n, {
    SM: function () {
        return i;
    },
    yD: function () {
        return g;
    }
});
var i,
    a,
    o,
    s,
    l = r(47120);
var u = r(544891),
    c = r(34756),
    d = r(388032);
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
    (e[(e.UNKNOWN = 0)] = 'UNKNOWN'), (e[(e.UNKNOWN_BILLING_PROFILE = 100001)] = 'UNKNOWN_BILLING_PROFILE'), (e[(e.UNKNOWN_PAYMENT_SOURCE = 100002)] = 'UNKNOWN_PAYMENT_SOURCE'), (e[(e.UNKNOWN_SUBSCRIPTION = 100003)] = 'UNKNOWN_SUBSCRIPTION'), (e[(e.ALREADY_SUBSCRIBED = 100004)] = 'ALREADY_SUBSCRIBED'), (e[(e.INVALID_PLAN = 100005)] = 'INVALID_PLAN'), (e[(e.PAYMENT_SOURCE_REQUIRED = 100006)] = 'PAYMENT_SOURCE_REQUIRED'), (e[(e.ALREADY_CANCELED = 100007)] = 'ALREADY_CANCELED'), (e[(e.INVALID_PAYMENT = 100008)] = 'INVALID_PAYMENT'), (e[(e.ALREADY_REFUNDED = 100009)] = 'ALREADY_REFUNDED'), (e[(e.INVALID_BILLING_ADDRESS = 100010)] = 'INVALID_BILLING_ADDRESS'), (e[(e.ALREADY_PURCHASED = 100011)] = 'ALREADY_PURCHASED'), (e[(e.DUPLICATE_PURCHASE_ATTEMPT = 100012)] = 'DUPLICATE_PURCHASE_ATTEMPT'), (e[(e.BILLING_PURCHASE_REQUEST_INVALID = 100017)] = 'BILLING_PURCHASE_REQUEST_INVALID'), (e[(e.NEGATIVE_INVOICE_AMOUNT = 100027)] = 'NEGATIVE_INVOICE_AMOUNT'), (e[(e.AUTHENTICATION_REQUIRED = 100029)] = 'AUTHENTICATION_REQUIRED'), (e[(e.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042)] = 'SUBSCRIPTION_RENEWAL_IN_PROGRESS'), (e[(e.CONFIRMATION_REQUIRED = 100047)] = 'CONFIRMATION_REQUIRED'), (e[(e.CARD_DECLINED = 100054)] = 'CARD_DECLINED'), (e[(e.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097)] = 'INVALID_GIFT_REDEMPTION_FRAUD_REJECTED'), (e[(e.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056)] = 'PURCHASE_TOKEN_AUTHORIZATION_REQUIRED'), (e[(e.INVALID_PAYMENT_SOURCE = 50048)] = 'INVALID_PAYMENT_SOURCE'), (e[(e.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051)] = 'INVALID_CURRENCY_FOR_PAYMENT_SOURCE'), (e[(e.BILLING_APPLE_SERVER_API_ERROR = 100070)] = 'BILLING_APPLE_SERVER_API_ERROR'), (e[(e.BILLING_TRIAL_REDEMPTION_DISABLED = 100078)] = 'BILLING_TRIAL_REDEMPTION_DISABLED'), (e[(e.BILLING_PAUSE_DISABLED = 100079)] = 'BILLING_PAUSE_DISABLED'), (e[(e.BILLING_PAUSE_PENDING_ALREADY_SET = 100080)] = 'BILLING_PAUSE_PENDING_ALREADY_SET'), (e[(e.BILLING_PAUSE_NOT_ELIGIBLE = 100081)] = 'BILLING_PAUSE_NOT_ELIGIBLE'), (e[(e.BILLING_PAUSE_INVALID_INTERVAL = 100082)] = 'BILLING_PAUSE_INVALID_INTERVAL'), (e[(e.BILLING_ALREADY_PAUSED = 100083)] = 'BILLING_ALREADY_PAUSED'), (e[(e.BILLING_CANNOT_CHARGE_ZERO_AMOUNT = 100084)] = 'BILLING_CANNOT_CHARGE_ZERO_AMOUNT'), (e[(e.BILLING_PAUSE_INVALID_UPDATE = 100094)] = 'BILLING_PAUSE_INVALID_UPDATE'), (e[(e.BILLING_BUNDLE_ALREADY_PURCHASED = 100096)] = 'BILLING_BUNDLE_ALREADY_PURCHASED'), (e[(e.BILLING_BUNDLE_PARTIALLY_OWNED = 100097)] = 'BILLING_BUNDLE_PARTIALLY_OWNED'), (e[(e.BILLING_INSUFFICIENT_FUNDS = 100107)] = 'BILLING_INSUFFICIENT_FUNDS');
})(i || (i = {})),
    !(function (e) {
        (e.CARD_NUMBER = 'cardNumber'), (e.CARD_CVC = 'cvc'), (e.CARD_EXPIRATION_DATE = 'expirationDate'), (e.CARD_NAME = 'name'), (e.ADDRESS_NAME = 'name'), (e.ADDRESS_LINE_1 = 'line1'), (e.ADDRESS_LINE_2 = 'line2'), (e.ADDRESS_CITY = 'city'), (e.ADDRESS_STATE = 'state'), (e.ADDRESS_POSTAL_CODE = 'postalCode'), (e.ADDRESS_COUNTRY = 'country');
    })(a || (a = {})),
    !(function (e) {
        (e.ADDRESS_LINE_1 = 'address_line1'), (e.ADDRESS_LINE_2 = 'address_line2'), (e.ADDRESS_CITY = 'address_city'), (e.ADDRESS_STATE = 'address_state'), (e.ADDRESS_ZIP = 'address_zip'), (e.ADDRESS_COUNTRY = 'address_country'), (e.CARD_NUMBER = 'number'), (e.CARD_EXPIRATION_DATE = 'exp'), (e.CARD_EXPIRATION_MONTH = 'exp_month'), (e.CARD_EXPIRATION_YEAR = 'exp_year');
    })(o || (o = {}));
let p = Object.freeze({
        address_line1: 'line1',
        address_line2: 'line2',
        address_city: 'city',
        address_state: 'state',
        address_zip: 'postalCode',
        address_country: 'country',
        number: 'cardNumber',
        exp: 'expirationDate',
        exp_month: 'expirationDate',
        exp_year: 'expirationDate'
    }),
    h = Object.freeze({
        line_1: 'line1',
        line_2: 'line2',
        postal_code: 'postalCode'
    });
!(function (e) {
    (e.CARD = 'card'), (e.ADDRESS = 'address');
})(s || (s = {}));
let _ = new Set(['cardNumber', 'cvc', 'expirationDate', 'name']),
    m = new Set(['name', 'line1', 'line2', 'city', 'state', 'postalCode', 'country']);
function g(e) {
    var n, r, i, a, o;
    if ('string' != typeof e && (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.code) === u.f$) {
        if (!Array.isArray(null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.errors) && (null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : null === (i = a.errors) || void 0 === i ? void 0 : i.billing_address) != null) {
            for (let n in e.body.errors.billing_address) {
                let r = e.body.errors.billing_address[n];
                delete e.body.errors.billing_address[n], (e.body.errors[n] = r);
            }
            delete e.body.errors.billing_address;
        }
        (null === (o = e.body) || void 0 === o ? void 0 : o.errors) != null && (e.body = (0, u.J9)(e.body.errors));
    }
    return new E(e);
}
class E extends c.Z {
    _isInFieldSet(e) {
        for (let n in this.fields) if (e.has(n)) return !0;
    }
    hasCardError() {
        return this._isInFieldSet(_);
    }
    hasAddressError() {
        return this._isInFieldSet(m);
    }
    constructor(e, n) {
        for (let r in (super(e, n), f(this, 'paymentId', null), 100027 === this.code ? (this.message = d.intl.string(d.t['+4Empq'])) : 50048 === this.code ? (this.message = d.intl.string(d.t.DtFqEB)) : 100002 === this.code ? (this.message = d.intl.string(d.t.yNYvKy)) : 100042 === this.code ? (this.message = d.intl.string(d.t['3jprCQ'])) : 100078 === this.code ? (this.message = d.intl.string(d.t.MHlpoK)) : 100096 === this.code ? (this.message = d.intl.string(d.t.Hiwqub)) : 100097 === this.code ? (this.message = d.intl.string(d.t.c5zDr6)) : 100107 === this.code ? (this.message = d.intl.string(d.t.yX8s2t)) : 100054 === this.code ? (this.message = d.intl.string(d.t.p0UBvb)) : 429 === this.status ? (this.message = d.intl.string(d.t.sUWxgY)) : 0 === this.code ? (this.message = d.intl.string(d.t['5mlOCQ'])) : 400 === this.status && null != this.fields.captcha_key && (this.message = d.intl.string(d.t['3s/vDA'])), this.fields)) {
            let e = p[r] || h[r];
            if (null != e) {
                let n = this.fields[r];
                delete this.fields[r], (this.fields[e] = n);
            }
        }
        null != e.body && 'string' == typeof e.body.payment_id && (this.paymentId = e.body.payment_id);
    }
}
f(E, 'ErrorCodes', i), f(E, 'Fields', a), f(E, 'Sections', s), f(E, 'CARD_ERRORS', _), f(E, 'ADDRESS_ERRORS', m), (n.ZP = E);
