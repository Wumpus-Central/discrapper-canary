n.d(t, { Z: () => m });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = !1,
    l = !1,
    c = !1;
function u(e) {
    (l = !0), (s = !1), (c = e.isTargeted);
}
function d() {
    (l = !0), (s = !1);
}
function f() {
    s = !0;
}
function p() {
    (s = !1), (l = !1), (c = !1);
}
class _ extends (r = i.ZP.Store) {
    getIsTargeted() {
        return c;
    }
    shouldFetchCheckoutRecovery() {
        return !s && !l;
    }
}
o(_, "displayName", "CheckoutRecoveryStore");
let m = new _(a.Z, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: u,
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: d,
    CHECKOUT_RECOVERY_STATUS_FETCH: f,
    LOGOUT: p,
});
