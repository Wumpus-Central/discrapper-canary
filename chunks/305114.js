"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    s = n(826469);
let a = null,
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
    (a = e.price.checkout_context),
        (o = e.checkoutSessionId),
        (l = a.payment_sources.map(s.A.createFromCheckoutContext));
}
function c() {
    (a = null), (o = null), (l = []);
}
class d extends r.Ay.Store {
    static displayName = "CheckoutContextStore";
    hasCheckoutContextForSession(e) {
        return null != a && o === e;
    }
    getPaymentSourceRecords() {
        return l;
    }
    getStoreCountry() {
        return a?.store_country?.country ?? null;
    }
}
let _ = new d(i.h, { SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: u, SKU_PURCHASE_MODAL_CLOSE: c, LOGOUT: c });
