n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(596401);
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
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (!e && (0, i.$sL)()) ||
        (0, i.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('22878'), n.e('53937'), n.e('73488')]).then(n.bind(n, 678420));
                return (t) => (0, r.jsx)(e, s({}, t));
            },
            { modalKey: o.Xd }
        );
}
