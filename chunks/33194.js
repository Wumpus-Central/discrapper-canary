n.d(t, {
    Iu: () => u,
    OS: () => d,
    g6: () => _,
    v3: () => f
});
var r = n(230383),
    i = n(781930);
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
let c = (0, r.U)(
    (0, i.tJ)(
        (e) => ({
            channelDismissTimestamps: {},
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
function d() {
    return c.getState().queuedWarning;
}
function f() {
    c.setState({ queuedWarning: !1 });
}
function _(e) {
    c.setState((t) => ({ channelDismissTimestamps: l(a({}, t.channelDismissTimestamps), { [e]: Date.now() }) }));
}
