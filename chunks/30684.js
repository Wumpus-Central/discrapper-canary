n.d(t, { Z: () => d });
var r,
    i,
    l = n(442837),
    o = n(570140);
let a = !1,
    s = !1,
    c = !1;
class u extends (i = l.ZP.Store) {
    getIsTargeted() {
        return c;
    }
    shouldFetchCheckoutRecovery() {
        return !a && !s;
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
let d = new u(o.Z, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
        (s = !0), (a = !1), (c = e.isTargeted);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
        (s = !0), (a = !1);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH: function () {
        a = !0;
    },
    LOGOUT: function () {
        (a = !1), (s = !1), (c = !1);
    },
});
