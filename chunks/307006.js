"use strict";
n.d(t, { A: () => E });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(160745);
let l = null,
    u = !1,
    c = null;
function d(e) {
    let { connected: t } = e;
    u = t;
}
function _() {
    u = !1;
}
function f() {
    u = !1;
}
function p(e) {
    let { products: t, storeFront: n } = e;
    (l = t), (c = n);
}
function h(e) {
    let { storeFront: t } = e;
    c = t;
}
class m extends s.Ay.Store {
    static displayName = "GenericIAPStore";
    isGenericIapConnected() {
        return u;
    }
    genericProductsLoaded() {
        return null != l && i().filter(l, (e) => o.lI.includes(e.identifier)).length === o.lI.length;
    }
    getProducts() {
        return l;
    }
    getStoreFront() {
        return c;
    }
}
let E = new m(a.h, {
    IAP_LOAD_GENERIC_PRODUCTS: p,
    GENERIC_IAP_INIT_CONNECTION: d,
    GENERIC_IAP_INIT_CONNECTION_FAILED: _,
    GENERIC_IAP_END_CONNECTION: f,
    GENERIC_IAP_SET_STORE_FRONT: h,
});
