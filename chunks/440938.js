"use strict";
n.d(t, { R9: () => s, uM: () => r });
var a = n(627968),
    l = n(64700);
let i = l.createContext(null);
function r() {
    return l.useContext(i);
}
function s(e) {
    let { newValue: t, children: n } = e,
        s = r(),
        o = l.useMemo(() => ({ ...s, ...t }), [s, t]);
    return (0, a.jsx)(i.Provider, { value: o, children: n });
}
