n.d(t, {
    Z: () => u,
    y: () => c,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a);
n(512722);
var s = n(410030),
    l = n(383504),
    c = (function (e) {
        return (e.UNSET = "unset"), (e.BLUE = "blue"), (e.ORANGE = "orange"), e;
    })({});
let u = (e) => {
    var t;
    let { progress: n, minimum: a = 0, maximum: c = 100, variant: u, override: d, labelledBy: f } = e,
        p = null != d && "unset" === u,
        _ = (0, s.ZP)(),
        m = null != (t = null == d ? void 0 : d[_]) ? t : null == d ? void 0 : d.default,
        h = i.useMemo(() => ((n - a) / (c - a)) * 100, [n, a, c]),
        g = n === a,
        E = p
            ? {
                  "--custom-background": null == m ? void 0 : m.background,
                  "--custom-gradient-start": null == m ? void 0 : m.gradientStart,
                  "--custom-gradient-end": null == m ? void 0 : m.gradientEnd,
                  "--custom-gradient-glow": null == m ? void 0 : m.gradientEnd,
              }
            : {};
    return (0, r.jsx)("div", {
        className: o()(l.progressContainer, l[u]),
        style: E,
        children: (0, r.jsxs)("div", {
            className: o()(l.progress, { [l.empty]: g }),
            style: { width: "".concat(h, "%") },
            role: "meter",
            "aria-valuenow": n,
            "aria-valuemin": a,
            "aria-valuemax": c,
            "aria-labelledby": f,
            children: [
                (0, r.jsx)("div", { className: o()(l.glow, { [l.empty]: g }) }),
                (0, r.jsx)("div", { className: o()(l.bar, l[u], { [l.empty]: g }) }),
            ],
        }),
    });
};
