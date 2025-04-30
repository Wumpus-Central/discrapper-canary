n.d(t, {
    E2: () => u,
    cn: () => d,
    g9: () => _,
    q2: () => f
});
var r = n(751767),
    i = n(960048),
    o = n(231338);
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
function s(e) {
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
                a(e, t, n[t]);
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
    return n.setMonth(e - 1), n.toLocaleString(t, { month: 'short' });
}
async function d(e) {
    let t = null;
    if (null != e && e.paymentGateway === o.gg.BRAINTREE) {
        let e = await (0, r.A)();
        null != e && (t = { braintree_device_data: e });
    }
    return t;
}
function f(e, t) {
    i.Z.captureException(e, c(s({}, t), { tags: c(s({}, null == t ? void 0 : t.tags), { app_context: 'billing' }) }));
}
function _(e, t) {
    i.Z.captureMessage(e, c(s({}, t), { tags: c(s({}, null == t ? void 0 : t.tags), { app_context: 'billing' }) }));
}
