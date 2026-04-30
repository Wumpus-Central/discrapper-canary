"use strict";
n.d(t, { Ir: () => h, ZC: () => E, l_: () => c, ou: () => m, pn: () => u, zT: () => f });
var i,
    r = n(64700),
    s = n(845584),
    a = n(626584),
    o = n(739508),
    l = n(566980),
    _ = n(985018);
let d = new a.A("PaymentSteps");
var u =
    (((i = {}).PAYMENT_TYPE = "payment_type"),
    (i.PAYMENT_ELEMENT = "payment_element"),
    (i.CREDIT_CARD_INFORMATION = "credit_card_information"),
    (i.PAYPAL_INFORMATION = "paypal_information"),
    (i.VENMO_INFORMATION = "venmo_information"),
    (i.PRZELEWY24_INFORMATION = "przelewy24_information"),
    (i.EPS_INFORMATION = "eps_information"),
    (i.IDEAL_INFORMATION = "ideal_information"),
    (i.CASH_APP_INFORMATION = "cash_app_information"),
    (i.PAYMENT_REQUEST_INFORMATION = "payment_request_information"),
    (i.ADDRESS = "address"),
    (i.AWAITING_AUTHENTICATION = "awaiting_authentication"),
    (i.SKU_SELECT = "sku_select"),
    (i.PLAN_SELECT = "plan_select"),
    (i.PREMIUM_UPSELL = "premium_upsell"),
    (i.PREMIUM_GUILD_UPSELL = "premium_guild_upsell"),
    (i.REVIEW = "review"),
    (i.CONFIRM = "confirm"),
    (i.CLAIM_FREE_SKU = "claim_free_sku"),
    (i.SKU_PREVIEW = "sku_preview"),
    (i.LOADING_PAYMENT_SOURCES = "loading_payment_sources"),
    (i.SHOP = "shop"),
    (i.PROMOTION_INFO = "promotion_info"),
    (i.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth"),
    (i.BENEFITS = "benefits"),
    (i.WHAT_YOU_LOSE = "what_you_lose"),
    (i.ADD_PAYMENT_STEPS = "add_payment_steps"),
    (i.ATTEMPT_GOOGLE_PAY = "attempt_google_pay"),
    (i.ATTEMPT_APPLE_PAY = "attempt_apple_pay"),
    (i.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout"),
    (i.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY = "awaiting_browser_checkout_google_pay"),
    (i.AWAITING_BROWSER_CHECKOUT_APPLE_PAY = "awaiting_browser_checkout_apple_pay"),
    (i.GIFT_CUSTOMIZATION = "gift_customization"),
    (i.SELECT_FREE_SKU = "select_free_sku"),
    i);
let c = new Set([
        "awaiting_browser_checkout",
        "awaiting_browser_checkout_google_pay",
        "awaiting_browser_checkout_apple_pay",
    ]),
    E = new Set([
        "credit_card_information",
        "payment_request_information",
        "paypal_information",
        "venmo_information",
        "cash_app_information",
        "address",
        "claim_free_sku",
        "sku_preview",
        "premium_upsell",
        "przelewy24_information",
    ]);
function h(e) {
    switch (e) {
        case "plan_select":
            return _.intl.string(_.t["r+SebU"]);
        case "payment_type":
        case "add_payment_steps":
            return _.intl.string(_.t.Sb6wI1);
        case "awaiting_purchase_token_auth":
        case "review":
            return _.intl.string(_.t.QBnNHq);
        case "shop":
            return _.intl.string(_.t.xj9ooX);
        case "payment_request_information":
            return _.intl.string(_.t.DDPRXs);
        case "credit_card_information":
            return _.intl.string(_.t.yMPCXL);
        case "address":
            return _.intl.string(_.t["50Auo2"]);
        case "paypal_information":
            return _.intl.string(_.t.RVHDnH);
        case "venmo_information":
            return _.intl.string(_.t.bzQdwW);
        case "przelewy24_information":
            return _.intl.string(_.t.BW0R4v);
        case "cash_app_information":
            return _.intl.string(_.t.Gz1fyE);
        case "gift_customization":
            return _.intl.string(_.t.R0vK0N);
    }
    throw Error(`Unexpected step: ${e}`);
}
function m(e) {
    if (null != e) {
        if (!(e instanceof s.Ey)) throw (d.error(e), (0, o.pM)(e), Error("Unexpected error type"));
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
function f(e, t, n) {
    r.useEffect(() => {
        null != e && "review" !== e && t !== l.h.WAITING && t !== l.h.COMPLETED && n(l.h.WAITING);
    }, [e, t, n]);
}
