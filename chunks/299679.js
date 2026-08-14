"use strict";
n.d(t, { Ar: () => s, dB: () => l });
var i = n(477900),
    r = n(582128);
let a = r.createContext(null);
function s() {
    return r.useContext(a);
}
function l(e) {
    let { newValue: t, children: n } = e,
        r = { ...s(), ...t };
    return (0, i.jsx)(a.Provider, { value: r, children: n });
}
