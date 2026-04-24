n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(317097),
    a = n(602853),
    r = n(661531),
    s = n(696986),
    o = n(834730),
    c = n(140735),
    d = n(194261),
    u = n(985018),
    _ = n(304003);
function m(e) {
    let { locked: t, role: n, textVariant: m = "text-xs/medium" } = e,
        h = (0, a.r)(r.A.colors.INTERACTIVE_TEXT_DEFAULT).hex();
    return (0, i.jsx)("div", {
        className: _.ex,
        children: (0, i.jsxs)("div", {
            className: _.b6,
            children: [
                (0, i.jsx)("div", { className: _.yY, style: { backgroundColor: (0, l.Hl)(n.color) } }),
                (0, i.jsx)(s.h, { size: 8, horizontal: !0 }),
                (0, i.jsxs)(o.E, {
                    variant: m,
                    color: "text-default",
                    children: [(0, i.jsx)(c.A, { children: u.intl.string(u.t.RnyseL) }), n.name],
                }),
                !0 === t &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s.h, { size: 8, horizontal: !0 }),
                            (0, i.jsx)(d.X, { size: "md", color: h }),
                        ],
                    }),
            ],
        }),
    });
}
