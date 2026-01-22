n.d(t, {
    O: () => d,
    t: () => u,
});
var r = n(64700),
    i = n(668447),
    a = n(844222);
function s(e, t, n) {
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
function o(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = r.useContext(a.C),
        l = null != (t = n.keyboardModeEnabled) ? t : s.keyboardModeEnabled,
        u = r.useRef(!1);
    u.current = !l || !0 === n.disable;
    let d = r.useMemo(() => {
            var t, r, i;
            return null != (t = null != (r = n.attachTo) ? r : null == (i = e.current) ? void 0 : i.ownerDocument)
                ? t
                : document;
        }, [n.attachTo, e]),
        f = r.useRef(null),
        p = n.disable ? f : e;
    return (0, i.Ay)(
        p,
        c(o({}, n), {
            disableReturnRef: u,
            attachTo: d,
        }),
    );
}
function d(e) {
    let { keyboardModeEnabled: t } = e;
    return u(e.containerRef, { keyboardModeEnabled: t }), e.children;
}
