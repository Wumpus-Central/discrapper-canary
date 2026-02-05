n.d(t, { X: () => c, x: () => u });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(865513);
let o = {
        SIZE: { default: void 0, reduced: s.k2 },
        COLOR: { default: void 0, muted: s.JF },
        WEIGHT: { default: void 0, reduced: s.Xj },
    },
    d = l.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function c() {
    return l.useContext(d);
}
function u(e) {
    let { children: t, size: n, color: a, weight: u } = e,
        g = c(),
        m = l.useMemo(() => {
            let e = { className: void 0, size: n ?? g.size, color: a ?? g.color, weight: u ?? g.weight },
                t = r()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
            return "" !== t && (e.className = r()(s.zr, t)), e;
        }, [n, a, u, g]);
    return (0, i.jsx)(d.Provider, { value: m, children: t });
}
