r.d(t, { Ay: () => p, fh: () => m, qP: () => c });
var n,
    a,
    l = r(627968),
    s = r(64700),
    i = r(503698),
    d = r.n(i);
r(284009);
var u = r(736653),
    o = r(599556),
    c = (((n = {}).UNSET = "unset"), (n.BLUE = "blue"), (n.ORANGE = "orange"), n),
    m = (((a = {}).LIGHT = "light"), (a.MEDIUM = "medium"), a);
let p = (e) => {
    let {
            progress: t,
            minimum: r = 0,
            maximum: n = 100,
            weight: a = "light",
            variant: i,
            override: c,
            glowing: m = !0,
            labelledBy: p,
        } = e,
        h = null != c && "unset" === i,
        g = (0, u.Ay)(),
        x = c?.[g] ?? c?.default,
        b = s.useMemo(() => ((t - r) / (n - r)) * 100, [t, r, n]),
        f = t === r,
        _ = {
            ...(h
                ? {
                      "--custom-background": x?.background,
                      "--custom-gradient-start": x?.gradientStart,
                      "--custom-gradient-end": x?.gradientEnd,
                      "--custom-gradient-glow": x?.gradientEnd,
                  }
                : {}),
            ...(!m && { "--custom-gradient-glow": "transparent" }),
        };
    return (0, l.jsx)("div", {
        className: d()(o.progressContainer, o[a], o[i]),
        style: _,
        children: (0, l.jsxs)("div", {
            className: d()(o.progress, { [o.empty]: f }),
            style: { width: `${b}%` },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": r,
            "aria-valuemax": n,
            "aria-labelledby": p,
            children: [
                (0, l.jsx)("div", { className: d()(o.glow, { [o.empty]: f }) }),
                (0, l.jsx)("div", { className: d()(o.bar, o[i], { [o.empty]: f }) }),
            ],
        }),
    });
};
