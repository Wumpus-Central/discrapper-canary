"use strict";
n.d(t, { Dx: () => l, PQ: () => o, aS: () => u, dI: () => a, wR: () => s });
var r = n(627968),
    i = n(64700);
function a(e) {
    let t = JSON.stringify(e);
    return { ...e, key: t };
}
function s() {
    let e = i.useContext(l);
    if (null == e) throw Error("useThemeContext must be used within a ThemeContext.Provider");
    return e;
}
let o = a({
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
    l = i.createContext(o);
function u(e) {
    let { children: t } = e,
        n = s();
    return (0, r.jsx)(r.Fragment, { children: t(n) });
}
