var s = l(477900),
    i = l(582128),
    n = l(503698),
    a = l.n(n),
    r = l(462887),
    o = l(534514),
    c = l(834730),
    d = l(736653),
    u = l(611371),
    m = l(513076);
function h(e) {
    let { title: t, betaTag: l, color: i = "text-strong" } = e;
    return (0, s.jsxs)(o.D, {
        className: a()(m.DD, m.Zv),
        variant: "display-lg",
        color: i,
        children: [t, l && (0, s.jsx)(u.A, { className: m.TN })],
    });
}
l.d(
    t,
    {},
    {
        A: function (e) {
            let { title: t, titleColor: l, description: n, button: o, className: u, children: p, betaTag: g = !1 } = e,
                x = (0, d.Ay)(),
                j = (0, r.M)(x),
                v = i.useMemo(
                    () =>
                        Array.isArray(t)
                            ? t.map((e, t) => (0, s.jsx)(h, { title: e, betaTag: g, color: l }, t))
                            : (0, s.jsx)(h, { title: t, betaTag: g, color: l }),
                    [t, g, l],
                );
            return (0, s.jsxs)("div", {
                className: a()(m.kL, u),
                children: [
                    (0, s.jsx)("div", {
                        className: m.Qs,
                        children: (0, s.jsxs)("div", {
                            className: m.FS,
                            children: [
                                v,
                                null != n &&
                                    (0, s.jsx)(c.E, {
                                        className: m.h_,
                                        variant: "body-md/medium",
                                        color: j ? "text-muted" : "text-strong",
                                        children: n,
                                    }),
                                null != o && (0, s.jsx)("div", { className: m.UD, children: o }),
                            ],
                        }),
                    }),
                    p,
                ],
            });
        },
    },
);
