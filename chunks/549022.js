n.d(t, {
    $Y: () => m,
    Cs: () => g,
    Iz: () => f,
    Oz: () => u,
    WA: () => p,
    jG: () => h,
    kP: () => d,
    os: () => _,
});
var r = n(353640),
    i = n(499867);

function a(e, t, n) {
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

function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}

function o(e, t) {
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
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = (0, r.v)(
    (0, i.Zr)(
        (e) => ({
            channelDismissTimestamps: {},
            userDismissTimestamps: {},
            globalDismissTimestamp: null,
            queuedWarning: !1,
        }),
        {
            name: "shared-spaces-warning-storage",
            storage: (0, i.KU)(() => localStorage),
        },
    ),
);

function u(e) {
    return c.getState().channelDismissTimestamps[e];
}

function d(e) {
    return c.getState().userDismissTimestamps[e];
}

function f() {
    return c.getState().globalDismissTimestamp;
}

function p() {
    return c.getState().queuedWarning;
}

function _() {
    c.setState({
        queuedWarning: !1,
    });
}

function h(e) {
    c.setState((t) => ({
        channelDismissTimestamps: l(s({}, t.channelDismissTimestamps), {
            [e]: Date.now(),
        }),
    }));
}

function m(e) {
    c.setState((t) => ({
        userDismissTimestamps: l(s({}, t.userDismissTimestamps), {
            [e]: Date.now(),
        }),
        globalDismissTimestamp: Date.now(),
    }));
}

function g(e) {
    let t = Array.from(e).reduce((e, t) => ((e[t] = Date.now()), e), {});
    c.setState((e) => ({
        userDismissTimestamps: s({}, e.userDismissTimestamps, t),
        globalDismissTimestamp: Date.now(),
    }));
}
