"use strict";
n.d(t, { A: () => _ });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(160745);
let l = null,
    u = !1,
    c = null;
class d extends s.Ay.Store {
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
let _ = new d(a.h, {
    IAP_LOAD_GENERIC_PRODUCTS: function (e) {
        let { products: t, storeFront: n } = e;
        (l = t), (c = n);
    },
    GENERIC_IAP_INIT_CONNECTION: function (e) {
        let { connected: t } = e;
        u = t;
    },
    GENERIC_IAP_INIT_CONNECTION_FAILED: function () {
        u = !1;
    },
    GENERIC_IAP_END_CONNECTION: function () {
        u = !1;
    },
    GENERIC_IAP_SET_STORE_FRONT: function (e) {
        let { storeFront: t } = e;
        c = t;
    },
});
