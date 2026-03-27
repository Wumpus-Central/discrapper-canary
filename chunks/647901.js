n.d(t, { X: () => c, x: () => u });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(52403);
let d = {
        SIZE: { default: void 0, reduced: s.k2 },
        COLOR: { default: void 0, muted: s.JF },
        WEIGHT: { default: void 0, reduced: s.Xj },
    },
    o = a.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function c() {
    return a.useContext(o);
}
function u(e) {
    let { children: t, size: n, color: r, weight: u } = e,
        _ = c(),
        m = a.useMemo(() => {
            let e = { className: void 0, size: n ?? _.size, color: r ?? _.color, weight: u ?? _.weight },
                t = i()(d.SIZE[e.size], d.COLOR[e.color], d.WEIGHT[e.weight]);
            return "" !== t && (e.className = i()(s.zr, t)), e;
        }, [n, r, u, _]);
    return (0, l.jsx)(o.Provider, { value: m, children: t });
}
