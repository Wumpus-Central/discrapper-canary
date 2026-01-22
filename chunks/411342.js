n.d(t, {
    A: () => l,
});
var r = n(627968);
n(64700);
var i = n(317097),
    a = n(397927),
    s = n(985018),
    o = n(364271);

function l(e) {
    let { locked: t, role: n, textVariant: l = "text-xs/medium" } = e,
        c = (0, a.rdh)(a.LU0.colors.INTERACTIVE_TEXT_DEFAULT).hex();
    return (0, r.jsx)("div", {
        className: o.ex,
        children: (0, r.jsxs)("div", {
            className: o.b6,
            children: [
                (0, r.jsx)("div", {
                    className: o.yY,
                    style: {
                        backgroundColor: (0, i.Hl)(n.color),
                    },
                }),
                (0, r.jsx)(a.hKd, {
                    size: 8,
                    horizontal: !0,
                }),
                (0, r.jsxs)(a.Text, {
                    variant: l,
                    color: "text-default",
                    children: [
                        (0, r.jsx)(a.AC4, {
                            children: s.intl.string(s.t.RnyseL),
                        }),
                        n.name,
                    ],
                }),
                !0 === t &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(a.hKd, {
                                size: 8,
                                horizontal: !0,
                            }),
                            (0, r.jsx)(a.XAi, {
                                size: "md",
                                color: c,
                            }),
                        ],
                    }),
            ],
        }),
    });
}
