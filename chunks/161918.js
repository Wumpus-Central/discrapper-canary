"use strict";
n.d(t, { Mk: () => r, iM: () => s });
var a = n(627968),
    l = n(64700);
let i = l.createContext(null);
function r() {
    return l.useContext(i);
}
function s(e) {
    let { tab: t, children: n } = e,
        r = l.useMemo(() => ({ tab: t }), [t]);
    return (0, a.jsx)(i.Provider, { value: r, children: n });
}
