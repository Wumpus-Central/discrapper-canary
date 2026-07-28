n.d(t, { Ir: () => m, ZC: () => p, l_: () => d, ou: () => I, pn: () => u, zT: () => A });
var a,
    r = n(582128),
    i = n(913122),
    s = n(71804),
    o = n(626584),
    l = n(739508),
    _ = n(566980),
    E = n(375708);
let c = new o.A("PaymentSteps");
var u =
    (((a = {}).PAYMENT_TYPE = "payment_type"),
    (a.PAYMENT_ELEMENT = "payment_element"),
    (a.CREDIT_CARD_INFORMATION = "credit_card_information"),
    (a.PAYPAL_INFORMATION = "paypal_information"),
    (a.VENMO_INFORMATION = "venmo_information"),
    (a.PRZELEWY24_INFORMATION = "przelewy24_information"),
    (a.EPS_INFORMATION = "eps_information"),
    (a.IDEAL_INFORMATION = "ideal_information"),
    (a.CASH_APP_INFORMATION = "cash_app_information"),
    (a.PAYMENT_REQUEST_INFORMATION = "payment_request_information"),
    (a.ADDRESS = "address"),
    (a.AWAITING_AUTHENTICATION = "awaiting_authentication"),
    (a.SKU_SELECT = "sku_select"),
    (a.PLAN_SELECT = "plan_select"),
    (a.PREMIUM_UPSELL = "premium_upsell"),
    (a.PREMIUM_GUILD_UPSELL = "premium_guild_upsell"),
    (a.REVIEW = "review"),
    (a.CONFIRM = "confirm"),
    (a.CLAIM_FREE_SKU = "claim_free_sku"),
    (a.SKU_PREVIEW = "sku_preview"),
    (a.LOADING_PAYMENT_SOURCES = "loading_payment_sources"),
    (a.SHOP = "shop"),
    (a.PROMOTION_INFO = "promotion_info"),
    (a.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth"),
    (a.BENEFITS = "benefits"),
    (a.WHAT_YOU_LOSE = "what_you_lose"),
    (a.ADD_PAYMENT_STEPS = "add_payment_steps"),
    (a.ATTEMPT_GOOGLE_PAY = "attempt_google_pay"),
    (a.ATTEMPT_APPLE_PAY = "attempt_apple_pay"),
    (a.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout"),
    (a.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY = "awaiting_browser_checkout_google_pay"),
    (a.AWAITING_BROWSER_CHECKOUT_APPLE_PAY = "awaiting_browser_checkout_apple_pay"),
    (a.GIFT_CUSTOMIZATION = "gift_customization"),
    (a.SELECT_FREE_SKU = "select_free_sku"),
    a);
let d = new Set([
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
function m(e) {
    switch (e) {
        case "plan_select":
            return E.intl.string(E.t["r+SebU"]);
        case "payment_type":
        case "add_payment_steps":
            return E.intl.string(E.t.Sb6wI1);
        case "awaiting_purchase_token_auth":
        case "review":
            return E.intl.string(E.t.QBnNHq);
        case "shop":
            return E.intl.string(E.t.xj9ooX);
        case "payment_request_information":
            return E.intl.string(E.t.DDPRXs);
        case "credit_card_information":
            return E.intl.string(E.t.yMPCXL);
        case "address":
            return E.intl.string(E.t["50Auo2"]);
        case "paypal_information":
            return E.intl.string(E.t.RVHDnH);
        case "venmo_information":
            return E.intl.string(E.t.bzQdwW);
        case "przelewy24_information":
            return E.intl.string(E.t.BW0R4v);
        case "cash_app_information":
            return E.intl.string(E.t.Gz1fyE);
        case "gift_customization":
            return E.intl.string(E.t.R0vK0N);
    }
    throw new s.v({ message: `Unexpected step: ${e}`, extraSentryInformation: { step: e } });
}
function I(e) {
    if (null != e) {
        if (!(e instanceof i.Ey)) throw (c.error(e), (0, l.pM)(e), Error("Unexpected error type"));
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
function A(e, t, n) {
    r.useEffect(() => {
        null != e && "review" !== e && t !== _.h.WAITING && t !== _.h.COMPLETED && n(_.h.WAITING);
    }, [e, t, n]);
}
