"use strict";
s.d(t, { rW: () => a });
var n = s(627968),
    r = s(64700);
let l = r.createContext(null);
function a(e) {
    let { blockType: t, children: s } = e,
        a = r.useMemo(() => ({ blockType: t }), [t]);
    return (0, n.jsx)(l.Provider, { value: a, children: s });
}
