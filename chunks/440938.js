"use strict";
a.d(t, { R9: () => s, uM: () => i });
var r = a(627968),
    l = a(64700);
let n = l.createContext(null);
function i() {
    return l.useContext(n);
}
function s(e) {
    let { newValue: t, children: a } = e,
        s = i(),
        o = l.useMemo(() => ({ ...s, ...t }), [s, t]);
    return (0, r.jsx)(n.Provider, { value: o, children: a });
}
