n.d(t, { Ir: () => C, ZC: () => p, l_: () => _, ou: () => h, pn: () => c, zT: () => E });
var r,
    a = n(64700),
    i = n(845584),
    o = n(626584),
    l = n(739508),
    s = n(566980),
    d = n(985018);
let u = new o.A("PaymentSteps");
var c =
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
    p = new Set([
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
function C(e) {
    switch (e) {
        case "plan_select":
            return d.intl.string(d.t["r+SebU"]);
        case "payment_type":
        case "add_payment_steps":
            return d.intl.string(d.t.Sb6wI1);
        case "awaiting_purchase_token_auth":
        case "review":
            return d.intl.string(d.t.QBnNHq);
        case "shop":
            return d.intl.string(d.t.xj9ooX);
        case "payment_request_information":
            return d.intl.string(d.t.DDPRXs);
        case "credit_card_information":
            return d.intl.string(d.t.yMPCXL);
        case "address":
            return d.intl.string(d.t["50Auo2"]);
        case "paypal_information":
            return d.intl.string(d.t.RVHDnH);
        case "venmo_information":
            return d.intl.string(d.t.bzQdwW);
        case "przelewy24_information":
            return d.intl.string(d.t.BW0R4v);
        case "cash_app_information":
            return d.intl.string(d.t.Gz1fyE);
        case "gift_customization":
            return d.intl.string(d.t.R0vK0N);
    }
    throw Error(`Unexpected step: ${e}`);
}
function h(e) {
    if (null != e) {
        if (!(e instanceof i.Ey)) throw (u.error(e), (0, l.pM)(e), Error("Unexpected error type"));
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
function E(e, t, n) {
    a.useEffect(() => {
        null != e && "review" !== e && t !== s.h.WAITING && t !== s.h.COMPLETED && n(s.h.WAITING);
    }, [e, t, n]);
}
