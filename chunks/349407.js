n.d(t, { K: () => s });
var r = n(200651);
n(192379);
var i = n(481060);
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
function s(e) {
    (0, i.ZDy)(async () => {
        let { default: t } = await Promise.all([n.e('53419'), n.e('51343'), n.e('61366')]).then(n.bind(n, 598576));
        return (n) => (0, r.jsx)(t, o({ analyticsLocation: e }, n));
    });
}
