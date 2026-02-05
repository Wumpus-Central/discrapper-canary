"use strict";
n.d(t, { A: () => h });
var r = n(311907),
    i = n(73153),
    a = n(160745);
let s = null,
    o = !1,
    l = null;
function u(e) {
    let { connected: t } = e;
    o = t;
}
function c() {
    o = !1;
}
function d() {
    o = !1;
}
function _(e) {
    let { products: t, storeFront: n } = e;
    (s = t), (l = n);
}
function f(e) {
    let { storeFront: t } = e;
    l = t;
}
class p extends r.Ay.Store {
    static displayName = "GenericIAPStore";
    isGenericIapConnected() {
        return o;
    }
    hasGenericSubscription() {
        return null != s && s.some((e) => e.identifier === a.Yq.GENERIC_SUBSCRIPTION);
    }
    getProducts() {
        return s;
    }
    getStoreFront() {
        return l;
    }
}
let h = new p(i.h, {
    IAP_LOAD_GENERIC_PRODUCTS: _,
    GENERIC_IAP_INIT_CONNECTION: u,
    GENERIC_IAP_INIT_CONNECTION_FAILED: c,
    GENERIC_IAP_END_CONNECTION: d,
    GENERIC_IAP_SET_STORE_FRONT: f,
});
