"use strict";
n.d(t, { R9: () => o, uM: () => s });
var r = n(627968),
    i = n(64700);
let a = i.createContext(null);
function s() {
    return i.useContext(a);
}
function o(e) {
    let { newValue: t, children: n } = e,
        o = s(),
        l = i.useMemo(() => ({ ...o, ...t }), [o, t]);
    return (0, r.jsx)(a.Provider, { value: l, children: n });
}
