n.d(t, {
    Dx: () => f,
    PQ: () => d,
    aS: () => p,
    dI: () => c,
    wR: () => u,
}),
    n(457529),
    n(65821);
var r = n(627968),
    i = n(64700);

function a(e, t, n) {
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

function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}

function o(e, t) {
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
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function c(e) {
    let t = JSON.stringify(e);
    return l(s({}, e), {
        key: t,
    });
}

function u() {
    let e = i.useContext(f);
    if (null == e) throw Error("useThemeContext must be used within a ThemeContext.Provider");
    return e;
}
let d = c({
        theme: "light",
        primaryColor: null,
        secondaryColor: null,
        gradient: null,
        flags: 0,
        contrast: 1,
        saturation: 1,
        density: "compact",
        disableAdaptiveTheme: !1,
        reduceAdaptiveTheme: !1,
    }),
    f = i.createContext(d);

function p(e) {
    let { children: t } = e,
        n = u();
    return (0, r.jsx)(r.Fragment, {
        children: t(n),
    });
}
