n.d(t, { X: () => d, x: () => _ });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    l = n.n(r),
    o = n(931220);
let s = {
        SIZE: { default: void 0, reduced: o.k2 },
        COLOR: { default: void 0, muted: o.JF },
        WEIGHT: { default: void 0, reduced: o.Xj },
    },
    c = i.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function d() {
    return i.useContext(c);
}
function _(e) {
    let { children: t, size: n, color: r, weight: _ } = e,
        u = d(),
        A = i.useMemo(() => {
            let e = { className: void 0, size: n ?? u.size, color: r ?? u.color, weight: _ ?? u.weight },
                t = l()(s.SIZE[e.size], s.COLOR[e.color], s.WEIGHT[e.weight]);
            return "" !== t && (e.className = l()(o.zr, t)), e;
        }, [n, r, _, u]);
    return (0, a.jsx)(c.Provider, { value: A, children: t });
}
