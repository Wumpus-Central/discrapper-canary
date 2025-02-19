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
    n(47120),
    n(301563);
let o = {};
function a(e, t) {
    return ''.concat(e, ':').concat(t);
}
function s(e) {
    let [t, n] = e.split(':');
    return [t, n];
}
function l(e, t) {
    return o[a(e, t)];
}
function c(e, t, n) {
    let r = a(e, t);
    o[r] = i({}, o[r], n);
}
function u(e) {
    for (let t in o) {
        let [n, r] = s(t);
        e(n, r, o[t]);
    }
    o = {};
}
