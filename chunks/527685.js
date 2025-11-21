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
    l = n(49552),
    c = (function (e) {
        return (e.UNSET = "unset"), (e.BLUE = "blue"), (e.ORANGE = "orange"), e;
    })({});
let u = (e) => {
    var t;
    let { progress: n, minimum: a = 0, maximum: c = 100, variant: u, override: d, labelledBy: f } = e,
        _ = null != d && "unset" === u,
        p = (0, s.ZP)(),
        h = null != (t = null == d ? void 0 : d[p]) ? t : null == d ? void 0 : d.default,
        m = i.useMemo(() => ((n - a) / (c - a)) * 100, [n, a, c]),
        g = n === a,
        E = _
            ? {
                  "--custom-background": null == h ? void 0 : h.background,
                  "--custom-gradient-start": null == h ? void 0 : h.gradientStart,
                  "--custom-gradient-end": null == h ? void 0 : h.gradientEnd,
                  "--custom-gradient-glow": null == h ? void 0 : h.gradientEnd,
              }
            : {};
    return (0, r.jsx)("div", {
        className: o()(l.progressContainer, l[u]),
        style: E,
        children: (0, r.jsxs)("div", {
            className: o()(l.progress, { [l.empty]: g }),
            style: { width: "".concat(m, "%") },
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
