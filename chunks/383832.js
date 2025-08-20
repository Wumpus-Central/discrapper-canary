n.d(t, {
    Z: () => d,
    y: () => f,
});
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(570140),
    o = n(71509);
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
function l(e) {
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
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d() {
    (0, i.ZDy)(
        async () => {
            let { default: e } = await n.e("55944").then(n.bind(n, 266653));
            return (t) => (0, r.jsx)(e, l({}, t));
        },
        {
            onCloseCallback: () => {
                a.Z.dispatch({
                    type: "LOGIN_RESET",
                    isMultiAccount: !0,
                });
            },
            modalKey: o.Ui,
        },
    );
}
function f() {
    (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e("52030"), n.e("25761"), n.e("83560")]).then(n.bind(n, 153069));
            return (t) => (0, r.jsx)(e, u(l({}, t), { onBackPressed: d }));
        },
        {
            onCloseCallback: () => {
                a.Z.dispatch({
                    type: "LOGIN_RESET",
                    isMultiAccount: !0,
                });
            },
            modalKey: o._5,
        },
    );
}
