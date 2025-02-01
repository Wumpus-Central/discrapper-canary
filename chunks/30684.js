n.d(t, { Z: () => m });
var i,
    l,
    a,
    r = n(442837),
    s = n(570140);
let o = !1,
    c = !1,
    d = !1;
class u extends (a = r.ZP.Store) {
    getIsTargeted() {
        return d;
    }
    shouldFetchCheckoutRecovery() {
        return !o && !c;
    }
}
(l = 'CheckoutRecoveryStore'),
    (i = 'displayName') in u
        ? Object.defineProperty(u, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = l);
let m = new u(s.Z, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
        (c = !0), (o = !1), (d = e.isTargeted);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
        (c = !0), (o = !1);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH: function () {
        o = !0;
    },
    LOGOUT: function () {
        (o = !1), (c = !1), (d = !1);
    }
});
