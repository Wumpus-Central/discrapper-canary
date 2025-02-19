n.d(t, { i: () => p });
var r = n(200651),
    i = n(481060),
    o = n(451478),
    a = n(40851),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.IlC.POPOUT;
    e !== s.IlC.APP &&
        (0, i.ZDy)(
            async () => {
                let { default: t } = await n.e('30720').then(n.bind(n, 285171));
                return (n) => (0, r.jsx)(t, d(c({}, n), { contextKey: e }));
            },
            { contextKey: (0, i.VnL)(e) }
        );
}
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.IlC.APP,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = null != e ? e : (0, a.GB)();
    if ((n !== s.IlC.APP && null != n) || (t && null == n)) {
        if (o.Z.isFocused()) return;
        f(e);
    }
}
