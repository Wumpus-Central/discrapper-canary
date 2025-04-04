n.d(t, {
    Ck: () => f,
    DJ: () => _,
    Nj: () => d,
    dZ: () => h,
    h8: () => u,
    ly: () => p
}),
    n(47120),
    n(411104);
var r = n(192379),
    i = n(881052),
    o = n(710845),
    a = n(122289),
    s = n(45572),
    l = n(388032);
let c = new o.Z('PaymentSteps');
var u = (function (e) {
    return (e.PAYMENT_TYPE = 'payment_type'), (e.CREDIT_CARD_INFORMATION = 'credit_card_information'), (e.PAYPAL_INFORMATION = 'paypal_information'), (e.VENMO_INFORMATION = 'venmo_information'), (e.PRZELEWY24_INFORMATION = 'przelewy24_information'), (e.EPS_INFORMATION = 'eps_information'), (e.IDEAL_INFORMATION = 'ideal_information'), (e.CASH_APP_INFORMATION = 'cash_app_information'), (e.PAYMENT_REQUEST_INFORMATION = 'payment_request_information'), (e.ADDRESS = 'address'), (e.AWAITING_AUTHENTICATION = 'awaiting_authentication'), (e.SKU_SELECT = 'sku_select'), (e.PLAN_SELECT = 'plan_select'), (e.PREMIUM_UPSELL = 'premium_upsell'), (e.PREMIUM_GUILD_UPSELL = 'premium_guild_upsell'), (e.REVIEW = 'review'), (e.CONFIRM = 'confirm'), (e.CLAIM_FREE_SKU = 'claim_free_sku'), (e.SKU_PREVIEW = 'sku_preview'), (e.LOADING_PAYMENT_SOURCES = 'loading_payment_sources'), (e.SHOP = 'shop'), (e.PROMOTION_INFO = 'promotion_info'), (e.AWAITING_PURCHASE_TOKEN_AUTH = 'awaiting_purchase_token_auth'), (e.BENEFITS = 'benefits'), (e.WHAT_YOU_LOSE = 'what_you_lose'), (e.ADD_PAYMENT_STEPS = 'add_payment_steps'), (e.ATTEMPT_GOOGLE_PAY = 'attempt_google_pay'), (e.ATTEMPT_APPLE_PAY = 'attempt_apple_pay'), (e.AWAITING_BROWSER_CHECKOUT = 'awaiting_browser_checkout'), (e.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY = 'awaiting_browser_checkout_google_pay'), (e.AWAITING_BROWSER_CHECKOUT_APPLE_PAY = 'awaiting_browser_checkout_apple_pay'), (e.GIFT_CUSTOMIZATION = 'gift_customization'), (e.SELECT_FREE_SKU = 'select_free_sku'), e;
})({});
let d = new Set(['awaiting_browser_checkout', 'awaiting_browser_checkout_google_pay', 'awaiting_browser_checkout_apple_pay']),
    f = new Set(['credit_card_information', 'payment_request_information', 'paypal_information', 'venmo_information', 'cash_app_information', 'address', 'claim_free_sku', 'sku_preview', 'premium_upsell', 'przelewy24_information']);
function _(e) {
    switch (e) {
        case 'plan_select':
            return l.NW.string(l.t['r+SebW']);
        case 'payment_type':
        case 'add_payment_steps':
            return l.NW.string(l.t.Sb6wIy);
        case 'awaiting_purchase_token_auth':
        case 'review':
            return l.NW.string(l.t.QBnNHh);
        case 'shop':
            return l.NW.string(l.t.xj9ooa);
        case 'payment_request_information':
            return l.NW.string(l.t.DDPRXl);
        case 'credit_card_information':
            return l.NW.string(l.t.yMPCXF);
        case 'address':
            return l.NW.string(l.t['50Auo6']);
        case 'paypal_information':
            return l.NW.string(l.t.RVHDnJ);
        case 'venmo_information':
            return l.NW.string(l.t.bzQdwc);
        case 'przelewy24_information':
            return l.NW.string(l.t.BW0R4u);
        case 'cash_app_information':
            return l.NW.string(l.t.Gz1fyM);
        case 'gift_customization':
            return l.NW.string(l.t.R0vK0N);
    }
    throw Error('Unexpected step: '.concat(e));
}
function p(e) {
    if (null != e) {
        if (!(e instanceof i.HF)) throw (c.error(e), (0, a.q2)(e), Error('Unexpected error type'));
        if (e.hasCardError()) return 'credit_card_information';
        if (e.hasAddressError()) return 'address';
    }
    return null;
}
function h(e, t, n) {
    r.useEffect(() => {
        null != e && 'review' !== e && t !== s.A.WAITING && t !== s.A.COMPLETED && n(s.A.WAITING);
    }, [e, t, n]);
}
