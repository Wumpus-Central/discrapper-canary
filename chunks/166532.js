n.d(t, { Ir: () => p, ZC: () => E, l_: () => C, ou: () => h, pn: () => d, zT: () => c });
var o,
    r = n(64700),
    i = n(845584),
    a = n(626584),
    l = n(739508),
    s = n(566980),
    u = n(985018);
let _ = new a.A("PaymentSteps");
var d =
    (((o = {}).PAYMENT_TYPE = "payment_type"),
    (o.PAYMENT_ELEMENT = "payment_element"),
    (o.CREDIT_CARD_INFORMATION = "credit_card_information"),
    (o.PAYPAL_INFORMATION = "paypal_information"),
    (o.VENMO_INFORMATION = "venmo_information"),
    (o.PRZELEWY24_INFORMATION = "przelewy24_information"),
    (o.EPS_INFORMATION = "eps_information"),
    (o.IDEAL_INFORMATION = "ideal_information"),
    (o.CASH_APP_INFORMATION = "cash_app_information"),
    (o.PAYMENT_REQUEST_INFORMATION = "payment_request_information"),
    (o.ADDRESS = "address"),
    (o.AWAITING_AUTHENTICATION = "awaiting_authentication"),
    (o.SKU_SELECT = "sku_select"),
    (o.PLAN_SELECT = "plan_select"),
    (o.PREMIUM_UPSELL = "premium_upsell"),
    (o.PREMIUM_GUILD_UPSELL = "premium_guild_upsell"),
    (o.REVIEW = "review"),
    (o.CONFIRM = "confirm"),
    (o.CLAIM_FREE_SKU = "claim_free_sku"),
    (o.SKU_PREVIEW = "sku_preview"),
    (o.LOADING_PAYMENT_SOURCES = "loading_payment_sources"),
    (o.SHOP = "shop"),
    (o.PROMOTION_INFO = "promotion_info"),
    (o.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth"),
    (o.BENEFITS = "benefits"),
    (o.WHAT_YOU_LOSE = "what_you_lose"),
    (o.ADD_PAYMENT_STEPS = "add_payment_steps"),
    (o.ATTEMPT_GOOGLE_PAY = "attempt_google_pay"),
    (o.ATTEMPT_APPLE_PAY = "attempt_apple_pay"),
    (o.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout"),
    (o.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY = "awaiting_browser_checkout_google_pay"),
    (o.AWAITING_BROWSER_CHECKOUT_APPLE_PAY = "awaiting_browser_checkout_apple_pay"),
    (o.GIFT_CUSTOMIZATION = "gift_customization"),
    (o.SELECT_FREE_SKU = "select_free_sku"),
    o);
let C = new Set([
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
        if (!(e instanceof i.Ey)) throw (_.error(e), (0, l.pM)(e), Error("Unexpected error type"));
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
function c(e, t, n) {
    r.useEffect(() => {
        null != e && "review" !== e && t !== s.h.WAITING && t !== s.h.COMPLETED && n(s.h.WAITING);
    }, [e, t, n]);
}
