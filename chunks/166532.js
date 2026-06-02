r.d(t, { Ir: () => _, ZC: () => f, l_: () => p, ou: () => m, pn: () => d, zT: () => h });
var n,
    a = r(64700),
    l = r(913122),
    i = r(626584),
    u = r(739508),
    s = r(566980),
    o = r(375708);
let c = new i.A("PaymentSteps");
var d =
    (((n = {}).PAYMENT_TYPE = "payment_type"),
    (n.PAYMENT_ELEMENT = "payment_element"),
    (n.CREDIT_CARD_INFORMATION = "credit_card_information"),
    (n.PAYPAL_INFORMATION = "paypal_information"),
    (n.VENMO_INFORMATION = "venmo_information"),
    (n.PRZELEWY24_INFORMATION = "przelewy24_information"),
    (n.EPS_INFORMATION = "eps_information"),
    (n.IDEAL_INFORMATION = "ideal_information"),
    (n.CASH_APP_INFORMATION = "cash_app_information"),
    (n.PAYMENT_REQUEST_INFORMATION = "payment_request_information"),
    (n.ADDRESS = "address"),
    (n.AWAITING_AUTHENTICATION = "awaiting_authentication"),
    (n.SKU_SELECT = "sku_select"),
    (n.PLAN_SELECT = "plan_select"),
    (n.PREMIUM_UPSELL = "premium_upsell"),
    (n.PREMIUM_GUILD_UPSELL = "premium_guild_upsell"),
    (n.REVIEW = "review"),
    (n.CONFIRM = "confirm"),
    (n.CLAIM_FREE_SKU = "claim_free_sku"),
    (n.SKU_PREVIEW = "sku_preview"),
    (n.LOADING_PAYMENT_SOURCES = "loading_payment_sources"),
    (n.SHOP = "shop"),
    (n.PROMOTION_INFO = "promotion_info"),
    (n.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth"),
    (n.BENEFITS = "benefits"),
    (n.WHAT_YOU_LOSE = "what_you_lose"),
    (n.ADD_PAYMENT_STEPS = "add_payment_steps"),
    (n.ATTEMPT_GOOGLE_PAY = "attempt_google_pay"),
    (n.ATTEMPT_APPLE_PAY = "attempt_apple_pay"),
    (n.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout"),
    (n.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY = "awaiting_browser_checkout_google_pay"),
    (n.AWAITING_BROWSER_CHECKOUT_APPLE_PAY = "awaiting_browser_checkout_apple_pay"),
    (n.GIFT_CUSTOMIZATION = "gift_customization"),
    (n.SELECT_FREE_SKU = "select_free_sku"),
    n);
let p = new Set([
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
function _(e) {
    switch (e) {
        case "plan_select":
            return o.intl.string(o.t["r+SebU"]);
        case "payment_type":
        case "add_payment_steps":
            return o.intl.string(o.t.Sb6wI1);
        case "awaiting_purchase_token_auth":
        case "review":
            return o.intl.string(o.t.QBnNHq);
        case "shop":
            return o.intl.string(o.t.xj9ooX);
        case "payment_request_information":
            return o.intl.string(o.t.DDPRXs);
        case "credit_card_information":
            return o.intl.string(o.t.yMPCXL);
        case "address":
            return o.intl.string(o.t["50Auo2"]);
        case "paypal_information":
            return o.intl.string(o.t.RVHDnH);
        case "venmo_information":
            return o.intl.string(o.t.bzQdwW);
        case "przelewy24_information":
            return o.intl.string(o.t.BW0R4v);
        case "cash_app_information":
            return o.intl.string(o.t.Gz1fyE);
        case "gift_customization":
            return o.intl.string(o.t.R0vK0N);
    }
    throw Error(`Unexpected step: ${e}`);
}
function m(e) {
    if (null != e) {
        if (!(e instanceof l.Ey)) throw (c.error(e), (0, u.pM)(e), Error("Unexpected error type"));
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
function h(e, t, r) {
    a.useEffect(() => {
        null != e && "review" !== e && t !== s.h.WAITING && t !== s.h.COMPLETED && r(s.h.WAITING);
    }, [e, t, r]);
}
