n.d(t, { X: () => d, x: () => u });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(85092);
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
    let { children: t, size: n, color: i, weight: u } = e,
        m = d(),
        p = r.useMemo(() => {
            let e = { className: void 0, size: n ?? m.size, color: i ?? m.color, weight: u ?? m.weight },
                t = s()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
            return "" !== t && (e.className = s()(l.zr, t)), e;
        }, [n, i, u, m]);
    return (0, a.jsx)(c.Provider, { value: p, children: t });
}
