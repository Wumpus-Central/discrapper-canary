"use strict";
n.d(t, { Bc: () => o, w6: () => l });
var r = n(627968),
    i = n(64700);
let s = { isRichTooltip: !1 },
    a = i.createContext(s);
function o(e) {
    let { children: t, isRichTooltip: n = !1, richTooltipPadding: s } = e,
        o = i.useMemo(() => ({ isRichTooltip: n, richTooltipPadding: s }), [n, s]);
    return (0, r.jsx)(a.Provider, { value: o, children: t });
}
function l() {
    return i.useContext(a);
}
