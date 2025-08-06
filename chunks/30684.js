n.d(t, { Z: () => h });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = !1,
    l = !1,
    c = !1;
function u(e) {
    ((l = !0), (s = !1), (c = e.isTargeted));
}
function d() {
    ((l = !0), (s = !1));
}
function f() {
    s = !0;
}
function _() {
    ((s = !1), (l = !1), (c = !1));
}
class p extends (r = i.ZP.Store) {
    getIsTargeted() {
        return c;
    }
    shouldFetchCheckoutRecovery() {
        return !s && !l;
    }
}
a(p, 'displayName', 'CheckoutRecoveryStore');
let h = new p(o.Z, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: u,
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: d,
    CHECKOUT_RECOVERY_STATUS_FETCH: f,
    LOGOUT: _
});
