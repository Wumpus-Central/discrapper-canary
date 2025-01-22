r.d(n, {
    Y: function () {
        return i;
    }
});
var i,
    a,
    o = r(442837),
    s = r(570140);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.UNKNOWN = 0)] = 'UNKNOWN'), (e[(e.PENDING = 1)] = 'PENDING'), (e[(e.DONE = 2)] = 'DONE');
})(i || (i = {}));
let u = 0,
    c = null,
    d = null,
    f = null;
function p(e) {
    (u = 1), (c = e.loadId);
}
function h(e) {
    var n, r;
    if (c === e.loadId) (d = null !== (n = e.skuId) && void 0 !== n ? n : null), (f = null !== (r = e.skuSubscriptionPlanId) && void 0 !== r ? r : null), (u = 2);
}
class _ extends (a = o.ZP.Store) {
    get browserCheckoutState() {
        return u;
    }
    get loadId() {
        return c;
    }
    get skuId() {
        return d;
    }
    get planId() {
        return f;
    }
}
l(_, 'displayName', 'BrowserCheckoutStateStore'),
    (n.Z = new _(s.Z, {
        USER_PAYMENT_BROWSER_CHECKOUT_STARTED: p,
        USER_PAYMENT_BROWSER_CHECKOUT_DONE: h
    }));
