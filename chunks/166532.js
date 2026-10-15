s.d(t, { Ir: () => p, h5: () => _, l_: () => E, ou: () => L, pn: () => m, zT: () => A });
var n,
    a = s(582128),
    r = s(913122),
    i = s(71804),
    l = s(626584),
    o = s(739508),
    c = s(566980),
    u = s(105292);
let d = new l.A("PaymentSteps");
var m =
    (((n = {}).PAYMENT_ELEMENT = "payment_element"),
    (n.CREDIT_CARD_INFORMATION = "credit_card_information"),
    (n.PAYPAL_INFORMATION = "paypal_information"),
    (n.VENMO_INFORMATION = "venmo_information"),
    (n.PRZELEWY24_INFORMATION = "przelewy24_information"),
    (n.EPS_INFORMATION = "eps_information"),
    (n.CASH_APP_INFORMATION = "cash_app_information"),
    (n.ADDRESS = "address"),
    (n.AWAITING_AUTHENTICATION = "awaiting_authentication"),
    (n.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth"),
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
    (n.BENEFITS = "benefits"),
    (n.WHAT_YOU_LOSE = "what_you_lose"),
    (n.ADD_PAYMENT_STEPS = "add_payment_steps"),
    (n.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout"),
    (n.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY = "awaiting_browser_checkout_google_pay"),
    (n.AWAITING_BROWSER_CHECKOUT_APPLE_PAY = "awaiting_browser_checkout_apple_pay"),
    (n.GIFT_CUSTOMIZATION = "gift_customization"),
    (n.SELECT_FREE_SKU = "select_free_sku"),
    n);
let E = new Set([
    "awaiting_browser_checkout",
    "awaiting_browser_checkout_google_pay",
    "awaiting_browser_checkout_apple_pay",
]);
function p(e) {
    switch (e) {
        case "plan_select":
            return u.intl.string(u.t["r+SebU"]);
        case "awaiting_purchase_token_auth":
        case "review":
            return u.intl.string(u.t.QBnNHq);
        case "shop":
            return u.intl.string(u.t.xj9ooX);
        case "add_payment_steps":
        case "payment_element":
            return u.intl.string(u.t.Sb6wI1);
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
    throw new i.v({ message: `Unexpected step: ${e}`, extraSentryInformation: { step: e } });
}
function _(e, t) {
    return null != e && (null == L(e) || !!t);
}
function L(e) {
    if (null != e) {
        if (!(e instanceof r.Ey)) throw (d.error(e), (0, o.pM)(e), Error("Unexpected error type"));
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
function A(e, t, s) {
    a.useEffect(() => {
        null != e && "review" !== e && t !== c.h.WAITING && t !== c.h.COMPLETED && s(c.h.WAITING);
    }, [e, t, s]);
}
