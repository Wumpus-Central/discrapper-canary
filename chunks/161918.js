"use strict";
a.d(t, { Mk: () => i, iM: () => s });
var r = a(627968),
    l = a(64700);
let n = l.createContext(null);
function i() {
    return l.useContext(n);
}
function s(e) {
    let { tab: t, children: a } = e,
        i = l.useMemo(() => ({ tab: t }), [t]);
    return (0, r.jsx)(n.Provider, { value: i, children: a });
}
