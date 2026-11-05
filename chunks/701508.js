var n = l(477900),
    s = l(582128),
    i = l(503698),
    a = l.n(i),
    r = l(462887),
    o = l(534514),
    c = l(834730),
    d = l(736653),
    u = l(611371),
    m = l(513076);
function h(e) {
    let { title: t, betaTag: l, color: s = "text-strong" } = e;
    return (0, n.jsxs)(o.D, {
        className: a()(m.DD, m.Zv),
        variant: "display-lg",
        color: s,
        children: [t, l && (0, n.jsx)(u.A, { className: m.TN })],
    });
}
l.d(
    t,
    {},
    {
        A: function (e) {
            let { title: t, titleColor: l, description: i, button: o, className: u, children: p, betaTag: g = !1 } = e,
                x = (0, d.Ay)(),
                v = (0, r.M)(x),
                j = s.useMemo(
                    () =>
                        Array.isArray(t)
                            ? t.map((e, t) => (0, n.jsx)(h, { title: e, betaTag: g, color: l }, t))
                            : (0, n.jsx)(h, { title: t, betaTag: g, color: l }),
                    [t, g, l],
                );
            return (0, n.jsxs)("div", {
                className: a()(m.kL, u),
                children: [
                    (0, n.jsx)("div", {
                        className: m.Qs,
                        children: (0, n.jsxs)("div", {
                            className: m.FS,
                            children: [
                                j,
                                null != i &&
                                    (0, n.jsx)(c.E, {
                                        className: m.h_,
                                        variant: "body-md/medium",
                                        color: v ? "text-muted" : "text-strong",
                                        children: i,
                                    }),
                                null != o && (0, n.jsx)("div", { className: m.UD, children: o }),
                            ],
                        }),
                    }),
                    p,
                ],
            });
        },
    },
);
