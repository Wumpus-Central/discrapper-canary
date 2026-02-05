"use strict";
n.d(t, { Y: () => s });
var r = n(627968),
    i = n(64700),
    a = n(156312);
function s(e) {
    let { children: t, ...n } = e,
        s = i.useContext(a.Qv);
    return null == s ? null : (0, r.jsx)(a.Qv.Provider, { value: { ...s, ...n }, children: t });
}
