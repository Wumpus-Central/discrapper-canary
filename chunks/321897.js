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
n.d(t, { ZP: () => l });
let o = Object.freeze({
        overflowY: 'scroll',
        overflowX: 'hidden'
    }),
    a = Object.freeze({
        overflowX: 'scroll',
        overflowY: 'hidden'
    }),
    s = Object.freeze({ overflow: 'auto' });
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
        n = 'vertical' === t ? o : 'horizontal' === t ? a : s;
    return null != e ? i({}, n, e) : n;
}
