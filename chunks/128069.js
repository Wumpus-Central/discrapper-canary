n.d(t, {
    SM: () => s,
    ZP: () => m,
    yD: () => p
}),
    n(47120);
var r = n(544891),
    i = n(34756),
    o = n(388032);
function a(e, t, n) {
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
var s = (function (e) {
        return (e[(e.UNKNOWN = 0)] = 'UNKNOWN'), (e[(e.UNKNOWN_BILLING_PROFILE = 100001)] = 'UNKNOWN_BILLING_PROFILE'), (e[(e.UNKNOWN_PAYMENT_SOURCE = 100002)] = 'UNKNOWN_PAYMENT_SOURCE'), (e[(e.UNKNOWN_SUBSCRIPTION = 100003)] = 'UNKNOWN_SUBSCRIPTION'), (e[(e.ALREADY_SUBSCRIBED = 100004)] = 'ALREADY_SUBSCRIBED'), (e[(e.INVALID_PLAN = 100005)] = 'INVALID_PLAN'), (e[(e.PAYMENT_SOURCE_REQUIRED = 100006)] = 'PAYMENT_SOURCE_REQUIRED'), (e[(e.ALREADY_CANCELED = 100007)] = 'ALREADY_CANCELED'), (e[(e.INVALID_PAYMENT = 100008)] = 'INVALID_PAYMENT'), (e[(e.ALREADY_REFUNDED = 100009)] = 'ALREADY_REFUNDED'), (e[(e.INVALID_BILLING_ADDRESS = 100010)] = 'INVALID_BILLING_ADDRESS'), (e[(e.ALREADY_PURCHASED = 100011)] = 'ALREADY_PURCHASED'), (e[(e.DUPLICATE_PURCHASE_ATTEMPT = 100012)] = 'DUPLICATE_PURCHASE_ATTEMPT'), (e[(e.BILLING_PURCHASE_REQUEST_INVALID = 100017)] = 'BILLING_PURCHASE_REQUEST_INVALID'), (e[(e.NEGATIVE_INVOICE_AMOUNT = 100027)] = 'NEGATIVE_INVOICE_AMOUNT'), (e[(e.AUTHENTICATION_REQUIRED = 100029)] = 'AUTHENTICATION_REQUIRED'), (e[(e.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042)] = 'SUBSCRIPTION_RENEWAL_IN_PROGRESS'), (e[(e.CONFIRMATION_REQUIRED = 100047)] = 'CONFIRMATION_REQUIRED'), (e[(e.CARD_DECLINED = 100054)] = 'CARD_DECLINED'), (e[(e.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097)] = 'INVALID_GIFT_REDEMPTION_FRAUD_REJECTED'), (e[(e.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056)] = 'PURCHASE_TOKEN_AUTHORIZATION_REQUIRED'), (e[(e.INVALID_PAYMENT_SOURCE = 50048)] = 'INVALID_PAYMENT_SOURCE'), (e[(e.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051)] = 'INVALID_CURRENCY_FOR_PAYMENT_SOURCE'), (e[(e.BILLING_APPLE_SERVER_API_ERROR = 100070)] = 'BILLING_APPLE_SERVER_API_ERROR'), (e[(e.BILLING_TRIAL_REDEMPTION_DISABLED = 100078)] = 'BILLING_TRIAL_REDEMPTION_DISABLED'), (e[(e.BILLING_PAUSE_DISABLED = 100079)] = 'BILLING_PAUSE_DISABLED'), (e[(e.BILLING_PAUSE_PENDING_ALREADY_SET = 100080)] = 'BILLING_PAUSE_PENDING_ALREADY_SET'), (e[(e.BILLING_PAUSE_NOT_ELIGIBLE = 100081)] = 'BILLING_PAUSE_NOT_ELIGIBLE'), (e[(e.BILLING_PAUSE_INVALID_INTERVAL = 100082)] = 'BILLING_PAUSE_INVALID_INTERVAL'), (e[(e.BILLING_ALREADY_PAUSED = 100083)] = 'BILLING_ALREADY_PAUSED'), (e[(e.BILLING_CANNOT_CHARGE_ZERO_AMOUNT = 100084)] = 'BILLING_CANNOT_CHARGE_ZERO_AMOUNT'), (e[(e.BILLING_PAUSE_INVALID_UPDATE = 100094)] = 'BILLING_PAUSE_INVALID_UPDATE'), (e[(e.BILLING_BUNDLE_ALREADY_PURCHASED = 100096)] = 'BILLING_BUNDLE_ALREADY_PURCHASED'), (e[(e.BILLING_BUNDLE_PARTIALLY_OWNED = 100097)] = 'BILLING_BUNDLE_PARTIALLY_OWNED'), (e[(e.BILLING_INSUFFICIENT_FUNDS = 100107)] = 'BILLING_INSUFFICIENT_FUNDS'), (e[(e.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE = 590001)] = 'VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE'), e;
    })({}),
    l = (function (e) {
        return (e.CARD_NUMBER = 'cardNumber'), (e.CARD_CVC = 'cvc'), (e.CARD_EXPIRATION_DATE = 'expirationDate'), (e.CARD_NAME = 'name'), (e.ADDRESS_NAME = 'name'), (e.ADDRESS_LINE_1 = 'line1'), (e.ADDRESS_LINE_2 = 'line2'), (e.ADDRESS_CITY = 'city'), (e.ADDRESS_STATE = 'state'), (e.ADDRESS_POSTAL_CODE = 'postalCode'), (e.ADDRESS_COUNTRY = 'country'), e;
    })(l || {});
let c = Object.freeze({
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
    u = Object.freeze({
        line_1: 'line1',
        line_2: 'line2',
        postal_code: 'postalCode'
    });
var d = (function (e) {
    return (e.CARD = 'card'), (e.ADDRESS = 'address'), e;
})(d || {});
let f = new Set(['cardNumber', 'cvc', 'expirationDate', 'name']),
    _ = new Set(['name', 'line1', 'line2', 'city', 'state', 'postalCode', 'country']);
function p(e) {
    var t, n, i, o, a;
    if ('string' != typeof e && (null == e || null == (t = e.body) ? void 0 : t.code) === r.f$) {
        if (!Array.isArray(null == e || null == (n = e.body) ? void 0 : n.errors) && (null == e || null == (o = e.body) || null == (i = o.errors) ? void 0 : i.billing_address) != null) {
            for (let t in e.body.errors.billing_address) {
                let n = e.body.errors.billing_address[t];
                delete e.body.errors.billing_address[t], (e.body.errors[t] = n);
            }
            delete e.body.errors.billing_address;
        }
        (null == (a = e.body) ? void 0 : a.errors) != null && (e.body = (0, r.J9)(e.body.errors));
    }
    return new h(e);
}
class h extends i.Z {
    _isInFieldSet(e) {
        for (let t in this.fields) if (e.has(t)) return !0;
    }
    hasCardError() {
        return this._isInFieldSet(f);
    }
    hasAddressError() {
        return this._isInFieldSet(_);
    }
    constructor(e, t) {
        for (let n in (super(e, t), a(this, 'paymentId', null), 100027 === this.code ? (this.message = o.NW.string(o.t['+4Empq'])) : 50048 === this.code ? (this.message = o.NW.string(o.t.DtFqEB)) : 100002 === this.code ? (this.message = o.NW.string(o.t.yNYvKy)) : 100042 === this.code ? (this.message = o.NW.string(o.t['3jprCQ'])) : 100078 === this.code ? (this.message = o.NW.string(o.t.MHlpoK)) : 100096 === this.code ? (this.message = o.NW.string(o.t.Hiwqub)) : 100097 === this.code ? (this.message = o.NW.string(o.t.c5zDr6)) : 100107 === this.code ? (this.message = o.NW.string(o.t.yX8s2t)) : 100054 === this.code ? (this.message = o.NW.string(o.t.p0UBvb)) : 429 === this.status ? (this.message = o.NW.string(o.t.sUWxgY)) : 0 === this.code ? (this.message = o.NW.string(o.t['5mlOCQ'])) : 400 === this.status && null != this.fields.captcha_key && (this.message = o.NW.string(o.t['3s/vDA'])), this.fields)) {
            let e = c[n] || u[n];
            if (null != e) {
                let t = this.fields[n];
                delete this.fields[n], (this.fields[e] = t);
            }
        }
        null != e.body && 'string' == typeof e.body.payment_id && (this.paymentId = e.body.payment_id);
    }
}
a(h, 'ErrorCodes', s), a(h, 'Fields', l), a(h, 'Sections', d), a(h, 'CARD_ERRORS', f), a(h, 'ADDRESS_ERRORS', _);
let m = h;
