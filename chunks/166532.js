_.d(t, { Ir: () => m, ZC: () => l, l_: () => A, ou: () => I, pn: () => u, zT: () => T });
var n,
    r = _(64700),
    i = _(913122),
    a = _(71804),
    o = _(626584),
    s = _(739508),
    p = _(566980),
    E = _(375708);
let c = new o.A("PaymentSteps");
var u =
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
let A = new Set([
        "awaiting_browser_checkout",
        "awaiting_browser_checkout_google_pay",
        "awaiting_browser_checkout_apple_pay",
    ]),
    l = new Set([
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
    throw new a.v({ message: `Unexpected step: ${e}`, extraSentryInformation: { step: e } });
}
function I(e) {
    if (null != e) {
        if (!(e instanceof i.Ey)) throw (c.error(e), (0, s.pM)(e), Error("Unexpected error type"));
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
function T(e, t, _) {
    r.useEffect(() => {
        null != e && "review" !== e && t !== p.h.WAITING && t !== p.h.COMPLETED && _(p.h.WAITING);
    }, [e, t, _]);
}
