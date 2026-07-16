"use strict";
n.d(t, { Bc: () => s, w6: () => l });
var i = n(627968),
    r = n(64700);
let a = r.createContext({ isRichTooltip: !1 });
function s(e) {
    let { children: t, isRichTooltip: n = !1, richTooltipPadding: s } = e,
        l = r.useMemo(() => ({ isRichTooltip: n, richTooltipPadding: s }), [n, s]);
    return (0, i.jsx)(a.Provider, { value: l, children: t });
}
function l() {
    return r.useContext(a);
}
