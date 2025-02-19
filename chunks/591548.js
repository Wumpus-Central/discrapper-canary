n.d(t, {
    H: () => u,
    j: () => c
}),
    n(47120),
    n(653041);
var r = n(392711),
    i = n.n(r);
function o(e, t, n) {
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
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function c(e) {
    let t = (e, t) => e.subscriptionPlanId === t.subscriptionPlanId && e.subscriptionPlanPrice === t.subscriptionPlanPrice && e.amount === t.amount && i().isEqual(e.discounts, t.discounts),
        n = [],
        r = new Set();
    return (
        e.map((e) => {
            for (let i of n)
                if (t(i, e)) {
                    r.add(i.subscriptionPlanId), (i.quantity += e.quantity);
                    return;
                }
            n.push(a({}, e));
        }),
        n.map((e) => {
            let t = a({}, e);
            return r.has(e.subscriptionPlanId) && ((t.amount = t.amount * t.quantity), (t.discounts = t.discounts.map((e) => l(a({}, e), { amount: e.amount * t.quantity })))), t;
        })
    );
}
function u(e) {
    return {
        id: e.id,
        subscriptionPlanId: e.subscription_plan_id,
        subscriptionPlanPrice: e.subscription_plan_price,
        amount: e.amount,
        quantity: e.quantity,
        discounts: e.discounts
    };
}
