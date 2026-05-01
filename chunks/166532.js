"use strict";
n.d(t, { Ir: () => h, ZC: () => f, l_: () => _, ou: () => p, pn: () => d, zT: () => E });
var i,
    r = n(64700),
    s = n(845584),
    a = n(626584),
    o = n(739508),
    l = n(566980),
    u = n(375708);
let c = new a.A("PaymentSteps");
var d =
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
let _ = new Set([
        "awaiting_browser_checkout",
        "awaiting_browser_checkout_google_pay",
        "awaiting_browser_checkout_apple_pay",
    ]),
    f = new Set([
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
            return u.intl.string(u.t["r+SebU"]);
        case "payment_type":
        case "add_payment_steps":
            return u.intl.string(u.t.Sb6wI1);
        case "awaiting_purchase_token_auth":
        case "review":
            return u.intl.string(u.t.QBnNHq);
        case "shop":
            return u.intl.string(u.t.xj9ooX);
        case "payment_request_information":
            return u.intl.string(u.t.DDPRXs);
        case "credit_card_information":
            return u.intl.string(u.t.yMPCXL);
        case "address":
            return u.intl.string(u.t["50Auo2"]);
        case "paypal_information":
            return u.intl.string(u.t.RVHDnH);
        case "venmo_information":
            return u.intl.string(u.t.bzQdwW);
        case "przelewy24_information":
            return u.intl.string(u.t.BW0R4v);
        case "cash_app_information":
            return u.intl.string(u.t.Gz1fyE);
        case "gift_customization":
            return u.intl.string(u.t.R0vK0N);
    }
    throw Error(`Unexpected step: ${e}`);
}
function p(e) {
    if (null != e) {
        if (!(e instanceof s.Ey)) throw (c.error(e), (0, o.pM)(e), Error("Unexpected error type"));
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
function E(e, t, n) {
    r.useEffect(() => {
        null != e && "review" !== e && t !== l.h.WAITING && t !== l.h.COMPLETED && n(l.h.WAITING);
    }, [e, t, n]);
}
