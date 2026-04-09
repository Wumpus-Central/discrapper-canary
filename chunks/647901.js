a.d(t, { X: () => d, x: () => u });
var n = a(627968),
    r = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(931220);
let o = {
        SIZE: { default: void 0, reduced: l.k2 },
        COLOR: { default: void 0, muted: l.JF },
        WEIGHT: { default: void 0, reduced: l.Xj },
    },
    c = r.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function d() {
    return r.useContext(c);
}
function u(e) {
    let { children: t, size: a, color: i, weight: u } = e,
        m = d(),
        p = r.useMemo(() => {
            let e = { className: void 0, size: a ?? m.size, color: i ?? m.color, weight: u ?? m.weight },
                t = s()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
            return "" !== t && (e.className = s()(l.zr, t)), e;
        }, [a, i, u, m]);
    return (0, n.jsx)(c.Provider, { value: p, children: t });
}
