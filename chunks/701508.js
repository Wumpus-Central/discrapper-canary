a.d(t, { A: () => m });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(582754),
    o = a(397927),
    c = a(736653),
    d = a(611371),
    u = a(262834);
function h(e) {
    let { title: t, betaTag: a, color: i = "text-strong" } = e;
    return (0, n.jsxs)(o.Heading, {
        className: l()(u.DD, u.Zv),
        variant: "display-lg",
        color: i,
        children: [t, a && (0, n.jsx)(d.A, { className: u.TN })],
    });
}
function m(e) {
    let { title: t, titleColor: a, description: s, button: d, className: m, children: p, betaTag: _ = !1 } = e,
        g = (0, c.Ay)(),
        x = (0, r.Mw)(g),
        A = i.useMemo(
            () =>
                Array.isArray(t)
                    ? t.map((e, t) => (0, n.jsx)(h, { title: e, betaTag: _, color: a }, t))
                    : (0, n.jsx)(h, { title: t, betaTag: _, color: a }),
            [t, _, a],
        );
    return (0, n.jsxs)("div", {
        className: l()(u.kL, m),
        children: [
            (0, n.jsx)("div", {
                className: u.Qs,
                children: (0, n.jsxs)("div", {
                    className: u.FS,
                    children: [
                        A,
                        null != s &&
                            (0, n.jsx)(o.Text, {
                                className: u.h_,
                                variant: "text-md/medium",
                                color: x ? "text-muted" : "text-strong",
                                children: s,
                            }),
                        null != d && (0, n.jsx)("div", { className: u.UD, children: d }),
                    ],
                }),
            }),
            p,
        ],
    });
}
