"use strict";
s.d(t, { rW: () => a });
var n = s(627968),
    l = s(64700);
let r = l.createContext(null);
function a(e) {
    let { blockType: t, children: s } = e,
        a = l.useMemo(() => ({ blockType: t }), [t]);
    return (0, n.jsx)(r.Provider, { value: a, children: s });
}
