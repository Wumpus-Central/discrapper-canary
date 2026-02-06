"use strict";
n.d(t, { Ay: () => d, fh: () => c, qP: () => u });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a);
n(284009);
var o = n(736653),
    l = n(599556),
    u = (function (e) {
        return (e.UNSET = "unset"), (e.BLUE = "blue"), (e.ORANGE = "orange"), e;
    })({}),
    c = (function (e) {
        return (e.LIGHT = "light"), (e.MEDIUM = "medium"), e;
    })({});
let d = (e) => {
    let {
            progress: t,
            minimum: n = 0,
            maximum: a = 100,
            weight: u = "light",
            variant: c,
            override: d,
            glowing: _ = !0,
            labelledBy: f,
        } = e,
        p = null != d && "unset" === c,
        h = (0, o.Ay)(),
        m = d?.[h] ?? d?.default,
        g = i.useMemo(() => ((t - n) / (a - n)) * 100, [t, n, a]),
        E = t === n,
        A = {
            ...(p
                ? {
                      "--custom-background": m?.background,
                      "--custom-gradient-start": m?.gradientStart,
                      "--custom-gradient-end": m?.gradientEnd,
                      "--custom-gradient-glow": m?.gradientEnd,
                  }
                : {}),
            ...(!_ && { "--custom-gradient-glow": "transparent" }),
        };
    return (0, r.jsx)("div", {
        className: s()(l.progressContainer, l[u], l[c]),
        style: A,
        children: (0, r.jsxs)("div", {
            className: s()(l.progress, { [l.empty]: E }),
            style: { width: `${g}%` },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": n,
            "aria-valuemax": a,
            "aria-labelledby": f,
            children: [
                (0, r.jsx)("div", { className: s()(l.glow, { [l.empty]: E }) }),
                (0, r.jsx)("div", { className: s()(l.bar, l[c], { [l.empty]: E }) }),
            ],
        }),
    });
};
