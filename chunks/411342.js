var e = r(477900);
r(582128);
var a = r(317097),
    i = r(602853),
    c = r(646514),
    o = r(696986),
    s = r(834730),
    l = r(140735),
    h = r(194261),
    u = r(792996),
    d = r(840794);
r.d(
    n,
    {},
    {
        A: function (t) {
            let { locked: n, role: r, textVariant: y = "body-xs/medium" } = t,
                _ = (0, i.r)(c.A.colors.INTERACTIVE_TEXT_DEFAULT).hex();
            return (0, e.jsx)("div", {
                className: d.ex,
                children: (0, e.jsxs)("div", {
                    className: d.b6,
                    children: [
                        (0, e.jsx)("div", { className: d.yY, style: { backgroundColor: (0, a.Hl)(r.color) } }),
                        (0, e.jsx)(o.h, { size: 8, horizontal: !0 }),
                        (0, e.jsxs)(s.E, {
                            variant: y,
                            color: "text-default",
                            children: [(0, e.jsx)(l.A, { children: u.intl.string(u.t.RnyseL) }), r.name],
                        }),
                        !0 === n &&
                            (0, e.jsxs)(e.Fragment, {
                                children: [
                                    (0, e.jsx)(o.h, { size: 8, horizontal: !0 }),
                                    (0, e.jsx)(h.LockIcon, { size: "md", color: _ }),
                                ],
                            }),
                    ],
                }),
            });
        },
    },
);
