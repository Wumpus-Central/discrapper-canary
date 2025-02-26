n.d(t, {
    C1: () => _,
    Ni: () => f,
    TC: () => u,
    TT: () => c,
    qF: () => d
}),
    n(26686),
    n(411104);
var r = n(200651),
    i = n(192379);
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
function s(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function c(e) {
    let t = JSON.stringify(e);
    return l(a({}, e), { key: t });
}
function u() {
    let e = i.useContext(f);
    if (null == e) throw Error('useThemeContext must be used within a ThemeContext.Provider');
    return e;
}
let d = c({
        theme: 'light',
        primaryColor: null,
        secondaryColor: null,
        gradient: null,
        flags: 0,
        contrast: 1,
        saturation: 1,
        density: 'compact',
        disableAdaptiveTheme: !1
    }),
    f = i.createContext(d);
function _(e) {
    let { children: t } = e,
        n = u();
    return (0, r.jsx)(r.Fragment, { children: t(n) });
}
