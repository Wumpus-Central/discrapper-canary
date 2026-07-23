"use strict";
n.d(t, { Ar: () => s, dB: () => l });
var i = n(627968),
    r = n(64700);
let a = r.createContext(null);
function s() {
    return r.useContext(a);
}
function l(e) {
    let { newValue: t, children: n } = e,
        r = { ...s(), ...t };
    return (0, i.jsx)(a.Provider, { value: r, children: n });
}
