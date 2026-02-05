"use strict";
n.d(t, { Bc: () => o, w6: () => l });
var r = n(627968),
    i = n(64700);
let a = { isRichTooltip: !1 },
    s = i.createContext(a);
function o(e) {
    let { children: t, isRichTooltip: n = !1 } = e,
        a = i.useMemo(() => ({ isRichTooltip: n }), [n]);
    return (0, r.jsx)(s.Provider, { value: a, children: t });
}
function l() {
    return i.useContext(s);
}
