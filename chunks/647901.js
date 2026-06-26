n.d(t, { X: () => d, x: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(85092);
let s = {
        SIZE: { default: void 0, reduced: o.k2 },
        COLOR: { default: void 0, muted: o.JF },
        WEIGHT: { default: void 0, reduced: o.Xj },
    },
    u = i.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function d() {
    return i.useContext(u);
}
function c(e) {
    let { children: t, size: n, color: a, weight: c } = e,
        h = d(),
        v = i.useMemo(() => {
            let e = { className: void 0, size: n ?? h.size, color: a ?? h.color, weight: c ?? h.weight },
                t = l()(s.SIZE[e.size], s.COLOR[e.color], s.WEIGHT[e.weight]);
            return "" !== t && (e.className = l()(o.zr, t)), e;
        }, [n, a, c, h]);
    return (0, r.jsx)(u.Provider, { value: v, children: t });
}
