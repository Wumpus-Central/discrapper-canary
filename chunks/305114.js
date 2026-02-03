n.d(t, {
    A: () => _,
});
var r,
    i = n(311907),
    a = n(73153),
    o = n(826469);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = null,
    c = null,
    u = [];

function d(e) {
    if (
        null == e.price ||
        null == e.price.checkout_context ||
        null == e.price.checkout_context.payment_sources ||
        null == e.checkoutSessionId
    )
        return !1;
    (l = e.price.checkout_context),
        (c = e.checkoutSessionId),
        (u = l.payment_sources.map(o.A.createFromCheckoutContext));
}

function f() {
    (l = null), (c = null), (u = []);
}
class p extends (r = i.Ay.Store) {
    hasCheckoutContextForSession(e) {
        return null != l && c === e;
    }
    getPaymentSourceRecords() {
        return u;
    }
}
s(p, "displayName", "CheckoutContextStore");
let _ = new p(a.h, {
    SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: d,
    SKU_PURCHASE_MODAL_CLOSE: f,
    LOGOUT: f,
});
