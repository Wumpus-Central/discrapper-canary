function r(e, t, n) {
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
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                r(e, t, n[t]);
            });
    }
    return e;
}
n.d(t, {
    $E: () => u,
    Ky: () => l,
    RF: () => c
}),
    n(388685),
    n(35282);
let a = {};
function o(e, t) {
    return ''.concat(e, ':').concat(t);
}
function s(e) {
    let [t, n] = e.split(':');
    return [t, n];
}
function l(e, t) {
    return a[o(e, t)];
}
function c(e, t, n) {
    let r = o(e, t);
    a[r] = i({}, a[r], n);
}
function u(e) {
    for (let t in a) {
        let [n, r] = s(t);
        e(n, r, a[t]);
    }
    a = {};
}
