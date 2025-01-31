n.d(t, {
    Y: () => o,
    Z: () => h
});
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
var o = (function (e) {
    return (e[(e.UNKNOWN = 0)] = 'UNKNOWN'), (e[(e.PENDING = 1)] = 'PENDING'), (e[(e.DONE = 2)] = 'DONE'), e;
})({});
let l = 0,
    u = null,
    c = null,
    d = null;
function f(e) {
    (l = 1), (u = e.loadId);
}
function _(e) {
    var t, n;
    u === e.loadId && ((c = null !== (t = e.skuId) && void 0 !== t ? t : null), (d = null !== (n = e.skuSubscriptionPlanId) && void 0 !== n ? n : null), (l = 2));
}
class p extends (i = r.ZP.Store) {
    get browserCheckoutState() {
        return l;
    }
    get loadId() {
        return u;
    }
    get skuId() {
        return c;
    }
    get planId() {
        return d;
    }
}
s(p, 'displayName', 'BrowserCheckoutStateStore');
let h = new p(a.Z, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: f,
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: _
});
