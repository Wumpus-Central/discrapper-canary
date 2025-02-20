n.d(t, {
    Y: () => s,
    Z: () => h
});
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
var s = (function (e) {
    return (e[(e.UNKNOWN = 0)] = 'UNKNOWN'), (e[(e.PENDING = 1)] = 'PENDING'), (e[(e.DONE = 2)] = 'DONE'), e;
})({});
let l = 0,
    c = null,
    u = null,
    d = null;
function f(e) {
    (l = 1), (c = e.loadId);
}
function p(e) {
    var t, n;
    c === e.loadId && ((u = null !== (t = e.skuId) && void 0 !== t ? t : null), (d = null !== (n = e.skuSubscriptionPlanId) && void 0 !== n ? n : null), (l = 2));
}
class _ extends (r = i.ZP.Store) {
    get browserCheckoutState() {
        return l;
    }
    get loadId() {
        return c;
    }
    get skuId() {
        return u;
    }
    get planId() {
        return d;
    }
}
a(_, 'displayName', 'BrowserCheckoutStateStore');
let h = new _(o.Z, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: f,
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: p
});
