n.d(t, {
    eS: () => u,
    hD: () => p,
    ob: () => d,
    pM: () => f,
});
var r = n(184015),
    i = n(728458),
    a = n(818348);
function s(e, t, n) {
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
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t) {
    let n = new Date();
    return n.setMonth(e - 1), n.toLocaleString(t, { month: "short" });
}
async function d(e) {
    let t = null;
    if (null != e && e.paymentGateway === a.kM.BRAINTREE) {
        let e = await (0, r.Z)();
        null != e && (t = { braintree_device_data: e });
    }
    return t;
}
function f(e, t) {
    i.A.captureException(e, c(o({}, t), { tags: c(o({}, null == t ? void 0 : t.tags), { app_context: "billing" }) }));
}
function p(e, t) {
    i.A.captureMessage(e, c(o({}, t), { tags: c(o({}, null == t ? void 0 : t.tags), { app_context: "billing" }) }));
}
