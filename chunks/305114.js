"use strict";
n.d(t, { A: () => m });
var r = n(311907),
    i = n(73153),
    s = n(826469);
let a = null,
    o = null,
    l = [],
    u = [],
    c = null,
    d = [];
function _(e) {
    if (
        null == e.price ||
        null == e.price.checkout_context ||
        null == e.price.checkout_context.payment_sources ||
        null == e.checkoutSessionId
    )
        return !1;
    (a = e.price.checkout_context),
        (o = e.checkoutSessionId),
        (l = a.payment_sources.map(s.A.createFromCheckoutContext));
}
function f(e) {
    let { checkoutContext: t } = e;
    (u = t.payment_sources.map(s.A.createFromCheckoutContext)),
        (c = e.paymentSourceId ?? null),
        (d = t.allowed_currencies ?? []);
}
function p() {
    (a = null), (o = null), (l = []), (u = []), (c = null), (d = []);
}
class h extends r.Ay.Store {
    static displayName = "CheckoutContextStore";
    hasCheckoutContextForSession(e) {
        return null != a && o === e;
    }
    getPaymentSourceRecords() {
        return l;
    }
    getSubscriptionPreviewPaymentSourceRecords() {
        return u;
    }
    getSubscriptionPreviewAllowedCurrencies(e) {
        return (e ?? null) !== c ? [] : d;
    }
    getStoreCountry() {
        return a?.store_country?.country ?? null;
    }
}
let m = new h(i.h, {
    SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: _,
    SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE: f,
    SKU_PURCHASE_MODAL_CLOSE: p,
    LOGOUT: p,
});
