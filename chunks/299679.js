"use strict";
r.d(t, { Ar: () => s, dB: () => l });
var i = r(627968),
    n = r(64700);
let a = n.createContext(null);
function s() {
    return n.useContext(a);
}
function l(e) {
    let { newValue: t, children: r } = e,
        n = { ...s(), ...t };
    return (0, i.jsx)(a.Provider, { value: n, children: r });
}
