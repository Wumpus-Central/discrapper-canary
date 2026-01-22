n.d(t, {
    X: () => u,
    x: () => d,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(865513);
let l = {
        SIZE: {
            default: void 0,
            reduced: o.k2,
        },
        COLOR: {
            default: void 0,
            muted: o.JF,
        },
        WEIGHT: {
            default: void 0,
            reduced: o.Xj,
        },
    },
    c = i.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default",
    });

function u() {
    return i.useContext(c);
}

function d(e) {
    let { children: t, size: n, color: a, weight: d } = e,
        f = u(),
        p = i.useMemo(() => {
            let e = {
                    className: void 0,
                    size: null != n ? n : f.size,
                    color: null != a ? a : f.color,
                    weight: null != d ? d : f.weight,
                },
                t = s()(l.SIZE[e.size], l.COLOR[e.color], l.WEIGHT[e.weight]);
            return "" !== t && (e.className = s()(o.zr, t)), e;
        }, [n, a, d, f]);
    return (0, r.jsx)(c.Provider, {
        value: p,
        children: t,
    });
}
