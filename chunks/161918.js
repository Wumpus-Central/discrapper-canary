"use strict";
n.d(t, { Mk: () => l, iM: () => s });
var a = n(627968),
    r = n(64700);
let i = r.createContext(null);
function l() {
    return r.useContext(i);
}
function s(e) {
    let { tab: t, children: n } = e,
        l = r.useMemo(() => ({ tab: t }), [t]);
    return (0, a.jsx)(i.Provider, { value: l, children: n });
}
