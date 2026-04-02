a.d(t, { X: () => c, x: () => d });
var n = a(627968),
    i = a(64700),
    r = a(503698),
    l = a.n(r),
    s = a(931220);
let o = {
        SIZE: { default: void 0, reduced: s.k2 },
        COLOR: { default: void 0, muted: s.JF },
        WEIGHT: { default: void 0, reduced: s.Xj },
    },
    _ = i.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function c() {
    return i.useContext(_);
}
function d(e) {
    let { children: t, size: a, color: r, weight: d } = e,
        u = c(),
        f = i.useMemo(() => {
            let e = { className: void 0, size: a ?? u.size, color: r ?? u.color, weight: d ?? u.weight },
                t = l()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
            return "" !== t && (e.className = l()(s.zr, t)), e;
        }, [a, r, d, u]);
    return (0, n.jsx)(_.Provider, { value: f, children: t });
}
