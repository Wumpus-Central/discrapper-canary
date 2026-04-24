"use strict";
n.d(t, { X: () => d, x: () => u });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(85092);
let o = {
        SIZE: { default: void 0, reduced: s.k2 },
        COLOR: { default: void 0, muted: s.JF },
        WEIGHT: { default: void 0, reduced: s.Xj },
    },
    c = r.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function d() {
    return r.useContext(c);
}
function u(e) {
    let { children: t, size: n, color: i, weight: u } = e,
        _ = d(),
        p = r.useMemo(() => {
            let e = { className: void 0, size: n ?? _.size, color: i ?? _.color, weight: u ?? _.weight },
                t = l()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
            return "" !== t && (e.className = l()(s.zr, t)), e;
        }, [n, i, u, _]);
    return (0, a.jsx)(c.Provider, { value: p, children: t });
}
