"use strict";
n.d(t, { Ay: () => h, Wd: () => f, tG: () => a });
var r = n(562465),
    i = n(178253),
    s = n(985018),
    a = (function (e) {
        return (
            (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
            (e[(e.UNKNOWN_BILLING_PROFILE = 100001)] = "UNKNOWN_BILLING_PROFILE"),
            (e[(e.UNKNOWN_PAYMENT_SOURCE = 100002)] = "UNKNOWN_PAYMENT_SOURCE"),
            (e[(e.UNKNOWN_SUBSCRIPTION = 100003)] = "UNKNOWN_SUBSCRIPTION"),
            (e[(e.ALREADY_SUBSCRIBED = 100004)] = "ALREADY_SUBSCRIBED"),
            (e[(e.INVALID_PLAN = 100005)] = "INVALID_PLAN"),
            (e[(e.PAYMENT_SOURCE_REQUIRED = 100006)] = "PAYMENT_SOURCE_REQUIRED"),
            (e[(e.ALREADY_CANCELED = 100007)] = "ALREADY_CANCELED"),
            (e[(e.INVALID_PAYMENT = 100008)] = "INVALID_PAYMENT"),
            (e[(e.ALREADY_REFUNDED = 100009)] = "ALREADY_REFUNDED"),
            (e[(e.INVALID_BILLING_ADDRESS = 100010)] = "INVALID_BILLING_ADDRESS"),
            (e[(e.ALREADY_PURCHASED = 100011)] = "ALREADY_PURCHASED"),
            (e[(e.DUPLICATE_PURCHASE_ATTEMPT = 100012)] = "DUPLICATE_PURCHASE_ATTEMPT"),
            (e[(e.BILLING_PURCHASE_REQUEST_INVALID = 100017)] = "BILLING_PURCHASE_REQUEST_INVALID"),
            (e[(e.NEGATIVE_INVOICE_AMOUNT = 100027)] = "NEGATIVE_INVOICE_AMOUNT"),
            (e[(e.AUTHENTICATION_REQUIRED = 100029)] = "AUTHENTICATION_REQUIRED"),
            (e[(e.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042)] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS"),
            (e[(e.CONFIRMATION_REQUIRED = 100047)] = "CONFIRMATION_REQUIRED"),
            (e[(e.CARD_DECLINED = 100054)] = "CARD_DECLINED"),
            (e[(e.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097)] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED"),
            (e[(e.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056)] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED"),
            (e[(e.INVALID_PAYMENT_SOURCE = 50048)] = "INVALID_PAYMENT_SOURCE"),
            (e[(e.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051)] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE"),
            (e[(e.BILLING_APPLE_SERVER_API_ERROR = 100070)] = "BILLING_APPLE_SERVER_API_ERROR"),
            (e[(e.BILLING_TRIAL_REDEMPTION_DISABLED = 100078)] = "BILLING_TRIAL_REDEMPTION_DISABLED"),
            (e[(e.BILLING_PAUSE_DISABLED = 100079)] = "BILLING_PAUSE_DISABLED"),
            (e[(e.BILLING_PAUSE_PENDING_ALREADY_SET = 100080)] = "BILLING_PAUSE_PENDING_ALREADY_SET"),
            (e[(e.BILLING_PAUSE_NOT_ELIGIBLE = 100081)] = "BILLING_PAUSE_NOT_ELIGIBLE"),
            (e[(e.BILLING_PAUSE_INVALID_INTERVAL = 100082)] = "BILLING_PAUSE_INVALID_INTERVAL"),
            (e[(e.BILLING_ALREADY_PAUSED = 100083)] = "BILLING_ALREADY_PAUSED"),
            (e[(e.BILLING_CANNOT_CHARGE_ZERO_AMOUNT = 100084)] = "BILLING_CANNOT_CHARGE_ZERO_AMOUNT"),
            (e[(e.BILLING_PAUSE_INVALID_UPDATE = 100094)] = "BILLING_PAUSE_INVALID_UPDATE"),
            (e[(e.BILLING_BUNDLE_ALREADY_PURCHASED = 100096)] = "BILLING_BUNDLE_ALREADY_PURCHASED"),
            (e[(e.BILLING_BUNDLE_PARTIALLY_OWNED = 100097)] = "BILLING_BUNDLE_PARTIALLY_OWNED"),
            (e[(e.BILLING_INSUFFICIENT_FUNDS = 100107)] = "BILLING_INSUFFICIENT_FUNDS"),
            (e[(e.BILLING_OUTDATED_REQUEST_PARAMETERS = 100111)] = "BILLING_OUTDATED_REQUEST_PARAMETERS"),
            (e[(e.BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY = 100144)] = "BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY"),
            (e[(e.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE = 590001)] = "VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE"),
            e
        );
    })({}),
    o = (function (e) {
        return (
            (e.CARD_NUMBER = "cardNumber"),
            (e.CARD_CVC = "cvc"),
            (e.CARD_EXPIRATION_DATE = "expirationDate"),
            (e.CARD_NAME = "name"),
            (e.ADDRESS_NAME = "name"),
            (e.ADDRESS_LINE_1 = "line1"),
            (e.ADDRESS_LINE_2 = "line2"),
            (e.ADDRESS_CITY = "city"),
            (e.ADDRESS_STATE = "state"),
            (e.ADDRESS_POSTAL_CODE = "postalCode"),
            (e.ADDRESS_COUNTRY = "country"),
            e
        );
    })(o || {});
let l = Object.freeze({
        address_line1: "line1",
        address_line2: "line2",
        address_city: "city",
        address_state: "state",
        address_zip: "postalCode",
        address_country: "country",
        number: "cardNumber",
        exp: "expirationDate",
        exp_month: "expirationDate",
        exp_year: "expirationDate",
    }),
    u = Object.freeze({ line_1: "line1", line_2: "line2", postal_code: "postalCode" });
var c = (function (e) {
    return (e.CARD = "card"), (e.ADDRESS = "address"), e;
})(c || {});
let d = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
    _ = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);
function f(e) {
    if ("string" != typeof e && e?.body?.code === r.bG) {
        if (!Array.isArray(e?.body?.errors) && e?.body?.errors?.billing_address != null) {
            for (let t in e.body.errors.billing_address) {
                let n = e.body.errors.billing_address[t];
                delete e.body.errors.billing_address[t], (e.body.errors[t] = n);
            }
            delete e.body.errors.billing_address;
        }
        e.body?.errors != null && (e.body = (0, r.ni)(e.body.errors));
    }
    return new p(e);
}
class p extends i.A {
    paymentId = null;
    static ErrorCodes = a;
    static Fields = o;
    static Sections = c;
    static CARD_ERRORS = d;
    static ADDRESS_ERRORS = _;
    constructor(e, t) {
        for (const n in (super(e, t),
        100027 === this.code
            ? (this.message = s.intl.string(s.t["+4Empk"]))
            : 50048 === this.code
              ? (this.message = s.intl.string(s.t.DtFqEI))
              : 100002 === this.code
                ? (this.message = s.intl.string(s.t.yNYvK1))
                : 100042 === this.code
                  ? (this.message = s.intl.string(s.t["3jprCb"]))
                  : 100078 === this.code
                    ? (this.message = s.intl.string(s.t.MHlpoJ))
                    : 100096 === this.code
                      ? (this.message = s.intl.string(s.t.Hiwqua))
                      : 100097 === this.code
                        ? (this.message = s.intl.string(s.t.c5zDr3))
                        : 100107 === this.code
                          ? (this.message = s.intl.string(s.t.yX8s2v))
                          : 100054 === this.code
                            ? (this.message = s.intl.string(s.t.p0UBvU))
                            : 100111 === this.code
                              ? (this.message = s.intl.string(s.t.uhPY5p))
                              : 100144 === this.code
                                ? (this.message = s.intl.string(s.t.ckFebQ))
                                : 429 === this.status
                                  ? (this.message = s.intl.string(s.t.sUWxgR))
                                  : 0 === this.code
                                    ? (this.message = s.intl.string(s.t["5mlOCW"]))
                                    : 400 === this.status &&
                                      null != this.fields.captcha_key &&
                                      (this.message = s.intl.string(s.t["3s/vDN"])),
        this.fields)) {
            const e = l[n] || u[n];
            if (null != e) {
                const t = this.fields[n];
                delete this.fields[n], (this.fields[e] = t);
            }
        }
        null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id);
    }
    _isInFieldSet(e) {
        for (let t in this.fields) if (e.has(t)) return !0;
    }
    hasCardError() {
        return this._isInFieldSet(d);
    }
    hasAddressError() {
        return this._isInFieldSet(_);
    }
}
let h = p;
