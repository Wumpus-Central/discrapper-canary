n.d(t, { X: () => d, x: () => c });
var r = n(627968),
    o = n(64700),
    l = n(503698),
    i = n.n(l),
    a = n(85092);
let s = {
        SIZE: { default: void 0, reduced: a.k2 },
        COLOR: { default: void 0, muted: a.JF },
        WEIGHT: { default: void 0, reduced: a.Xj },
    },
    u = o.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function d() {
    return o.useContext(u);
}
function c(e) {
    let { children: t, size: n, color: l, weight: c } = e,
        h = d(),
        p = o.useMemo(() => {
            let e = { className: void 0, size: n ?? h.size, color: l ?? h.color, weight: c ?? h.weight },
                t = i()(s.SIZE[e.size], s.COLOR[e.color], s.WEIGHT[e.weight]);
            return "" !== t && (e.className = i()(a.zr, t)), e;
        }, [n, l, c, h]);
    return (0, r.jsx)(u.Provider, { value: p, children: t });
}
