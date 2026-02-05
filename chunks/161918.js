"use strict";
n.d(t, { Mk: () => s, iM: () => o });
var r = n(627968),
    i = n(64700);
let a = i.createContext(null);
function s() {
    return i.useContext(a);
}
function o(e) {
    let { tab: t, children: n } = e,
        s = i.useMemo(() => ({ tab: t }), [t]);
    return (0, r.jsx)(a.Provider, { value: s, children: n });
}
