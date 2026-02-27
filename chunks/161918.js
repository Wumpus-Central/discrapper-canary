"use strict";
l.d(t, { Mk: () => i, iM: () => s });
var r = l(627968),
    a = l(64700);
let n = a.createContext(null);
function i() {
    return a.useContext(n);
}
function s(e) {
    let { tab: t, children: l } = e,
        i = a.useMemo(() => ({ tab: t }), [t]);
    return (0, r.jsx)(n.Provider, { value: i, children: l });
}
