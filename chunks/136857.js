"use strict";
n.d(t, { Ay: () => p, Wd: () => I, tG: () => d });
var i,
    r,
    a,
    s = n(636537),
    l = n(178253),
    o = n(375708),
    d =
        (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.UNKNOWN_BILLING_PROFILE = 100001)] = "UNKNOWN_BILLING_PROFILE"),
        (i[(i.UNKNOWN_PAYMENT_SOURCE = 100002)] = "UNKNOWN_PAYMENT_SOURCE"),
        (i[(i.UNKNOWN_SUBSCRIPTION = 100003)] = "UNKNOWN_SUBSCRIPTION"),
        (i[(i.ALREADY_SUBSCRIBED = 100004)] = "ALREADY_SUBSCRIBED"),
        (i[(i.INVALID_PLAN = 100005)] = "INVALID_PLAN"),
        (i[(i.PAYMENT_SOURCE_REQUIRED = 100006)] = "PAYMENT_SOURCE_REQUIRED"),
        (i[(i.ALREADY_CANCELED = 100007)] = "ALREADY_CANCELED"),
        (i[(i.INVALID_PAYMENT = 100008)] = "INVALID_PAYMENT"),
        (i[(i.ALREADY_REFUNDED = 100009)] = "ALREADY_REFUNDED"),
        (i[(i.INVALID_BILLING_ADDRESS = 100010)] = "INVALID_BILLING_ADDRESS"),
        (i[(i.ALREADY_PURCHASED = 100011)] = "ALREADY_PURCHASED"),
        (i[(i.DUPLICATE_PURCHASE_ATTEMPT = 100012)] = "DUPLICATE_PURCHASE_ATTEMPT"),
        (i[(i.BILLING_PURCHASE_REQUEST_INVALID = 100017)] = "BILLING_PURCHASE_REQUEST_INVALID"),
        (i[(i.NEGATIVE_INVOICE_AMOUNT = 100027)] = "NEGATIVE_INVOICE_AMOUNT"),
        (i[(i.AUTHENTICATION_REQUIRED = 100029)] = "AUTHENTICATION_REQUIRED"),
        (i[(i.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042)] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS"),
        (i[(i.CONFIRMATION_REQUIRED = 100047)] = "CONFIRMATION_REQUIRED"),
        (i[(i.CARD_DECLINED = 100054)] = "CARD_DECLINED"),
        (i[(i.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097)] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED"),
        (i[(i.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056)] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED"),
        (i[(i.INVALID_PAYMENT_SOURCE = 50048)] = "INVALID_PAYMENT_SOURCE"),
        (i[(i.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051)] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE"),
        (i[(i.BILLING_APPLE_SERVER_API_ERROR = 100070)] = "BILLING_APPLE_SERVER_API_ERROR"),
        (i[(i.BILLING_TRIAL_REDEMPTION_DISABLED = 100078)] = "BILLING_TRIAL_REDEMPTION_DISABLED"),
        (i[(i.BILLING_PAUSE_DISABLED = 100079)] = "BILLING_PAUSE_DISABLED"),
        (i[(i.BILLING_PAUSE_PENDING_ALREADY_SET = 100080)] = "BILLING_PAUSE_PENDING_ALREADY_SET"),
        (i[(i.BILLING_PAUSE_NOT_ELIGIBLE = 100081)] = "BILLING_PAUSE_NOT_ELIGIBLE"),
        (i[(i.BILLING_PAUSE_INVALID_INTERVAL = 100082)] = "BILLING_PAUSE_INVALID_INTERVAL"),
        (i[(i.BILLING_ALREADY_PAUSED = 100083)] = "BILLING_ALREADY_PAUSED"),
        (i[(i.BILLING_CANNOT_CHARGE_ZERO_AMOUNT = 100084)] = "BILLING_CANNOT_CHARGE_ZERO_AMOUNT"),
        (i[(i.BILLING_PAUSE_INVALID_UPDATE = 100094)] = "BILLING_PAUSE_INVALID_UPDATE"),
        (i[(i.BILLING_BUNDLE_ALREADY_PURCHASED = 100096)] = "BILLING_BUNDLE_ALREADY_PURCHASED"),
        (i[(i.BILLING_BUNDLE_PARTIALLY_OWNED = 100097)] = "BILLING_BUNDLE_PARTIALLY_OWNED"),
        (i[(i.BILLING_INSUFFICIENT_FUNDS = 100107)] = "BILLING_INSUFFICIENT_FUNDS"),
        (i[(i.BILLING_OUTDATED_REQUEST_PARAMETERS = 100111)] = "BILLING_OUTDATED_REQUEST_PARAMETERS"),
        (i[(i.BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY = 100144)] = "BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY"),
        (i[(i.BILLING_SPENDING_LIMIT_WILL_EXCEED = 100150)] = "BILLING_SPENDING_LIMIT_WILL_EXCEED"),
        (i[(i.BILLING_SPENDING_LIMIT_REACHED = 100151)] = "BILLING_SPENDING_LIMIT_REACHED"),
        (i[(i.BILLING_ORDER_NOT_SIGNABLE = 100152)] = "BILLING_ORDER_NOT_SIGNABLE"),
        (i[(i.BILLING_APPLE_STORE_COUNTRY_MISMATCH = 100153)] = "BILLING_APPLE_STORE_COUNTRY_MISMATCH"),
        (i[(i.BILLING_CLAIM_IN_GAME_BEFORE_REPURCHASE = 100155)] = "BILLING_CLAIM_IN_GAME_BEFORE_REPURCHASE"),
        (i[(i.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE = 590001)] = "VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE"),
        i),
    c =
        (((r = c || {}).CARD_NUMBER = "cardNumber"),
        (r.CARD_CVC = "cvc"),
        (r.CARD_EXPIRATION_DATE = "expirationDate"),
        (r.CARD_NAME = "name"),
        (r.ADDRESS_NAME = "name"),
        (r.ADDRESS_LINE_1 = "line1"),
        (r.ADDRESS_LINE_2 = "line2"),
        (r.ADDRESS_CITY = "city"),
        (r.ADDRESS_STATE = "state"),
        (r.ADDRESS_POSTAL_CODE = "postalCode"),
        (r.ADDRESS_COUNTRY = "country"),
        r);
let u = Object.freeze({
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
var E = (((a = E || {}).CARD = "card"), (a.ADDRESS = "address"), a);
let A = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
    h = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);
function I(e) {
    if ("string" != typeof e && e?.body?.code === s.bG) {
        if (!Array.isArray(e?.body?.errors) && e?.body?.errors?.billing_address != null) {
            for (let t in e.body.errors.billing_address) {
                let n = e.body.errors.billing_address[t];
                delete e.body.errors.billing_address[t], (e.body.errors[t] = n);
            }
            delete e.body.errors.billing_address;
        }
        e.body?.errors != null && (e.body = (0, s.ni)(e.body.errors));
    }
    return new f(e);
}
class f extends l.A {
    paymentId = null;
    static ErrorCodes = d;
    static Fields = c;
    static Sections = E;
    static CARD_ERRORS = A;
    static ADDRESS_ERRORS = h;
    constructor(e, t) {
        for (const n in (super(e, t),
        100027 === this.code
            ? (this.message = o.intl.string(o.t["+4Empk"]))
            : 50048 === this.code
              ? (this.message = o.intl.string(o.t.DtFqEI))
              : 100002 === this.code
                ? (this.message = o.intl.string(o.t.yNYvK1))
                : 100042 === this.code
                  ? (this.message = o.intl.string(o.t["3jprCb"]))
                  : 100078 === this.code
                    ? (this.message = o.intl.string(o.t.MHlpoJ))
                    : 100096 === this.code
                      ? (this.message = o.intl.string(o.t.Hiwqua))
                      : 100097 === this.code
                        ? (this.message = o.intl.string(o.t.c5zDr3))
                        : 100107 === this.code
                          ? (this.message = o.intl.string(o.t.yX8s2v))
                          : 100054 === this.code
                            ? (this.message = o.intl.string(o.t.p0UBvU))
                            : 100111 === this.code
                              ? (this.message = o.intl.string(o.t.uhPY5p))
                              : 100144 === this.code
                                ? (this.message = o.intl.string(o.t.ckFebQ))
                                : 100011 === this.code
                                  ? (this.message = o.intl.string(o.t["3RT0Iu"]))
                                  : 100155 === this.code
                                    ? (this.message = o.intl.string(o.t.Zr0Z4K))
                                    : 429 === this.status
                                      ? (this.message = o.intl.string(o.t.sUWxgR))
                                      : 0 === this.code
                                        ? (this.message = o.intl.string(o.t["5mlOCW"]))
                                        : 400 === this.status &&
                                          null != this.fields.captcha_key &&
                                          (this.message = o.intl.string(o.t["3s/vDN"])),
        this.fields)) {
            const e = u[n] || _[n];
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
        return this._isInFieldSet(A);
    }
    hasAddressError() {
        return this._isInFieldSet(h);
    }
}
let p = f;
