"use strict";
n.d(t, { A: () => _ });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(160745);
let l = null,
    u = !1,
    d = null;
class c extends s.Ay.Store {
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
        return d;
    }
}
let _ = new c(a.h, {
    IAP_LOAD_GENERIC_PRODUCTS: function (e) {
        let { products: t, storeFront: n } = e;
        (l = t), (d = n);
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
        d = t;
    },
});
