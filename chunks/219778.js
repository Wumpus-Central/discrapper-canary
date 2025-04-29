n.d(t, { n: () => c });
var r = n(192379),
    i = n(180650);
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
let s = {
        [i.T.AESPA]: {
            responsive: !0,
            backgroundStyle: 'linear-gradient(0deg,rgba(40, 8, 120, 1) 0%,rgba(13, 8, 111, 1) 15%,rgba(11, 2, 60, 1) 50%,rgba(6, 1, 21, 1) 100%)'
        },
        [i.T.ORB]: {
            responsive: !0,
            backgroundStyle: 'linear-gradient(180deg, rgba(39, 30, 173, 0.3), transparent)',
            hideSideShadow: !0
        }
    },
    l = {
        responsive: !1,
        backgroundStyle: void 0,
        hideSideShadow: !1
    },
    c = (e) =>
        (0, r.useMemo)(() => {
            let t = null != e ? s[e] : null;
            return null != t ? a({}, l, t) : l;
        }, [e]);
