s.d(l, { A: () => m });
var t = s(627968),
    r = s(64700),
    a = s(503698),
    n = s.n(a),
    i = s(462887),
    c = s(534514),
    o = s(834730),
    d = s(736653),
    u = s(611371),
    x = s(408291);
function h(e) {
    let { title: l, betaTag: s, color: r = "text-strong" } = e;
    return (0, t.jsxs)(c.D, {
        className: n()(x.DD, x.Zv),
        variant: "display-lg",
        color: r,
        children: [l, s && (0, t.jsx)(u.A, { className: x.TN })],
    });
}
function m(e) {
    let { title: l, titleColor: s, description: a, button: c, className: u, children: m, betaTag: b = !1 } = e,
        j = (0, d.Ay)(),
        v = (0, i.M)(j),
        f = r.useMemo(
            () =>
                Array.isArray(l)
                    ? l.map((e, l) => (0, t.jsx)(h, { title: e, betaTag: b, color: s }, l))
                    : (0, t.jsx)(h, { title: l, betaTag: b, color: s }),
            [l, b, s],
        );
    return (0, t.jsxs)("div", {
        className: n()(x.kL, u),
        children: [
            (0, t.jsx)("div", {
                className: x.Qs,
                children: (0, t.jsxs)("div", {
                    className: x.FS,
                    children: [
                        f,
                        null != a &&
                            (0, t.jsx)(o.E, {
                                className: x.h_,
                                variant: "text-md/medium",
                                color: v ? "text-muted" : "text-strong",
                                children: a,
                            }),
                        null != c && (0, t.jsx)("div", { className: x.UD, children: c }),
                    ],
                }),
            }),
            m,
        ],
    });
}
