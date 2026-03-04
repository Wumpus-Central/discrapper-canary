"use strict";
a.d(t, { Mk: () => s, iM: () => i });
var l = a(627968),
    r = a(64700);
let n = r.createContext(null);
function s() {
    return r.useContext(n);
}
function i(e) {
    let { tab: t, children: a } = e,
        s = r.useMemo(() => ({ tab: t }), [t]);
    return (0, l.jsx)(n.Provider, { value: s, children: a });
}
