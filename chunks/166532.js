n.d(t, { Ir: () => I, l_: () => d, ou: () => p, pn: () => u, zT: () => S });
var a,
    r = n(582128),
    s = n(913122),
    i = n(71804),
    o = n(626584),
    l = n(739508),
    E = n(566980),
    c = n(375708);
let _ = new o.A("PaymentSteps");
var u =
    (((a = {}).PAYMENT_ELEMENT = "payment_element"),
    (a.CREDIT_CARD_INFORMATION = "credit_card_information"),
    (a.PAYPAL_INFORMATION = "paypal_information"),
    (a.VENMO_INFORMATION = "venmo_information"),
    (a.PRZELEWY24_INFORMATION = "przelewy24_information"),
    (a.EPS_INFORMATION = "eps_information"),
    (a.CASH_APP_INFORMATION = "cash_app_information"),
    (a.ADDRESS = "address"),
    (a.AWAITING_AUTHENTICATION = "awaiting_authentication"),
    (a.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth"),
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
    (a.BENEFITS = "benefits"),
    (a.WHAT_YOU_LOSE = "what_you_lose"),
    (a.ADD_PAYMENT_STEPS = "add_payment_steps"),
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
]);
function I(e) {
    switch (e) {
        case "plan_select":
            return c.intl.string(c.t["r+SebU"]);
        case "awaiting_purchase_token_auth":
        case "review":
            return c.intl.string(c.t.QBnNHq);
        case "shop":
            return c.intl.string(c.t.xj9ooX);
        case "add_payment_steps":
        case "payment_element":
            return c.intl.string(c.t.Sb6wI1);
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
    throw new i.v({ message: `Unexpected step: ${e}`, extraSentryInformation: { step: e } });
}
function p(e) {
    if (null != e) {
        if (!(e instanceof s.Ey)) throw (_.error(e), (0, l.pM)(e), Error("Unexpected error type"));
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
function S(e, t, n) {
    r.useEffect(() => {
        null != e && "review" !== e && t !== E.h.WAITING && t !== E.h.COMPLETED && n(E.h.WAITING);
    }, [e, t, n]);
}
