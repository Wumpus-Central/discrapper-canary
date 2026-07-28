"use strict";
n.d(t, { Dx: () => o, PQ: () => l, aS: () => d, dI: () => a, wR: () => s });
var i = n(477900),
    r = n(582128);
function a(e) {
    let t = JSON.stringify(e);
    return { ...e, key: t };
}
function s() {
    let e = r.useContext(o);
    if (null == e) throw Error("useThemeContext must be used within a ThemeContext.Provider");
    return e;
}
let l = a({
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
    o = r.createContext(l);
function d(e) {
    let { children: t } = e,
        n = s();
    return (0, i.jsx)(i.Fragment, { children: t(n) });
}
