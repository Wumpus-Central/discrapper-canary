n.d(t, {
    OS: () => f,
    YF: () => u,
    _$: () => d,
    dI: () => g,
    g6: () => h,
    km: () => _,
    nC: () => m,
    v3: () => p
});
var r = n(97519),
    i = n(296574);
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
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            }));
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
let c = (0, r.U)(
    (0, i.tJ)(
        (e) => ({
            channelDismissTimestamps: {},
            userDismissTimestamps: {},
            globalDismissTimestamp: null,
            queuedWarning: !1
        }),
        {
            name: 'shared-spaces-warning-storage',
            storage: (0, i.FL)(() => localStorage)
        }
    )
);
function u(e) {
    return c.getState().channelDismissTimestamps[e];
}
function d(e) {
    return c.getState().userDismissTimestamps[e];
}
function _() {
    return c.getState().globalDismissTimestamp;
}
function f() {
    return c.getState().queuedWarning;
}
function p() {
    c.setState({ queuedWarning: !1 });
}
function h(e) {
    c.setState((t) => ({ channelDismissTimestamps: l(o({}, t.channelDismissTimestamps), { [e]: Date.now() }) }));
}
function m(e) {
    c.setState((t) => ({
        userDismissTimestamps: l(o({}, t.userDismissTimestamps), { [e]: Date.now() }),
        globalDismissTimestamp: Date.now()
    }));
}
function g(e) {
    let t = Array.from(e).reduce((e, t) => ((e[t] = Date.now()), e), {});
    c.setState((e) => ({
        userDismissTimestamps: o({}, e.userDismissTimestamps, t),
        globalDismissTimestamp: Date.now()
    }));
}
