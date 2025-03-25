n.d(t, { n: () => l });
var r = n(192379);
function i(e, t, n) {
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
                i(e, t, n[t]);
            });
    }
    return e;
}
let a = {
        [n(180650).T.AESPA]: {
            responsive: !0,
            backgroundStyle: 'linear-gradient(0deg,rgba(40, 8, 120, 1) 0%,rgba(13, 8, 111, 1) 15%,rgba(11, 2, 60, 1) 50%,rgba(6, 1, 21, 1) 100%)'
        }
    },
    s = {
        responsive: !1,
        backgroundStyle: void 0
    },
    l = (e) =>
        (0, r.useMemo)(() => {
            let t = null != e ? a[e] : null;
            return null != t ? o({}, s, t) : s;
        }, [e]);
