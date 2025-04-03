n.d(t, { Z: () => p });
var r,
    i,
    a,
    l = n(442837),
    o = n(570140);
let s = !1,
    c = !1,
    u = !1;
class d extends (a = l.ZP.Store) {
    getIsTargeted() {
        return u;
    }
    shouldFetchCheckoutRecovery() {
        return !s && !c;
    }
}
(i = 'CheckoutRecoveryStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = i);
let p = new d(o.Z, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
        (c = !0), (s = !1), (u = e.isTargeted);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
        (c = !0), (s = !1);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH: function () {
        s = !0;
    },
    LOGOUT: function () {
        (s = !1), (c = !1), (u = !1);
    }
});
