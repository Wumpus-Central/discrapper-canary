n.d(t, {
    NZ: () => u,
    ZP: () => d,
    yB: () => c,
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
    })({}),
    u = (function (e) {
        return (e.LIGHT = "light"), (e.MEDIUM = "medium"), e;
    })({});
let d = (e) => {
    var t;
    let {
            progress: n,
            minimum: a = 0,
            maximum: c = 100,
            weight: u = "light",
            variant: d,
            override: f,
            labelledBy: p,
        } = e,
        _ = null != f && "unset" === d,
        m = (0, s.ZP)(),
        h = null != (t = null == f ? void 0 : f[m]) ? t : null == f ? void 0 : f.default,
        g = i.useMemo(() => ((n - a) / (c - a)) * 100, [n, a, c]),
        E = n === a,
        b = _
            ? {
                  "--custom-background": null == h ? void 0 : h.background,
                  "--custom-gradient-start": null == h ? void 0 : h.gradientStart,
                  "--custom-gradient-end": null == h ? void 0 : h.gradientEnd,
                  "--custom-gradient-glow": null == h ? void 0 : h.gradientEnd,
              }
            : {};
    return (0, r.jsx)("div", {
        className: o()(l.progressContainer, l[u], l[d]),
        style: b,
        children: (0, r.jsxs)("div", {
            className: o()(l.progress, { [l.empty]: E }),
            style: { width: "".concat(g, "%") },
            role: "meter",
            "aria-valuenow": n,
            "aria-valuemin": a,
            "aria-valuemax": c,
            "aria-labelledby": p,
            children: [
                (0, r.jsx)("div", { className: o()(l.glow, { [l.empty]: E }) }),
                (0, r.jsx)("div", { className: o()(l.bar, l[d], { [l.empty]: E }) }),
            ],
        }),
    });
};
