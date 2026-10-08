l.d(t, { A: () => p });
var i = l(477900),
    s = l(582128),
    n = l(503698),
    a = l.n(n),
    r = l(462887),
    o = l(297264),
    c = l(834730),
    d = l(736653),
    u = l(611371),
    h = l(513076);
function m(e) {
    let { title: t, betaTag: l, color: s = "text-strong" } = e;
    return (0, i.jsxs)(o.D, {
        className: a()(h.DD, h.Zv),
        variant: "display-lg",
        color: s,
        children: [t, l && (0, i.jsx)(u.A, { className: h.TN })],
    });
}
function p(e) {
    let { title: t, titleColor: l, description: n, button: o, className: u, children: p, betaTag: g = !1 } = e,
        x = (0, d.Ay)(),
        v = (0, r.M)(x),
        j = s.useMemo(
            () =>
                Array.isArray(t)
                    ? t.map((e, t) => (0, i.jsx)(m, { title: e, betaTag: g, color: l }, t))
                    : (0, i.jsx)(m, { title: t, betaTag: g, color: l }),
            [t, g, l],
        );
    return (0, i.jsxs)("div", {
        className: a()(h.kL, u),
        children: [
            (0, i.jsx)("div", {
                className: h.Qs,
                children: (0, i.jsxs)("div", {
                    className: h.FS,
                    children: [
                        j,
                        null != n &&
                            (0, i.jsx)(c.E, {
                                className: h.h_,
                                variant: "text-md/medium",
                                color: v ? "text-muted" : "text-strong",
                                children: n,
                            }),
                        null != o && (0, i.jsx)("div", { className: h.UD, children: o }),
                    ],
                }),
            }),
            p,
        ],
    });
}
