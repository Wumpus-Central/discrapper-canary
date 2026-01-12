n.d(t, { Z: () => g });
var r,
    i = n(442837),
    a = n(570140),
    o = n(839880);
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
    c = !1,
    u = null;
function d(e) {
    let { connected: t } = e;
    c = t;
}
function f() {
    c = !1;
}
function p() {
    c = !1;
}
function _(e) {
    let { products: t, storeFront: n } = e;
    (l = t), (u = n);
}
function m(e) {
    let { storeFront: t } = e;
    u = t;
}
class h extends (r = i.ZP.Store) {
    isGenericIapConnected() {
        return c;
    }
    hasGenericSubscription() {
        return null != l && l.some((e) => e.identifier === o.Xz.GENERIC_SUBSCRIPTION);
    }
    getProducts() {
        return l;
    }
    getStoreFront() {
        return u;
    }
}
s(h, "displayName", "GenericIAPStore");
let g = new h(a.Z, {
    IAP_LOAD_GENERIC_PRODUCTS: _,
    GENERIC_IAP_INIT_CONNECTION: d,
    GENERIC_IAP_INIT_CONNECTION_FAILED: f,
    GENERIC_IAP_END_CONNECTION: p,
    GENERIC_IAP_SET_STORE_FRONT: m,
});
