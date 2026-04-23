"use strict";
n.d(t, { Ir: () => p, ZC: () => f, l_: () => _, ou: () => h, pn: () => d, zT: () => E });
var r,
    i = n(64700),
    s = n(198982),
    a = n(626584),
    o = n(739508),
    l = n(566980),
    u = n(985018);
let c = new a.A("PaymentSteps");
var d =
    (((r = {}).PAYMENT_TYPE = "payment_type"),
    (r.PAYMENT_ELEMENT = "payment_element"),
    (r.CREDIT_CARD_INFORMATION = "credit_card_information"),
    (r.PAYPAL_INFORMATION = "paypal_information"),
    (r.VENMO_INFORMATION = "venmo_information"),
    (r.PRZELEWY24_INFORMATION = "przelewy24_information"),
    (r.EPS_INFORMATION = "eps_information"),
    (r.IDEAL_INFORMATION = "ideal_information"),
    (r.CASH_APP_INFORMATION = "cash_app_information"),
    (r.PAYMENT_REQUEST_INFORMATION = "payment_request_information"),
    (r.ADDRESS = "address"),
    (r.AWAITING_AUTHENTICATION = "awaiting_authentication"),
    (r.SKU_SELECT = "sku_select"),
    (r.PLAN_SELECT = "plan_select"),
    (r.PREMIUM_UPSELL = "premium_upsell"),
    (r.PREMIUM_GUILD_UPSELL = "premium_guild_upsell"),
    (r.REVIEW = "review"),
    (r.CONFIRM = "confirm"),
    (r.CLAIM_FREE_SKU = "claim_free_sku"),
    (r.SKU_PREVIEW = "sku_preview"),
    (r.LOADING_PAYMENT_SOURCES = "loading_payment_sources"),
    (r.SHOP = "shop"),
    (r.PROMOTION_INFO = "promotion_info"),
    (r.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth"),
    (r.BENEFITS = "benefits"),
    (r.WHAT_YOU_LOSE = "what_you_lose"),
    (r.ADD_PAYMENT_STEPS = "add_payment_steps"),
    (r.ATTEMPT_GOOGLE_PAY = "attempt_google_pay"),
    (r.ATTEMPT_APPLE_PAY = "attempt_apple_pay"),
    (r.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout"),
    (r.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY = "awaiting_browser_checkout_google_pay"),
    (r.AWAITING_BROWSER_CHECKOUT_APPLE_PAY = "awaiting_browser_checkout_apple_pay"),
    (r.GIFT_CUSTOMIZATION = "gift_customization"),
    (r.SELECT_FREE_SKU = "select_free_sku"),
    r);
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
function p(e) {
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
function h(e) {
    if (null != e) {
        if (!(e instanceof s.Ey)) throw (c.error(e), (0, o.pM)(e), Error("Unexpected error type"));
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
function E(e, t, n) {
    i.useEffect(() => {
        null != e && "review" !== e && t !== l.h.WAITING && t !== l.h.COMPLETED && n(l.h.WAITING);
    }, [e, t, n]);
}
