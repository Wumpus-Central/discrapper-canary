n.d(t, { Z: () => d });
var r,
    i,
    l = n(442837),
    a = n(570140);
let o = !1,
    s = !1,
    c = !1;
class u extends (i = l.ZP.Store) {
    getIsTargeted() {
        return c;
    }
    shouldFetchCheckoutRecovery() {
        return !o && !s;
    }
}
(r = "displayName") in u
    ? Object.defineProperty(u, r, {
          value: "CheckoutRecoveryStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (u[r] = "CheckoutRecoveryStore");
let d = new u(a.Z, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
        (s = !0), (o = !1), (c = e.isTargeted);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
        (s = !0), (o = !1);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH: function () {
        o = !0;
    },
    LOGOUT: function () {
        (o = !1), (s = !1), (c = !1);
    },
});
