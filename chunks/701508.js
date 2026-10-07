l.d(t, { A: () => p });
var s = l(477900),
    i = l(582128),
    n = l(503698),
    a = l.n(n),
    r = l(462887),
    o = l(297264),
    c = l(834730),
    d = l(736653),
    u = l(611371),
    h = l(513076);
function m(e) {
    let { title: t, betaTag: l, color: i = "text-strong" } = e;
    return (0, s.jsxs)(o.D, {
        className: a()(h.DD, h.Zv),
        variant: "display-lg",
        color: i,
        children: [t, l && (0, s.jsx)(u.A, { className: h.TN })],
    });
}
function p(e) {
    let { title: t, titleColor: l, description: n, button: o, className: u, children: p, betaTag: g = !1 } = e,
        x = (0, d.Ay)(),
        v = (0, r.M)(x),
        j = i.useMemo(
            () =>
                Array.isArray(t)
                    ? t.map((e, t) => (0, s.jsx)(m, { title: e, betaTag: g, color: l }, t))
                    : (0, s.jsx)(m, { title: t, betaTag: g, color: l }),
            [t, g, l],
        );
    return (0, s.jsxs)("div", {
        className: a()(h.kL, u),
        children: [
            (0, s.jsx)("div", {
                className: h.Qs,
                children: (0, s.jsxs)("div", {
                    className: h.FS,
                    children: [
                        j,
                        null != n &&
                            (0, s.jsx)(c.E, {
                                className: h.h_,
                                variant: "text-md/medium",
                                color: v ? "text-muted" : "text-strong",
                                children: n,
                            }),
                        null != o && (0, s.jsx)("div", { className: h.UD, children: o }),
                    ],
                }),
            }),
            p,
        ],
    });
}
