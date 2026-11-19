var l = i(477900),
    a = i(582128),
    d = i(503698),
    n = i.n(d),
    s = i(189213),
    r = i(834730),
    c = i(150934),
    u = i(371902),
    o = i(792996),
    f = i(163513);
let x = [
    { id: "destruction", title: u.default.WRZREO, body: u.default["sIkt+O"] },
    { id: "reward", title: u.default["S2I8X+"], body: u.default.orr21w },
    { id: "experience", title: u.default.E6Rlal, body: u.default.EUxqRb },
];
i.d(
    e,
    {},
    {
        default: function (t) {
            let { onAccept: e, onClose: i, ...d } = t,
                [b, h] = a.useState(!1);
            return (0, l.jsx)(s.a, {
                ...d,
                onClose: i,
                title: o.intl.string(u.default["a0/9Sv"]),
                subtitle: o.intl.string(u.default["v/5AWU"]),
                actions: [
                    {
                        text: o.intl.string(u.default["4HBu2F"]),
                        variant: "secondary",
                        onClick: function () {
                            i();
                        },
                    },
                    {
                        text: o.intl.string(u.default.OivnRZ),
                        variant: "primary",
                        onClick: function () {
                            (e(), i());
                        },
                        disabled: !b,
                    },
                ],
                children: (0, l.jsxs)("div", {
                    className: f.Qs,
                    children: [
                        (0, l.jsx)("ol", {
                            className: n()(f.Nr, f.a_),
                            children: x.map((t) =>
                                (0, l.jsxs)(
                                    r.E,
                                    {
                                        tag: "li",
                                        variant: "body-sm/medium",
                                        color: "text-default",
                                        children: [
                                            o.intl.string(t.title),
                                            (0, l.jsx)(r.E, {
                                                variant: "body-xs/medium",
                                                color: "text-subtle",
                                                className: f.Xk,
                                                children: o.intl.string(t.body),
                                            }),
                                        ],
                                    },
                                    t.id,
                                ),
                            ),
                        }),
                        (0, l.jsx)("div", {
                            className: f.Nr,
                            children: (0, l.jsx)(c.S, {
                                checked: b,
                                onChange: h,
                                label: o.intl.string(u.default.I8csLM),
                            }),
                        }),
                    ],
                }),
            });
        },
    },
);
