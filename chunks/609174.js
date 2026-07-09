"use strict";
n.d(t, { Cl: () => l, Y_: () => s });
var i = n(627968),
    r = n(64700);
let a = r.createContext(null);
function s() {
    return r.useContext(a);
}
function l(e) {
    let { clip: t, children: n } = e;
    return (0, i.jsx)(a.Provider, { value: t, children: n });
}
