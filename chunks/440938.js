"use strict";
n.d(t, { R9: () => s, uM: () => l });
var a = n(627968),
    r = n(64700);
let i = r.createContext(null);
function l() {
    return r.useContext(i);
}
function s(e) {
    let { newValue: t, children: n } = e,
        s = l(),
        o = r.useMemo(() => ({ ...s, ...t }), [s, t]);
    return (0, a.jsx)(i.Provider, { value: o, children: n });
}
