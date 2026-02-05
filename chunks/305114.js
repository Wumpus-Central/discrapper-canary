"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    a = n(826469);
let s = null,
    o = null,
    l = [];
function u(e) {
    if (
        null == e.price ||
        null == e.price.checkout_context ||
        null == e.price.checkout_context.payment_sources ||
        null == e.checkoutSessionId
    )
        return !1;
    (s = e.price.checkout_context),
        (o = e.checkoutSessionId),
        (l = s.payment_sources.map(a.A.createFromCheckoutContext));
}
function c() {
    (s = null), (o = null), (l = []);
}
class d extends r.Ay.Store {
    static displayName = "CheckoutContextStore";
    hasCheckoutContextForSession(e) {
        return null != s && o === e;
    }
    getPaymentSourceRecords() {
        return l;
    }
}
let _ = new d(i.h, { SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: u, SKU_PURCHASE_MODAL_CLOSE: c, LOGOUT: c });
