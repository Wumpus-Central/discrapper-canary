t.d(l, { A: () => b });
var s = t(627968),
    r = t(64700),
    a = t(503698),
    n = t.n(a),
    i = t(462887),
    c = t(534514),
    o = t(834730),
    d = t(736653),
    u = t(611371),
    h = t(45923);
function x(e) {
    let { title: l, betaTag: t, color: r = "text-strong" } = e;
    return (0, s.jsxs)(c.D, {
        className: n()(h.DD, h.Zv),
        variant: "display-lg",
        color: r,
        children: [l, t && (0, s.jsx)(u.A, { className: h.TN })],
    });
}
function b(e) {
    let { title: l, titleColor: t, description: a, button: c, className: u, children: b, betaTag: m = !1 } = e,
        j = (0, d.Ay)(),
        f = (0, i.M)(j),
        v = r.useMemo(
            () =>
                Array.isArray(l)
                    ? l.map((e, l) => (0, s.jsx)(x, { title: e, betaTag: m, color: t }, l))
                    : (0, s.jsx)(x, { title: l, betaTag: m, color: t }),
            [l, m, t],
        );
    return (0, s.jsxs)("div", {
        className: n()(h.kL, u),
        children: [
            (0, s.jsx)("div", {
                className: h.Qs,
                children: (0, s.jsxs)("div", {
                    className: h.FS,
                    children: [
                        v,
                        null != a &&
                            (0, s.jsx)(o.E, {
                                className: h.h_,
                                variant: "text-md/medium",
                                color: f ? "text-muted" : "text-strong",
                                children: a,
                            }),
                        null != c && (0, s.jsx)("div", { className: h.UD, children: c }),
                    ],
                }),
            }),
            b,
        ],
    });
}
