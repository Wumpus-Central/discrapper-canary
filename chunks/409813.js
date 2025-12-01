n.d(t, {
    Ck: () => f,
    DJ: () => p,
    Nj: () => d,
    dZ: () => m,
    h8: () => u,
    ly: () => _,
}),
    n(388685),
    n(415506);
var r = n(473749),
    i = n(881052),
    a = n(710845),
    o = n(122289),
    s = n(45572),
    l = n(388032);
let c = new a.Z("PaymentSteps");
var u = (function (e) {
    return (
        (e.PAYMENT_TYPE = "payment_type"),
        (e.PAYMENT_ELEMENT = "payment_element"),
        (e.CREDIT_CARD_INFORMATION = "credit_card_information"),
        (e.PAYPAL_INFORMATION = "paypal_information"),
        (e.VENMO_INFORMATION = "venmo_information"),
        (e.PRZELEWY24_INFORMATION = "przelewy24_information"),
        (e.EPS_INFORMATION = "eps_information"),
        (e.IDEAL_INFORMATION = "ideal_information"),
        (e.CASH_APP_INFORMATION = "cash_app_information"),
        (e.PAYMENT_REQUEST_INFORMATION = "payment_request_information"),
        (e.ADDRESS = "address"),
        (e.AWAITING_AUTHENTICATION = "awaiting_authentication"),
        (e.SKU_SELECT = "sku_select"),
        (e.PLAN_SELECT = "plan_select"),
        (e.PREMIUM_UPSELL = "premium_upsell"),
        (e.PREMIUM_GUILD_UPSELL = "premium_guild_upsell"),
        (e.REVIEW = "review"),
        (e.CONFIRM = "confirm"),
        (e.CLAIM_FREE_SKU = "claim_free_sku"),
        (e.SKU_PREVIEW = "sku_preview"),
        (e.LOADING_PAYMENT_SOURCES = "loading_payment_sources"),
        (e.SHOP = "shop"),
        (e.PROMOTION_INFO = "promotion_info"),
        (e.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth"),
        (e.BENEFITS = "benefits"),
        (e.WHAT_YOU_LOSE = "what_you_lose"),
        (e.ADD_PAYMENT_STEPS = "add_payment_steps"),
        (e.ATTEMPT_GOOGLE_PAY = "attempt_google_pay"),
        (e.ATTEMPT_APPLE_PAY = "attempt_apple_pay"),
        (e.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout"),
        (e.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY = "awaiting_browser_checkout_google_pay"),
        (e.AWAITING_BROWSER_CHECKOUT_APPLE_PAY = "awaiting_browser_checkout_apple_pay"),
        (e.GIFT_CUSTOMIZATION = "gift_customization"),
        (e.SELECT_FREE_SKU = "select_free_sku"),
        e
    );
})({});
let d = new Set([
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
            return l.intl.string(l.t["r+SebU"]);
        case "payment_type":
        case "add_payment_steps":
            return l.intl.string(l.t.Sb6wI1);
        case "awaiting_purchase_token_auth":
        case "review":
            return l.intl.string(l.t.QBnNHq);
        case "shop":
            return l.intl.string(l.t.xj9ooX);
        case "payment_request_information":
            return l.intl.string(l.t.DDPRXs);
        case "credit_card_information":
            return l.intl.string(l.t.yMPCXL);
        case "address":
            return l.intl.string(l.t["50Auo2"]);
        case "paypal_information":
            return l.intl.string(l.t.RVHDnH);
        case "venmo_information":
            return l.intl.string(l.t.bzQdwW);
        case "przelewy24_information":
            return l.intl.string(l.t.BW0R4v);
        case "cash_app_information":
            return l.intl.string(l.t.Gz1fyE);
        case "gift_customization":
            return l.intl.string(l.t.R0vK0N);
    }
    throw Error("Unexpected step: ".concat(e));
}
function _(e) {
    if (null != e) {
        if (!(e instanceof i.HF)) throw (c.error(e), (0, o.q2)(e), Error("Unexpected error type"));
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
function m(e, t, n) {
    r.useEffect(() => {
        null != e && "review" !== e && t !== s.A.WAITING && t !== s.A.COMPLETED && n(s.A.WAITING);
    }, [e, t, n]);
}
