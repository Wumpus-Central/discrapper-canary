"use strict";
n.d(t, { Ay: () => g, Wd: () => p, tG: () => u });
var r,
    i,
    s,
    a = n(562465),
    o = n(178253),
    l = n(985018),
    u =
        (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"),
        (r[(r.UNKNOWN_BILLING_PROFILE = 100001)] = "UNKNOWN_BILLING_PROFILE"),
        (r[(r.UNKNOWN_PAYMENT_SOURCE = 100002)] = "UNKNOWN_PAYMENT_SOURCE"),
        (r[(r.UNKNOWN_SUBSCRIPTION = 100003)] = "UNKNOWN_SUBSCRIPTION"),
        (r[(r.ALREADY_SUBSCRIBED = 100004)] = "ALREADY_SUBSCRIBED"),
        (r[(r.INVALID_PLAN = 100005)] = "INVALID_PLAN"),
        (r[(r.PAYMENT_SOURCE_REQUIRED = 100006)] = "PAYMENT_SOURCE_REQUIRED"),
        (r[(r.ALREADY_CANCELED = 100007)] = "ALREADY_CANCELED"),
        (r[(r.INVALID_PAYMENT = 100008)] = "INVALID_PAYMENT"),
        (r[(r.ALREADY_REFUNDED = 100009)] = "ALREADY_REFUNDED"),
        (r[(r.INVALID_BILLING_ADDRESS = 100010)] = "INVALID_BILLING_ADDRESS"),
        (r[(r.ALREADY_PURCHASED = 100011)] = "ALREADY_PURCHASED"),
        (r[(r.DUPLICATE_PURCHASE_ATTEMPT = 100012)] = "DUPLICATE_PURCHASE_ATTEMPT"),
        (r[(r.BILLING_PURCHASE_REQUEST_INVALID = 100017)] = "BILLING_PURCHASE_REQUEST_INVALID"),
        (r[(r.NEGATIVE_INVOICE_AMOUNT = 100027)] = "NEGATIVE_INVOICE_AMOUNT"),
        (r[(r.AUTHENTICATION_REQUIRED = 100029)] = "AUTHENTICATION_REQUIRED"),
        (r[(r.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042)] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS"),
        (r[(r.CONFIRMATION_REQUIRED = 100047)] = "CONFIRMATION_REQUIRED"),
        (r[(r.CARD_DECLINED = 100054)] = "CARD_DECLINED"),
        (r[(r.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097)] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED"),
        (r[(r.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056)] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED"),
        (r[(r.INVALID_PAYMENT_SOURCE = 50048)] = "INVALID_PAYMENT_SOURCE"),
        (r[(r.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051)] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE"),
        (r[(r.BILLING_APPLE_SERVER_API_ERROR = 100070)] = "BILLING_APPLE_SERVER_API_ERROR"),
        (r[(r.BILLING_TRIAL_REDEMPTION_DISABLED = 100078)] = "BILLING_TRIAL_REDEMPTION_DISABLED"),
        (r[(r.BILLING_PAUSE_DISABLED = 100079)] = "BILLING_PAUSE_DISABLED"),
        (r[(r.BILLING_PAUSE_PENDING_ALREADY_SET = 100080)] = "BILLING_PAUSE_PENDING_ALREADY_SET"),
        (r[(r.BILLING_PAUSE_NOT_ELIGIBLE = 100081)] = "BILLING_PAUSE_NOT_ELIGIBLE"),
        (r[(r.BILLING_PAUSE_INVALID_INTERVAL = 100082)] = "BILLING_PAUSE_INVALID_INTERVAL"),
        (r[(r.BILLING_ALREADY_PAUSED = 100083)] = "BILLING_ALREADY_PAUSED"),
        (r[(r.BILLING_CANNOT_CHARGE_ZERO_AMOUNT = 100084)] = "BILLING_CANNOT_CHARGE_ZERO_AMOUNT"),
        (r[(r.BILLING_PAUSE_INVALID_UPDATE = 100094)] = "BILLING_PAUSE_INVALID_UPDATE"),
        (r[(r.BILLING_BUNDLE_ALREADY_PURCHASED = 100096)] = "BILLING_BUNDLE_ALREADY_PURCHASED"),
        (r[(r.BILLING_BUNDLE_PARTIALLY_OWNED = 100097)] = "BILLING_BUNDLE_PARTIALLY_OWNED"),
        (r[(r.BILLING_INSUFFICIENT_FUNDS = 100107)] = "BILLING_INSUFFICIENT_FUNDS"),
        (r[(r.BILLING_OUTDATED_REQUEST_PARAMETERS = 100111)] = "BILLING_OUTDATED_REQUEST_PARAMETERS"),
        (r[(r.BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY = 100144)] = "BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY"),
        (r[(r.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE = 590001)] = "VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE"),
        r),
    d =
        (((i = d || {}).CARD_NUMBER = "cardNumber"),
        (i.CARD_CVC = "cvc"),
        (i.CARD_EXPIRATION_DATE = "expirationDate"),
        (i.CARD_NAME = "name"),
        (i.ADDRESS_NAME = "name"),
        (i.ADDRESS_LINE_1 = "line1"),
        (i.ADDRESS_LINE_2 = "line2"),
        (i.ADDRESS_CITY = "city"),
        (i.ADDRESS_STATE = "state"),
        (i.ADDRESS_POSTAL_CODE = "postalCode"),
        (i.ADDRESS_COUNTRY = "country"),
        i);
let c = Object.freeze({
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
    _ = Object.freeze({ line_1: "line1", line_2: "line2", postal_code: "postalCode" });
var f = (((s = f || {}).CARD = "card"), (s.ADDRESS = "address"), s);
let E = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
    h = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);
function p(e) {
    if ("string" != typeof e && e?.body?.code === a.bG) {
        if (!Array.isArray(e?.body?.errors) && e?.body?.errors?.billing_address != null) {
            for (let t in e.body.errors.billing_address) {
                let n = e.body.errors.billing_address[t];
                delete e.body.errors.billing_address[t], (e.body.errors[t] = n);
            }
            delete e.body.errors.billing_address;
        }
        e.body?.errors != null && (e.body = (0, a.ni)(e.body.errors));
    }
    return new m(e);
}
class m extends o.A {
    paymentId = null;
    static ErrorCodes = u;
    static Fields = d;
    static Sections = f;
    static CARD_ERRORS = E;
    static ADDRESS_ERRORS = h;
    constructor(e, t) {
        for (const n in (super(e, t),
        100027 === this.code
            ? (this.message = l.intl.string(l.t["+4Empk"]))
            : 50048 === this.code
              ? (this.message = l.intl.string(l.t.DtFqEI))
              : 100002 === this.code
                ? (this.message = l.intl.string(l.t.yNYvK1))
                : 100042 === this.code
                  ? (this.message = l.intl.string(l.t["3jprCb"]))
                  : 100078 === this.code
                    ? (this.message = l.intl.string(l.t.MHlpoJ))
                    : 100096 === this.code
                      ? (this.message = l.intl.string(l.t.Hiwqua))
                      : 100097 === this.code
                        ? (this.message = l.intl.string(l.t.c5zDr3))
                        : 100107 === this.code
                          ? (this.message = l.intl.string(l.t.yX8s2v))
                          : 100054 === this.code
                            ? (this.message = l.intl.string(l.t.p0UBvU))
                            : 100111 === this.code
                              ? (this.message = l.intl.string(l.t.uhPY5p))
                              : 100144 === this.code
                                ? (this.message = l.intl.string(l.t.ckFebQ))
                                : 429 === this.status
                                  ? (this.message = l.intl.string(l.t.sUWxgR))
                                  : 0 === this.code
                                    ? (this.message = l.intl.string(l.t["5mlOCW"]))
                                    : 400 === this.status &&
                                      null != this.fields.captcha_key &&
                                      (this.message = l.intl.string(l.t["3s/vDN"])),
        this.fields)) {
            const e = c[n] || _[n];
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
        return this._isInFieldSet(E);
    }
    hasAddressError() {
        return this._isInFieldSet(h);
    }
}
let g = m;
