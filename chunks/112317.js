"use strict";
n.d(t, { Bc: () => a, w6: () => o });
var r = n(627968),
    i = n(64700);
let s = i.createContext({ isRichTooltip: !1 });
function a(e) {
    let { children: t, isRichTooltip: n = !1, richTooltipPadding: a } = e,
        o = i.useMemo(() => ({ isRichTooltip: n, richTooltipPadding: a }), [n, a]);
    return (0, r.jsx)(s.Provider, { value: o, children: t });
}
function o() {
    return i.useContext(s);
}
