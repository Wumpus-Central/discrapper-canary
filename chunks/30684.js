var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140);
let c = !1,
    d = !1,
    u = !1;
class m extends (a = o.ZP.Store) {
    getIsTargeted() {
        return u;
    }
    shouldFetchCheckoutRecovery() {
        return !c && !d;
    }
}
(l = 'CheckoutRecoveryStore'),
    (r = 'displayName') in (i = m)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new m(s.Z, {
        CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
            (d = !0), (c = !1), (u = e.isTargeted);
        },
        CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
            (d = !0), (c = !1);
        },
        CHECKOUT_RECOVERY_STATUS_FETCH: function () {
            c = !0;
        },
        LOGOUT: function () {
            (c = !1), (d = !1), (u = !1);
        }
    }));
