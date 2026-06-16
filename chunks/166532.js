"use strict";
n.d(t, { Ir: () => p, ZC: () => f, l_: () => h, ou: () => E, pn: () => _, zT: () => m });
var i,
    r = n(64700),
    s = n(913122),
    a = n(71804),
    o = n(626584),
    l = n(739508),
    u = n(566980),
    c = n(375708);
let d = new o.A("PaymentSteps");
var _ =
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
let h = new Set([
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
            return c.intl.string(c.t["r+SebU"]);
        case "payment_type":
        case "add_payment_steps":
            return c.intl.string(c.t.Sb6wI1);
        case "awaiting_purchase_token_auth":
        case "review":
            return c.intl.string(c.t.QBnNHq);
        case "shop":
            return c.intl.string(c.t.xj9ooX);
        case "payment_request_information":
            return c.intl.string(c.t.DDPRXs);
        case "credit_card_information":
            return c.intl.string(c.t.yMPCXL);
        case "address":
            return c.intl.string(c.t["50Auo2"]);
        case "paypal_information":
            return c.intl.string(c.t.RVHDnH);
        case "venmo_information":
            return c.intl.string(c.t.bzQdwW);
        case "przelewy24_information":
            return c.intl.string(c.t.BW0R4v);
        case "cash_app_information":
            return c.intl.string(c.t.Gz1fyE);
        case "gift_customization":
            return c.intl.string(c.t.R0vK0N);
    }
    throw new a.v({ message: `Unexpected step: ${e}`, extraSentryInformation: { step: e } });
}
function E(e) {
    if (null != e) {
        if (!(e instanceof s.Ey)) throw (d.error(e), (0, l.pM)(e), Error("Unexpected error type"));
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
function m(e, t, n) {
    r.useEffect(() => {
        null != e && "review" !== e && t !== u.h.WAITING && t !== u.h.COMPLETED && n(u.h.WAITING);
    }, [e, t, n]);
}
