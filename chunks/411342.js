n.d(e, { A: () => y });
var r = n(477900);
n(582128);
var a = n(317097),
    i = n(602853),
    c = n(661531),
    o = n(696986),
    s = n(834730),
    l = n(140735),
    h = n(194261),
    u = n(375708),
    d = n(937483);
function y(t) {
    let { locked: e, role: n, textVariant: y = "text-xs/medium" } = t,
        _ = (0, i.r)(c.A.colors.INTERACTIVE_TEXT_DEFAULT).hex();
    return (0, r.jsx)("div", {
        className: d.ex,
        children: (0, r.jsxs)("div", {
            className: d.b6,
            children: [
                (0, r.jsx)("div", { className: d.yY, style: { backgroundColor: (0, a.Hl)(n.color) } }),
                (0, r.jsx)(o.h, { size: 8, horizontal: !0 }),
                (0, r.jsxs)(s.E, {
                    variant: y,
                    color: "text-default",
                    children: [(0, r.jsx)(l.A, { children: u.intl.string(u.t.RnyseL) }), n.name],
                }),
                !0 === e &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(o.h, { size: 8, horizontal: !0 }),
                            (0, r.jsx)(h.X, { size: "md", color: _ }),
                        ],
                    }),
            ],
        }),
    });
}
