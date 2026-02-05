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
            labelledBy: _,
        } = e,
        f = null != d && "unset" === c,
        p = (0, o.Ay)(),
        h = d?.[p] ?? d?.default,
        m = i.useMemo(() => ((t - n) / (a - n)) * 100, [t, n, a]),
        g = t === n,
        E = f
            ? {
                  "--custom-background": h?.background,
                  "--custom-gradient-start": h?.gradientStart,
                  "--custom-gradient-end": h?.gradientEnd,
                  "--custom-gradient-glow": h?.gradientEnd,
              }
            : {};
    return (0, r.jsx)("div", {
        className: s()(l.progressContainer, l[u], l[c]),
        style: E,
        children: (0, r.jsxs)("div", {
            className: s()(l.progress, { [l.empty]: g }),
            style: { width: `${m}%` },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": n,
            "aria-valuemax": a,
            "aria-labelledby": _,
            children: [
                (0, r.jsx)("div", { className: s()(l.glow, { [l.empty]: g }) }),
                (0, r.jsx)("div", { className: s()(l.bar, l[c], { [l.empty]: g }) }),
            ],
        }),
    });
};
