"use strict";
n.d(t, { Ar: () => a, dB: () => o });
var i = n(627968),
    r = n(64700);
let s = r.createContext(null);
function a() {
    return r.useContext(s);
}
function o(e) {
    let { newValue: t, children: n } = e,
        r = { ...a(), ...t };
    return (0, i.jsx)(s.Provider, { value: r, children: n });
}
