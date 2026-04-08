n.d(t, { X: () => c, x: () => u });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(52403);
let o = {
        SIZE: { default: void 0, reduced: s.k2 },
        COLOR: { default: void 0, muted: s.JF },
        WEIGHT: { default: void 0, reduced: s.Xj },
    },
    d = a.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function c() {
    return a.useContext(d);
}
function u(e) {
    let { children: t, size: n, color: r, weight: u } = e,
        _ = c(),
        h = a.useMemo(() => {
            let e = { className: void 0, size: n ?? _.size, color: r ?? _.color, weight: u ?? _.weight },
                t = l()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
            return "" !== t && (e.className = l()(s.zr, t)), e;
        }, [n, r, u, _]);
    return (0, i.jsx)(d.Provider, { value: h, children: t });
}
