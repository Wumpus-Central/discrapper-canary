n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(317097),
    a = n(602853),
    s = n(827734),
    r = n(696986),
    o = n(834730),
    d = n(140735),
    c = n(194261),
    u = n(985018),
    m = n(304003);
function _(e) {
    let { locked: t, role: n, textVariant: _ = "text-xs/medium" } = e,
        h = (0, a.r)(s.A.colors.INTERACTIVE_TEXT_DEFAULT).hex();
    return (0, i.jsx)("div", {
        className: m.ex,
        children: (0, i.jsxs)("div", {
            className: m.b6,
            children: [
                (0, i.jsx)("div", { className: m.yY, style: { backgroundColor: (0, l.Hl)(n.color) } }),
                (0, i.jsx)(r.h, { size: 8, horizontal: !0 }),
                (0, i.jsxs)(o.E, {
                    variant: _,
                    color: "text-default",
                    children: [(0, i.jsx)(d.A, { children: u.intl.string(u.t.RnyseL) }), n.name],
                }),
                !0 === t &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(r.h, { size: 8, horizontal: !0 }),
                            (0, i.jsx)(c.X, { size: "md", color: h }),
                        ],
                    }),
            ],
        }),
    });
}
