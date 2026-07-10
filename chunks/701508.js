l.d(t, { A: () => p });
var s = l(627968),
    i = l(64700),
    a = l(503698),
    n = l.n(a),
    r = l(462887),
    o = l(534514),
    c = l(834730),
    d = l(736653),
    u = l(611371),
    h = l(408291);
function m(e) {
    let { title: t, betaTag: l, color: i = "text-strong" } = e;
    return (0, s.jsxs)(o.D, {
        className: n()(h.DD, h.Zv),
        variant: "display-lg",
        color: i,
        children: [t, l && (0, s.jsx)(u.A, { className: h.TN })],
    });
}
function p(e) {
    let { title: t, titleColor: l, description: a, button: o, className: u, children: p, betaTag: g = !1 } = e,
        x = (0, d.Ay)(),
        A = (0, r.M)(x),
        j = i.useMemo(
            () =>
                Array.isArray(t)
                    ? t.map((e, t) => (0, s.jsx)(m, { title: e, betaTag: g, color: l }, t))
                    : (0, s.jsx)(m, { title: t, betaTag: g, color: l }),
            [t, g, l],
        );
    return (0, s.jsxs)("div", {
        className: n()(h.kL, u),
        children: [
            (0, s.jsx)("div", {
                className: h.Qs,
                children: (0, s.jsxs)("div", {
                    className: h.FS,
                    children: [
                        j,
                        null != a &&
                            (0, s.jsx)(c.E, {
                                className: h.h_,
                                variant: "text-md/medium",
                                color: A ? "text-muted" : "text-strong",
                                children: a,
                            }),
                        null != o && (0, s.jsx)("div", { className: h.UD, children: o }),
                    ],
                }),
            }),
            p,
        ],
    });
}
