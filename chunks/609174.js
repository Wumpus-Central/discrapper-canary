"use strict";
n.d(t, { Cl: () => o, Y_: () => a });
var i = n(627968),
    r = n(64700);
let s = r.createContext(null),
    a = () => r.useContext(s),
    o = (e) => {
        let { clip: t, children: n } = e;
        return (0, i.jsx)(s.Provider, { value: t, children: n });
    };
