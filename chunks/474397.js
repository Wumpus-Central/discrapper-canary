n.d(t, { A: () => h });
var r = n(627968),
    i = n(397927),
    a = n(531685),
    s = n(723702),
    o = n(837921),
    l = n(267102),
    c = n(652215);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.BRT.POPOUT;
    e !== c.BRT.APP &&
        (0, i.mMO)(
            async () => {
                let { default: t } = await n.e("20570").then(n.bind(n, 368033));
                return (n) => (0, r.jsx)(t, p(d({}, n), { contextKey: e }));
            },
            { contextKey: (0, i.TId)(e) },
        );
}
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.BRT.APP,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = null != e ? e : (0, l.zd)();
    if (n !== c.BRT.APP && null != n) {
        if (a.A.isFocused()) return;
        t ? (s.isPlatformEmbedded ? o.Ay.focus() : window.focus()) : _(e);
    }
}
