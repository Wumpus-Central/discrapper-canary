a.d(t, { A: () => p });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(462887),
    o = a(534514),
    c = a(834730),
    d = a(736653),
    u = a(611371),
    h = a(408291);
function m(e) {
    let { title: t, betaTag: a, color: l = "text-strong" } = e;
    return (0, n.jsxs)(o.D, {
        className: s()(h.DD, h.Zv),
        variant: "display-lg",
        color: l,
        children: [t, a && (0, n.jsx)(u.A, { className: h.TN })],
    });
}
function p(e) {
    let { title: t, titleColor: a, description: i, button: o, className: u, children: p, betaTag: _ = !1 } = e,
        g = (0, d.Ay)(),
        x = (0, r.M)(g),
        A = l.useMemo(
            () =>
                Array.isArray(t)
                    ? t.map((e, t) => (0, n.jsx)(m, { title: e, betaTag: _, color: a }, t))
                    : (0, n.jsx)(m, { title: t, betaTag: _, color: a }),
            [t, _, a],
        );
    return (0, n.jsxs)("div", {
        className: s()(h.kL, u),
        children: [
            (0, n.jsx)("div", {
                className: h.Qs,
                children: (0, n.jsxs)("div", {
                    className: h.FS,
                    children: [
                        A,
                        null != i &&
                            (0, n.jsx)(c.E, {
                                className: h.h_,
                                variant: "text-md/medium",
                                color: x ? "text-muted" : "text-strong",
                                children: i,
                            }),
                        null != o && (0, n.jsx)("div", { className: h.UD, children: o }),
                    ],
                }),
            }),
            p,
        ],
    });
}
