"use strict";
n.d(t, { Cl: () => l, Y_: () => s });
var i = n(477900),
    r = n(582128);
let a = r.createContext(null);
function s() {
    return r.useContext(a);
}
function l(e) {
    let { clip: t, children: n } = e;
    return (0, i.jsx)(a.Provider, { value: t, children: n });
}
