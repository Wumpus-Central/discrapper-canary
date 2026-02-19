"use strict";
a.d(t, { X: () => _, x: () => d });
var n = a(627968),
    r = a(64700),
    s = a(503698),
    i = a.n(s),
    l = a(865513);
let o = {
        SIZE: { default: void 0, reduced: l.k2 },
        COLOR: { default: void 0, muted: l.JF },
        WEIGHT: { default: void 0, reduced: l.Xj },
    },
    c = r.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function _() {
    return r.useContext(c);
}
function d(e) {
    let { children: t, size: a, color: s, weight: d } = e,
        u = _(),
        f = r.useMemo(() => {
            let e = { className: void 0, size: a ?? u.size, color: s ?? u.color, weight: d ?? u.weight },
                t = i()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
            return "" !== t && (e.className = i()(l.zr, t)), e;
        }, [a, s, d, u]);
    return (0, n.jsx)(c.Provider, { value: f, children: t });
}
