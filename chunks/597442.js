n.d(t, {
    E: () => _,
    T: () => p
});
var r,
    i = n(192379),
    o = n(610521),
    a = n(442837),
    s = n(607070);
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
let f = null !== (r = document.getElementById('app-mount')) && void 0 !== r ? r : document;
function p(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = (0, a.e7)([s.Z], () => s.Z.keyboardModeEnabled),
        l = i.useRef(!1);
    return (
        (l.current = !r),
        (0, o.ZP)(
            e,
            d(c({}, n), {
                disableReturnRef: l,
                attachTo: null !== (t = n.attachTo) && void 0 !== t ? t : f,
                returnRef: n.returnRef
            })
        )
    );
}
function _(e) {
    return p(e.containerRef), e.children;
}
